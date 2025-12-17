import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, ShieldAlert, Gavel, Scale, Ban, Coins } from 'lucide-react';
import logo from 'figma:asset/205bf6b0fef762fcf53ac863a912ca9f73f37339.png';

export const DisclaimerSection = () => {
  const legalText = [
    "This platform is not a gambling service, does not offer financial rewards, and does not determine winners based on chance or monetary stakes. All battle outcomes are based strictly on live market data and are not influenced or manipulated by the platform.",
    "We are a non-custodial service. We do not store, manage, or hold any user funds at any time.",
    "This platform exists solely for meme coin hype, community building, entertainment, and promotional purposes.",
    "The platform may charge service fees, battle entry fees, and rental fees for premium features, battle rooms, tools, and upgrades. These fees are compensation for platform services — not wagers, bets, or financial instruments.",
    "We are not responsible for any financial losses, trading decisions, or actions taken by users, traders, or coin developers. All participants are fully responsible for their own activities and risks."
  ];

  return (
    <section className="relative w-full py-20 bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black opacity-60" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Header Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-950/30 rounded-full border border-red-900/50 animate-pulse">
              <ShieldAlert className="w-10 h-10 text-red-500" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wider mb-12 text-red-500">
            Platform Rules & Disclaimer
          </h2>

          {/* Existing Rules Card */}
          <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-xl backdrop-blur-sm mb-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-mono">
              We are <span className="text-red-400 font-bold decoration-red-500 underline underline-offset-4 decoration-2">NOT responsible</span> for anything that happens to any coin while it is battling, promoting, or advertising on our platform — AND we are <span className="text-red-400 font-bold decoration-red-500 underline underline-offset-4 decoration-2">NOT responsible</span> for any coin after their battle ends.
            </p>

            <div className="py-6 border-y border-red-900/20 my-8">
              <h3 className="text-xl md:text-2xl font-black italic uppercase text-white mb-2">
                "You build it, you own it."
              </h3>
              <p className="text-gray-400 font-mono text-sm">
                We provide hype — what you do with it is on <span className="text-white font-bold">YOU</span>.
              </p>
            </div>

            <div className="mt-8 text-left bg-black/40 p-6 rounded-lg border border-red-900/20">
              <div className="flex items-center gap-3 mb-4">
                <Gavel className="w-5 h-5 text-red-500" />
                <span className="text-red-400 font-bold uppercase tracking-wider text-sm">Enforcement Policy</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Permanently banned",
                  "IP-blocked",
                  "Publicly exposed on the Wall of Shame"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-red-300 font-bold uppercase text-sm md:text-base">
                    <span className="text-red-600">🚫</span> {item}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-xs text-gray-500 font-mono pt-4 border-t border-white/5">
                <AlertTriangle className="w-4 h-4 text-yellow-600" />
                This keeps the arena safe for <span className="text-white font-bold">REAL creators only</span>.
              </div>
            </div>
          </div>

          {/* New Legal Text Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="grid gap-6 text-left max-w-4xl mx-auto"
          >
             <h3 className="text-red-500/50 uppercase tracking-[0.2em] text-xs font-bold border-b border-red-900/30 pb-2 mb-4">Legal Disclosures</h3>
             
             <div className="grid md:grid-cols-2 gap-6 text-xs text-gray-500 font-mono leading-relaxed">
                <div className="space-y-4">
                  <p className="group hover:text-gray-300 transition-colors">
                    <span className="text-red-500/70 mr-2">01 // NO GAMBLING</span>
                    {legalText[0]}
                  </p>
                  <p className="group hover:text-gray-300 transition-colors">
                    <span className="text-red-500/70 mr-2">02 // NON-CUSTODIAL</span>
                    {legalText[1]}
                  </p>
                   <p className="group hover:text-gray-300 transition-colors">
                    <span className="text-red-500/70 mr-2">03 // PURPOSE</span>
                    {legalText[2]}
                  </p>
                </div>
                <div className="space-y-4">
                   <p className="group hover:text-gray-300 transition-colors">
                    <span className="text-red-500/70 mr-2">04 // FEES</span>
                    {legalText[3]}
                  </p>
                  <p className="group hover:text-gray-300 transition-colors">
                    <span className="text-red-500/70 mr-2">05 // LIABILITY</span>
                    {legalText[4]}
                  </p>
                </div>
             </div>
          </motion.div>

        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12 mb-4"
        >
            <motion.img 
                src={logo} 
                alt="Battle Royal Logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                animate={{ rotateY: 360 }}
                transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
            />
        </motion.div>

        <div className="text-xs text-gray-600 font-mono border-t border-white/5 pt-8 mt-8">
          &copy; {new Date().getFullYear()} BATTLE ROYAL.FUN. ALL RIGHTS RESERVED. Powered By Riches Rendered LLC
        </div>
      </div>
    </section>
  );
};
