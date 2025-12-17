import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, Sparkles, ChevronLeft, ChevronRight, Zap, CloudFog, Cloud } from 'lucide-react';
import battleCloud from '../assets/battle-cloud.gif';
import solanaCoinImg from '../assets/solana.png';
import pepeLogo from '../assets/pepe-pepe-logo.png';

export const Scene6_NewBlood = () => {
  // State for momentum (-100 to 100)
  const [momentum, setMomentum] = useState(0); 
  const [isHovering, setIsHovering] = useState(false);

  // Simulate live market data - erratic but persistent movements
  useEffect(() => {
    const interval = setInterval(() => {
      setMomentum(prev => {
        // Create a random walk tendency
        const volatility = Math.random() > 0.8 ? 40 : 15; // Occasional big swings
        const direction = Math.random() > 0.5 ? 1 : -1;
        const change = Math.random() * volatility * direction;
        
        let next = prev + change;
        // Clamp
        if (next > 85) next = 85;
        if (next < -85) next = -85;
        return next;
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const isLeftLeading = momentum < -15;
  const isRightLeading = momentum > 15;
  const isHighMomentum = Math.abs(momentum) > 60;
  
  // Convert momentum (-100 to 100) to percentage (0 to 100) for positioning
  const percentage = (momentum + 100) / 2;

  return (
    <section className="relative w-full py-24 px-4 bg-transparent overflow-hidden">
      
      <div className="max-w-4xl mx-auto relative z-10 w-full -mt-24">
        
        {/* Background VS Badge - Centered relative to the content container */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
            <motion.span 
                animate={{ 
                    color: ["#ffffff", "#3b82f6", "#a855f7", "#ffffff"],
                    textShadow: ["0 0 10px rgba(255,255,255,0.2)", "0 0 20px rgba(59,130,246,0.4)", "0 0 20px rgba(168,85,247,0.4)", "0 0 10px rgba(255,255,255,0.2)"]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="text-[150px] md:text-[200px] font-black italic opacity-5 leading-none font-orbitron"
            >
                VS
            </motion.span>
        </div>

        {/* Header */}
        <div className="text-center mb-12 relative z-10">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-white/50 mb-2 flex items-center justify-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" /> Live Market Momentum
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 w-full relative z-10">
            
            {/* Left Coin */}
            <motion.div 
                animate={{ 
                    scale: isLeftLeading ? 1.1 : 1,
                    filter: isLeftLeading ? "drop-shadow(0 0 15px rgba(236, 72, 153, 0.5))" : "drop-shadow(0 0 0px rgba(0,0,0,0))"
                }}
                className="relative flex flex-col items-center gap-3 order-2 md:order-1"
            >
                {isLeftLeading && (
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-12 bg-pink-500 text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider"
                     >
                        Leading
                     </motion.div>
                )}
                
                <div className={`relative w-20 h-20 rounded-full p-1 transition-colors duration-500 ${isLeftLeading ? 'bg-pink-500' : 'bg-white/10'}`}>
                    <img 
                        src={solanaCoinImg}
                        alt="Cyber Doge"
                        className="w-full h-full rounded-full object-cover"
                    />
                     {isLeftLeading && (
                        <div className="absolute inset-0 rounded-full bg-pink-500/20 animate-pulse" />
                    )}
                </div>
                <span className={`text-lg font-bold transition-colors duration-300 ${isLeftLeading ? 'text-white' : 'text-gray-500'}`}>CYBERDOGE</span>
            </motion.div>

            {/* Momentum Track */}
            <div 
                className="relative w-full md:w-[500px] h-14 bg-neutral-900/80 rounded-full border border-white/10 backdrop-blur-md overflow-hidden order-1 md:order-2 group"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* Grid Overlay */}
                <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" 
                     style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '10% 100%' }} 
                />
                
                {/* Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/30 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full shadow-[0_0_10px_white]" />
                </div>

                {/* Active Rope Bar */}
                <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-pink-500 via-white to-cyan-500 z-10 opacity-80"
                    animate={{ 
                        left: percentage < 50 ? `${percentage}%` : '50%',
                        right: percentage > 50 ? `${100 - percentage}%` : '50%',
                        width: `${Math.abs(momentum) / 2}%` // This creates a bar from center to current point? No, let's just make it a line
                    }}
                    style={{
                        width: Math.abs(momentum / 2) + '%', // Actually we want a bar connecting center to the puck? 
                        // Let's try a different approach: a gradient bar that spans the whole active area or just a line
                    }}
                >
                     {/* Let's simplify: A bar representing the "pull" */}
                </motion.div>
                
                {/* Re-implementing the "Rope" properly */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 h-[2px] z-10"
                    style={{ 
                        background: 'linear-gradient(90deg, #ec4899, #22d3ee)',
                    }}
                    animate={{
                        left: momentum < 0 ? `${percentage}%` : '50%',
                        width: `${Math.abs(momentum) / 2}%`
                    }}
                />

                {/* The Puck / Cloud */}
                <motion.div 
                    className="absolute top-1/2 -translate-y-1/2 w-32 h-32 -ml-16 z-20 flex items-center justify-center"
                    animate={{ left: `${percentage}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                     {/* Directional Arrows */}
                    <AnimatePresence>
                        {isLeftLeading && (
                            <motion.div 
                                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: -20 }} exit={{ opacity: 0 }}
                                className="absolute left-0 text-pink-500"
                            >
                                <ChevronLeft className="w-6 h-6 animate-pulse" />
                            </motion.div>
                        )}
                        {isRightLeading && (
                            <motion.div 
                                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 20 }} exit={{ opacity: 0 }}
                                className="absolute right-0 text-cyan-500"
                            >
                                <ChevronRight className="w-6 h-6 animate-pulse" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* The Cloud Icon */}
                    <motion.div
                         animate={{ scale: [1, 1.1, 1] }}
                         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                         className="relative"
                    >
                         <div className="absolute inset-0 bg-white blur-lg opacity-30 rounded-full" />
                         <motion.img 
                            src={battleCloud} 
                            alt="Battle Cloud"
                            className="w-32 h-32 relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] object-contain"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                         />
                         
                         {/* High Momentum Sparkles */}
                         {isHighMomentum && (
                             <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-4 -right-4 text-yellow-400"
                             >
                                 <Sparkles className="w-6 h-6" />
                             </motion.div>
                         )}
                    </motion.div>
                </motion.div>

                {/* Tooltip Overlay */}
                <AnimatePresence>
                    {isHovering && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 right-0 mt-4 p-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg text-center z-50 shadow-2xl"
                        >
                            <div className="flex flex-col items-center gap-2">
                                <Info className="w-5 h-5 text-cyan-400" />
                                <p className="text-xs text-gray-300 font-mono leading-relaxed">
                                    <span className="text-cyan-400 font-bold">LIVE DATA FEED:</span> Battles are NOT decided by BattleRoyal logic. All outcomes are driven entirely by live market data APIs.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Right Coin */}
            <motion.div 
                 animate={{ 
                    scale: isRightLeading ? 1.1 : 1,
                    filter: isRightLeading ? "drop-shadow(0 0 15px rgba(34, 211, 238, 0.5))" : "drop-shadow(0 0 0px rgba(0,0,0,0))"
                }}
                className="relative flex flex-col items-center gap-3 order-3"
            >
                {isRightLeading && (
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-12 bg-cyan-500 text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider"
                     >
                        Leading
                     </motion.div>
                )}

                <div className={`relative w-20 h-20 rounded-full p-1 transition-colors duration-500 ${isRightLeading ? 'bg-cyan-500' : 'bg-white/10'}`}>
                    <img 
                        src={pepeLogo}
                        alt="MECHAPEPE"
                        className="w-full h-full rounded-full object-cover"
                    />
                    {isRightLeading && (
                        <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-pulse" />
                    )}
                </div>
                <span className={`text-lg font-bold transition-colors duration-300 ${isRightLeading ? 'text-white' : 'text-gray-500'}`}>MECHAPEPE</span>
            </motion.div>

        </div>
        
        {/* Mobile Hint */}
        <div className="mt-8 text-center md:hidden">
            <p className="text-xs text-white/20 uppercase tracking-widest animate-pulse">Tap bar for details</p>
        </div>
      </div>
    </section>
  );
};