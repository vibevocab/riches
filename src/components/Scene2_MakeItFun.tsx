import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, Sparkles, Trophy } from 'lucide-react';
import battleCloud from '../assets/battle-cloud.gif';
import pepeCoin from '../assets/pepe-pepe-logo.png';
import battleInterface from 'figma:asset/1d5e0e02e458bb05f777d95959d2a20c0e1cd158.png';

interface Coin {
  name: string;
  image: string;
  color: string;
}

interface MomentumBarProps {
  coinA: Coin;
  coinB: Coin;
  isActive?: boolean;
}

export const MomentumBar: React.FC<MomentumBarProps> = ({ coinA, coinB, isActive = true }) => {
  const [momentum, setMomentum] = useState(0); // Range: -100 (A wins) to 100 (B wins)
  const [winner, setWinner] = useState<'A' | 'B' | null>(null);
  
  // Simulate live market data
  useEffect(() => {
    if (!isActive || winner) return;

    const interval = setInterval(() => {
      setMomentum(prev => {
        // Simulate "smart" market movement (not purely random)
        const volatility = Math.random() > 0.8 ? 15 : 5;
        const trend = Math.sin(Date.now() / 2000) * 5; // Sine wave trend
        const noise = (Math.random() - 0.5) * volatility;
        
        let next = prev + noise + trend;
        
        // Clamp values but allow "pinning" to sides for tension
        if (next > 95) next = 95;
        if (next < -95) next = -95;
        
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isActive, winner]);

  // Determine leading side
  const isLeadingA = momentum < -10;
  const isLeadingB = momentum > 10;
  
  // Calculate visual position (mapped to percentage 0-100)
  // momentum -100 -> 0% (Left), 100 -> 100% (Right), 0 -> 50%
  const positionPercent = 50 + (momentum / 2);

  return (
    <div className="w-full max-w-5xl mx-auto p-12 relative group">
      
      {/* Transparency Overlay (Tooltip) */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
        <div className="bg-black/90 border border-white/10 px-4 py-2 rounded-lg backdrop-blur-md text-xs text-gray-400 whitespace-nowrap flex items-center gap-2 shadow-xl">
          <Info className="w-3 h-3 text-cyan-400" />
          <span>Battles are NOT decided by BattleRoyal logic. All outcomes are driven entirely by live market data.</span>
        </div>
      </div>

      {/* Main Battle Container */}
      <div className="relative flex items-center justify-between gap-8">
        
        {/* Coin A (Left) */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <motion.div 
            animate={{ scale: isLeadingA ? 1.1 : 1, filter: isLeadingA ? `drop-shadow(0 0 30px ${coinA.color})` : 'none' }}
            className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-black border-4 ${isLeadingA ? 'border-transparent' : 'border-white/10'} relative overflow-hidden`}
            style={{ borderColor: isLeadingA ? coinA.color : undefined }}
          >
            <img src={coinA.image} alt={coinA.name} className="w-full h-full object-cover" />
            {isLeadingA && (
              <motion.div 
                layoutId="winner-glow"
                className="absolute inset-0 bg-white/20 mix-blend-overlay" 
              />
            )}
          </motion.div>
          <span className={`text-lg font-bold uppercase tracking-widest ${isLeadingA ? 'text-white' : 'text-gray-500'}`}>
            {coinA.name}
          </span>
          {winner === 'A' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-12 bg-yellow-500 text-black text-sm font-black px-3 py-1 rounded uppercase tracking-wider"
            >
              WINNER
            </motion.div>
          )}
        </div>

        {/* The Momentum Bar (Track) */}
        <div className="flex-1 h-20 relative flex items-center">
          {/* Background Track */}
          <div className="absolute inset-0 bg-white/5 rounded-full border border-white/10 overflow-hidden backdrop-blur-sm">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_white,0_0_20px_rgba(255,255,255,0.8)]" />
            
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%)] bg-[size:5%_100%]" />
          </div>

          {/* The "Rope" / Active Bar */}
          <div className="absolute inset-x-0 h-4 bg-neutral-800/50 rounded-full overflow-hidden mx-6 backdrop-blur-sm shadow-[0_0_25px_#a855f7,0_0_25px_#3b82f6]">
            {/* Gradient Fill based on position */}
            <motion.div 
              className="absolute inset-y-0 w-full"
              style={{
                background: `linear-gradient(90deg, ${coinA.color} 0%, transparent ${50 + (momentum / 4)}%, ${coinB.color} 100%)`,
              }}
              animate={{
                opacity: 0.5 + (Math.abs(momentum) / 200)
              }}
            />
          </div>

          {/* The Puck / Center Indicator (Battle Cloud) */}
          <motion.div
            className="absolute h-80 w-[500px] z-10 flex items-center justify-center pointer-events-none"
            style={{ 
              left: '50%',
              x: '-50%',
              y: 60
            }}
            animate={{ 
              x: `calc(-50% + ${momentum * 4}px)`, // Increased scale factor for wider track
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 1
            }}
          >
            {/* Pulsating Cloud Image */}
            <motion.img 
              src={battleCloud} 
              alt="Battle Cloud"
              className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            
            {/* Directional Arrows (Neon Green) */}
            {isLeadingA && (
              <motion.div 
                className="absolute left-16 text-green-400 text-4xl font-black drop-shadow-[0_0_10px_rgba(74,222,128,1)] z-20"
                animate={{ x: [-10, 0, -10], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                ◀
              </motion.div>
            )}
            {isLeadingB && (
              <motion.div 
                className="absolute right-16 text-green-400 text-4xl font-black drop-shadow-[0_0_10px_rgba(74,222,128,1)] z-20"
                animate={{ x: [10, 0, 10], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
              >
                ▶
              </motion.div>
            )}
          </motion.div>

          {/* Particles / Sparks */}
          <AnimatePresence>
            {(Math.abs(momentum) > 30) && (
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                animate={{ x: momentum * 4 }}
              >
                 <Sparkles className={`w-20 h-20 ${momentum < 0 ? 'text-purple-400' : 'text-blue-400'} animate-spin-slow opacity-60`} />
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Coin B (Right) */}
        <div className="relative z-10 flex flex-col items-center gap-4">
          <motion.div 
            animate={{ scale: isLeadingB ? 1.1 : 1, filter: isLeadingB ? `drop-shadow(0 0 30px ${coinB.color})` : 'none' }}
            className={`w-24 h-24 md:w-32 md:h-32 rounded-full bg-black border-4 ${isLeadingB ? 'border-transparent' : 'border-white/10'} relative overflow-hidden`}
            style={{ borderColor: isLeadingB ? coinB.color : undefined }}
          >
             <img src={pepeCoin} alt={coinB.name} className="w-full h-full object-cover" />
             {isLeadingB && (
              <motion.div 
                layoutId="winner-glow"
                className="absolute inset-0 bg-white/20 mix-blend-overlay" 
              />
            )}
          </motion.div>
          <span className={`text-lg font-bold uppercase tracking-widest ${isLeadingB ? 'text-white' : 'text-gray-500'}`}>
            {coinB.name}
          </span>
          {winner === 'B' && (
             <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-12 bg-yellow-500 text-black text-sm font-black px-3 py-1 rounded uppercase tracking-wider"
            >
              WINNER
            </motion.div>
          )}
        </div>

      </div>
      
      {/* VS Badge */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -mt-10 pointer-events-none font-black text-8xl italic z-0 opacity-20"
        animate={{
          color: ['#ffffff', '#3b82f6', '#a855f7', '#ffffff'],
          textShadow: [
            '0 0 15px rgba(255,255,255,0.3)',
            '0 0 30px rgba(59,130,246,0.3)',
            '0 0 30px rgba(168,85,247,0.3)',
            '0 0 15px rgba(255,255,255,0.3)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        VS
      </motion.div>

    </div>
  );
};

export const Scene2_MakeItFun = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img 
            src={battleInterface} 
            alt="Battle Interface Background" 
            className="w-full h-full object-cover opacity-30 blur-sm mask-image-linear-gradient(to bottom, black, transparent)" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
       </div>
       
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />
       
       <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
              MAKE IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">FUN</span>
            </h2>
             <p className="text-gray-400 max-w-2xl mx-auto">
              Live market battles. Watch the tug-of-war in real time.
            </p>
          </div>
          
       </div>
    </section>
  );
};