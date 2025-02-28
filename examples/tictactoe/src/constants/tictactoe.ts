export const address = import.meta.env.VITE_TICTACTOE_ADDRESS

export const abi = [
    {
    "type": "function",
    "name": "acceptGame",
    "inputs": [
        {
        "name": "_newGameId",
        "type": "tuple",
        "internalType": "struct ICrossL2Inbox.Identifier",
        "components": [
            {
            "name": "origin",
            "type": "address",
            "internalType": "address"
            },
            {
            "name": "blockNumber",
            "type": "uint256",
            "internalType": "uint256"
            },
            {
            "name": "logIndex",
            "type": "uint256",
            "internalType": "uint256"
            },
            {
            "name": "timestamp",
            "type": "uint256",
            "internalType": "uint256"
            },
            {
            "name": "chainId",
            "type": "uint256",
            "internalType": "uint256"
            }
        ]
        },
        {
        "name": "_newGameData",
        "type": "bytes",
        "internalType": "bytes"
        }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
    },
    {
    "type": "function",
    "name": "gameState",
    "inputs": [
        {
        "name": "chainId",
        "type": "uint256",
        "internalType": "uint256"
        },
        {
        "name": "gameId",
        "type": "uint256",
        "internalType": "uint256"
        },
        {
        "name": "player",
        "type": "address",
        "internalType": "address"
        }
    ],
    "outputs": [
        {
        "name": "",
        "type": "tuple",
        "internalType": "struct TicTacToe.Game",
        "components": [
            {
            "name": "player",
            "type": "address",
            "internalType": "address"
            },
            {
            "name": "opponent",
            "type": "address",
            "internalType": "address"
            },
            {
            "name": "moves",
            "type": "uint8[3][3]",
            "internalType": "uint8[3][3]"
            },
            {
            "name": "movesLeft",
            "type": "uint8",
            "internalType": "uint8"
            },
            {
            "name": "lastId",
            "type": "tuple",
            "internalType": "struct ICrossL2Inbox.Identifier",
            "components": [
                {
                "name": "origin",
                "type": "address",
                "internalType": "address"
                },
                {
                "name": "blockNumber",
                "type": "uint256",
                "internalType": "uint256"
                },
                {
                "name": "logIndex",
                "type": "uint256",
                "internalType": "uint256"
                },
                {
                "name": "timestamp",
                "type": "uint256",
                "internalType": "uint256"
                },
                {
                "name": "chainId",
                "type": "uint256",
                "internalType": "uint256"
                }
            ]
            }
        ]
        }
    ],
    "stateMutability": "view"
    },
    {
    "type": "function",
    "name": "makeMove",
    "inputs": [
        {
        "name": "_movePlayedId",
        "type": "tuple",
        "internalType": "struct ICrossL2Inbox.Identifier",
        "components": [
            {
            "name": "origin",
            "type": "address",
            "internalType": "address"
            },
            {
            "name": "blockNumber",
            "type": "uint256",
            "internalType": "uint256"
            },
            {
            "name": "logIndex",
            "type": "uint256",
            "internalType": "uint256"
            },
            {
            "name": "timestamp",
            "type": "uint256",
            "internalType": "uint256"
            },
            {
            "name": "chainId",
            "type": "uint256",
            "internalType": "uint256"
            }
        ]
        },
        {
        "name": "_movePlayedData",
        "type": "bytes",
        "internalType": "bytes"
        },
        {
        "name": "_x",
        "type": "uint8",
        "internalType": "uint8"
        },
        {
        "name": "_y",
        "type": "uint8",
        "internalType": "uint8"
        }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
    },
    {
    "type": "function",
    "name": "newGame",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
    },
    {
    "type": "function",
    "name": "nextGameId",
    "inputs": [],
    "outputs": [
        {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
        }
    ],
    "stateMutability": "view"
    },
    {
    "type": "function",
    "name": "startGame",
    "inputs": [
        {
        "name": "_acceptedGameId",
        "type": "tuple",
        "internalType": "struct ICrossL2Inbox.Identifier",
        "components": [
            {
            "name": "origin",
            "type": "address",
            "internalType": "address"
            },
            {
            "name": "blockNumber",
            "type": "uint256",
            "internalType": "uint256"
            },
            {
            "name": "logIndex",
            "type": "uint256",
            "internalType": "uint256"
            },
            {
            "name": "timestamp",
            "type": "uint256",
            "internalType": "uint256"
            },
            {
            "name": "chainId",
            "type": "uint256",
            "internalType": "uint256"
            }
        ]
        },
        {
        "name": "_acceptedGameData",
        "type": "bytes",
        "internalType": "bytes"
        },
        {
        "name": "_x",
        "type": "uint8",
        "internalType": "uint8"
        },
        {
        "name": "_y",
        "type": "uint8",
        "internalType": "uint8"
        }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
    },
    {
    "type": "event",
    "name": "AcceptedGame",
    "inputs": [
        {
        "name": "chainId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "gameId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "opponent",
        "type": "address",
        "indexed": false,
        "internalType": "address"
        },
        {
        "name": "player",
        "type": "address",
        "indexed": false,
        "internalType": "address"
        }
    ],
    "anonymous": false
    },
    {
    "type": "event",
    "name": "GameDraw",
    "inputs": [
        {
        "name": "chainId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "gameId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "_x",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
        },
        {
        "name": "_y",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
        }
    ],
    "anonymous": false
    },
    {
    "type": "event",
    "name": "GameWon",
    "inputs": [
        {
        "name": "chainId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "gameId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "winner",
        "type": "address",
        "indexed": false,
        "internalType": "address"
        },
        {
        "name": "_x",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
        },
        {
        "name": "_y",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
        }
    ],
    "anonymous": false
    },
    {
    "type": "event",
    "name": "MovePlayed",
    "inputs": [
        {
        "name": "chainId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "gameId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "player",
        "type": "address",
        "indexed": false,
        "internalType": "address"
        },
        {
        "name": "_x",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
        },
        {
        "name": "_y",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
        }
    ],
    "anonymous": false
    },
    {
    "type": "event",
    "name": "NewGame",
    "inputs": [
        {
        "name": "chainId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "gameId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
        },
        {
        "name": "player",
        "type": "address",
        "indexed": false,
        "internalType": "address"
        }
    ],
    "anonymous": false
    },
    {
    "type": "error",
    "name": "DataNotAcceptedGame",
    "inputs": []
    },
    {
    "type": "error",
    "name": "DataNotMovePlayed",
    "inputs": []
    },
    {
    "type": "error",
    "name": "DataNotNewGame",
    "inputs": []
    },
    {
    "type": "error",
    "name": "GameChainMismatch",
    "inputs": []
    },
    {
    "type": "error",
    "name": "GameNotExists",
    "inputs": []
    },
    {
    "type": "error",
    "name": "GameStarted",
    "inputs": []
    },
    {
    "type": "error",
    "name": "IdOriginNotTicTacToe",
    "inputs": []
    },
    {
    "type": "error",
    "name": "MoveInvalid",
    "inputs": []
    },
    {
    "type": "error",
    "name": "MoveNotForwardProgressing",
    "inputs": []
    },
    {
    "type": "error",
    "name": "MoveTaken",
    "inputs": []
    },
    {
    "type": "error",
    "name": "SenderIsOpponent",
    "inputs": []
    },
    {
    "type": "error",
    "name": "SenderNotPlayer",
    "inputs": []
    }
]

export const superChainTokenBridge = '0x4200000000000000000000000000000000000028';
export const superchainTokenBridgeAbi = [
    {
      type: 'function',
      name: 'relayERC20',
      inputs: [
        {
          name: '_token',
          type: 'address',
          internalType: 'address',
        },
        {
          name: '_from',
          type: 'address',
          internalType: 'address',
        },
        {
          name: '_to',
          type: 'address',
          internalType: 'address',
        },
        {
          name: '_amount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'sendERC20',
      inputs: [
        {
          name: '_token',
          type: 'address',
          internalType: 'address',
        },
        {
          name: '_to',
          type: 'address',
          internalType: 'address',
        },
        {
          name: '_amount',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: '_chainId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'msgHash_',
          type: 'bytes32',
          internalType: 'bytes32',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'version',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'string',
          internalType: 'string',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'event',
      name: 'RelayERC20',
      inputs: [
        {
          name: 'token',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'from',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'to',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'source',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'SendERC20',
      inputs: [
        {
          name: 'token',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'from',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'to',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'destination',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'InvalidCrossDomainSender',
      inputs: [],
    },
    {
      type: 'error',
      name: 'InvalidERC7802',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Unauthorized',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ZeroAddress',
      inputs: [],
    },
  ] 

export const multichainaddress =  '0xAe1227fa8518B973E2489C7670216098eFbdBD97';
export const multichainabi = [
  {
    "type": "receive",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "bridge",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract ISuperchainTokenBridge"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "depositETHToOtherChain",
    "inputs": [
      {
        "name": "_destinationChainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_send",
        "type": "tuple",
        "internalType": "struct CrossChainMultisend.Send",
        "components": [
          {
            "name": "sourceChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "sender",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "toAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "getBalances",
    "inputs": [
      {
        "name": "_user",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "tuple[]",
        "internalType": "struct CrossChainMultisend.ChainBalance[]",
        "components": [
          {
            "name": "destChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "toAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "balance",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "relay",
    "inputs": [
      {
        "name": "_sendWethMsgHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_send",
        "type": "tuple",
        "internalType": "struct CrossChainMultisend.Send",
        "components": [
          {
            "name": "sourceChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "sender",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "toAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "relayToReturn",
    "inputs": [
      {
        "name": "_sendWethMsgHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_send",
        "type": "tuple",
        "internalType": "struct CrossChainMultisend.Send",
        "components": [
          {
            "name": "sourceChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "sender",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "toAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "sendToReturn",
    "inputs": [
      {
        "name": "_send",
        "type": "tuple",
        "internalType": "struct CrossChainMultisend.Send",
        "components": [
          {
            "name": "sourceChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "sender",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "toAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "userBalances",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "destChainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "toAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "balance",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "withdraw",
    "inputs": [
      {
        "name": "_withdrawFromChainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_send",
        "type": "tuple",
        "internalType": "struct CrossChainMultisend.Send",
        "components": [
          {
            "name": "sourceChainId",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "sender",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "toAddress",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "error",
    "name": "CallerNotL2ToL2CrossDomainMessenger",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DependentMessageNotSuccessful",
    "inputs": [
      {
        "name": "msgHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ]
  },
  {
    "type": "error",
    "name": "IncorrectValue",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidCrossDomainSender",
    "inputs": []
  }
];

/*export const multichainaddress = '0x990f7459b0Ad016AA93A5aE409B367Fa7Cc0CDcc';
export const multichainabi = [
  {
    "type": "receive",
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "relay",
    "inputs": [
      {
        "name": "_sendWethMsgHash",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "_sends",
        "type": "tuple[]",
        "internalType": "struct CrossChainMultisend.Send[]",
        "components": [
          {
            "name": "to",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "send",
    "inputs": [
      {
        "name": "_destinationChainId",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_sends",
        "type": "tuple[]",
        "internalType": "struct CrossChainMultisend.Send[]",
        "components": [
          {
            "name": "to",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "amount",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "error",
    "name": "CallerNotL2ToL2CrossDomainMessenger",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DependentMessageNotSuccessful",
    "inputs": [
      {
        "name": "msgHash",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ]
  },
  {
    "type": "error",
    "name": "IncorrectValue",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidCrossDomainSender",
    "inputs": []
  }
];

*/