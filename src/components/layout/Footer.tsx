import Link from 'next/link';

interface FooterProps {
  variant?: 'main' | 'investor';
}

export default function Footer({ variant = 'main' }: FooterProps) {
  if (variant === 'investor') {
    return (
      <div className="container mx-auto">
        <footer className="py-10 md:py-8 flex flex-col md:flex-row justify-between items-center gap-5 border-t border-supernova-border">
          <div className="font-mono text-sm text-supernova-mid uppercase">© 2026 Supernova Log-Tech · Confidential</div>
          <div className=" flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <Link href="mailto:mihail@supernova.center" className="font-mono text-sm text-supernova-mid no-underline hover:text-supernova-teal transition-colors">
              mihail@supernova.center
            </Link>
            <Link href="https://supernova.center" target="_blank" className="font-mono text-sm text-supernova-mid no-underline hover:text-supernova-teal transition-colors">
              supernova.center
            </Link>
            <Link href="https://superload.app" target="_blank" className="font-mono text-sm text-supernova-mid no-underline hover:text-supernova-teal transition-colors">
              superload.app
            </Link>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <footer className="p-16 border-t border-supernova-grid-line flex justify-between items-end max-w-[1600px] mx-auto md:p-8 md:flex-col md:items-center md:gap-4 md:text-center">
      <p className="font-mono text-[10px] tracking-widest text-supernova-text-muted uppercase">
        © 2024 SUPERNOVA TECHNOLOGIES. ALL RIGHTS RESERVED.
      </p>
      <p className="font-mono text-[10px] tracking-widest text-supernova-text-muted uppercase">
        <span className="text-red-500">CONFIDENTIAL & PROPRIETARY</span> // ST-IP-PORTAL-01
      </p>
    </footer>
  );
}
