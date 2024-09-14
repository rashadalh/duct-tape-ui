package interop

import (
	"context"
	"fmt"
	"math/big"
	"sync"

	"github.com/ethereum-optimism/optimism/op-service/predeploys"
	"github.com/ethereum-optimism/optimism/op-service/tasks"
	"github.com/ethereum-optimism/supersim/bindings"
	"github.com/ethereum-optimism/supersim/config"
	"github.com/ethereum-optimism/supersim/hdaccount"
	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/ethclient"
)

type L2ToL2MessageRelayer struct {
	l2ToL2MessageIndexer *L2ToL2MessageIndexer

	clients map[uint64]*ethclient.Client

	tasks       tasks.Group
	tasksCtx    context.Context
	tasksCancel context.CancelFunc
}

func NewL2ToL2MessageRelayer() *L2ToL2MessageRelayer {
	tasksCtx, tasksCancel := context.WithCancel(context.Background())

	return &L2ToL2MessageRelayer{
		tasks: tasks.Group{
			HandleCrit: func(err error) {
				fmt.Printf("unhandled indexer error: %v\n", err)
			},
		},
		tasksCtx:    tasksCtx,
		tasksCancel: tasksCancel,
	}

}

func (r *L2ToL2MessageRelayer) Start(indexer *L2ToL2MessageIndexer, clients map[uint64]*ethclient.Client) error {
	r.l2ToL2MessageIndexer = indexer
	r.clients = clients

	hdAccountStore, err := hdaccount.NewHdAccountStore(config.DefaultSecretsConfig.Mnemonic, config.DefaultSecretsConfig.DerivationPath)
	if err != nil {
		return fmt.Errorf("failed to create hd account store: %w", err)
	}

	privateKey, err := hdAccountStore.DerivePrivateKeyAt(9)
	if err != nil {
		return fmt.Errorf("failed to derive private key: %w", err)
	}

	for destinationChainID, client := range r.clients {
		r.tasks.Go(func() error {
			var mu sync.Mutex
			sentMessageCh := make(chan *L2ToL2MessageStoreEntry)
			unsubscribe, err := r.l2ToL2MessageIndexer.SubscribeSentMessageToDestination(destinationChainID, sentMessageCh)

			if err != nil {
				return fmt.Errorf("failed to subscribe to sent message events: %w", err)
			}

			transactor, err := bind.NewKeyedTransactorWithChainID(privateKey, big.NewInt(int64(destinationChainID)))
			if err != nil {
				return fmt.Errorf("failed to create transactor: %w", err)
			}

			crossL2Inbox, err := bindings.NewCrossL2InboxTransactor(predeploys.CrossL2InboxAddr, client)
			if err != nil {
				return fmt.Errorf("failed to create	transactor: %w", err)
			}

			for {
				select {
				case <-r.tasksCtx.Done():
					unsubscribe()
					close(sentMessageCh)
					return nil
				case sentMessage := <-sentMessageCh:
					identifier := sentMessage.Identifier()
					msg := sentMessage.Message()
					calldata, err := msg.EventData()

					if err != nil {
						return fmt.Errorf("failed to get event data: %w", err)
					}

					// For some reason gas estimation does not work properly for some messages so estimating and padding gas (https://github.com/ethereum-optimism/supersim/issues/143)
					txData, err := bindings.CrossL2InboxParsedABI.Pack("executeMessage", *identifier, predeploys.L2toL2CrossDomainMessengerAddr, calldata)
					if err != nil {
						return fmt.Errorf("failed to create execute message calldata: %w", err)
					}
					gasEstimate, err := client.EstimateGas(r.tasksCtx, ethereum.CallMsg{
						From: transactor.From,
						To:   &predeploys.CrossL2InboxAddr,
						Data: txData,
					})
					if err != nil {
						return fmt.Errorf("failed to estimate gas for execute message tx: %w", err)
					}
					// Pad gas by 33%.
					paddedGas := (gasEstimate / 3) + gasEstimate
					mu.Lock()
					defer mu.Unlock()
					originalTransactorGasLimit := transactor.GasLimit
					transactor.GasLimit = paddedGas

					if _, err := crossL2Inbox.ExecuteMessage(transactor, *identifier, predeploys.L2toL2CrossDomainMessengerAddr, calldata); err != nil {
						return fmt.Errorf("failed to execute message: %w", err)
					}
					transactor.GasLimit = originalTransactorGasLimit
				}
			}

		})
	}

	return nil
}

func (r *L2ToL2MessageRelayer) Stop(ctx context.Context) {
	r.tasksCancel()
}
