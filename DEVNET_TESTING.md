# Devnet Testing Guide

## How to Test Payments on Solana Devnet

The payment system now supports testing on Solana devnet! This allows you to test the entire payment flow without using real SOL.

## Setup

### 1. Enable Devnet Mode

Create a `.env` file in the project root (or add to your existing `.env.local`):

```env
VITE_SOLANA_NETWORK=devnet
```

For production/mainnet, either:
- Remove the variable (defaults to mainnet)
- Or set: `VITE_SOLANA_NETWORK=mainnet`

### 2. Optional: Custom Devnet Wallet

If you want to use a different wallet address for devnet testing:

```env
VITE_SOLANA_NETWORK=devnet
VITE_DEVNET_WALLET=YourDevnetWalletAddressHere
```

If not set, it will use the same wallet address (which works on both networks).

## Testing Amounts

When in devnet mode, the payment amounts are automatically reduced:
- **VIP**: 0.1 SOL (instead of 15 SOL)
- **GOD MODE**: 0.2 SOL (instead of 35 SOL)

This makes testing much cheaper! You can get free devnet SOL from faucets.

## Getting Devnet SOL

1. **Solana Faucet**: Visit https://faucet.solana.com/
2. **QuickNode Faucet**: https://faucet.quicknode.com/solana/devnet
3. **SolFaucet**: https://solfaucet.com/

Enter your wallet address and request devnet SOL (usually 1-2 SOL per request).

## Testing the Flow

1. **Set devnet mode** in your `.env` file
2. **Restart your dev server**: `npm run dev`
3. **Connect your wallet** to devnet (switch network in Phantom/Solflare)
4. **Request devnet SOL** from a faucet
5. **Test the payment**:
   - Click VIP or GOD MODE button
   - Send the reduced amount (0.1 or 0.2 SOL)
   - Verify the transaction
   - Complete registration

## Visual Indicators

When in devnet mode, you'll see:
- ⚠️ Yellow warning banner at the top
- "DEVNET TESTING MODE" label
- Reduced payment amounts displayed
- "(Devnet)" label on Solscan links

## Switching Back to Mainnet

Simply remove or change the environment variable:

```env
VITE_SOLANA_NETWORK=mainnet
```

Or remove the variable entirely (defaults to mainnet).

## Notes

- Devnet transactions are free and don't affect mainnet
- Devnet data resets periodically, so don't rely on it for permanent storage
- The same wallet address can be used on both networks
- Transaction verification works the same way on both networks

