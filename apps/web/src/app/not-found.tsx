import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-4">
      <div className="text-center">
        <p className="font-bold font-display text-6xl text-brand-primary-500">404</p>
        <h1 className="mt-4 font-bold font-display text-3xl">Página não encontrada</h1>
        <p className="mt-2 text-muted">A página que você procura não existe ou foi movida.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-lg bg-brand-primary-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-brand-primary-600 active:scale-[0.98]"
        >
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
