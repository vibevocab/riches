import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PricingCard } from './components/PricingCard';
import { ScarcityBar } from './components/ScarcityBar';
import { PaymentSection } from './components/PaymentSection';
import { SecureLegacy } from './components/SecureLegacy';
import { Features } from './components/Features';
import { DonationSection } from './components/DonationSection';
import { Toaster } from 'sonner@2.0.3';
import { WalletContextProvider } from './contexts/WalletContext';
import { AudioController } from './components/AudioController';
import { trackPageView } from './utils/analytics';
import founderCrest from 'figma:asset/92a26f9e80c22c10a5f995edd73d721bbc75dc0c.png';
import founderSheath from 'figma:asset/4cb725553a20b475fc1201ebbc8a9e9b59fe8a32.png';

export default function App() {
  // Mock live data
  const [vipSold, setVipSold] = useState(13); // Start with 13 sold (12 remaining)
  const [godSold, setGodSold] = useState(12);
  
  // Simulate live activity periodically (very slow so it doesn't look fake)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        // Randomly decide which one sold, but don't go over limit
        if (Math.random() > 0.5 && vipSold < 25) {
           setVipSold(prev => Math.min(prev + 1, 25));
        } else if (godSold < 50) {
           setGodSold(prev => Math.min(prev + 1, 50));
        }
      }
    }, 15000); // Check every 15s

    return () => clearInterval(interval);
  }, [vipSold, godSold]);

  const totalSold = vipSold + godSold;
  const maxSpots = 75;

  // Track page view on mount
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  return (
    <WalletContextProvider>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-magenta-500 selection:text-white overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
          .font-orbitron { font-family: 'Orbitron', sans-serif; }
        `}
      </style>
      
      <Toaster position="bottom-center" theme="dark" />
      
      {/* Global Audio Controller */}
      <AudioController />
      
      <Hero />

      <div className="container mx-auto px-4 py-24 relative z-10" id="pricing">
        {/* Founders Access Header */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-5 pointer-events-none select-none overflow-hidden">
            <span className="text-[12vw] leading-none font-black font-orbitron whitespace-nowrap text-white">
              FOUNDERSFOUNDERSFOUNDERS
            </span>
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            <img 
              src={founderCrest} 
              alt="Founding Warrior Crest" 
              className="w-64 h-64 md:w-96 md:h-96 -mt-32 md:-mt-48 mb-8 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-500" 
            />
            <h2 className="text-5xl md:text-7xl font-black text-white font-orbitron mb-8 tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600">
              ACCESS
            </h2>
            
            <div className="border border-red-500/30 bg-red-950/20 backdrop-blur-md px-6 py-4 md:px-10 md:py-6 rounded-2xl max-w-3xl mx-auto shadow-[0_0_30px_rgba(220,38,38,0.15)] transform hover:scale-[1.01] transition-transform duration-500 relative overflow-hidden group">
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(220,38,38,0.1)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scan_2s_linear_infinite] pointer-events-none opacity-30" />
              
              <p className="text-red-500 font-bold tracking-[0.3em] text-xs md:text-sm mb-3 font-orbitron flex items-center justify-center gap-3 animate-pulse">
                <span>///</span> SYSTEM ALERT <span>///</span>
              </p>
              
              <div className="space-y-6 text-center">
                 <h3 className="text-2xl md:text-4xl font-black font-orbitron text-white uppercase leading-tight">
                    BETA NOT READY YET — <br/>
                    <span className="text-red-500 drop-shadow-[0_0_15px_rgba(220,38,38,0.6)]">THAT'S WHY FOUNDERS WIN BIG</span>
                 </h3>

                 <div className="space-y-4 text-gray-300 md:text-lg leading-relaxed">
                    <p>
                       The full arena isn't live.<br/>
                       That's exactly why these 75 lifetime spots are the <span className="text-white font-bold decoration-red-500 underline decoration-2 underline-offset-4">deal of the year.</span>
                    </p>

                    <ul className="text-sm md:text-base space-y-3 font-mono text-left max-w-xl mx-auto py-2">
                        <li className="flex items-start gap-3">
                           <span className="text-red-500 font-bold">01.</span>
                           <span>Buy now → own 3–5 permanent arenas forever at founder price.</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <span className="text-red-500 font-bold">02.</span>
                           <span>Beta drops → you get first access + badges + eternal rank.</span>
                        </li>
                        <li className="flex items-start gap-3">
                           <span className="text-red-500 font-bold">03.</span>
                           <span className="text-gray-400 line-through decoration-red-500/50">Everyone else pays monthly rent.</span>
                        </li>
                    </ul>

                    <p className="text-xl md:text-2xl font-bold font-orbitron text-white pt-2">
                        Early founders always <span className="text-red-500">10–100x.</span>
                    </p>
                 </div>

                 <div className="border-t border-red-500/30 pt-4 flex flex-col gap-2">
                    <p className="text-sm md:text-base text-gray-400 font-mono">Two coins enter.</p>
                    <p className="text-base md:text-lg text-white font-bold font-orbitron uppercase tracking-wider">
                       75 humans enter the origin story.
                    </p>
                    <p className="text-red-400 font-bold uppercase text-xs tracking-[0.2em] animate-pulse mt-2">
                       Be one before the doors open.
                    </p>
                 </div>
              </div>
            </div>

            <img 
              src={founderSheath} 
              alt="Founder Sword Sheath" 
              className="w-full max-w-sm mx-auto mt-12 mb-16 object-contain drop-shadow-[0_0_25px_rgba(220,38,38,0.2)] hover:scale-[1.02] transition-transform duration-700" 
            />
            <Features />
          </div>
        </div>

        <ScarcityBar totalSold={totalSold} maxSpots={maxSpots} />

        <div id="payment" className="py-24">
           <PaymentSection>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
              <PricingCard 
                title="VIP LIFETIME"
                price="15 SOL"
                spots={25}
                spotsLeft={25 - vipSold}
                color="cyan"
                subtitle="Founding Warlord — Only 25 spots ever"
                period="/ one-time"
                scarcityWarning="Once 25 are gone → becomes monthly subscription forever."
                features={[
                  "3 Permanent Arenas for life (no rent, no expiration) — rent them out monthly or yearly to generate passive income",
                  "Unlimited battles forever ($0 fees)",
                  "Up to 15-Day battles",
                  "All battle modes unlocked",
                  "Fully customizable arenas (public/private, any promo)",
                  "Voice + webcam host powers",
                  "Private VIP lounge",
                  "Full theme & music control",
                  "10× XP boost",
                  "Animated Gold Crown badge (lifetime)",
                  "Your battles & wins auto-posted on official socials",
                  "Lifetime access to every future VIP feature"
                ]}
                buttonText="Join VIP – Secure Lifetime Access"
                onSelect={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}
              />

              <PricingCard 
                title="GOD MODE LIFETIME"
                price="35 SOL"
                spots={50}
                spotsLeft={50 - godSold}
                color="gold" // Using gold for God Mode as requested
                isGodMode={true}
                subtitle="Supreme Founder — Only 50 humans ever"
                period="/ one-time"
                scarcityWarning="Once 50 are gone → becomes monthly subscription forever."
                features={[
                  "5 Permanent Arenas for life (true digital real estate) — rent them out for monthly or yearly fees and generate passive income",
                  "Everything in VIP Lifetime",
                  "Up to 30-day battles",
                  "All 6 battle modes (including Whale Buy & Bundler Deathmatch)",
                  "Fully customizable arenas (public/private, any promo)",
                  "Voice + webcam host powers",
                  "Force-invite guests",
                  "20× XP boost",
                  "Animated Fire Halo + Particle Trail badge",
                  "Physical titanium Founder plaque shipped",
                  "Eternal Top 1–50 rank",
                  "Exclusive GOD MODE tournaments & events"
                ]}
                onSelect={() => document.getElementById('payment')?.scrollIntoView({ behavior: 'smooth' })}
              />
            </div>
            
            <SecureLegacy />
           </PaymentSection>
        </div>

        <DonationSection />
      </div>
      
      </div>
    </WalletContextProvider>
  );
}
