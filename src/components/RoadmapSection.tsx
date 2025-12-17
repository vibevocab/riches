import image_445c0e8e29bd8067d087b44875802d2b325fb595 from 'figma:asset/445c0e8e29bd8067d087b44875802d2b325fb595.png';
import React from 'react';
import { motion } from 'motion/react';
import { Zap, Gem, Globe, ChevronRight, Layers, Coins, Lock, CheckCircle2 } from 'lucide-react';
import solanaCoin from '../assets/solana.png';
import ethCoin from '../assets/eth.png';
import solanaLogo from '../assets/solana.png';

export const RoadmapSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    hover: { 
      opacity: 1, 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const phases = [
    {
      id: 1,
      title: "Phase 1 — Beta: Solana Only",
      version: "v1.0",
      subtitle: "Launching in Days / Weeks",
      chain: "Solana",
      color: "from-purple-600 to-indigo-600",
      glow: "shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_50px_rgba(147,51,234,0.6)]",
      border: "border-purple-500/50",
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      description: "Establishing the arena. The first battleground for memecoin dominance.",
      points: [
        "Battle Rooms Launch",
        "Live Bundler Tracking",
        "Leaderboard System",
        "Community Events"
      ]
    },
    {
      id: 2,
      title: "Phase 2: Expansion",
      version: "v2.0",
      subtitle: "Q2 2025 - Q3 2025",
      chain: "Ethereum / Base",
      color: "from-slate-400 to-blue-500",
      glow: "shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.6)]",
      border: "border-blue-500/50",
      icon: <Gem className="w-8 h-8 text-blue-300" />,
      description: "Crossing chains. Bringing the battle to new liquidity hubs.",
      points: [
        "Cross-Chain Integration",
        "Base Network Arena",
        "Smart Money Tracking",
        "Guild Tournaments"
      ]
    },
    {
      id: 3,
      title: "Phase 3: Global",
      version: "v3.0",
      subtitle: "Q4 2025 & Beyond",
      chain: "Multi-Chain",
      color: "from-yellow-400 to-orange-500",
      glow: "shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_50px_rgba(234,179,8,0.6)]",
      border: "border-yellow-500/50",
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      description: "The universal standard for competitive bundling.",
      points: [
        "Universal API Access",
        "Pro-League Sponsorships",
        "DAO Governance",
        "Mobile App Launch"
      ]
    }
  ];

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900/40 via-black to-black opacity-60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider relative inline-block group">
            <span className="relative z-10 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
              First we take the meme coins.
            </span>
            <br />
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-magenta-500 drop-shadow-[0_0_10px_rgba(255,0,255,0.5)] animate-pulse">
              Then we take the world.
            </span>
             {/* Glitch Effect Overlay */}
            <span className="absolute inset-0 text-red-500 opacity-20 -translate-x-[2px] translate-y-[1px] blur-[1px] animate-pulse">
              First we take the meme coins.<br/>Then we take the world.
            </span>
          </h2>
        </motion.div>

        {/* Phase Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full"
        >
          {phases.map((phase) => (
            <motion.div
              key={phase.id}
              variants={cardVariants}
              whileHover="hover"
              initial="initial"
              className={`relative bg-neutral-900/40 backdrop-blur-md border ${phase.border} rounded-3xl p-8 flex flex-col gap-6 group transition-all duration-300 ${phase.glow}`}
            >
              {/* Floating Chain Icon */}
              <img 
                src={phase.id === 1 ? solanaLogo : phase.id === 2 ? ethCoin : image_445c0e8e29bd8067d087b44875802d2b325fb595}
                alt="Chain Icon"
                className="absolute -top-10 right-8 w-24 h-24 drop-shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 object-contain"
              />

              {/* Title & Timeline */}
              <div className="space-y-2 mt-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${phase.color} bg-opacity-10 text-white text-xs font-bold uppercase tracking-wider`}>
                  {phase.version}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {phase.id === 2 ? 'Phase 2 - Ethereum + Base' : phase.id === 3 ? 'Phase 3 — v3: Full Multi-Chain' : phase.title}
                </h3>

                {phase.id === 2 && (
                  <div className="mt-6 space-y-6 text-left">
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      Now the arena expands.
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">Why these chains</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-neutral-400 text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shadow-[0_0_8px_cyan]" />
                           <span><strong className="text-white">Ethereum</strong> → legacy meme kings + deep liquidity</span>
                        </li>
                        <li className="flex items-start gap-2 text-neutral-400 text-sm">
                           <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shadow-[0_0_8px_cyan]" />
                           <span><strong className="text-white">Base</strong> → fastest-growing meme ecosystem of 2026</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">New unlocks</h4>
                      <ul className="space-y-2">
                        {[
                          "Cross-chain battles (Solana vs ETH vs Base)",
                          "Chain-vs-Chain leaderboards",
                          "Bigger social blasts & crown moments"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-neutral-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shadow-[0_0_8px_cyan]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">Goal</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        3–5× the user base. Multiply hype. Break timelines.
                      </p>
                    </div>
                  </div>
                )}

                {phase.id === 3 && (
                  <div className="mt-6 space-y-6 text-left">
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      This is where BattleRoyal.fun becomes unavoidable.
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">Chains added</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        BNB, Polygon, Avalanche, TON, Tron, Arbitrum — every chain that matters.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">Endgame features</h4>
                      <ul className="space-y-2">
                        {[
                          "Global ELO across all chains",
                          "Meme World Cup events",
                          "$BATTLE token revenue share",
                          "Decentralized arena voting"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-neutral-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shadow-[0_0_8px_cyan]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">Goal</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        Become the undisputed meme-coin battle arena of Web3.
                      </p>
                    </div>
                  </div>
                )}


                {phase.id === 1 && (
                  <div className="mt-6 space-y-6 text-left">
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      We move fast. We dominate where the action is.
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">Why Solana first</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        Solana still controls the majority of meme-coin volume and launches. This is where hype is born — and where legends start.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">WHAT'S GOING LIVE:</h4>
                      <ul className="space-y-2">
                        {[
                          "All Solana meme coins battleable",
                          "New Blood Arena for fresh launches",
                          "75 Lifetime Founder slots",
                          "Social blast exposure",
                          "Bundler vs Bundler battles"
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-neutral-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shadow-[0_0_8px_cyan]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wide">Goal</h4>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        Ship fast. Own Solana. Build hype and revenue immediately.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}


              {/* Bottom Progress Glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-3xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 flex flex-col items-center gap-8 w-full max-w-xl text-center"
        >
          <h4 className="text-2xl text-white font-bold">And much more to come.</h4>
        </motion.div>

      </div>
    </section>
  );
};