import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  variant?: 'main' | 'investor';
}

export default function Navbar({ variant = 'main' }: NavbarProps) {
  if (variant === 'investor') {
    return (
      <header className="fixed top-0 inset-x-0 z-50 justify-between items-center py-4 px-2 md:px-12 bg-black/25 backdrop-blur-lg">
        <nav className="flex justify-between items-center container mx-auto">
          <Link href="https://supernova.center">
            <Image
              src="/supernova_full_logo.png"
              alt="SUPERNOVA Logo"
              width={160}
              height={42}
              className="h-[36px] md:h-[42px] w-auto brightness-125"
            />
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm tracking-wider hidden md:flex items-center font-mono text-supernova-text-muted "> Investor relations | Confidential</span>
            <Link
              href="https://angel.supernova.center/SN_deck.pdf"
              target="_blank"
              className="text-sm tracking-wider bg-supernova-teal text-black font-semibold px-4 py-1 md:px-6 md:py-3 no-underline gap-2 flex items-center transition-opacity hover:opacity-85"
            >
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                <path d="M6 1v8M3 7l3 2 3-2M1 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              View investor deck
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="flex justify-between items-center py-8 px-6 md:px-12 container mx-auto border-b border-supernova-grid-line">
      <div className="logo">
        <Link href="https://supernova.center">
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
        <Link href="mailto:mihail@supernova.center" className="transition-colors duration-300 hover:text-supernova-primary">mihail@supernova.center</Link>
        {/* <Link href="#confidential" className="transition-colors duration-300 hover:text-supernova-primary">Protocol [V.4]</Link> */}
      </nav>
    </header>
  );
}
