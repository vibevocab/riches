import React from 'react';
import { motion } from 'motion/react';
import { Crown, Swords } from 'lucide-react';
import heroBg from 'figma:asset/9cd6019129522f8af545daa761185bd4e30024ae.png';

export const Hero = () => {
  return (
    <section className="text-center py-20 md:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Battle Arena Background" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-50 rounded-full animate-pulse" />
            <Crown className="w-16 h-16 text-yellow-400 relative z-10 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl mb-6"
        >
          OWN THE
          <br />
          <span className="text-fuchsia-500 neon-text-magenta">ARENA</span>
          <br />
          FOREVER
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-orbitron text-xl md:text-2xl text-cyan-400 neon-text-cyan tracking-widest uppercase flex items-center justify-center gap-4"
        >
          <Swords className="w-6 h-6 animate-pulse" />
          Two coins enter. One gets crowned.
          <Swords className="w-6 h-6 animate-pulse" />
        </motion.p>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/10 to-transparent blur-3xl z-0 pointer-events-none" />
    </section>
  );
};
