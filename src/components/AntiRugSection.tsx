import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, ScanLine, AlertTriangle, CheckCircle2, Siren } from 'lucide-react';
import logo from 'figma:asset/205bf6b0fef762fcf53ac863a912ca9f73f37339.png';

export const AntiRugSection = () => {
  return (
    <section className="relative w-full py-24 bg-black overflow-hidden border-t border-b border-white/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      
      {/* Grid line animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <img src={logo} alt="Battle Royal Logo" className="w-32 md:w-48 h-auto mx-auto drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            </motion.div>

            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5], boxShadow: ["0 0 10px rgba(168, 85, 247, 0.2)", "0 0 20px rgba(168, 85, 247, 0.4)", "0 0 10px rgba(168, 85, 247, 0.2)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-500/50 bg-purple-900/20 text-purple-300 font-mono text-sm uppercase tracking-widest mb-8 backdrop-blur-md"
            >
                <Siren className="w-4 h-4 animate-pulse text-red-500" />
                Security Level: Maximum
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6 leading-tight">
                The First <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-green-500 blur-lg opacity-50 animate-pulse"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">Anti-Rug Prevention</span>
                </span><br />
                Of Its Kind
            </h2>
            
            <p className="text-cyan-100/80 max-w-3xl mx-auto text-xl md:text-2xl font-light tracking-wide">
                We don’t just detect scams — we <span className="font-black text-red-500 line-through decoration-2 decoration-red-500/50">OBLITERATE</span> them.
            </p>
        </motion.div>

        {/* Feature Grid - 4 Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-8xl mx-auto">
            
            {/* 1. Pre-Launch Audit */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-zinc-900/40 border border-purple-500/20 p-6 rounded-xl relative group hover:border-purple-500/60 transition-all duration-300 hover:bg-zinc-900/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col h-full"
            >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                   <ScanLine className="w-24 h-24 text-purple-500 -rotate-12" />
                </div>
                
                <div className="w-14 h-14 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/20 animate-pulse"></div>
                    <ScanLine className="w-7 h-7 text-purple-400 relative z-10" />
                </div>
                
                <h3 className="text-xl font-black text-white uppercase mb-3 tracking-wide group-hover:text-purple-300 transition-colors">Pre-Launch Audit</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono flex-grow">
                    Every token is automatically scanned by our security engine before it's allowed into the arena. The system checks the contract for <span className="text-red-400">malicious functions</span> like unlimited minting exploits, blacklist or freeze controls, hidden tax traps, and honeypot behavior that would prevent users from selling. If anything suspicious is detected — the token is <span className="text-red-500 font-bold">instantly rejected</span>.
                    <br/><br/>
                    This ensures only <span className="text-green-400">clean, fair, and transparent</span> tokens can enter battles. <span className="text-white font-bold">No rugs, no scams, no hidden tricks</span> — just real projects, real hype, and a safe environment where communities can compete, flex, and build momentum without worrying about being exploited.
                </p>
                <div className="mt-4 h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-3/4 animate-[shimmer_2s_infinite]"></div>
                </div>
            </motion.div>

            {/* 2. Liquidity Lock-In */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-zinc-900/40 border border-cyan-500/20 p-6 rounded-xl relative group hover:border-cyan-500/60 transition-all duration-300 hover:bg-zinc-900/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col h-full"
            >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                   <Lock className="w-24 h-24 text-cyan-500 -rotate-12" />
                </div>

                <div className="w-14 h-14 rounded-lg bg-cyan-900/30 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cyan-500/20 animate-pulse"></div>
                    <Lock className="w-7 h-7 text-cyan-400 relative z-10" />
                </div>

                <h3 className="text-xl font-black text-white uppercase mb-3 tracking-wide group-hover:text-cyan-300 transition-colors">Liquidity Lock-In</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono flex-grow">
                    Developers must lock a portion of their liquidity using their own preferred third-party locker. If they attempt a rug pull, the <span className="text-cyan-400">locked funds</span> remain secured in that locker according to its rules — not ours.
                    <br/><br/>
                    Our system automatically checks for a minimum required amount of locked liquidity, and only coins that meet this threshold qualify for the <span className="text-green-400 font-bold">Arena Verified badge</span>. This creates an additional layer of protection and accountability, ensuring projects demonstrate <span className="text-cyan-300">real commitment</span> before entering the arena. Lock duration and amounts are <span className="text-white">transparently displayed</span>, giving communities the confidence to engage, compete, and grow without the fear of sudden liquidity removal or developer abandonment.
                </p>
                <div className="mt-4 flex items-center gap-2 text-[10px] text-cyan-500 font-mono uppercase">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span> Vault Secured
                </div>
            </motion.div>

            {/* 3. The "Safe" Badge */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-zinc-900/40 border border-green-500/20 p-6 rounded-xl relative group hover:border-green-500/60 transition-all duration-300 hover:bg-zinc-900/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] flex flex-col h-full"
            >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                   <CheckCircle2 className="w-24 h-24 text-green-500 -rotate-12" />
                </div>

                <div className="w-14 h-14 rounded-lg bg-green-900/30 border border-green-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                     <div className="absolute inset-0 bg-green-500/20 animate-pulse"></div>
                    <Shield className="w-7 h-7 text-green-400 relative z-10" />
                </div>

                <h3 className="text-xl font-black text-white uppercase mb-3 tracking-wide group-hover:text-green-300 transition-colors">The "Safe" Badge</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono flex-grow">
                    Coins that pass our <span className="text-green-300">comprehensive security inspection</span> earn the <span className="text-green-400 font-bold">'Arena Verified' badge</span> — giving investors <span className="text-white">confidence</span> to ape in without fear.
                </p>
                 <div className="mt-4 px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-[10px] uppercase font-bold inline-block rounded">
                  ✓ Verified Safe
                </div>
            </motion.div>

            {/* 4. NOT SAFE Badge */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-zinc-900/40 border border-red-500/20 p-6 rounded-xl relative group hover:border-red-500/60 transition-all duration-300 hover:bg-zinc-900/60 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] flex flex-col h-full"
            >
                 <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                   <AlertTriangle className="w-24 h-24 text-red-500 -rotate-12" />
                </div>

                <div className="w-14 h-14 rounded-lg bg-red-900/30 border border-red-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                     <div className="absolute inset-0 bg-red-500/20 animate-pulse"></div>
                    <AlertTriangle className="w-7 h-7 text-red-500 relative z-10" />
                </div>

                <h3 className="text-xl font-black text-white uppercase mb-3 tracking-wide group-hover:text-red-400 transition-colors">NOT SAFE Badge</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-mono flex-grow">
                    If a coin fails verification, it is labeled with a small 'NOT SAFE' badge to warn investors.
                </p>
                <div className="mt-4 px-2 py-1 bg-red-500/10 border border-red-500/30 text-red-500 text-[10px] uppercase font-bold inline-block rounded animate-pulse">
                  ⚠ High Risk
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};
