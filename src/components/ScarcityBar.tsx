import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, Flame, Activity, Sparkles } from 'lucide-react';
import { BundlerBattlesSection } from './BundlerBattlesSection';
import { AntiRugSection } from './AntiRugSection';
import { WallOfShame } from './WallOfShame';
import { RoadmapSection } from './RoadmapSection';

export const MegaHypeEvents = () => {
  return (
    <section className="bg-black py-24 px-4 overflow-hidden border-t border-purple-900/30">
        <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-r from-pink-900/10 to-transparent border-y border-pink-500/20 py-12">
                 <div className="px-8">
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-6">
                       Mega Hype Events
                    </h3>
                    <ul className="space-y-4 mb-8">
                       <li className="flex items-center gap-3 text-pink-300 font-mono text-sm">
                          <Flame className="w-5 h-5 text-pink-500" /> Server-wide bonus multipliers
                       </li>
                       <li className="flex items-center gap-3 text-pink-300 font-mono text-sm">
                          <Activity className="w-5 h-5 text-pink-500" /> Trend speed acceleration
                       </li>
                       <li className="flex items-center gap-3 text-pink-300 font-mono text-sm">
                          <Sparkles className="w-5 h-5 text-pink-500" /> Loot drops for active traders
                       </li>
                    </ul>
                    <p className="text-white font-black uppercase text-lg">
                       "Platform-wide hype waves that shake the arena."
                    </p>
                 </div>
                 <div className="relative h-64 lg:h-full min-h-[300px] flex items-end justify-center px-8 pb-8">
                    {/* Hype Meter Graphic */}
                    <div className="w-16 h-full bg-gray-800 rounded-full relative overflow-hidden border border-gray-600">
                       <motion.div 
                         initial={{ height: "10%" }}
                         whileInView={{ height: "85%" }}
                         transition={{ duration: 2, ease: "easeOut" }}
                         className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-pink-600 via-purple-600 to-cyan-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                       />
                       {/* Meter Lines */}
                       <div className="absolute inset-0 flex flex-col justify-evenly opacity-30">
                          {[1,2,3,4,5,6,7,8,9,10].map(i => (
                             <div key={i} className="w-full h-px bg-white" />
                          ))}
                       </div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 ml-12 text-pink-500 font-black text-4xl font-mono animate-pulse">
                       85%
                    </div>
                 </div>
              </div>
        </div>
    </section>
  );
};

interface ScarcityProps {
  totalSold: number;
  maxSpots: number;
}

export const ScarcityBar: React.FC<ScarcityProps> = ({ totalSold, maxSpots }) => {
  const percentage = Math.min((totalSold / maxSpots) * 100, 100);
  const spotsLeft = maxSpots - totalSold;

  return (
    <>
    <MegaHypeEvents />
    <BundlerBattlesSection />
    <AntiRugSection />
    <WallOfShame />
    <RoadmapSection />
    <div className="w-full max-w-4xl mx-auto mb-16 p-6 rounded-xl border border-red-500/30 bg-red-950/20 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <div className="flex items-center text-red-500 animate-pulse">
          <AlertTriangle className="w-6 h-6 mr-2" />
          <span className="font-bold uppercase tracking-widest">Scarcity Warning</span>
        </div>
        <div className="text-right">
          <span className="text-3xl font-black text-white font-orbitron">{spotsLeft}</span>
          <span className="text-gray-400 ml-2">SPOTS REMAINING BEFORE MONTHLY RENT KICKS IN</span>
        </div>
      </div>

      <div className="relative w-full h-6 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-orange-500"
        >
           <div className="absolute top-0 right-0 h-full w-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12" />
        </motion.div>
      </div>
      
      <div className="mt-2 text-center text-xs text-gray-500 uppercase tracking-widest">
        Once these {maxSpots} spots are gone, arena ownership becomes a subscription service.
      </div>
    </div>
    </>
  );
};