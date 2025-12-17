import React, { FC, ReactNode, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { BackpackWalletAdapter } from '@solana/wallet-adapter-backpack';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { TrustWalletAdapter } from '@solana/wallet-adapter-trust';
import { CoinbaseWalletAdapter } from '@solana/wallet-adapter-coinbase';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl } from '@solana/web3.js';

interface WalletContextProviderProps {
  children: ReactNode;
}

export const WalletContextProvider: FC<WalletContextProviderProps> = ({ children }) => {
  // Network configuration
  const NETWORK = import.meta.env.VITE_SOLANA_NETWORK || 'mainnet';
  const network = NETWORK === 'devnet' ? WalletAdapterNetwork.Devnet : WalletAdapterNetwork.Mainnet;
  
  // RPC endpoint
  const endpoint = useMemo(() => {
    if (NETWORK === 'devnet') {
      return 'https://devnet.helius-rpc.com/?api-key=bc2d2e19-f242-49fc-8a6a-53bcef445c83';
    }
    return 'https://mainnet.helius-rpc.com/?api-key=bc2d2e19-f242-49fc-8a6a-53bcef445c83';
  }, [NETWORK]);

  // Supported wallets
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new BackpackWalletAdapter(),
      new SolflareWalletAdapter(),
      new TrustWalletAdapter(),
      new CoinbaseWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};

