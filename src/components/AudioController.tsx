import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import epicCyberAudio from '../assets/Create an epic cyber.mp3.wav';

export const AudioController = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Enable audio on first user interaction
  useEffect(() => {
    const enableAudio = async () => {
      if (audioRef.current && !userInteracted) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setUserInteracted(true);
        } catch (error) {
          // Still blocked, will need manual play
          console.log('Audio play on interaction:', error);
        }
      }
    };

    // Listen for any user interaction
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, enableAudio, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, enableAudio);
      });
    };
  }, [userInteracted]);

  // Auto-play on mount (may be blocked by browser)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      
      // Try to auto-play immediately
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setUserInteracted(true);
        })
        .catch((error) => {
          // Autoplay blocked - will enable on user interaction
          console.log('Audio autoplay blocked, will play on user interaction');
        });
    }
  }, []); // Run only once on mount

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setUserInteracted(true);
          })
          .catch((error) => {
            console.log('Audio play failed:', error);
            toast.error('Unable to play audio. Please check browser settings.');
          });
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? volume : 0;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={epicCyberAudio} loop preload="auto" />
      
      <motion.div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50"
      >
        <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-700 rounded-lg p-3 shadow-2xl">
          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              isExpanded ? 'bg-cyan-600/20 hover:bg-cyan-600/30' : 'bg-zinc-800 hover:bg-zinc-700'
            }`}
          >
            {isExpanded ? (
              <Volume2 className="w-5 h-5 text-cyan-400" />
            ) : (
              <Volume2 className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {/* Expanded Controls */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden space-y-3"
              >
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="w-full h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white" />
                  )}
                </button>

                {/* Volume Control */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={toggleMute}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                    <span className="text-xs text-gray-400">{Math.round(volume * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

