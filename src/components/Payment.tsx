import React, { useState, useEffect } from 'react';
import { Copy, Check, Smartphone, ArrowRight, Crown, Zap, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { toast } from 'sonner@2.0.3';
import { FounderRegistrationDialog } from './FounderRegistrationDialog';
import { supabase } from '../lib/supabase';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletConnect } from './WalletConnect';
import { analytics } from '../utils/analytics';

export const Payment = () => {
  const [copied, setCopied] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');
  const [showRegistrationDialog, setShowRegistrationDialog] = useState(false);
  const [verifiedAmount, setVerifiedAmount] = useState(0);
  const [vipCount, setVipCount] = useState(0);
  const [godCount, setGodCount] = useState(0);
  
  // Network configuration - set to 'devnet' for testing, 'mainnet' for production
  const NETWORK = import.meta.env.VITE_SOLANA_NETWORK || 'mainnet';
  const isDevnet = NETWORK === 'devnet';
  
  // Wallet addresses - use different addresses for devnet if needed
  const walletAddress = isDevnet 
    ? (import.meta.env.VITE_DEVNET_WALLET || "J7ggksQTYrM611umYRKDBz6kFgMB1LZAFzsX2yMN48hA") // Same address works on devnet
    : "J7ggksQTYrM611umYRKDBz6kFgMB1LZAFzsX2yMN48hA";
  
  // Amounts - use smaller amounts for devnet testing
  const VIP_AMOUNT = isDevnet ? 0.1 : 15;
  const GOD_AMOUNT = isDevnet ? 0.2 : 35;
  
  // Max slots
  const MAX_VIP = 25;
  const MAX_GOD = 50;
  
  // Fetch current founder counts
  const fetchCounts = async () => {
    if (supabase) {
      try {
        const { count: vipCountResult } = await supabase
          .from('founders')
          .select('*', { count: 'exact', head: true })
          .eq('tier', 'VIP');
        
        const { count: godCountResult } = await supabase
          .from('founders')
          .select('*', { count: 'exact', head: true })
          .eq('tier', 'GOD');
        
        setVipCount(vipCountResult || 0);
        setGodCount(godCountResult || 0);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    } else {
      // Fallback to localStorage
      try {
        const founders = JSON.parse(localStorage.getItem('founders') || '[]');
        const vip = founders.filter((f: any) => f.tier === 'VIP').length;
        const god = founders.filter((f: any) => f.tier === 'GOD').length;
        setVipCount(vip);
        setGodCount(god);
      } catch (error) {
        console.error('Error reading localStorage:', error);
      }
    }
  };
  
  // Fetch counts on mount and listen for updates
  useEffect(() => {
    fetchCounts();
    
    // Listen for founder registration events
    const handleFounderRegistered = () => {
      fetchCounts();
    };
    
    window.addEventListener('founder-registered', handleFounderRegistered);
    
    // Set up real-time subscription if Supabase is available
    let channel: any = null;
    if (supabase) {
      channel = supabase
        .channel('founders-count-changes')
        .on('postgres_changes', 
          { event: 'INSERT', schema: 'public', table: 'founders' },
          () => {
            fetchCounts();
          }
        )
        .subscribe();
    }
    
    return () => {
      window.removeEventListener('founder-registered', handleFounderRegistered);
      if (channel) {
        supabase?.removeChannel(channel);
      }
    };
  }, []);
  
  // RPC URLs
  const RPC_URL = isDevnet
    ? "https://devnet.helius-rpc.com/?api-key=bc2d2e19-f242-49fc-8a6a-53bcef445c83" // Helius devnet RPC
    : "https://mainnet.helius-rpc.com/?api-key=bc2d2e19-f242-49fc-8a6a-53bcef445c83";
  
  // Explorer URLs
  const getExplorerUrl = (txHash: string) => {
    if (isDevnet) {
      return `https://solscan.io/tx/${txHash}?cluster=devnet`;
    }
    return `https://solscan.io/tx/${txHash}`;
  };

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      toast("Wallet address copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Clipboard access failed:", err);
      toast("Please copy manually (Browser restricted)");
    }
  };

  const { publicKey, sendTransaction } = useWallet();

  const createSolanaPayURL = (amount: number) => {
    const params = new URLSearchParams({
      recipient: walletAddress,
      amount: amount.toString(),
      label: 'BattleRoyal.fun Founders',
      message: `Founder Access - ${amount} SOL`,
    });
    return `solana:${walletAddress}?${params.toString()}`;
  };

  const handlePayClick = async (amount: number, tier: string) => {
    // Track payment initiation
    analytics.paymentInitiated(tier as 'VIP' | 'GOD', amount);
    
    // If wallet is connected, use it for payment
    if (publicKey && sendTransaction) {
      try {
        toast.info(`Preparing ${tier} payment (${amount} SOL)...`);
        // For now, fall back to Solana Pay URL
        // In the future, you could implement direct transaction sending here
        const url = createSolanaPayURL(amount);
        window.location.href = url;
      } catch (error: any) {
        toast.error(error?.message || 'Failed to initiate payment');
      }
    } else {
      // Fallback to Solana Pay URL
      const url = createSolanaPayURL(amount);
      window.location.href = url;
      toast(`Opening ${tier} payment (${amount} SOL) in your wallet...`);
    }
  };

  const verifyTransaction = async () => {
    if (!txHash.trim()) {
      toast.error("Please enter a transaction hash");
      return;
    }

    setVerifying(true);
    setVerificationStatus('verifying');

    try {
      // Use appropriate RPC based on network
      const response = await fetch(RPC_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'getTransaction',
          params: [
            txHash,
            {
              encoding: 'jsonParsed',
              maxSupportedTransactionVersion: 0
            }
          ]
        })
      });

      const data = await response.json();
      
      if (data.result && data.result.meta) {
        const transaction = data.result;
        const isValid = transaction.meta.err === null;
        
        // Check if transaction sent SOL to our wallet
        const postBalances = transaction.meta.postBalances || [];
        const preBalances = transaction.meta.preBalances || [];
        const accountKeys = transaction.transaction?.message?.accountKeys || [];
        
        // Find our wallet in the account keys
        const walletIndex = accountKeys.findIndex((key: any) => 
          (typeof key === 'string' ? key : key.pubkey) === walletAddress
        );
        
        const receivedSOL = walletIndex >= 0 
          ? (postBalances[walletIndex] - preBalances[walletIndex]) / 1e9
          : 0;

        if (isValid && receivedSOL > 0) {
          setVerifiedAmount(receivedSOL);
          setVerificationStatus('verified');
          toast.success(`Transaction verified! ${receivedSOL.toFixed(2)} SOL received.`);
          
          // Determine tier and show registration dialog
          const tier = receivedSOL >= GOD_AMOUNT - 0.1 ? 'GOD' : receivedSOL >= VIP_AMOUNT - 0.1 ? 'VIP' : null;
          if (tier) {
            // Track payment verification
            analytics.paymentVerified(tier, receivedSOL);
            setTimeout(() => {
              setShowRegistrationDialog(true);
            }, 1000);
          }
        } else if (!isValid) {
          setVerificationStatus('failed');
          toast.error("Transaction failed or invalid");
        } else {
          setVerificationStatus('failed');
          toast.error("Transaction not found or recipient mismatch");
        }
      } else {
        setVerificationStatus('failed');
        toast.error("Transaction not found on blockchain");
      }
    } catch (error) {
      console.error("Verification error:", error);
      setVerificationStatus('failed');
      toast.error("Failed to verify transaction");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 pb-20">
      <div className="text-center mb-10">
        <h2 className="font-orbitron text-3xl md:text-5xl text-white mb-4">SECURE YOUR LEGACY</h2>
        <p className="text-gray-400 mb-4">Transfer SOL to the official Founders Contract</p>
        
        {/* Wallet Connection */}
        <div className="flex justify-center mb-4">
          <WalletConnect />
        </div>
        
        {isDevnet && (
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
            <span className="text-yellow-400 text-sm font-bold">⚠️ DEVNET TESTING MODE</span>
            <span className="text-gray-400 text-xs">Using test SOL - amounts: {VIP_AMOUNT} SOL (VIP) / {GOD_AMOUNT} SOL (GOD)</span>
          </div>
        )}
      </div>

      <Card className="bg-zinc-900/80 border-zinc-700 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-yellow-500" />
        
        <CardContent className="p-8 md:p-12 grid md:grid-cols-2 gap-12 items-center">
          
          {/* QR Code Column */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-white p-4 rounded-lg">
                {/* Simulated QR Code Pattern */}
                <div className="w-48 h-48 bg-black grid grid-cols-6 grid-rows-6 gap-1 p-2">
                   {Array.from({ length: 36 }).map((_, i) => (
                       <div key={i} className={`bg-white ${Math.random() > 0.4 ? 'opacity-100' : 'opacity-0'}`} />
                   ))}
                   {/* Corner markers */}
                   <div className="absolute top-6 left-6 w-8 h-8 border-4 border-white bg-black z-10" />
                   <div className="absolute top-6 right-6 w-8 h-8 border-4 border-white bg-black z-10" />
                   <div className="absolute bottom-6 left-6 w-8 h-8 border-4 border-white bg-black z-10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/80 text-cyan-400 font-mono text-xs px-2 py-1 rounded border border-cyan-500/50 backdrop-blur-sm">
                        SCAN TO PAY
                    </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-mono uppercase tracking-widest">
              {isDevnet ? (
                <span className="text-yellow-400">DEVNET TESTING MODE</span>
              ) : (
                'SOL Network Only'
              )}
            </p>
          </div>

          {/* Details Column */}
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs text-cyan-400 font-bold uppercase tracking-widest ml-1">Official Wallet Address</label>
              <div className="flex gap-2">
                <Input 
                  readOnly 
                  value={walletAddress} 
                  className="bg-black border-zinc-700 text-gray-300 font-mono text-sm h-12"
                />
                <Button 
                  onClick={handleCopy}
                  className={`h-12 w-12 shrink-0 ${copied ? 'bg-green-600 hover:bg-green-700' : 'bg-zinc-800 hover:bg-zinc-700'}`}
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            {/* Payment Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={() => handlePayClick(VIP_AMOUNT, 'VIP')}
                  className="bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold font-orbitron py-6 group relative overflow-hidden"
                  disabled={vipCount >= MAX_VIP}
                >
                  <div className="absolute inset-0 bg-cyan-400/20 group-hover:bg-cyan-400/30 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <Zap className="w-5 h-5" />
                    <span className="text-lg">VIP</span>
                    <span className="text-sm opacity-90">{VIP_AMOUNT} SOL</span>
                    <span className={`text-xs font-bold mt-1 ${
                      vipCount >= MAX_VIP 
                        ? 'text-red-400 line-through' 
                        : MAX_VIP - vipCount <= 5 
                        ? 'text-yellow-400 animate-pulse' 
                        : 'text-cyan-200'
                    }`}>
                      {vipCount >= MAX_VIP ? 'SOLD OUT' : `${MAX_VIP - vipCount} LEFT`}
                    </span>
                  </div>
                </Button>
                
                <Button 
                  onClick={() => handlePayClick(GOD_AMOUNT, 'GOD MODE')}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold font-orbitron py-6 group relative overflow-hidden"
                  disabled={godCount >= MAX_GOD}
                >
                  <div className="absolute inset-0 bg-yellow-400/20 group-hover:bg-yellow-400/30 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <Crown className="w-5 h-5" />
                    <span className="text-lg">GOD MODE</span>
                    <span className="text-sm opacity-90">{GOD_AMOUNT} SOL</span>
                    <span className={`text-xs font-bold mt-1 ${
                      godCount >= MAX_GOD 
                        ? 'text-red-400 line-through' 
                        : MAX_GOD - godCount <= 10 
                        ? 'text-yellow-600 animate-pulse' 
                        : 'text-yellow-900'
                    }`}>
                      {godCount >= MAX_GOD ? 'SOLD OUT' : `${MAX_GOD - godCount} LEFT`}
                    </span>
                  </div>
                </Button>
              </div>

              <div className="pt-4 border-t border-zinc-700">
                <p className="text-xs text-gray-400 mb-4 text-center">
                  Or send manually to the address above
                </p>
              </div>
            </div>

            {/* Transaction Verification */}
            <div className="space-y-4 pt-4 border-t border-zinc-700">
              <label className="text-xs text-cyan-400 font-bold uppercase tracking-widest ml-1">
                Verify Transaction
              </label>
              <div className="flex gap-2">
                <Input 
                  value={txHash}
                  onChange={(e) => {
                    setTxHash(e.target.value);
                    setVerificationStatus('idle');
                  }}
                  placeholder="Enter transaction hash (TXID)"
                  className="bg-black border-zinc-700 text-gray-300 font-mono text-sm h-12"
                />
                <Button 
                  onClick={verifyTransaction}
                  disabled={verifying || !txHash.trim()}
                  className={`h-12 shrink-0 ${
                    verificationStatus === 'verified' 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : verificationStatus === 'failed'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-zinc-800 hover:bg-zinc-700'
                  }`}
                >
                  {verifying ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : verificationStatus === 'verified' ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    'Verify'
                  )}
                </Button>
              </div>
              
              {verificationStatus === 'verified' && txHash && (
                <div className="p-4 bg-green-950/30 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-sm font-bold mb-2">✓ Transaction Verified</p>
                  <a
                    href={getExplorerUrl(txHash)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-300 text-xs hover:text-green-200 flex items-center gap-2"
                  >
                    View on Solscan {isDevnet && <span className="text-yellow-400">(Devnet)</span>} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}

              {verificationStatus === 'failed' && (
                <div className="p-4 bg-red-950/30 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm">Transaction not found or invalid</p>
                </div>
              )}

              <div className="flex items-center gap-4 text-gray-300 text-sm pt-2">
                <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-fuchsia-500 font-bold shrink-0 text-xs">3</div>
                <p>After verification, DM the hash to <span className="text-fuchsia-400 cursor-pointer hover:underline">@battleroyalfun</span> on X/Twitter</p>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Founder Registration Dialog */}
      <FounderRegistrationDialog
        open={showRegistrationDialog}
        onOpenChange={setShowRegistrationDialog}
        txHash={txHash}
        amount={verifiedAmount}
        tier={verifiedAmount >= GOD_AMOUNT - 0.1 ? 'GOD' : 'VIP'}
        onSuccess={() => {
          // Refresh counts when registration is complete
          fetchCounts();
          // Reset verification state
          setTxHash('');
          setVerificationStatus('idle');
          setVerifiedAmount(0);
        }}
      />
    </section>
  );
};
