const promos = [
  'Parcelamos no cartão de crédito',
  'Óculos bom, bonito e barato',
  'Ninguém oferece tanto',
];

export function PromoBar() {
  return (
    <div className="bg-brand-primary-700 text-white">
      <div className="container flex h-9 items-center justify-center gap-8 overflow-hidden font-medium text-xs">
        {promos.map((text, idx) => (
          <span
            key={text}
            className={idx === 0 ? 'inline-block' : 'hidden md:inline-block'}
            aria-hidden={idx !== 0}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
