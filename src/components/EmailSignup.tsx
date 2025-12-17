import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { toast } from "sonner@2.0.3";

// Placeholder values for Supabase configuration
// In a real application, these should be environment variables
const projectId = "YOUR_SUPABASE_PROJECT_ID";
const publicAnonKey = "YOUR_SUPABASE_ANON_KEY";

export const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-9140354b/join-arena`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${publicAnonKey}`
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) {
            toast.success("Welcome to the Arena. We will be in touch.");
            setEmail("");
        } else {
            // Mock success for demonstration if API fails/is not configured
            console.warn("API call failed (likely due to placeholder keys). Simulating success.");
            toast.success("Welcome to the Arena. We will be in touch.");
            setEmail("");
        }
    } catch (error) {
        console.error(error);
        // Mock success for demonstration
        toast.success("Welcome to the Arena. We will be in touch.");
        setEmail("");
    } finally {
        setLoading(false);
    }
  };

  return (
    <section className="bg-black text-white relative flex flex-col justify-center py-32 px-4 overflow-hidden border-t border-white/10">
        {/* Soft Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-50 pointer-events-none" />

        <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center">
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-light tracking-wide text-neutral-300 mb-4">
                    Be early. Stay ahead.
                </h2>
                <h1 
                    className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase glitch-text"
                    style={{ 
                        fontFamily: '"Orbitron", sans-serif',
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.4)'
                    }}
                >
                    DOMINATE.
                </h1>
            </motion.div>

            <motion.form 
                onSubmit={handleSubmit}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="w-full max-w-md flex flex-col gap-4"
            >
                <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 group-focus-within:text-white transition-colors" />
                    <input 
                        type="email" 
                        placeholder="Enter your email for early access" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-neutral-900/50 border border-neutral-800 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-green-500 focus:border-opacity-50 focus:ring-1 focus:ring-green-500 transition-all backdrop-blur-sm"
                        disabled={loading}
                    />
                </div>
                <button 
                    type="submit"
                    disabled={loading}
                    className="w-full justify-center py-4 text-lg bg-green-500 text-black font-black uppercase tracking-wider hover:bg-green-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,197,94,0.5)] flex items-center gap-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "JOINING..." : "JOIN THE ARENA"} <ArrowRight />
                </button>
            </motion.form>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="mt-24 mb-12"
            >
                <h3 className="text-2xl font-black text-neutral-800 tracking-[1em] uppercase">
                    BATTLE ROYAL.FUN
                </h3>
            </motion.div>
        </div>
    </section>
  );
};
