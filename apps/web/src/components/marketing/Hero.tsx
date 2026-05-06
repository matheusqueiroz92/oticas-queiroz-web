import { siteConfig } from '@/config/site';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-primary-500 text-white">
      <div className="container relative z-10 grid min-h-[520px] items-center py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="font-semibold text-sm text-white/80 uppercase tracking-widest">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-3 text-balance font-bold font-display text-4xl leading-tight md:text-6xl">
            Veja o mundo com mais estilo.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-white/85 md:text-lg">
            Coleções exclusivas, atendimento personalizado e até 70% off em armações selecionadas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/colecoes"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-brand-primary-700 shadow-md transition hover:bg-white/90 active:scale-[0.98]"
            >
              Ver coleções
            </Link>
            <Link
              href="/agendar-consulta"
              className="rounded-lg border border-white/30 bg-white/0 px-6 py-3 font-semibold text-white transition hover:bg-white/10 active:scale-[0.98]"
            >
              Agendar consulta
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_50%)]"
      />
    </section>
  );
}
