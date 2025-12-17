import image_92a26f9e80c22c10a5f995edd73d721bbc75dc0c from 'figma:asset/92a26f9e80c22c10a5f995edd73d721bbc75dc0c.png';
import React from 'react';
import { motion } from 'motion/react';
import { Check, X, Lock, ShieldCheck, Crown } from 'lucide-react';
import bgImage from 'figma:asset/9cd6019129522f8af545daa761185bd4e30024ae.png';
import founderDagger from 'figma:asset/42c2408429ad16615f70a258a4fd46ef2ed07a81.png';

export const OwnershipProtocol = () => {
  return (
    <section className="relative py-24 bg-zinc-950 text-white overflow-hidden rounded-3xl my-8 border border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
            <img src={bgImage} alt="" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-zinc-950/90" />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />
        </div>

        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            {/* Scene 1: Arena Law */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <motion.img 
                  src={image_92a26f9e80c22c10a5f995edd73d721bbc75dc0c} 
                  alt="Founding Warrior" 
                  className="w-64 h-64 mx-auto mb-6 object-contain"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    filter: [
                      "drop-shadow(0 0 20px rgba(255,255,255,0.2))",
                      "drop-shadow(0 0 40px rgba(255,255,255,0.5))",
                      "drop-shadow(0 0 20px rgba(255,255,255,0.2))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-gray-400 mb-2">Two coins enter.</h2>
                <p className="text-xl md:text-3xl font-medium max-w-2xl mx-auto leading-relaxed">
                    Only <span className="text-white font-bold">75 humans</span> ever get to own this badge. 
                    <br />
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.5 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 1 }}
                        className="text-gray-400"
                    >
                        The rest will honor.
                    </motion.span>
                </p>
            </motion.div>

            {/* Scene 2 & 3: CTA & Declaration */}
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <button 
                        className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-3 rounded-full uppercase tracking-widest text-sm font-bold transition-all mb-12 backdrop-blur-sm cursor-default"
                    >
                        Secure your permanent spot now
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="relative inline-block"
                >
                    <h3 className="text-3xl md:text-5xl font-black font-orbitron uppercase tracking-tighter mb-2">
                        Lifetime Founders<br/>Own the Arena Forever
                    </h3>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50 mb-4 origin-left" 
                    />
                    <p className="text-gray-500 font-mono text-sm tracking-widest uppercase opacity-70">
                        (Only the first 75 humans get this)
                    </p>
                </motion.div>
            </div>

            {/* Scene 4: Tier Reveal */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-24">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-zinc-900/50 border border-cyan-500/30 p-8 rounded-2xl hover:border-cyan-500/60 transition-all hover:-translate-y-1 duration-300 group"
                >
                    <div className="text-cyan-400 font-bold tracking-widest text-sm mb-2">VIP LIFETIME ($1,000)</div>
                    <ul className="space-y-3 text-gray-400 text-sm mt-4">
                        <li className="flex items-start gap-2 text-white font-bold"><Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> 3 Permanent Arenas for Life</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-900 shrink-0 mt-0.5" /> Rent them out for monthly or yearly fees and generate passive income</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-900 shrink-0 mt-0.5" /> Zero rent, zero fees</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-900 shrink-0 mt-0.5" /> Fully customizable, yours forever.</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-900 shrink-0 mt-0.5" /> All Future Updates for life no fees</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-cyan-900 shrink-0 mt-0.5" /> Much more coming</li>
                    </ul>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-zinc-900/50 border border-yellow-500/30 p-8 rounded-2xl hover:border-yellow-500/60 transition-all hover:-translate-y-1 duration-300 group relative overflow-hidden shadow-lg"
                >
                    <div className="text-yellow-400 font-bold tracking-widest text-sm mb-2">GOD MODE ($5,000)</div>
                    <ul className="space-y-3 text-gray-400 text-sm mt-4">
                        <li className="flex items-start gap-2 text-white font-bold"><Crown className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" /> 5 Permanent Arenas for Life</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-yellow-900 shrink-0 mt-0.5" /> Rent them out for monthly or yearly fees and generate passive income</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-yellow-900 shrink-0 mt-0.5" /> Everything in VIP Lifetime</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-yellow-900 shrink-0 mt-0.5" /> No expiration.</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-yellow-900 shrink-0 mt-0.5" /> All Future Updates for life no fees</li>
                        <li className="flex items-start gap-2"><Check className="w-4 h-4 text-yellow-900 shrink-0 mt-0.5" /> Much more coming</li>
                    </ul>
                </motion.div>
            </div>

            {/* Scene 5: Ownership vs Rent Divider */}
            <div className="max-w-4xl mx-auto mb-24 relative">
                 <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-0 w-full h-px bg-gray-800 -z-10 hidden md:block"
                 />
                 <div className="grid grid-cols-2 gap-8 md:gap-24 relative">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-right pr-4 md:pr-0"
                    >
                        <h4 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Monthly Users</h4>
                        <ul className="space-y-4 text-sm md:text-base text-gray-600 font-medium">
                            <li className="flex items-center justify-end gap-3">Rent forever <X className="w-4 h-4" /></li>
                            <li className="flex items-center justify-end gap-3">Add-ons cost extra <X className="w-4 h-4" /></li>
                            <li className="flex items-center justify-end gap-3">No permanent ownership <X className="w-4 h-4" /></li>
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-left pl-4 md:pl-0 border-l border-gray-800 md:border-none"
                    >
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Founders</h4>
                        <ul className="space-y-4 text-sm md:text-base text-white font-bold">
                            <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-green-500" /> Own 3–5 arenas forever</li>
                            <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-green-500" /> Free</li>
                            <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-green-500" /> Unlimited Access</li>
                        </ul>
                    </motion.div>
                 </div>
            </div>

            {/* Scene 6: Irreversibility & Legacy */}
            <div className="text-center max-w-3xl mx-auto mb-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6 mb-16"
                >
                    <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter font-orbitron">
                        Only 75 humans will ever <span className="text-red-500 block md:inline">bypass arena rent.</span>
                    </h4>
                    <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-500 font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-bold"
                    >
                        Once gone = permanent monthly system.
                    </motion.p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="relative group mx-4"
                >
                    {/* Decorative corners */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-white/10 group-hover:border-white/30 transition-colors duration-500" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-white/10 group-hover:border-white/30 transition-colors duration-500" />
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-white/10 group-hover:border-white/30 transition-colors duration-500" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-white/10 group-hover:border-white/30 transition-colors duration-500" />

                    <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
                        
                        <div className="flex items-center gap-3 mb-8 text-xs font-mono text-gray-500 uppercase tracking-widest border-b border-white/5 pb-4">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                            Protocol Message // Founders
                        </div>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-left font-light italic opacity-90 mb-8">
                            “Founding members are helping launch this project as fast as possible.
                            In return, they receive lifetime perks, future updates free, exclusive events, private groups, and personal digital spaces inside the ecosystem.
                        </p>
                        
                        <div className="bg-red-500/5 border-l-2 border-red-500/50 p-6 text-left">
                            <p className="text-white font-bold text-sm md:text-base leading-relaxed tracking-wide">
                                Once the 75 founder slots are gone, both tiers convert to monthly subscription pricing permanently.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scene 8: Phases */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs font-mono uppercase tracking-widest">
                <div className="flex items-center gap-3 bg-green-500/10 px-6 py-2 rounded-full border border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <div className="relative flex items-center justify-center w-3 h-3">
                        <div className="absolute w-full h-full bg-green-500 rounded-full animate-ping opacity-75" />
                        <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]" />
                    </div>
                    <span className="font-orbitron font-bold text-green-400 tracking-widest text-sm">
                        Phase 1: Founder Sale
                    </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 px-4 py-2">
                    <Lock className="w-3 h-3" />
                    Phase 2: Monthly Subscriptions (Coming Soon)
                </div>
            </div>
        </div>
    </section>
  );
};
