const promos = [
  'Parcelamos em 10x sem juros',
  'Atendimento por WhatsApp',
  'Coleção 2026 disponível',
  'Ninguém oferece tanto',
];

export function PromoBar() {
  const items = [...promos, ...promos, ...promos];
  return (
    <div className="relative overflow-hidden border-border-strong border-b bg-brand-primary-700 text-cream-100">
      <div className="flex animate-marquee whitespace-nowrap py-2.5">
        {items.map((text, idx) => (
          <span
            key={`${text}-${Math.floor(idx / promos.length)}-${idx % promos.length}`}
            className="mx-6 inline-flex items-center gap-3 text-2xs uppercase tracking-[0.16em]"
          >
            <span
              aria-hidden="true"
              className="inline-block h-1 w-1 rounded-full bg-brand-accent-500"
            />
            {text}
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-brand-primary-700 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-brand-primary-700 to-transparent"
      />
    </div>
  );
}
