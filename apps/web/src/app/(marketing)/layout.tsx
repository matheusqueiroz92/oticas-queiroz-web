import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { PromoBar } from '@/components/layout/PromoBar';
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PromoBar />
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
