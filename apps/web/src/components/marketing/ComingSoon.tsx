import { Reveal } from '@/components/shared/Reveal';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ComingSoonProps {
  title: string;
  description: string;
  backHref?: string;
  backLabel?: string;
}

export function ComingSoon({
  title,
  description,
  backHref = '/',
  backLabel = 'Voltar à página inicial',
}: ComingSoonProps) {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="container-editorial max-w-xl">
        <Reveal>
          <p className="mb-3 text-2xs text-brand-accent-500 uppercase tracking-[0.18em]">
            Em breve
          </p>
          <h1
            className="font-display text-4xl text-brand-primary-900 leading-tight tracking-tighter md:text-5xl"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
          >
            {title}
          </h1>
          <p className="mt-6 text-pretty text-fg-muted md:text-lg">{description}</p>
          <Link
            href={backHref}
            className="mt-10 inline-flex items-center gap-2 font-medium text-brand-primary-700 text-sm transition hover:text-brand-primary-900"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {backLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
