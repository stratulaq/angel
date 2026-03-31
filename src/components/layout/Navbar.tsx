import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  variant?: 'main' | 'investor';
}

export default function Navbar({ variant = 'main' }: NavbarProps) {
  if (variant === 'investor') {
    return (
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-12 h-14 bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-b border-supernova-border">
        <div className="flex items-baseline gap-2">
          <Link href="/" className="font-condensed text-base font-bold tracking-wide text-supernova-teal no-underline">
            SUPERNOVA
          </Link>
          <span className="font-mono text-[9px] text-supernova-muted tracking-superwide">LOG-TECH</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="font-mono text-xs tracking-wide bg-supernova-teal text-supernova-bg font-medium px-4 py-1.5 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-supernova-bg animate-pulse"></div>
            Pre-Seed · Raising Now
          </div>
          <button
            onClick={() => window.print()}
            className="font-mono text-xs tracking-tight text-supernova-mid no-underline border border-supernova-border px-3.5 py-1.5 hover:text-supernova-teal hover:border-supernova-teal transition-colors cursor-pointer"
          >
            Download Deck ↓
          </button>
        </div>
      </nav>
    );
  }

  return (
    <header className="flex justify-between items-center py-8 px-6 md:px-16 max-w-[1600px] mx-auto border-b border-supernova-grid-line">
      <div className="logo">
        <Link href="/">
          <Image
            src="/supernova_full_logo.png"
            alt="SUPERNOVA Logo"
            width={160}
            height={42}
            className="h-[42px] w-auto brightness-125"
          />
        </Link>
      </div>
      <nav className="font-mono text-xs tracking-superwide uppercase text-supernova-text-muted flex gap-8">
        <Link href="#relations" className="transition-colors duration-300 hover:text-supernova-primary">Partner Relations</Link>
        <Link href="#confidential" className="transition-colors duration-300 hover:text-supernova-primary">Protocol [V.4]</Link>
      </nav>
    </header>
  );
}
