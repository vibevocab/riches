import React from 'react';
import { motion } from 'motion/react';
import { cn } from './utils';

interface ElectricBorderProps {
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ElectricBorder: React.FC<ElectricBorderProps> = ({
  color = '#00FFFF',
  speed = 1,
  chaos = 0.5,
  thickness = 2,
  className,
  style,
  children
}) => {
  return (
    <div className={cn("relative overflow-hidden", className)} style={style}>
       <div 
         className="absolute inset-0 z-0 pointer-events-none"
         style={{
           boxShadow: `0 0 10px ${color}, inset 0 0 10px ${color}`,
           opacity: 0.5
         }}
       />
       <motion.div
         className="absolute inset-0 z-0 pointer-events-none border-2 border-transparent"
         style={{ borderColor: color }}
         animate={{ opacity: [0.5, 1, 0.5] }}
         transition={{ duration: 1 / speed, repeat: Infinity }}
       />
       <div className="relative z-10">
         {children}
       </div>
    </div>
  );
};