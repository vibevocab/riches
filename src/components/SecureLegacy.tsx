import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Shield, Lock } from 'lucide-react';
import { Payment } from './Payment';
import { supabase, type Founder } from '../lib/supabase';

const TOTAL_SLOTS = 75;
const VIP_SLOTS = 25;
const GOD_SLOTS = 50;

interface SlotProps {
  index: number;
  occupied: boolean;
  data?: { name: string; image: string | null };
}

const WarriorSlot: React.FC<SlotProps> = ({ index, occupied, data }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Random pulse delay for organic feel
  const pulseDelay = Math.random() * 5;

  if (occupied && data) {
    return (
      <motion.div 
        className="relative group flex flex-col items-center justify-center p-2 z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.01 }}
      >
        {/* Slot Hover Elevation & Background */}
        <motion.div 
          className="absolute inset-0 bg-black/80 rounded-xl border border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm -z-10"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        />

        {/* Avatar Container */}
        <div className="relative mb-3">
          {/* Gold Ring */}
          <div className="absolute inset-0 rounded-full border border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.3)]" />
          
          {/* Pulse Effect */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-cyan-400/30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, delay: pulseDelay, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Avatar Image */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-900 border-2 border-cyan-500/50 relative z-10 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300">
            {data.image ? (
              <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-cyan-500">
                <Shield className="w-8 h-8" />
              </div>
            )}
            
            {/* Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent pointer-events-none" />
          </div>

          {/* Tooltip on Hover */}
          <motion.div 
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/90 border border-yellow-500/30 text-yellow-500 text-[10px] uppercase tracking-widest px-3 py-1 rounded whitespace-nowrap pointer-events-none z-50"
            initial={{ opacity: 0, y: 10 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          >
            Founding Warrior
          </motion.div>
        </div>

        {/* Username */}
        <div className="text-center relative">
          <p className="text-cyan-400 font-mono text-xs md:text-sm font-bold tracking-wider group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all duration-300">
            {data.name}
          </p>
          <motion.div 
            className="absolute -inset-x-2 top-0 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            animate={{ left: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: Math.random() * 10 + 5 }}
          />
        </div>
      </motion.div>
    );
  }

  // EMPTY SLOT
  return (
    <motion.div 
      className="relative group flex flex-col items-center justify-center p-2 opacity-60 hover:opacity-100 transition-opacity duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.6 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.005 }}
    >
      {/* Avatar Placeholder */}
      <div className="relative mb-3 group-hover:-translate-y-1 transition-transform duration-300">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-900/50 border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/50 transition-colors duration-300">
          <User className="w-6 h-6 text-gray-700 group-hover:text-cyan-500/50 transition-colors duration-300" />
          
          {/* Faint pulsing border */}
          <motion.div 
            className="absolute inset-0 rounded-full border border-white/5"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <p className="text-gray-600 font-mono text-[10px] md:text-xs uppercase tracking-widest group-hover:text-cyan-500/80 transition-colors duration-300">
          <span className="hidden group-hover:inline">Claim Spot</span>
          <span className="inline group-hover:hidden">Available</span>
        </p>
      </div>
    </motion.div>
  );
};

export const SecureLegacy = () => {
  const [founders, setFounders] = useState<Founder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFounders();
    
    // Listen for custom refresh event
    const handleFounderRegistered = () => {
      fetchFounders();
    };
    window.addEventListener('founder-registered', handleFounderRegistered);
    
    // Set up real-time subscription for new founders (if Supabase is configured)
    let channel: any = null;
    if (supabase) {
      channel = supabase
        .channel('founders-changes')
        .on('postgres_changes', 
          { event: 'INSERT', schema: 'public', table: 'founders' },
          () => {
            fetchFounders();
          }
        )
        .subscribe();
    }

    return () => {
      window.removeEventListener('founder-registered', handleFounderRegistered);
      if (channel) {
        supabase?.removeChannel(channel);
      }
    };
  }, []);

  const fetchFounders = async () => {
    try {
      if (supabase) {
        const { data, error } = await supabase
          .from('founders')
          .select('*')
          .order('slot_number', { ascending: true });

        if (error) {
          console.error('Error fetching founders:', error);
          // Fallback to localStorage
          const localFounders = JSON.parse(localStorage.getItem('founders') || '[]');
          setFounders(localFounders);
          setLoading(false);
          return;
        }

        setFounders(data || []);
      } else {
        // Fallback to localStorage if Supabase not configured
        const localFounders = JSON.parse(localStorage.getItem('founders') || '[]');
        setFounders(localFounders);
      }
    } catch (error) {
      console.error('Error fetching founders:', error);
      // Fallback to localStorage
      const localFounders = JSON.parse(localStorage.getItem('founders') || '[]');
      setFounders(localFounders);
    } finally {
      setLoading(false);
    }
  };

  // Create a map of slot_number to founder
  const foundersMap = new Map<number, Founder>();
  founders.forEach(founder => {
    if (founder.slot_number) {
      foundersMap.set(founder.slot_number - 1, founder); // Convert to 0-based index
    }
  });

  return (
    <div className="relative w-full min-h-[140vh] bg-[#050505] overflow-hidden flex flex-col items-center py-24 border-t border-b border-gray-900">
      
      {/* --- BACKGROUND EFFECTS --- */}
      
      {/* Deep Obsidian Background & Grain */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
      
      {/* Animated Fog / Smoke */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10 pointer-events-none"
      />
      <motion.div
        className="absolute inset-0 bg-[url('https://raw.githubusercontent.com/sitek94/fog-effect/master/fog1.png')] bg-cover opacity-10 mix-blend-screen pointer-events-none"
        animate={{ x: [-100, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Vertical Light Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-[50%] -left-[20%] w-[50%] h-[200%] bg-gradient-to-r from-transparent via-cyan-900/5 to-transparent skew-x-12 blur-3xl"
          animate={{ x: ['-20%', '120%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
         <motion.div 
          className="absolute -top-[50%] left-[20%] w-[30%] h-[200%] bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent skew-x-[-12deg] blur-3xl"
          animate={{ x: ['20%', '-120%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>


      {/* --- CONTENT --- */}
      
      {/* Inserted Payment Component ABOVE the Wall Title */}
      <div className="relative z-30 w-full mb-12">
        <Payment />
      </div>

      {/* Top Scarcity Statement (Pinned) */}
      <div className="relative z-20 text-center mb-16">
        <motion.h2 
          className="text-4xl md:text-6xl font-black font-orbitron text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] tracking-tighter"
          animate={{ textShadow: ['0 0 15px rgba(234,179,8,0.3)', '0 0 25px rgba(234,179,8,0.6)', '0 0 15px rgba(234,179,8,0.3)'] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ONLY 75 WILL EVER STAND HERE.
        </motion.h2>
        <p className="text-gray-500 uppercase tracking-[0.5em] text-xs md:text-sm mt-4">
          Founding Warriors of BattleRoyal.fun
        </p>
      </div>

      {/* THE WALL GRID */}
      <div className="relative z-20 w-full max-w-7xl px-4">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
            <p className="mt-4 text-gray-400">Loading Wall of Warriors...</p>
          </div>
        ) : (
          <div className="grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 md:gap-y-12">
            {Array.from({ length: TOTAL_SLOTS }).map((_, index) => {
              const founder = foundersMap.get(index);
              return (
                <WarriorSlot 
                  key={index} 
                  index={index} 
                  occupied={!!founder} 
                  data={founder ? { name: founder.username, image: founder.image_url } : undefined}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Scarcity Warning */}
      <div className="relative z-20 mt-24 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/50 border border-red-900/30 backdrop-blur-md">
          <Lock className="w-4 h-4 text-red-500/70" />
          <span className="text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest">
            Once full, this wall is sealed forever.
          </span>
        </div>
      </div>
      
    </div>
  );
};
