'use client';

import React from 'react';

const rows = [
  { left: 'Dispatcher makes a call', right: 'Decision captured + scored' },
  { left: 'Load gets booked', right: 'Lane data recorded' },
  { left: 'Compliance handled', right: 'Carrier pattern learned' },
  { left: 'Invoice sent', right: 'Cash flow intelligence built' },
  { left: 'Carrier scales', right: 'Cost per carrier drops' },
];

const automationChain = [
  'Workflow proven at revenue',
  'Automation layer deployed',
  'Cost per carrier drops',
  'Margin expands without headcount',
];

export default function ServiceToSoftwareScheme() {
  return (
    <div className="flex flex-col w-full">
      {/* Header Row */}
      <div className="grid grid-cols-[1fr_28px_1fr] gap-0 mb-0">
        <div className="text-xs tracking-wide uppercase text-white/60 py-3 px-4 bg-white/3 text-center border-b border-white/5 font-semibold">
          What the carrier sees
        </div>
        <div className="border-b border-white/5"></div>
        <div className="text-xs tracking-wide uppercase text-supernova-teal py-3 px-4 bg-supernova-teal/8 text-center border-b border-white/5 font-semibold">
          What is actually being built
        </div>
      </div>

      {/* Logic Rows */}
      <div className="flex flex-col">
        {rows.map((row, idx) => {
          const isLast = idx === rows.length - 1;
          return (
            <div
              key={idx}
              className="grid grid-cols-[1fr_28px_1fr] items-center border-b border-white/5"
            >
              <div className={`py-3 px-4 text-sm ${isLast ? 'text-white/75' : 'text-white/60'}`}>
                {row.left}
              </div>
              <div className="text-center text-supernova-teal/60 text-sm">→</div>
              <div className={`py-3 px-4 text-sm ${isLast ? 'text-supernova-teal font-medium' : 'text-white/75'}`}>
                {row.right}
              </div>
            </div>
          );
        })}
      </div>

      {/* Automation Chain */}
      <div className="mt-6 flex flex-col gap-0 border-t border-white/5">
        {automationChain.map((step, idx) => {
          const isLast = idx === automationChain.length - 1;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 py-2 border-b border-white/3"
            >
              <span className="text-supernova-teal/60 text-xs">↓</span>
              <span className={`text-sm tracking-tight ${isLast ? 'text-supernova-teal font-semibold' : 'text-white/75'}`}>
                {step}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom Bridge Note */}
      <div className="mt-8 p-4 border border-supernova-teal/20 bg-supernova-teal/5">
        <div className="text-sm text-white/75 leading-relaxed">
          The service is the distribution. <strong className="text-white font-medium">The software is the business.</strong>
        </div>
      </div>
    </div>
  );
}
