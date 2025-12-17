import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

export const Scarcity = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border border-yellow-500/50 bg-yellow-950/30 rounded-lg p-6 flex flex-col items-center text-center gap-4 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(234,179,8,0.05)_10px,rgba(234,179,8,0.05)_20px)]" />
            
            <div className="bg-yellow-500/20 p-3 rounded-full animate-pulse">
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
            </div>
            
            <h3 className="font-orbitron text-2xl md:text-3xl text-yellow-400 font-bold uppercase tracking-wider">
                Warning: Founders Window Closing
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-lg">
                After the first <span className="text-white font-bold text-3xl">75</span> spots are claimed, arenas will be 
                <span className="text-red-500 font-bold uppercase"> monthly rent forever.</span>
            </p>
            
            <p className="text-sm text-yellow-500/80 uppercase tracking-widest font-orbitron">
                Don't pay rent to the system. Own the system.
            </p>
        </motion.div>
    </div>
  );
};
