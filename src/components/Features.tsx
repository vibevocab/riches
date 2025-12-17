import { motion } from 'motion/react';
import swordImg from 'figma:asset/42c2408429ad16615f70a258a4fd46ef2ed07a81.png';
import battleCloud from '../assets/battle-cloud.gif';
import battleInterfaceBg from '../assets/screen.png';
import { 
  MousePointerClick, 
  Clock, 
  Activity, 
  Crown,
  MessageSquare, 
  ArrowUp, 
  Swords, 
  Rocket, 
  Zap, 
  Users, 
  Upload, 
  ShoppingCart, 
  Play, 
  Video,
  Radio,
  Monitor,
  AlertTriangle,
  Search,
  Cpu,
  BarChart,
  Globe,
  Share2,
  Shield,
  Database,
  FileText,
  Hash,
  Award,
  History,
  Layout,
  RefreshCw,
  TrendingUp,
  Megaphone,
  Ban,
  Lock,
  Repeat,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';
// Note: hypeMascot asset is missing
// import hypeMascot from 'figma:asset/86934373d7407bd5dbd677eac6d7579c6245a5ab.png';
import { Scene2_MakeItFun } from './Scene2_MakeItFun';
import { Scene6_NewBlood } from './Scene6_NewBlood';

const steps = [
  {
    icon: <MousePointerClick className="w-8 h-8 text-neon-cyan" />,
    title: "Select Tokens",
    desc: "Pick any two Solana meme coins. Doge vs Pepe? Bonk vs Wif? You decide the matchup.",
    color: "border-neon-cyan"
  },
  {
    icon: <Clock className="w-8 h-8 text-neon-purple" />,
    title: "Choose Timeframe",
    desc: "Sprint (15m), Battle (1h), or Marathon (24h). Set the stage for the war.",
    color: "border-neon-purple"
  },
  {
    icon: <Activity className="w-8 h-8 text-neon-pink" />,
    title: "Watch Momentum",
    desc: "Real-time chart tracking. Every buy pump adds momentum. Every sell dump drains it.",
    color: "border-neon-pink"
  },
  {
    icon: <Crown className="w-8 h-8 text-yellow-400" />,
    title: "Winner Hyped",
    desc: "Winning coin gets global blast on X. Top predictors earn hype score and badges.",
    color: "border-yellow-400"
  }
];

const Card = ({ title, children, color = "purple", className = "" }: { title: string, children: React.ReactNode, color?: "purple" | "cyan" | "magenta", className?: string }) => {
  const borderColors = {
    purple: "border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]",
    cyan: "border-cyan-500/50 shadow-[0_0_15px_rgba(34,211,238,0.2)]",
    magenta: "border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.2)]"
  };
  
  const titleColors = {
    purple: "text-purple-400",
    cyan: "text-cyan-400",
    magenta: "text-pink-400"
  };

  return (
    <div className={`bg-black/80 backdrop-blur-md border ${borderColors[color]} rounded-xl p-4 flex flex-col h-full ${className}`}>
      <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${titleColors[color]} flex items-center gap-2`}>
        {title}
      </h3>
      <div className="flex-1 flex flex-col gap-2">
        {children}
      </div>
    </div>
  );
};

const Item = ({ icon: Icon, label, color = "purple" }: { icon: any, label: string, color?: "purple" | "cyan" | "magenta" | "red" | "green" | "orange" }) => {
  const bgColors = {
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    magenta: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    red: "bg-red-500/10 text-red-300 border-red-500/20",
    green: "bg-green-500/10 text-green-300 border-green-500/20",
    orange: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  };

  return (
    <div className={`flex items-center gap-2 p-2 rounded border ${bgColors[color]} text-xs font-mono hover:scale-105 transition-transform cursor-default`}>
      <Icon className="w-3 h-3" />
      <span>{label}</span>
    </div>
  );
};

const ArrowConnector = ({ direction = "right" }) => (
  <div className="hidden xl:flex items-center justify-center text-cyan-500/30">
    {direction === "right" && <div className="h-[2px] w-8 bg-gradient-to-r from-purple-500/50 to-cyan-500/50" />}
  </div>
);

// Helper icon
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M9 3v4" />
    <path d="M7 5h4" />
    <path d="M3 7h4" />
  </svg>
);

export const HypeEngineMap = () => {
  return (
    <>
    <Scene2_MakeItFun />
    <Scene6_NewBlood />
    <section className="relative w-full py-24 bg-black overflow-hidden border-t border-purple-900/30">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-4xl mx-auto h-[400px] flex items-center justify-center mb-12">
                 {/* Circular Flow Animation */}
                 {[
                    { icon: Share2, label: "Post", x: 0, y: -150 },
                    { icon: ThumbsUp, label: "Vote", x: 130, y: -75 },
                    { icon: Activity, label: "Momentum", x: 130, y: 75 },
                    { icon: Users, label: "Exposure", x: 0, y: 150 },
                    { icon: MessageCircle, label: "Content", x: -130, y: 75 },
                    { icon: Repeat, label: "Loop", x: -130, y: -75 },
                 ].map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, x: item.x, y: item.y }}
                        transition={{ delay: index * 0.2, type: "spring" }}
                        className="absolute flex flex-col items-center"
                     >
                        <div className="bg-neutral-800 p-4 rounded-full border border-purple-500 shadow-[0_0_15px_theme('colors.purple.500')] mb-2 z-10">
                            <item.icon size={24} className="text-white" />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider text-purple-300 bg-black/50 px-2 rounded">{item.label}</span>
                     </motion.div>
                 ))}

                 {/* Connecting Lines SVG */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-200 -200 400 400">
                    <motion.circle 
                        cx="0" 
                        cy="0" 
                        r="150" 
                        fill="none" 
                        stroke="#a855f7" 
                        strokeWidth="2" 
                        strokeDasharray="10 10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="opacity-30"
                    />
                     <motion.circle 
                        cx="0" 
                        cy="0" 
                        r="150" 
                        fill="none" 
                        stroke="#a855f7" 
                        strokeWidth="4" 
                        strokeDasharray="20 100"
                        strokeLinecap="round"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="opacity-80"
                    />
                 </svg>

                 <div className="absolute text-center z-20">
                    <h3 className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        INFINITE<br/>LOOP
                    </h3>
                 </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">Hype Engine</span>
            </h2>
            <p className="text-xl md:text-2xl text-cyan-100/80 font-light tracking-wide mb-2">
              How Your Coin Gets Exposure
            </p>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-6" />
          </motion.div>
        </div>

        {/* Content Blocks Container */}
        <div className="max-w-5xl mx-auto flex flex-col gap-8 md:gap-12 relative">
          
          {/* Vertical Connecting Line (Desktop) */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-purple-500/20 via-cyan-500/40 to-purple-500/20 hidden md:block" />

          {/* Block 1: Posting */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/5 hover:border-purple-500/50 rounded-2xl p-6 md:p-8 transition-all duration-500 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                </div>
                {/* Glow behind icon */}
                <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-wider mb-3">
                  1. Posting = <span className="text-purple-400">Instant Visibility</span>
                </h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-xl">
                  Users create hype posts, battle reactions, and momentum updates. Every post boosts your coin’s visibility score and helps push it toward trending.
                </p>
              </div>

              {/* Visual Mockup */}
              <div className="w-full md:w-64 bg-black/40 border border-purple-500/20 rounded-xl p-3 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 blur-2xl rounded-full pointer-events-none" />
                <div className="flex items-center gap-2 opacity-40">
                  <div className="w-6 h-6 rounded-full bg-zinc-700" />
                  <div className="h-2 w-24 bg-zinc-700 rounded-full" />
                </div>
                <div className="flex items-start gap-2 bg-purple-500/10 p-2 rounded-lg border border-purple-500/30 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex-shrink-0" />
                  <div className="space-y-1.5 w-full">
                    <div className="h-2 w-20 bg-purple-400/50 rounded-full" />
                    <div className="h-1.5 w-full bg-purple-400/20 rounded-full" />
                    <div className="h-1.5 w-3/4 bg-purple-400/20 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-40">
                  <div className="w-6 h-6 rounded-full bg-zinc-700" />
                  <div className="h-2 w-24 bg-zinc-700 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 2: Voting */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/5 hover:border-green-500/50 rounded-2xl p-6 md:p-8 transition-all duration-500 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <ArrowUp className="w-8 h-8 text-green-400" />
                </div>
                <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-wider mb-3">
                  2. Voting = <span className="text-green-400">Community Power</span>
                </h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-xl">
                  Upvotes from your community push your coin higher across the platform—improving ranking, placement, and exposure.
                </p>
              </div>

              {/* Visual Mockup */}
              <div className="w-full md:w-64 bg-black/40 border border-green-500/20 rounded-xl p-4 flex items-center justify-between relative overflow-hidden group-hover:border-green-500/40 transition-colors">
                 <div className="flex items-center gap-3 relative z-10">
                   <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-zinc-500">#1</div>
                   <div>
                      <div className="h-2.5 w-16 bg-zinc-600 rounded-full mb-1.5" />
                      <div className="h-1.5 w-10 bg-green-500/50 rounded-full" />
                   </div>
                 </div>
                 <div className="flex flex-col items-center relative z-10">
                   <ArrowUp className="w-5 h-5 text-green-400 animate-bounce mb-1" />
                   <span className="text-sm font-black text-green-400">420k</span>
                 </div>
                 {/* Background Graph Line */}
                 <div className="absolute bottom-0 left-0 right-0 h-8 opacity-20">
                    <svg viewBox="0 0 100 20" className="w-full h-full text-green-500 fill-current" preserveAspectRatio="none">
                       <path d="M0,20 L0,15 C20,15 30,5 50,10 C70,15 80,0 100,5 L100,20 Z" />
                    </svg>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Block 3: Promotion */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/5 hover:border-yellow-500/50 rounded-2xl p-6 md:p-8 transition-all duration-500 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="absolute inset-0 bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-wider mb-3">
                  3. Promotion Boosts = <span className="text-yellow-400">Hype on Demand</span>
                </h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-xl">
                  Boost My Coin, Flash Spotlights, Hype Storms, clan pushes, and multipliers help your coin explode into trending instantly.
                </p>
              </div>

              {/* Visual Mockup */}
              <div className="w-full md:w-64 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/50 rounded-xl p-4 flex items-center gap-3 relative overflow-hidden shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                <div className="absolute inset-0 bg-yellow-400/5 animate-pulse" />
                <div className="p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/50 relative z-10">
                   <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="relative z-10">
                   <div className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest mb-0.5">Boost Active</div>
                   <div className="text-lg font-black text-white italic">2.5x MULTIPLIER</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Block 4: Viral Loop */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/5 hover:border-cyan-500/50 rounded-2xl p-6 md:p-8 transition-all duration-500 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                  <Repeat className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-wider mb-3">
                  4. The <span className="text-cyan-400">Viral Loop</span>
                </h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-xl">
                  Post → Votes → Momentum → Exposure → Battles → Content → More Hype. Every action triggers the next, creating nonstop exposure for your coin.
                </p>
              </div>

              {/* Visual Mockup */}
              <div className="w-full md:w-64 flex justify-center py-2">
                 <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-dashed border-purple-500/40 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-2 border-2 border-cyan-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Repeat className="w-6 h-6 text-cyan-400 animate-pulse" />
                    </div>
                    {/* Floating dots around */}
                    <div className="absolute -top-1 left-1/2 w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,1)]" />
                    <div className="absolute -bottom-1 left-1/2 w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]" />
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">

        </div>

      </div>
    </section>
    </>
  );
};

const FounderLegacy = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto mb-32 -mt-12 px-4 py-12 md:py-24 bg-zinc-950/50 rounded-3xl border border-white/5 overflow-hidden">
        {/* Frame A — Hidden / Silent & Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,50,50,0.2)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />

         {/* Mobile: Image above text - MOVED UP */}
         <motion.div 
            className="block md:hidden mb-6 relative z-20 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
         >
            <img src={swordImg} alt="Damascus Steel Gladius" className="w-full h-auto max-w-[200px] mx-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]" />
         </motion.div>

        <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Scene 1: Revelation */}
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-gray-400 font-medium text-lg md:text-xl max-w-xl mb-12 leading-relaxed"
            >
                When all 75 Founder spots are sold, we will select 5 founding members at random to receive a real Gladiator sword.
            </motion.p>

            {/* Scene 2: Denial of Toy Framing */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-16 font-orbitron font-bold tracking-widest text-red-500 uppercase text-sm md:text-base">
                <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    Not a replica.
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    Not a toy.
                </motion.span>
            </div>

            {/* Scene 3: Artifact Description & Sword Reveal */}
            <div className="relative mb-16 w-full max-w-lg">
                 {/* Desktop: Image absolute/revealed */}
                 <motion.div
                    className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs -z-10 opacity-60 mix-blend-screen pointer-events-none"
                    initial={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                 >
                     <img src={swordImg} alt="Damascus Steel Gladius" className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]" />
                 </motion.div>

                 <motion.h3 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="text-2xl md:text-4xl font-bold font-orbitron text-white leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500"
                 >
                    A high-carbon Damascus steel Gladius, custom engraved exclusively for BattleRoyal.fun founders.
                 </motion.h3>
            </div>

            {/* Scene 4: Scarcity Lock */}
            <div className="mb-12 relative inline-block">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.0 }}
                    className="text-xl md:text-2xl font-black uppercase tracking-widest text-white"
                >
                    Only 5 will ever exist.
                </motion.div>
                <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.2, duration: 0.8 }}
                    className="h-0.5 w-full bg-yellow-500 mt-2 origin-left"
                />
            </div>

            {/* Scene 5: Specification List */}
            <ul className="space-y-4 mb-16 text-gray-400 font-mono text-sm md:text-base text-left inline-block">
                {[
                    "Custom BattleRoyal.fun engraving",
                    "Forged steel, real weight, real edge",
                    "Shipped directly to the selected founders"
                ].map((item, i) => (
                    <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 2.4 + (i * 0.2), ease: "easeOut" }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                        {item}
                    </motion.li>
                ))}
            </ul>

            {/* Scene 6: Honor for the Rest */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 3.2 }}
                className="mb-16 space-y-2"
            >
                <p className="text-gray-500 text-sm md:text-base mb-4">The other 70 founders still earn something just as permanent:</p>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 3.4 }}
                    className="text-white font-bold text-lg md:text-xl"
                >
                    Lifetime ownership inside the arena.
                </motion.p>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 3.6 }}
                    className="text-white font-bold text-lg md:text-xl"
                >
                    Your name etched into the origin story.
                </motion.p>
            </motion.div>

            {/* Scene 7: Legacy Close */}
            <div className="space-y-2 mb-12 font-orbitron font-bold uppercase tracking-widest text-lg md:text-xl">
                 {["75 founders.", "5 swords.", "One legacy."].map((line, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 4.0 + (i * 0.3) }}
                        className={i === 2 ? "text-yellow-500 pt-2" : "text-gray-600"}
                    >
                        {line}
                    </motion.p>
                 ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 4.8 }}
                className="flex justify-center -mt-8 mb-8"
            >
                <img src={swordImg} alt="Gladiator Sword" className="h-48 md:h-64 object-contain drop-shadow-[0_0_25px_rgba(168,85,247,0.3)] rotate-45" />
            </motion.div>

            {/* Scene 8: CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 5.0 }}
            >
                <p className="text-gray-500 mb-6 text-sm">Secure your Founder spot before they’re gone forever.</p>
                <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-mono uppercase text-xs tracking-[0.2em] transition-all"
                >
                    Join the Legacy
                </button>
            </motion.div>

        </div>
    </div>
  );
};

export const Features = () => {
  return (
    <>
    <section className="py-24 bg-black relative">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
          .font-vt323 { font-family: 'VT323', monospace; }
        `}
      </style>
      <div className="container mx-auto px-4">
        <FounderLegacy />
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto mb-32 mt-12 text-left md:text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white font-orbitron">Let’s be clear.</h3>
                <p className="text-xl text-gray-400">We don’t control what projects do outside the arena.</p>
              </div>

              <div>
                <p className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
                  But inside it — <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">everything is visible.</span>
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-400 text-lg">
                  If anyone tries to use this platform to scam, manipulate, or abuse the system,
                </p>
                <div className="space-y-2">
                  <p className="text-3xl md:text-5xl font-black font-orbitron text-red-500/50 line-through decoration-red-500/50 uppercase">
                    they don’t disappear.
                  </p>
                  <p className="text-4xl md:text-6xl font-black font-orbitron text-white uppercase drop-shadow-[0_0_20px_rgba(220,38,38,0.5)]">
                    They get <span className="text-red-500">exposed.</span>
                  </p>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5 space-y-6">
                <p className="text-gray-500 text-sm tracking-widest uppercase">And here’s the part most people miss…</p>
                
                <div className="space-y-2">
                   <p className="text-2xl text-white font-bold">Why would anyone even try?</p>
                   <p className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 font-orbitron pb-2">
                     They need the hype too.
                   </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div 
            className="flex justify-center mb-6 relative"
            style={{
              backgroundImage: `url(${battleInterfaceBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Light overlay to make background subtle */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none" />
            <div className="relative z-10">
              <motion.img 
                src={battleCloud} 
                alt="Battle Cloud"
                className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            </div>
          </div>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
            HOW IT <span className="text-neon-cyan">WORKS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The arena is simple. The stakes are social. The glory is eternal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`h-full bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-white/5 border-t-4 ${step.color} hover:bg-slate-900/80 transition-all duration-300 group relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className={`absolute -top-6 -right-4 font-vt323 text-9xl font-bold opacity-[0.07] text-${step.color.replace('border-', '')} group-hover:opacity-[0.15] group-hover:-translate-y-2 transition-all duration-500 select-none pointer-events-none`}>
                0{index + 1}
              </div>
              <div className={`mb-6 p-4 rounded-full w-16 h-16 flex items-center justify-center border ${step.color} bg-${step.color.replace('border-', '')}/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                {step.icon}
              </div>
              <h3 className={`text-xl font-orbitron font-bold text-white mb-3 group-hover:text-${step.color.replace('border-', '')} transition-colors duration-300 tracking-wide`}>{step.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <HypeEngineMap />
    </>
  );
};