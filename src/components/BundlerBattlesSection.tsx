import image_205bf6b0fef762fcf53ac863a912ca9f73f37339 from 'figma:asset/205bf6b0fef762fcf53ac863a912ca9f73f37339.png';
import React from 'react';
import { motion } from 'motion/react';
import { Swords, Crown, Flame, Trophy, Eye, Zap } from 'lucide-react';
// Note: cloudImage asset is missing
// import cloudImage from 'figma:asset/d2044c8b6063b81c90eefdcd4b8d222bfff3e2fa.png';

export const BundlerBattlesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="relative w-full py-32 bg-neutral-950 overflow-hidden text-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-50" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-12"
        >
          {/* Intro */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="pt-8 space-y-4">
                <h2 className="text-5xl md:text-7xl font-black text-white flex items-center justify-center gap-4 flex-wrap">
                    Welcome to <br className="md:hidden" />
                    <span className="relative">
                        Bundler Battles
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-purple-600" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                    </span>
                </h2>
                <div className="flex justify-center gap-6 mt-4">
                    <Swords className="w-12 h-12 text-white animate-pulse" />
                    <Crown className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                    <Flame className="w-12 h-12 text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                </div>
            </div>
            <h3 className="text-xl md:text-2xl font-mono text-cyan-400 uppercase tracking-widest">
              For the first time ever
            </h3>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Bundlers have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">real arena</span>.
            </h2>
          </motion.div>

          {/* Core Definition */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative group hover:border-purple-500/30 transition-colors">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity" />
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed relative z-10">
              <span className="font-bold text-white">BattleRoyal.fun</span> introduces <span className="text-yellow-400 font-bold">Bundler Battles & Tournaments</span> — structured, declared competitions where bundlers face off in public view.
            </p>
          </motion.div>

          {/* The Shift */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-center md:text-left">
            <div className="space-y-2 p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-red-500/50 transition-colors">
               <Eye className="w-8 h-8 text-neutral-500 mb-2" />
               <p className="text-neutral-400 font-mono text-sm uppercase">Old Way</p>
               <p className="text-xl font-bold text-white line-through decoration-red-500/50 decoration-2">This isn’t about hiding.</p>
            </div>
            <div className="space-y-2 p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-red-500/50 transition-colors">
               <div className="opacity-50 grayscale">
                 <Swords className="w-8 h-8 text-neutral-500 mb-2" />
               </div>
               <p className="text-neutral-400 font-mono text-sm uppercase">Old Way</p>
               <p className="text-xl font-bold text-white line-through decoration-red-500/50 decoration-2">This isn’t about sneaking.</p>
            </div>
             <div className="space-y-2 p-6 rounded-xl bg-purple-900/20 border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
               <Zap className="w-8 h-8 text-yellow-400 mb-2" />
               <p className="text-purple-400 font-mono text-sm uppercase">New Way</p>
               <p className="text-xl font-bold text-white">
                 Skill. Speed. Strategy. <br/><span className="text-purple-400">Dominance.</span>
               </p>
            </div>
          </motion.div>

          {/* Rewards */}
          <motion.div variants={itemVariants} className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 border-t border-b border-white/5">
            <div className="flex-1 text-left space-y-4">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Trophy className="w-8 h-8 text-yellow-500" />
                Tracked, Ranked, Crowned.
              </h3>
              <p className="text-neutral-400 text-lg">
                Every bundler battle is recorded forever on-chain.
              </p>
            </div>
            <div className="flex-1 text-left md:text-right">
                <p className="text-lg text-neutral-300">
                    Winners earn <span className="text-white font-bold">badges</span>, <span className="text-white font-bold">ELO points</span>, <span className="text-white font-bold">leaderboard positions</span>, and <span className="text-pink-500 font-bold">bragging rights</span> inside the Solana meme culture.
                </p>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div variants={itemVariants} className="space-y-4">
             <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-2xl md:text-4xl font-black text-neutral-500 uppercase">
                <span>No Judgment.</span>
                <span className="hidden md:inline text-neutral-800">•</span>
                <span>No Hypocrisy.</span>
             </div>
             <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 uppercase drop-shadow-lg">
                Just pure competition.
             </p>
          </motion.div>

          {/* CTA / Footer */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-8 mt-8">
            <div className="flex flex-col md:flex-row gap-6 text-center">
                <div className="px-6 py-3 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-200 font-medium">
                    If you bundle, this is your <span className="text-white font-bold">stage</span>.
                </div>
                <div className="px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-200 font-medium">
                    If you spectate, this is <span className="text-white font-bold">entertainment</span>.
                </div>
            </div>
            

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
