import { motion } from 'motion/react';
import { Heart, Copy, Check } from 'lucide-react';
import { useState } from 'react';

import { toast } from 'sonner@2.0.3';

export function DonationSection() {
  const [copied, setCopied] = useState(false);
  const solanaAddress = '5Gr1tEmvbeX41WAya7nr3afMCnWFDPLFYtBTLwYkfQVN';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(solanaAddress);
      setCopied(true);
      toast("Address copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      toast("Please copy manually (Browser restricted)");
    }
  };

  return (
    <section className="relative py-16 overflow-hidden border-t border-purple-500/20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #a855f7 1px, transparent 1px),
            linear-gradient(to bottom, #a855f7 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Heart Icon */}
        <motion.div
          className="inline-block mb-6"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-50" />
            <Heart className="relative w-12 h-12 text-purple-400 fill-purple-400" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Donate to Project
        </motion.h2>

        {/* Solana Address Display */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative inline-block max-w-full">
            {/* Animated Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-lg blur opacity-75 animate-pulse" />
            
            {/* Address Container */}
            <div className="relative bg-black border border-purple-500/30 rounded-lg px-4 py-3 sm:px-6 sm:py-4">
              <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
                <code className="text-cyan-400 text-xs sm:text-sm md:text-base break-all font-mono">
                  {solanaAddress}
                </code>
                
                {/* Copy Button */}
                <motion.button
                  onClick={handleCopy}
                  className="flex-shrink-0 p-2 rounded bg-purple-600/20 border border-purple-500/50 hover:bg-purple-600/40 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Copy address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-purple-400" />
                  )}
                </motion.button>
              </div>
              
              {/* Copy Feedback */}
              {copied && (
                <motion.div
                  className="mt-2 text-green-400 text-xs"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  Address copied to clipboard!
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Thank You Message */}
        <motion.p
          className="text-purple-300/80 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Thank You For Your Support
        </motion.p>

        {/* Decorative Elements */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer Branding */}
      <motion.div
        className="relative mt-12 pt-8 border-t border-purple-500/20 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p>
          <span className="text-purple-400">BATTLE ROYAL.FUN</span> powered by{' '}
          <span className="text-cyan-400">Riches Rendered LLC</span>
        </p>
      </motion.div>
    </section>
  );
}
