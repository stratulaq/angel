import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import DeckCard from '@/components/investor/DeckCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar variant="main" />

      <main className="max-w-[1400px] mx-auto my-32 px-6 md:px-16">
        <div className="hero mb-40 max-w-[1000px]">
          <span className="font-mono text-xs tracking-superwide uppercase text-supernova-primary mb-6 block">
            Pre-Seed Investment Round · 2026
          </span>
          <h1 className="font-condensed font-black text-4xl md:text-6xl leading-wider uppercase tracking-tight mb-8">
            Igniting the next era of <span className="text-supernova-primary">galactic innovation.</span>
          </h1>
          <p className="text-lg text-supernova-text-muted max-w-xl font-light border-l border-supernova-primary pl-8 mt-8">
            Not a tool they adopt. Not a dispatcher they hire. A software-powered operation that
            becomes their entire back office — from week one, at a fraction of the cost of building it themselves.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-supernova-grid-line border border-supernova-grid-line">
          <DeckCard
            id="deck-1"
            meta="Asset [A] // Pitch Deck"
            title="Alpha Pitch Deck"
            description="Core strategy, technical breakthroughs, and market dominance projections."
            downloadUrl="/deck1.pdf"
            buttonText="Download Alpha Deck"
          />
          <DeckCard
            id="deck-2"
            meta="Asset [B] // Core Metrics"
            title="Venture Metrics"
            description="Financial projections, revenue velocity, and scaling milestones."
            downloadUrl="/deck2.pdf"
            buttonText="Download Metrics"
            isSecondary
          />
        </section>
      </main>

      <Footer variant="main" />
    </div>
  );
}
