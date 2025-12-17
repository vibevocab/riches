import React from 'react';
import { motion } from 'motion/react';
import { Button } from './button';
import { cn } from './utils';

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const CyberButton: React.FC<CyberButtonProps> = ({ 
  className, 
  variant = 'primary', 
  children, 
  ...props 
}) => {
  return (
    <Button
      className={cn(
        "relative group font-bold tracking-wider uppercase transition-all duration-300",
        variant === 'primary' && "bg-[#FF00FF] hover:bg-[#CC00CC] text-white border border-[#FF00FF] rounded-none skew-x-[-10deg]",
        variant === 'secondary' && "bg-transparent hover:bg-white/10 text-white border border-cyan-400 rounded-none skew-x-[-10deg]",
        className
      )}
      {...props}
    >
      <span className={cn("block skew-x-[10deg]", variant === 'primary' ? "" : "")}>
        {children}
      </span>
    </Button>
  );
};