import Link from 'next/link';

interface DeckCardProps {
  id: string;
  meta: string;
  title: string;
  description: string;
  downloadUrl: string;
  buttonText: string;
  isSecondary?: boolean;
}

export default function DeckCard({
  id,
  meta,
  title,
  description,
  downloadUrl,
  buttonText,
  isSecondary = false
}: DeckCardProps) {
  return (
    <div 
      className="deck-card bg-supernova-bg-main p-16 flex flex-col justify-between min-h-[400px] hover:bg-[rgba(52,211,153,0.02)] transition-colors duration-400 group" 
      id={id}
    >
      <div className="font-mono text-[10px] tracking-widest uppercase text-supernova-text-muted mb-8 group-hover:text-supernova-primary transition-colors duration-400">
        {meta}
      </div>
      <div className="card-content">
        <h3 className="font-condensed text-4xl font-black uppercase leading-none mb-4 group-hover:text-supernova-primary transition-colors duration-400">
          {title}
        </h3>
        <p className="text-supernova-text-muted text-base mb-12 max-w-[300px]">
          {description}
        </p>
        <Link 
          href={downloadUrl} 
          download 
          className={`flex items-center gap-4 py-5 px-8 no-underline font-mono text-[10px] font-medium uppercase tracking-widest w-fit transition-all duration-300 ${
            isSecondary 
              ? 'bg-transparent border border-supernova-grid-line text-supernova-text-main hover:border-supernova-primary hover:text-supernova-primary' 
              : 'bg-supernova-primary text-black hover:bg-green-400'
          }`}
        >
          <span>{buttonText}</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </Link>
      </div>
    </div>
  );
}
