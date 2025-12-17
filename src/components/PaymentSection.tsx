import React from 'react';
import { Scarcity } from './Scarcity';
import { OwnershipProtocol } from './OwnershipProtocol';
import { DisclaimerSection } from './DisclaimerSection';

export const PaymentSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Scarcity />
      <OwnershipProtocol />

      <div className="max-w-4xl mx-auto mt-24 mb-12 text-center relative z-10 px-4">
        <h2 className="text-5xl md:text-7xl font-black font-orbitron text-white italic tracking-tighter leading-[0.85] mb-8">
            THIS IS<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">JUST THE</span><br/>
            BEGINNING.
        </h2>
        <p className="text-2xl md:text-3xl text-gray-400 font-serif italic mb-6">
            There is much more to come.
        </p>
        <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-cyan-500 animate-pulse">
            Founding members don’t just join — they own a place in crypto history.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 mb-24">
        {children}
      </div>

      <DisclaimerSection />
    </>
  );
};
