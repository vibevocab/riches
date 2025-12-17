import React from 'react';
import { motion } from 'motion/react';
import { Skull, XCircle, AlertTriangle, ShieldAlert, Flame, Ban, ShieldCheck, Shield } from 'lucide-react';
// Note: hypnoticSpiral asset is missing
// import hypnoticSpiral from 'figma:asset/2992e4bab0aa731b62cb06ec0a251f8790cafad0.png';

export const WallOfShame = () => {
  return (
    <section className="relative py-24 px-4 w-full bg-black min-h-screen overflow-hidden border-t border-red-900/30">
      {/* Anti-Rug Security Section */}
      <div className="relative w-full max-w-6xl mx-auto px-4 flex flex-col items-center mb-32">
        <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1639503547276-90230c4a4198?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwc2hpZWxkJTIwbmVvbiUyMGNvZGV8ZW58MXx8fHwxNzY1NTg5MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Security Background"
                className="w-full h-full object-cover opacity-10"
             />
        </div>


      </div>

      {/* Background Gradients/Noise */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black opacity-80" />
      {/* Note: hypnoticSpiral image removed - missing asset */}
      {/* <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
          <img src={hypnoticSpiral} alt="" className="w-full h-full object-cover opacity-40" />
      </motion.div> */}
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 relative w-full overflow-hidden rounded-2xl border border-red-900/30 bg-black">
            <div className="absolute inset-0 z-0">
                 <img 
                    src="https://images.unsplash.com/photo-1559126698-1906840f3c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmlzb24lMjB3YWxsJTIwY29uY3JldGUlMjBkYXJrJTIwc3BvdGxpZ2h0fGVufDF8fHx8MTc2NTU4OTE2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Wall Background"
                    className="w-full h-full object-cover opacity-30 grayscale contrast-150"
                 />
                 <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay" />
            </div>

            <div className="relative z-10 w-full px-4 py-16 flex flex-col items-center">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span className="text-red-500 tracking-[0.5em] uppercase text-sm font-bold">Live Execution Feed</span>
                </div>
                
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-neutral-200 mb-12 uppercase glitch-text" style={{ fontFamily: '"Orbitron", sans-serif', textShadow: '0 0 10px rgba(220, 38, 38, 0.7)' }}>
                    WALL OF SHAME
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
                    {[
                        { name: "ScamInu", reason: "Honeypot Detected", loss: "$45k" },
                        { name: "RugPullPro", reason: "Liquidity Drained", loss: "$120k" },
                        { name: "FakePepe", reason: "Mint Authority", loss: "$12k" },
                    ].map((scam, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 1.5, opacity: 0, rotate: Math.random() * 10 - 5 }}
                            whileInView={{ scale: 1, opacity: 1, rotate: Math.random() * 6 - 3 }}
                            transition={{ type: "spring", bounce: 0.5, delay: index * 0.2 }}
                            className="bg-neutral-800/80 backdrop-blur-sm p-6 rounded shadow-xl relative border-l-4 border-red-600 transform"
                        >
                             <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-neutral-300">{scam.name}</h3>
                                <Skull size={20} className="text-neutral-500" />
                             </div>
                             <p className="text-red-400 font-mono text-sm mb-2">{scam.reason}</p>
                             <p className="text-neutral-500 text-xs">User Loss: {scam.loss}</p>

                             {/* Stamp Animation */}
                             <motion.div 
                                initial={{ scale: 2, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                            >
                                <div className="border-4 border-red-600 text-red-600 font-black text-4xl p-4 transform -rotate-12 opacity-80">
                                    EXECUTED
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                 <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-16 text-lg text-neutral-500 font-mono"
                >
                    No appeals. No mercy. No second chances.
                </motion.p>
            </div>
        </div>

        {/* Zero Tolerance Policy Section - New Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-red-950/10 border border-red-600/30 rounded-lg p-8 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-red-500 uppercase tracking-wide flex items-center justify-center gap-2 mb-2">
              <Ban className="w-6 h-6" /> Zero-Tolerance Security System <Flame className="w-6 h-6" />
            </h3>
            <p className="text-red-400 font-mono text-sm">Where scammers become permanent memes.</p>
          </div>

          <div className="space-y-6 text-red-300/90 font-mono text-sm md:text-base leading-relaxed">
            <div className="bg-red-950/30 p-4 rounded border border-red-900/30 text-center">
              <p className="font-bold text-red-400 mb-2 uppercase tracking-wider">Most Savage Anti-Rug Wall in Solana</p>
              <p>One scam — and you become a public spectacle <span className="text-red-500 font-black">FOREVER</span>.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-red-500 font-bold mb-3 uppercase border-b border-red-900/50 pb-1">If you do ANY of the following:</h4>
                <ul className="space-y-2 list-none">
                  <li className="flex items-center gap-2"><span className="text-lg">🕳️</span> Rug Pull</li>
                  <li className="flex items-center gap-2"><span className="text-lg">💧</span> Liquidity Pull</li>
                  <li className="flex items-center gap-2"><span className="text-lg">🎭</span> Market Manipulation</li>
                  <li className="flex items-center gap-2"><span className="text-lg"></span> Malicious behavior</li>
                  <li className="flex items-center gap-2"><span className="text-lg">🤡</span> Use hype to trick/mislead</li>
                </ul>
              </div>

              <div>
                <h4 className="text-red-500 font-bold mb-3 uppercase border-b border-red-900/50 pb-1">You Unlock:</h4>
                <div className="bg-black/40 p-3 rounded border border-red-600/20 text-center mb-3">
                  <p className="font-bold text-red-500">🔥 PERMANENT IP BAN 🔥</p>
                  <p className="text-xs text-red-400/70">+ AUTOMATIC WALL OF SHAME POSTING</p>
                </div>
                <div className="text-xs space-y-1 text-red-400/60 uppercase">
                  <p>Your info becomes public forever:</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <span className="flex items-center gap-1">📛 Coin logo</span>
                    <span className="flex items-center gap-1">🪙 Ticker</span>
                    <span className="flex items-center gap-1">👤 Username</span>
                    <span className="flex items-center gap-1">💼 Wallet</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-center font-bold text-red-500 uppercase mt-6 pt-6 border-t border-red-900/30">
              <span className="flex items-center gap-1"><XCircle className="w-4 h-4" /> No Appeals</span>
              <span className="flex items-center gap-1"><XCircle className="w-4 h-4" /> No Mercy</span>
              <span className="flex items-center gap-1"><XCircle className="w-4 h-4" /> No Second Chances</span>
            </div>

            <p className="text-center text-red-400/50 text-xs mt-4 italic">
              This platform is ONLY for hype, exposure, and fun — NOT for scamming.
            </p>
          </div>
        </motion.div>


      </div>
      
      {/* Decorations */}
      <div className="absolute top-0 left-10 w-[1px] h-32 bg-gradient-to-b from-red-600 to-transparent opacity-50" />
      <div className="absolute top-0 right-20 w-[1px] h-48 bg-gradient-to-b from-red-600 to-transparent opacity-30" />
      <div className="absolute top-0 left-1/3 w-[1px] h-24 bg-gradient-to-b from-red-600 to-transparent opacity-40" />
    </section>
  );
};
