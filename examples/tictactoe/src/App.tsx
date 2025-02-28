import React from 'react';
import { WagmiProvider, http, createConfig } from 'wagmi';
import { injected } from 'wagmi/connectors'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { supersimL2A, supersimL2B } from '@eth-optimism/viem'
import { defineChain } from 'viem'

import TicTacToe from './components/TicTacToe';

const queryClient = new QueryClient();

// Define custom devnet chain
const devnetChain = defineChain({
  id: 420120000,
  name: 'SuperSim Devnet 1',
  network: 'supersim-devnet-1',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { 
      http: ['https://interop-alpha-0.optimism.io']
    },
    public: {
      http: ['https://interop-alpha-0.optimism.io']
    }
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://optimism-interop-alpha-0.blockscout.com'
    }
  }
})

const devnetChain2 = defineChain({
  id: 420120001,
  name: 'SuperSim Devnet 2',
  network: 'supersim-devnet-2',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { 
      http: ['https://interop-alpha-1.optimism.io']
    },
    public: {
      http: ['https://interop-alpha-1.optimism.io']
    }
  },
  blockExplorers: {
    default: {
      name: 'Blockscout',
      url: 'https://optimism-interop-alpha-1.blockscout.com'
    }
  }
})

export const wagmiConfig = createConfig({
  chains: [supersimL2A, supersimL2B, devnetChain, devnetChain2],
  connectors: [injected()],
  transports: {
    [supersimL2A.id]: http(),
    [supersimL2B.id]: http(),
    [devnetChain.id]: http(),
    [devnetChain2.id]: http(),
  },
})

const App: React.FC = () => {
  return (
    <div className="app" >
      <TicTacToe />
    </div>
  )
}

const Root: React.FC = () => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider  client={queryClient} >
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Root
