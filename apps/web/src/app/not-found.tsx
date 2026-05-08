import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-bg px-4">
      <div className="text-center">
        <p
          className="font-display text-7xl text-brand-accent-500 leading-none"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
        >
          <em className="font-display italic">404</em>
        </p>
        <h1
          className="mt-6 font-display text-3xl text-brand-primary-900 tracking-tighter md:text-4xl"
          style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50' }}
        >
          Página não encontrada.
        </h1>
        <p className="mt-3 max-w-md text-fg-muted">
          O endereço pode ter sido movido ou nunca existiu.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-full bg-brand-primary-700 px-6 py-3 font-medium text-cream-100 text-sm transition hover:bg-brand-primary-800 active:scale-[0.98]"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
