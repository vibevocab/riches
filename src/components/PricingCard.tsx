import React from 'react';
import { Check, Zap, Crown, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingProps {
  title: string;
  price: string;
  spots: number;
  spotsLeft: number;
  features: string[];
  isGodMode?: boolean;
  color: 'cyan' | 'magenta' | 'gold';
  onSelect: () => void;
  subtitle?: string;
  period?: string;
  scarcityWarning?: string;
  buttonText?: string;
}

export const PricingCard: React.FC<PricingProps> = ({
  title,
  price,
  spots,
  spotsLeft,
  features,
  isGodMode = false,
  color,
  onSelect,
  subtitle,
  period = "/ lifetime",
  scarcityWarning,
  buttonText
}) => {
  const glowColor = color === 'cyan' ? '#00FFFF' : color === 'magenta' ? '#FF00FF' : '#FFD700';
  const borderColor = `border-[${glowColor}]`;
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`relative p-8 rounded-2xl border-2 bg-black/80 backdrop-blur-md overflow-hidden flex flex-col h-full`}
      style={{ 
        borderColor: glowColor,
        boxShadow: isGodMode ? `0 0 50px ${glowColor}40` : `0 0 20px ${glowColor}20`
      }}
    >
      {isGodMode && (
        <div className="absolute top-0 right-0 p-2 bg-gradient-to-bl from-yellow-500 to-transparent">
          <Crown className="text-black w-6 h-6" />
        </div>
      )}
      
      {/* Background Grid Effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${glowColor} 1px, transparent 1px), linear-gradient(90deg, ${glowColor} 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold tracking-wider font-orbitron" style={{ color: glowColor }}>
            {title}
          </h3>
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20 whitespace-nowrap ml-2">
            {spotsLeft} / {spots} LEFT
          </span>
        </div>
        
        {subtitle && (
          <p className="text-sm font-bold text-gray-300 mb-4 tracking-wide border-b border-white/10 pb-4">
            {subtitle}
          </p>
        )}

        <div className={scarcityWarning ? "mb-2" : "mb-6"}>
          <span className="text-4xl font-black text-white font-orbitron">{price}</span>
          <span className="text-gray-400 ml-2">{period}</span>
        </div>
        
        {scarcityWarning && (
          <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-6 animate-pulse">
            {scarcityWarning}
          </p>
        )}

        {/* Progress Bar for Scarcity */}
        <div className="w-full bg-gray-800 h-2 rounded-full mb-8 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${((spots - spotsLeft) / spots) * 100}%` }}
            className="h-full rounded-full"
            style={{ backgroundColor: glowColor }}
          />
        </div>

        <ul className="space-y-6 mb-8 flex-grow">
          {isGodMode ? (
            <>
              {[
                { title: "5 Permanent Arenas — Forever", desc: "True digital real estate you own for life. Rent them monthly or yearly to generate passive income." },
                { title: "Eternal Top 1–50 Ranking", desc: "Your position is permanently etched into BattleRoyale history." },
                { title: "Everything in VIP Lifetime", desc: "Full platform access. Every premium feature. No expiration." },
                { title: "GOD MODE Tournaments & Events", desc: "Founder-only battles that break standard limits." },
                { title: "Fully Customizable Arenas", desc: "Public or private. Any rules. Any promotion. Total control." },
                { title: "All 6 Battle Modes Unlocked", desc: "Including Whale Buy and Bundler Deathmatch." },
                { title: "Extended Battles (Up to 30 Days)", desc: "Long-form wars built for strategy, tension, and dominance." },
                { title: "Voice + Webcam Host Powers", desc: "Run battles live with full audio and visual authority." },
                { title: "Force-Invite Authority", desc: "Instantly pull guests into your arena." },
                { title: "20× XP Multiplier", desc: "Accelerated progression from day one." },
                { title: "Founder-Only Visuals", desc: "Animated Fire Halo + Particle Trail badge." },
                { title: "Physical Titanium Founder Plaque", desc: "Precision-cut titanium, shipped to you. Proof of origin." },
                { title: "Wall of Glory — Founding Warriors", desc: "Every founding member is permanently immortalized. Names locked forever." },
                { title: "Early Access to All Betas & Features", desc: "Play, test, and influence new modes and systems before anyone else." },
                { title: "All Future Updates & Themes — Free Forever", desc: "Every new feature, expansion, and visual theme included at no cost. Permanently." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-300">
                  <Zap className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: glowColor }} />
                  <div>
                    <span className="block text-white font-bold mb-1">{item.title}</span>
                    <span className="block text-xs md:text-sm text-gray-400 leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </>
          ) : (
            [
                { title: "3 Permanent Arenas — Lifetime Ownership", desc: "No rent. No expiration. Rent them out monthly or yearly to generate passive income." },
                { title: "Unlimited Battles — Forever", desc: "Host without limits. Zero platform fees." },
                { title: "Lifetime VIP Updates, Features & Themes", desc: "Every new VIP feature, system update, and visual theme included at no cost — forever." },
                { title: "All Battle Modes Unlocked", desc: "Full access to every mode on the platform." },
                { title: "Fully Customizable Arenas", desc: "Public or private. Any promotion. Total control." },
                { title: "Extended Battles (Up to 15 Days)", desc: "Long-form battles built for strategy and momentum." },
                { title: "Voice + Webcam Host Powers", desc: "Go live with full audio and visual authority." },
                { title: "Private VIP Lounge", desc: "Exclusive space reserved for VIPs." },
                { title: "Your Battles & Wins Auto-Posted on Official Socials", desc: "Built-in exposure and recognition." },
                { title: "Full Theme & Music Control", desc: "Customize visuals and sound to match your brand." },
                { title: "10× XP Multiplier", desc: "Faster progression across the platform." },
                { title: "Animated Gold Crown Badge", desc: "Lifetime-exclusive VIP identity." },
                { title: "Priority Queue Access", desc: "Faster matchmaking and placement in featured battles." },
                { title: "Exclusive VIP Nameplate & Chat Color", desc: "Instantly recognizable in battles and lobbies." },
                { title: "Advanced Battle Analytics Dashboard", desc: "View win rates, streaks, and performance stats." },
                { title: "Early Access to New Modes & UI Tweaks", desc: "Test upcoming features before public release." }
            ].map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-300">
                <Check className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: glowColor }} />
                <div>
                  <span className="block text-white font-bold mb-1">{item.title}</span>
                  <span className="block text-xs md:text-sm text-gray-400 leading-relaxed">{item.desc}</span>
                </div>
              </li>
            ))
          )}
        </ul>

        <button
          onClick={onSelect}
          className="w-full py-4 px-6 rounded-xl font-bold text-black uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform active:scale-95"
          style={{ 
            backgroundColor: glowColor,
            boxShadow: `0 0 20px ${glowColor}60`
          }}
        >
          {buttonText || `Mint ${title}`}
        </button>
      </div>
    </motion.div>
  );
};
