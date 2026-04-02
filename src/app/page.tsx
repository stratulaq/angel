import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import InvestorPortal from '@/components/investor/InvestorPortal';

export default function Home() {

  return (
    <div className="min-h-screen relative">
      <Navbar variant="investor" />
      <InvestorPortal />
      <Footer variant="investor" />
    </div >
  );
}
