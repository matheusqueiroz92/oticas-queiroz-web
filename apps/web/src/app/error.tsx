'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
  }, [error]);

  return (
    <main className="flex min-h-dvh items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-bold font-display text-3xl">Algo deu errado</h1>
        <p className="mt-2 text-muted">
          Tivemos um problema ao carregar esta página. Você pode tentar novamente.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center rounded-lg bg-brand-primary-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-brand-primary-600 active:scale-[0.98]"
        >
          Tentar novamente
        </button>
      </div>
    </main>
  );
}
