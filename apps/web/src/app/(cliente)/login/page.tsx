import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
  title: 'Entrar',
  path: '/login',
  noIndex: true,
});

export default function LoginPage() {
  return (
    <section className="container max-w-md py-16">
      <h1 className="font-bold font-display text-3xl">Entrar</h1>
      <p className="mt-2 text-muted">Em breve: login passwordless via WhatsApp.</p>
    </section>
  );
}
