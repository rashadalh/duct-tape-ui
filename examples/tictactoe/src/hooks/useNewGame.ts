import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { address, abi, superChainTokenBridge,superchainTokenBridgeAbi, multichainabi, multichainaddress } from '../constants/tictactoe'
import { parseEther } from 'viem';


const yieldFarmAddress = "0xEAb25969e5285dF34a3B245324d0B2B91E31cAD4";

export const useNewGame = () => {
    const { data: hash, writeContract, isPending, isError, error } = useWriteContract()
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

    if (isError) {
        console.error('Error accepting game: ',error)
    }

    const createNewGame = async () => {
        /*try {
            await writeContract({ address: address, abi: abi, functionName: 'newGame' })
        } catch (error) {
            console.error('Error creating new game: ',error)
            return { error }
        }*/
        /*
        try {
            await writeContract({ address: superChainTokenBridge, abi: superchainTokenBridgeAbi, functionName: 'sendERC20' , args: ["0x4200000000000000000000000000000000000024","0x14dC79964da2C08b23698B3D3cc7Ca32193d9955", parseEther('0.001'), 420120000]})
        } catch (error) {
            console.error('Error creating new game: ',error)
            return { error }
        }*/

        const sends = 
            {
                //to: "0x14dC79964da2C08b23698B3D3cc7Ca32193d9955",
                //to: multichainaddress,
                amount: parseEther('60'),
                sender: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
                //yieldFarmAddress: "0xDFD787c807DEA8d7e53311b779BC0c6a4704D286",
                toAddress: yieldFarmAddress,
                sourceChainId: 901n
            };
        
        try {
            await writeContract({ address: multichainaddress, abi: multichainabi, functionName: 'depositETHToOtherChain' , args: [902n, sends],value: parseEther('60')})
        } catch (error) {
            console.error('Error creating new game: ',error)
            return { error }
        }
    }

    return { createNewGame, isPending, isConfirming, isSuccess, hash }
}


export const useWithdraw = () => {
    const { data: hash, writeContract, isPending, isError, error } = useWriteContract()
    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

    if (isError) {
        console.error('Error accepting game: ',error)
    }

    const createNewWithdraw = async () => {
        const sends = {
                amount: parseEther('3'),
                sender: "0xa0Ee7A142d267C1f36714E4a8F75612F20a79720",
                toAddress: yieldFarmAddress,
                sourceChainId: 901n
            };
        try {
            await writeContract({ address: multichainaddress, abi: multichainabi, functionName: 'withdraw' , args: [902n, sends]})
        } catch (error) {
            console.error('Error creating new game: ',error)
            return { error }
        }
    }

    return { createNewWithdraw, isPending, isConfirming, isSuccess, hash }
}