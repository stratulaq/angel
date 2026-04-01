'use client';

import Link from 'next/link';
import TractionChart from './TractionChart';

export default function InvestorPortal() {

  return (
    <div className="container mx-auto">

      <section className="min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center px-6 md:px-16 pt-[140px] pb-24">
        {/* LEFT */}
        <div>
          <div className="text-sm text-supernova-teal tracking-widest uppercase mb-8 flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-supernova-teal animate-pulse" />
            Pre-seed investment round · 2026
          </div>
          <h1 className="font-condensed text-[clamp(48px,7vw,96px)] font-bold leading-[0.96] tracking-tight mb-12">
            $500K to unlock<br />
            <em className="not-italic text-supernova-teal">$1M ARR</em><br />
            <span className="text-white/50">in 2026.</span>
          </h1>
          <p className=" text-xl font-light text-white/60 leading-relaxed border-l-2 border-supernova-teal pl-7 mb-14">
            500,000 U.S. OTR carriers operate without a real back office. <strong className="text-white font-medium">Supernova is building it for them</strong> — as a software-powered operation from day one.<br /><br />
            We are already live, generating revenue, and onboarding carriers. The bottleneck is not demand. It is dispatcher capacity. This round removes it.
          </p>
          <div className="flex flex-wrap gap-5 items-center">
            <Link
              href="https://angel.supernova.center/SN_deck.pdf"
              target="_blank"
              className="text-sm tracking-wider bg-supernova-teal text-black font-semibold px-7 py-3.5 no-underline flex items-center gap-2.5 transition-opacity hover:opacity-85"
            >
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v8M3 7l3 2 3-2M1 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              View investor deck
            </Link>

          </div>
        </div>

        {/* RIGHT — traction card */}
        <div className="bg-[#0F0F0F] border border-white/7 border-t-2 border-t-supernova-teal flex flex-col">
          {/* Header */}
          <div className="px-7 py-5 border-b border-white/7">
            <div className="text-xs tracking-[0.14em] text-supernova-teal uppercase mb-1">Traction</div>
            <div className=" text-white/75 tracking-tight">Apr 2025 → now</div>
          </div>

          {/* MRR Chart */}
          <div className="px-7 py-4.5 border-b border-white/7">
            <div className="text-xs uppercase text-white/60 mb-2.5">Monthly recurring revenue</div>
            <TractionChart />
            <div className="flex justify-between mt-2 font-mono text-[10px] md:text-xs ">
              <div className="text-white/40">Apr '25</div>
              <div className="text-supernova-teal font-semibold">Mar '26</div>
              <div className="text-supernova-teal">Apr '26 ↑</div>
              <div className="text-supernova-amber">+ pipeline →</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="px-7 py-4 border-b border-white/7 bg-supernova-teal/3">
            <div className="flex justify-between items-baseline mb-2.5">
              <div className="text-xs text-white/60 tracking-tight">Progress to 100 truck milestone</div>
              <div className="text-sm text-supernova-teal font-semibold">40 / 100</div>
            </div>
            <div className="h-1.5 bg-white/5 relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full bg-supernova-teal w-[40%]" />
              <div className="absolute left-[40%] top-0 h-full bg-supernova-amber/55 w-[20%]" />
            </div>
            <div className="flex justify-between mt-2 text-xs tracking-tight">
              <div className="text-supernova-teal">40% onboarded</div>
              <div className="text-supernova-amber">+20% in pipeline</div>
              <div className="text-white/50">100 = $1M ARR</div>
            </div>
            <div className="text-sm text-white/75 mt-2 leading-relaxed italic">
              On track — accounting for expected 12–15% churn, we are tracking to deliver 100 trucks within this raise.
            </div>
          </div>

          {/* ACT 1 */}
          <div className="px-7 py-4 border-b border-white/7">
            <div className="text-xs tracking-[0.1em] text-white/50 uppercase mb-2">Apr 2025 – Mar 2026 · 12 months</div>
            <div className="flex justify-between items-end gap-3">
              <div className="text-white/75 font-light leading-relaxed">
                18 trucks · steady ops · proof of model<br />
                <span className="text-sm text-white/60 font-mono tracking-tight">$2.3M GTV · $70.2K revenue</span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs text-white/50 mb-0.5">avg MRR</div>
                <div className="font-condensed text-[26px] font-bold text-white/75 tracking-tight">~$7K</div>
              </div>
            </div>
          </div>

          {/* ACT 2 — April inflection */}
          <div className="px-7 py-4 border-b border-white/7 bg-supernova-teal/4">
            <div className="text-xs tracking-[0.1em] text-supernova-teal uppercase mb-2">April 2026 · inflection point</div>
            <div className="flex justify-between items-end gap-3">
              <div className="text-white/80 font-light leading-relaxed">
                22 trucks onboarded · total 40 trucks<br />
                <span className="text-sm text-white/60 font-mono tracking-tight">MRR running at $29–35K</span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs text-white/50 mb-0.5">projected ARR</div>
                <div className="font-condensed text-[26px] font-bold text-supernova-teal tracking-tight">$350–400K</div>
              </div>
            </div>
          </div>

          {/* ACT 3 — pipeline */}
          <div className="px-7 py-4 border-b border-white/7 bg-supernova-amber/4">
            <div className="text-xs tracking-[0.1em] text-supernova-amber uppercase mb-2">Next · blocked by dispatcher capacity</div>
            <div className="flex justify-between items-end gap-3">
              <div className="text-white/80 font-light leading-relaxed">
                20+ trucks waiting to onboard<br />
                <span className="text-sm text-white/60 font-mono tracking-tight">Demand confirmed. Hiring now.</span>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs text-white/30 mb-0.5 uppercase tracking-wide">in pipeline</div>
                <div className="font-condensed text-[26px] font-bold text-supernova-amber tracking-tight">20+</div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="px-7 py-4">
            <div className="text-sm text-white/75 leading-relaxed font-light">
              The bottleneck is not demand, not product, not market. <strong className="text-white font-medium">This raise removes it.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* NOT A SERVICE COMPANY */}
      <section className=" py-24 px-6 md:px-16">
        <div className="text-sm text-supernova-teal tracking-widest uppercase mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/7">
          Not a service company
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="font-condensed text-[clamp(36px,4vw,56px)] font-bold leading-[1.05] tracking-tight mb-5">
              Service on the surface.<br /><em className="font-condensed text-supernova-teal">Software underneath.</em>
            </h2>
            <p className="text-lg text-white/75 font-medium mb-3 leading-snug">The carrier sees an operation. We are building a platform.</p>
            <div className="text-lg font-light text-white/60 leading-relaxed">
              To the carrier, Supernova looks like a back office service.<br /><br />
              What Supernova builds underneath is proprietary software that runs the workflow itself.<br /><br />
              That distinction matters. Service businesses scale with headcount. Supernova uses service delivery to install software into the operation, capture the workflow, and build the infrastructure layer underneath it.<br /><br />
              This is not a traditional service company. It is a software company using service as its wedge.
            </div>
          </div>
          <div className="flex flex-col border-t border-white/7">
            {[
              { tag: 'What the carrier sees', head: 'A back office that works.', body: 'Dispatch, compliance, billing, and rate negotiation handled from day one.' },
              { tag: 'What is actually being built', head: 'Proprietary software behind the workflow.', body: 'Every operational step runs through systems we build and own, turning service delivery into software, data, and decision infrastructure.' },
              { tag: 'Why this matters', head: 'Software economics beneath service revenue.', body: 'The operation generates revenue today, while the software captures the workflow, intelligence, and automation layer that create long-term enterprise value.' }
            ].map((row, idx) => (
              <div key={idx} className="py-8 border-b border-white/7">
                <div className="text-xs text-supernova-teal tracking-widest uppercase mb-2.5">{row.tag}</div>
                <div className="text-lg font-semibold text-white/85 mb-2.5 leading-tight">{row.head}</div>
                <div className=" font-light text-white/75 leading-relaxed">{row.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY WE WIN */}
      <section className=" py-24 px-6 md:px-16">
        <div className="text-sm text-supernova-teal tracking-widest uppercase mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/7">
          Why we win
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="font-condensed text-[clamp(36px,4vw,56px)] font-bold leading-[1.1] tracking-tight mb-8">
              While others wait for adoption.<br /><em className="italic text-supernova-teal">Supernova is already at the Epicenter.</em>
            </h2>
            <div className="text-lg font-light text-white/60 leading-relaxed">
              Most trucking software is built outside the operation and depends on carriers changing behavior to adopt it.<br /><br />
              Supernova is the operation. It is present at the exact moment trucking happens — on every broker call, every load decision, every cash flow event that makes or breaks a carrier's week.<br /><br />
              That gives Supernova something software-first players do not have: direct operational visibility, proprietary execution data, and the ability to automate from within the workflow instead of selling into it from the outside.<br /><br />
              This advantage compounds with every load handled.
            </div>
          </div>
          <div className="flex flex-col border-t border-white/7">
            {[
              { n: '01', t: '<strong>We operate at the point of execution.</strong> Not after the fact. In the live workflow where dispatch decisions, broker interactions, and carrier outcomes actually happen.' },
              { n: '02', t: '<strong>Every load creates proprietary operating data.</strong> Pricing behavior, broker responsiveness, carrier reliability, exception patterns, and cash flow timing — generated through execution, not assumptions.' },
              { n: '03', t: '<strong>Execution data becomes automation advantage.</strong> Because we run the workflow ourselves, we see what should be standardized, assisted, and automated first — and we can ship against real operational truth.' },
              { n: '04', t: '<strong>The moat compounds with scale.</strong> More carriers and more loads improve the workflow, deepen the data layer, and increase switching friction. Competitors can build software, but they cannot recreate execution history.' }
            ].map((pt, idx) => (
              <div key={idx} className="grid grid-cols-[32px_1fr] gap-4 py-6 border-b border-white/7">
                <span className="font-mono text-sm text-white/50 pt-1">{pt.n}</span>
                <span className=" text-white/75 leading-relaxed" dangerouslySetInnerHTML={{ __html: pt.t }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE RAISE */}
      <section className=" py-24 px-6 md:px-16" id="raise">
        <div className="text-sm text-supernova-teal tracking-widest uppercase mb-12 flex items-center gap-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-white/7">
          The raise
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center">
          <div>
            <h2 className="font-condensed text-[clamp(36px,4vw,56px)] font-bold leading-[1.05] tracking-tight mb-5">
              Closing our<br /><em className="italic text-supernova-teal">pre-seed now.</em>
            </h2>
            <p className="text-lg font-light text-white/60 leading-relaxed mb-12">
              82 trucks needed to reach $1M ARR. Current acquisition rate: 2 trucks per week. The only constraint is dispatcher capacity — not demand, not product, not market. This raise removes it.
            </p>
            <div className="flex flex-col border-t border-white/7">
              {[
                { period: '2026 · Now', ms: '100 trucks · $1M ARR', ex: 'SAFE · $5M valuation cap. Capital deployed into dispatcher hiring and sales ops. Break-even at ~65 trucks. This milestone proves the unit model and unlocks the Seed round.', val: '$500K' },
                { period: '2027 · Seed', ms: '250–350 trucks · $2.6–4.5M ARR', ex: 'Priced round targeting Q1 2027. Scales the dispatcher pool and launches the full back-office stack — compliance, ELD, billing, after-hours. AI Co-Worker ① enters the operation.', val: '$2M–$5M' },
                { period: '2028 · Series A', ms: '650–1,000+ trucks · $8–16M ARR', ex: 'Full back-office stack at scale. AI Co-Worker ② takes over execution. Human team manages exceptions. Cost structure flattens as revenue compounds. The infrastructure is fully autonomous.', val: '$10M–$20M' },
                { period: 'Pre-seed return', ms: 'At $5M cap · Series A exit', ex: 'At 7–10× revenue on a $70M–$160M exit. Pre-seed investors entering at $5M cap achieve 14–32× return. The $500K today is the earliest position in the cap table.', val: '14–32×', amber: true }
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[148px_1fr_auto] gap-7 py-8 border-b border-white/7  items-start">
                  <span className="font-mono text-xs text-white/50 tracking-widest uppercase">{row.period}</span>
                  <div>
                    <div className="text-lg font-semibold text-white mb-2 leading-tight">{row.ms}</div>
                    <div className=" font-light text-white/60 leading-relaxed">{row.ex}</div>
                  </div>
                  <span className={`font-mono text-lg font-bold text-right pt-1 ${row.amber ? 'text-supernova-amber' : 'text-supernova-teal'}`}>{row.val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0F0F0F] border border-white/7 border-t-2 border-t-supernova-teal flex flex-col">
            <div className="p-8 pb-6 border-b border-white/7">
              <div className="text-sm text-supernova-teal tracking-widest uppercase mb-2">Pre-seed round · Raising now</div>
              <div className="font-condensed text-[72px] font-bold text-supernova-teal leading-none tracking-tight mb-2">$500K</div>
              <div className="text-sm text-white/50 tracking-widest uppercase">SAFE · $5M valuation cap</div>
            </div>
            {[
              { l: 'Instrument', v: 'SAFE note' },
              { l: 'Valuation cap', v: '$5M' },
              { l: 'Target close', v: 'Q2 2026' },
              { l: 'Use of funds', v: 'Dispatchers + sales' },
              { l: 'Milestone', v: '100 trucks · $1M ARR', t: true },
              { l: 'Break-even', v: '~65 trucks', t: true },
              { l: 'Seed round', v: '$2M–$5M · Q1 2027' },
              { l: 'Pre-seed return', v: '14–32× at Series A', a: true }
            ].map((row, idx) => (
              <div key={idx} className="flex justify-between items-center px-8 py-3.5 border-b border-white/7">
                <span className="text-sm text-white/60 tracking-tight">{row.l}</span>
                <span className={`font-mono  font-medium ${row.t ? 'text-supernova-teal' : row.a ? 'text-supernova-amber' : 'text-white'}`}>{row.v}</span>
              </div>
            ))}
            <div className="p-8 pt-6">
              <div className="text-sm text-white/50 tracking-[0.08em] uppercase mb-3.5">Contact the founders</div>
              <Link href="mailto:mihail@supernova.center" className="block text-white no-underline mb-2 transition-colors hover:text-supernova-teal">mihail@supernova.center</Link>
              <Link href="mailto:robert@supernova.center" className="block text-white no-underline mb-2 transition-colors hover:text-supernova-teal">robert@supernova.center</Link>
              <Link href="https://supernova.center" target="_blank" className="block text-white no-underline transition-colors hover:text-supernova-teal">supernova.center</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-supernova-border ">
        <div className="font-mono text-xs tracking-superwide text-supernova-teal uppercase mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-supernova-border">The Team</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
          <div className="bg-supernova-bg/50 p-8 md:p-10 flex flex-col gap-4">
            <div className="flex gap-6">
              <img
                src="/mihail.png"
                className="w-full h-full object-cover"
                style={{
                  maskImage: "url('/mask.svg')",
                  WebkitMaskImage: "url('/mask.svg')",
                  maskSize: "cover",
                  WebkitMaskSize: "cover",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  height: "120px",
                  width: "120px",
                }}
              />
              <div className="flex flex-col gap-1">
                <div className="font-condensed text-3xl font-bold mb-1">Mihail Cernei</div>
                <div className="font-mono text-sm text-supernova-teal uppercase mb-5">CEO & Co-Founder</div>
                <div className="text-xs text-supernova-muted mb-5 pb-5 border-b border-supernova-border">
                  <Link href="mailto:mihail@supernova.center" className="text-white/75 no-underline">mihail@supernova.center</Link>
                </div>
              </div>
            </div>
            <p className="text-white/75 leading-relaxed">
              10+ years building freight platforms across US & Europe. Built <strong className="text-white font-medium">Qoobus — 40,000+ carriers & shippers onboarded.</strong> Raised institutional capital, scaled multi-country operations in highly fragmented logistics markets. Has watched thousands of carriers collapse under back-office weight. <br /> Supernova is built on that pattern recognition — not theory.
            </p>
          </div>
          <div className="bg-supernova-bg/50 p-8 md:p-10 flex flex-col gap-4">
            <div className="flex gap-6">
              <img
                src="/robert.jpg"
                className="w-full h-full object-cover"
                style={{
                  maskImage: "url('/mask.svg')",
                  WebkitMaskImage: "url('/mask.svg')",
                  maskSize: "cover",
                  WebkitMaskSize: "cover",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  height: "120px",
                  width: "120px",
                }}
              />
              <div className="flex flex-col gap-1">
                <div className="font-condensed text-3xl font-bold mb-1">Robert Nürnberger</div>
                <div className="font-mono text-sm text-supernova-teal uppercase mb-5">CFO & Co-Founder</div>
                <div className="text-xs text-supernova-muted mb-5 pb-5 border-b border-supernova-border">
                  <Link href="mailto:robert@supernova.center" className="text-white/75 no-underline">robert@supernova.center</Link>
                </div>
              </div>
            </div>
            <p className="text-white/75 leading-relaxed">
              20+ years scaling finance and operations across startups, PE-backed businesses, and listed corporations.
              <strong className="text-supernova-text font-medium">CFO at Eurowag and UTA</strong>
              — leading fleet card issuers in Europe managing hundreds of thousands of commercial vehicles. Brings the financial infrastructure discipline that turns an operations business into a platform business.
            </p>
          </div>
        </div>
      </section >

      {/* CTA */}
      < div className="bg-supernova-teal py-16 md:py-20 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-10 " >
        <div className="text-center md:text-left">
          <h2 className="font-condensed text-4xl md:text-5xl font-bold text-supernova-bg tracking-tighter leading-none mb-3">
            We are closing<br />our $500K pre-seed now.
          </h2>
          <p className="text-lg text-supernova-bg">Download the full deck or reach out directly to the founders.</p>
        </div>
        <div className="flex gap-3 items-center shrink-0">
          <Link href="/SN_deck.pdf" className="font-mono text-[11px] tracking-tight bg-[#0A0A0A] text-supernova-teal font-medium px-7 py-3.5 no-underline inline-flex items-center gap-2 hover:opacity-85 transition-opacity whitespace-nowrap">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v8M3 7l3 2 3-2M1 11h10" stroke="#00C896" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Download Full Deck
          </Link>
        </div>
      </div>
    </div>
  );
}
