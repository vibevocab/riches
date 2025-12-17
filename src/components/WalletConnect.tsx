import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from './ui/button';
import { Wallet, LogOut, Copy, Check } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export const WalletConnect = () => {
  const { wallet, connect, disconnect, publicKey, connected } = useWallet();
  const [copied, setCopied] = useState(false);

  const handleConnect = async () => {
    try {
      await connect();
      toast.success('Wallet connected!');
    } catch (error: any) {
      toast.error(error?.message || 'Failed to connect wallet');
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      toast.success('Wallet disconnected');
    } catch (error: any) {
      toast.error('Failed to disconnect wallet');
    }
  };

  const handleCopyAddress = () => {
    if (publicKey) {
      navigator.clipboard.writeText(publicKey.toString());
      setCopied(true);
      toast.success('Wallet address copied!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  if (connected && publicKey) {
    const walletName = wallet?.adapter?.name || 'Wallet';
    return (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg border border-zinc-700">
          <Wallet className="w-4 h-4 text-cyan-400" />
          <span className="text-xs text-gray-400 mr-1">{walletName}:</span>
          <span className="text-sm text-gray-300 font-mono">
            {formatAddress(publicKey.toString())}
          </span>
          <button
            onClick={handleCopyAddress}
            className="ml-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        <Button
          onClick={handleDisconnect}
          variant="outline"
          className="border-zinc-700 text-gray-300 hover:bg-zinc-800"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={handleConnect}
      className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold font-orbitron px-6 py-2"
    >
      <Wallet className="w-4 h-4 mr-2" />
      Connect Wallet
    </Button>
  );
};

