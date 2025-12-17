import React from 'react';
import { motion } from 'motion/react';
import { cn } from './utils';

interface GlitchTextProps {
  text: string;
  className?: string;
  hover?: boolean;
}

export const GlitchText: React.FC<GlitchTextProps> = ({ text, className, hover = true }) => {
  return (
    <div className={cn("relative inline-block group", className)}>
      <span className="relative z-10">{text}</span>
      <span className={cn(
        "absolute top-0 left-0 -z-10 w-full h-full text-[#FF00FF] opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] transition-all duration-100",
        !hover && "animate-pulse opacity-70 translate-x-[2px]"
      )}>
        {text}
      </span>
      <span className={cn(
        "absolute top-0 left-0 -z-10 w-full h-full text-cyan-400 opacity-0 group-hover:opacity-70 group-hover:-translate-x-[2px] transition-all duration-100",
        !hover && "animate-pulse opacity-70 -translate-x-[2px]"
      )}>
        {text}
      </span>
    </div>
  );
};