'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function InvestorPortal() {

    return (
        <div className="min-h-screen container mx-auto">
            <Navbar variant="main" />

            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-end px-6 md:px-12 py-20 md:py-32 border-b border-supernova-border relative">
                <div className="font-mono text-xs tracking-superwide text-supernova-teal uppercase mb-8">
                    Pre-Seed Investment Round · 2026
                </div>
                <h1 className="font-condensed text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-[900px] mb-12">
                    There are 500,000 OTR carriers in the U.S. who need a back office and can't build one.<br />
                    {/* <em className="not-italic text-supernova-teal">and can't build one.</em><br /> */}
                    <span className="text-supernova-teal">Supernova is building it for all of them.</span><br />
                    {/* <em className="not-italic text-supernova-teal">for all of them.</em> */}
                </h1>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 border-t border-supernova-border pt-8">
                    <p className="text-lg font-light text-supernova-mid leading-relaxed max-w-2xl">
                        Not a tool they adopt. Not a dispatcher they hire. <strong className="text-supernova-text font-medium">A software-powered operation that becomes their entire back office</strong> — from week one, at a fraction of the cost of building it themselves.
                    </p>
                    <div className="flex gap-3 items-center shrink-0">
                        <Link href="/SN_deck.pdf" className="font-mono text-xs tracking-tight bg-supernova-teal text-supernova-bg font-medium px-6 py-3 no-underline inline-flex items-center gap-2 hover:opacity-85 transition-opacity whitespace-nowrap">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M6 1v8M3 7l3 2 3-2M1 11h10" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            Download Full Deck
                        </Link>
                    </div>
                </div>
            </section>

            {/* NUMBERS */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-supernova-border ">
                <div className="p-6 md:p-10 border-r border-supernova-border">
                    <div className="font-mono text-xs tracking-superwide text-supernova-mid uppercase mb-4">Gross Transaction Volume</div>
                    <div className="font-condensed text-4xl md:text-5xl font-bold text-supernova-teal tracking-tighter leading-none mb-2">$2.7M</div>
                    <div className="text-xs text-supernova-mid">Apr 2025 – Feb 2026</div>
                </div>
                <div className="p-6 md:p-10 border-r border-supernova-border">
                    <div className="font-mono text-xs tracking-superwide text-supernova-mid uppercase mb-4">Revenue / Truck / Week</div>
                    <div className="font-condensed text-4xl md:text-5xl font-bold text-supernova-teal tracking-tighter leading-none mb-2">$235</div>
                    <div className="text-xs text-supernova-mid">Range $200–$270</div>
                </div>
                <div className="p-6 md:p-10 border-r border-supernova-border md:border-r-1">
                    <div className="font-mono text-xs tracking-superwide text-supernova-mid uppercase mb-4">Live Since</div>
                    <div className="font-condensed text-4xl md:text-5xl font-bold text-supernova-teal tracking-tighter leading-none mb-2">Apr '25</div>
                    <div className="text-xs text-supernova-mid">Revenue generating from day one</div>
                </div>
                <div className="p-6 md:p-10">
                    <div className="font-mono text-xs tracking-superwide text-supernova-mid uppercase mb-4">Pre-Seed Return Potential</div>
                    <div className="font-condensed text-4xl md:text-5xl font-bold text-supernova-teal tracking-tighter leading-none mb-2">14–32×</div>
                    <div className="text-xs text-supernova-mid">At $5M cap · Series A exit</div>
                </div>
            </div>

            {/* THESIS */}
            <section className="py-16 md:py-24 px-6 md:px-12 border-b border-supernova-border ">
                <div className="font-mono text-xs tracking-superwide text-supernova-teal uppercase mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-supernova-border">Why Supernova</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
                    <h2 className="font-condensed text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                        While others fight for adoption, <em className="not-italic text-supernova-teal">we're already inside.</em>
                    </h2>
                    <div className="flex flex-col">
                        <div className="py-7 border-b border-supernova-border grid grid-cols-[88px_1fr] gap-5 items-baseline first:border-t">
                            <span className="font-mono text-xs tracking-widest text-supernova-teal uppercase">Live</span>
                            <span className="text-supernova-mid leading-relaxed">
                                <strong className="text-supernova-text font-medium">$2.7M in gross transaction volume since April 2025.</strong> The operation is running. The bottleneck is capacity, not demand.
                            </span>
                        </div>
                        <div className="py-7 border-b border-supernova-border grid grid-cols-[88px_1fr] gap-5 items-baseline">
                            <span className="font-mono text-xs tracking-widest text-supernova-teal uppercase">Tech + Ops</span>
                            <span className="text-supernova-mid leading-relaxed">
                                <strong className="text-supernova-text font-medium">A tech company that operates like a service.</strong> Our team runs the back office — but every decision runs on software we built. The tech enables the people. The people generate the data. The data is the infrastructure AI will run on.
                            </span>
                        </div>
                        <div className="py-7 border-b border-supernova-border grid grid-cols-[88px_1fr] gap-5 items-baseline">
                            <span className="font-mono text-xs tracking-widest text-supernova-teal uppercase">Why We Win</span>
                            <span className="text-supernova-mid leading-relaxed">
                                <strong className="text-supernova-text font-medium">Every other player in trucking tech is on the outside.</strong> Building tools. Waiting for carriers to adopt. Supernova is present at the exact moment trucking happens — on every broker call, every load decision, every cash flow event. That position generates data no competitor can replicate. The moat isn't what we built. It's where we are.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUOTE */}
            <div className="py-16 md:py-24 px-6 md:px-12 border-b border-supernova-border items-center ">
                {/* <div className="font-condensed text-7xl md:text-[180px] font-black text-supernova-teal tracking-tighter leading-[0.9] opacity-15">90%</div> */}
                <div className="flex flex-col border-l-4 border-supernova-teal pl-6">
                    <p className="text-2xl md:text-4xl font-normal leading-tight italic mb-6 text-supernova-text">
                        "Dispatch is the gateway — whoever controls it today will own the carrier wallet tomorrow: billing, accounting, fuel, factoring, insurance."
                    </p>
                    <div className="font-mono text-sm text-supernova-teal tracking-wide">— Mihail Cernei, CEO & Co-Founder, Supernova</div>
                </div>
            </div>

            {/* RAISE */}
            <section className="py-16 md:py-24 px-6 md:px-12 border-b border-supernova-border " id="raise">
                <div className="font-mono text-xs tracking-superwide text-supernova-teal uppercase mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-supernova-border">The Raise</div>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-start">
                    <div>
                        <h2 className="font-condensed text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
                            Closing our<br /><em className="not-italic text-supernova-teal">pre-seed now.</em>
                        </h2>
                        <p className="text-lg text-supernova-mid leading-relaxed max-w-lg mb-10">
                            82 trucks needed to reach $1M ARR. Current rate: 2 trucks per week. This raise removes the only constraint — dispatcher capacity.
                        </p>
                        <div className="flex flex-col">
                            <div className="grid grid-cols-[120px_1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-4 py-4 border-b border-supernova-border first:border-t">
                                <span className="font-mono text-sm text-supernova-mid tracking-wide">2026 · Now</span>
                                <span className="font-medium">100 trucks · $1M ARR</span>
                                <span className="font-mono text-supernova-teal font-semibold">$500K</span>
                            </div>
                            <div className="grid grid-cols-[120px_1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-4 py-4 border-b border-supernova-border">
                                <span className="font-mono text-sm text-supernova-mid tracking-wide">2027 · Seed</span>
                                <span className="font-medium">250–350 trucks · $2.6–4.5M ARR</span>
                                <span className="font-mono text-supernova-teal font-semibold">$2M–$5M</span>
                            </div>
                            <div className="grid grid-cols-[120px_1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-4 py-4 border-b border-supernova-border">
                                <span className="font-mono text-sm text-supernova-mid tracking-wide">2028 · Series A</span>
                                <span className="font-medium">650–1,000+ trucks · $8–16M ARR</span>
                                <span className="font-mono text-supernova-teal font-semibold">$10M–$20M</span>
                            </div>
                            <div className="grid grid-cols-[120px_1fr_auto] md:grid-cols-[180px_1fr_auto] items-center gap-4 py-4 border-b border-supernova-border">
                                <span className="font-mono text-sm text-supernova-mid tracking-wide">Pre-seed return</span>
                                <span className="font-medium">At $5M cap · Series A exit</span>
                                <span className="font-mono text-supernova-amber font-semibold">14–32×</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-supernova-bg1 border border-supernova-border border-t-2 border-t-supernova-teal">
                        <div className="p-8 pb-6 border-b border-supernova-border">
                            <div className="font-mono text-xs tracking-superwide text-supernova-teal uppercase mb-3">Pre-Seed Round · Raising Now</div>
                            <div className="font-condensed text-6xl md:text-7xl font-bold text-supernova-teal tracking-tight leading-none mb-1.5">$500K</div>
                            <div className="font-mono text-sm text-supernova-mid tracking-tight">SAFE · $5M VALUATION CAP</div>
                        </div>
                        <div className="border-b border-supernova-border">
                            <div className="flex justify-between items-center px-8 py-3.5 border-b border-supernova-border last:border-b-0">
                                <span className="text-sm text-supernova-mid">Instrument</span>
                                <span className="font-mono font-medium">SAFE Note</span>
                            </div>
                            <div className="flex justify-between items-center px-8 py-3.5 border-b border-supernova-border last:border-b-0">
                                <span className="text-sm text-supernova-mid">Valuation Cap</span>
                                <span className="font-mono font-medium">$5M</span>
                            </div>
                            <div className="flex justify-between items-center px-8 py-3.5 border-b border-supernova-border last:border-b-0">
                                <span className="text-sm text-supernova-mid">Target Close</span>
                                <span className="font-mono font-medium">Q2 2026</span>
                            </div>
                            <div className="flex justify-between items-center px-8 py-3.5 border-b border-supernova-border last:border-b-0">
                                <span className="text-sm text-supernova-mid">Use of Funds</span>
                                <span className="font-mono font-medium">Dispatchers + Sales</span>
                            </div>
                            <div className="flex justify-between items-center px-8 py-3.5 border-b border-supernova-border last:border-b-0">
                                <span className="text-sm text-supernova-mid">Milestone</span>
                                <span className="font-mono font-medium text-supernova-teal">100 trucks · $1M ARR</span>
                            </div>
                            <div className="flex justify-between items-center px-8 py-3.5 border-b border-supernova-border last:border-b-0">
                                <span className="text-sm text-supernova-mid">Break-even</span>
                                <span className="font-mono font-medium text-supernova-teal">~65 trucks</span>
                            </div>
                            <div className="flex justify-between items-center px-8 py-3.5 border-b border-supernova-border last:border-b-0">
                                <span className="text-sm text-supernova-mid">Seed Round</span>
                                <span className="font-mono font-medium">$2M–$5M · Q1 2027</span>
                            </div>
                            <div className="flex justify-between items-center px-8 py-3.5 border-b border-supernova-border last:border-b-0">
                                <span className="text-sm text-supernova-mid">Pre-seed return</span>
                                <span className="font-mono font-medium text-supernova-amber">14–32× at Series A</span>
                            </div>
                        </div>
                        <div className="p-6 md:p-8">
                            <div className="font-mono text-xs tracking-superwide text-supernova-muted uppercase mb-3">Contact Founders</div>
                            <Link href="mailto:mihail@supernova.center" className="block text-supernova-text no-underline mb-1.5 transition-colors hover:text-supernova-teal">mihail@supernova.center</Link>
                            <Link href="mailto:robert@supernova.center" className="block text-supernova-text no-underline mb-1.5 transition-colors hover:text-supernova-teal">robert@supernova.center</Link>
                            <Link href="https://supernova.center" target="_blank" className="block text-supernova-text no-underline mb-1.5 transition-colors hover:text-supernova-teal">supernova.center</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="py-16 md:py-24 px-6 md:px-12 border-b border-supernova-border ">
                <div className="font-mono text-xs tracking-superwide text-supernova-teal uppercase mb-12 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-supernova-border">The Team</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-supernova-border">
                    <div className="bg-supernova-bg p-8 md:p-10 flex flex-col gap-4">
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
                                    <Link href="mailto:mihail@supernova.center" className="text-supernova-mid no-underline">mihail@supernova.center</Link>
                                </div>
                            </div>
                        </div>
                        <p className="text-supernova-mid leading-relaxed">
                            10+ years building freight platforms across US & Europe. Built <strong className="text-supernova-text font-medium">Qoobus — 40,000+ carriers & shippers onboarded.</strong> Raised capital, scaled multi-country operations in highly fragmented logistics markets. First-hand knowledge of carrier pain at large-scale U.S. & European trucking operations.
                        </p>
                    </div>
                    <div className="bg-supernova-bg p-8 md:p-10 flex flex-col gap-4">
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
                                    <Link href="mailto:robert@supernova.center" className="text-supernova-mid no-underline">robert@supernova.center</Link>
                                </div>
                            </div>
                        </div>
                        <p className="text-supernova-mid leading-relaxed">
                            20+ years scaling finance and operations across startups, PE-backed businesses, and listed corporations. <strong className="text-supernova-text font-medium">CFO at Eurowag & UTA</strong> — leading fleet card issuers in Europe. Brings direct experience in carrier economics, fleet financial infrastructure, and the payment and compliance layer Supernova is positioned to own.
                        </p>
                    </div>
                </div>
            </section >

            {/* FINAL CTA */}
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

            <Footer variant="investor" />
        </div >
    );
}
