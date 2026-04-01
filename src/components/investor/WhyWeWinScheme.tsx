'use client';

import React from 'react';

const moats = [
  {
    label: 'Trust',
    text: 'Earned through operational accountability, not marketing.',
  },
  {
    label: 'Data',
    text: 'Generated through execution, not observation.',
  },
  {
    label: 'Network',
    text: 'Every carrier makes every other carrier stronger.',
  },
];

export default function WhyWeWinScheme() {
  return (
    <div className="flex flex-col w-full text-white/75">
      {/* Paradox Intro */}
      <div className="text-base md:text-lg font-light leading-relaxed pb-8 border-b border-white/7">
        Supernova wins because it is solving a paradox that does not resolve from the outside.
      </div>

      {/* Execution Block */}
      <div className="py-6 px-7 border-l-2 border-supernova-teal bg-supernova-teal/6 border-b border-white/7">
        <div className="text-base md:text-lg leading-relaxed font-light">
          Software needs adoption. Operations need execution. Supernova skips adoption — it becomes the operation.{' '}
          <strong className="text-white font-medium">The carrier never installs anything. Supernova is already running.</strong>
        </div>
      </div>

      {/* Moats Section */}
      <div className="py-8 border-b border-white/7">
        <div className="text-xs tracking-[0.1em] uppercase text-white/60 mb-6 font-mono">
          The result is three things that compound and cannot be replicated from the outside
        </div>
        <div className="flex flex-col gap-5">
          {moats.map((moat, idx) => (
            <div key={idx} className="flex gap-5 items-baseline">
              <span className="font-mono text-sm font-semibold text-supernova-teal min-w-[70px] uppercase tracking-wider">
                {moat.label}
              </span>
              <span className="text-sm md:text-base font-light leading-snug text-white/75">
                {moat.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Transition Note */}
      <div className="py-8 border-b border-white/7">
        <div className="text-sm md:text-base font-light leading-relaxed text-white/75">
          These three things are not just what makes Supernova defensible today. They are exactly what AI
          needs to automate the trucking back office tomorrow — knowledge of how trucking actually behaves
          under pressure. That knowledge only exists inside a running operation.
        </div>
      </div>

      {/* Final Position Note */}
      <div className="py-8">
        <div className="text-base md:text-lg font-medium leading-relaxed text-white">
          That is not a feature. That is a <span className="text-supernova-teal font-semibold">structural position.</span><br />
          And structural positions, once held, are very difficult to displace.
        </div>
      </div>
    </div>
  );
}
