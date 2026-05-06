import { Hero } from '@/components/marketing/Hero';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({ path: '/' });

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container py-16 md:py-24">
        <h2 className="text-balance font-bold font-display text-3xl tracking-tight md:text-4xl">
          Bem-vindo à nova Óticas Queiroz.
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-muted">
          Estamos construindo um novo site. Em breve, mais novidades aqui.
        </p>
      </section>
    </>
  );
}
