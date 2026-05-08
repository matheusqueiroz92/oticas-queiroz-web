import { Reveal } from '@/components/shared/Reveal';

interface Stat {
  value: string;
  label: string;
}

interface NumbersBandProps {
  stats: Stat[];
}

export function NumbersBand({ stats }: NumbersBandProps) {
  return (
    <section
      aria-label="Números da Óticas Queiroz"
      className="border-border-strong border-y bg-cream-50"
    >
      <div className="container-editorial py-12 md:py-16">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <dt className="text-2xs text-fg-subtle uppercase tracking-[0.18em]">{s.label}</dt>
                <dd
                  className="mt-2 font-display text-5xl text-brand-primary-900 leading-none tracking-tighter md:text-6xl"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
                >
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
