/**
 * Helpers de formatação para PT-BR.
 */

const BRL = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const DATE = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});
const DATETIME = new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});

/** Formata valor em centavos (inteiro) como moeda BRL. */
export function formatCurrency(cents: number): string {
  return BRL.format(cents / 100);
}

/** Formata data ISO ou Date como `dd/MM/yyyy`. */
export function formatDate(input: string | Date): string {
  return DATE.format(typeof input === 'string' ? new Date(input) : input);
}

/** Formata data+hora como `dd/MM/yyyy HH:mm`. */
export function formatDateTime(input: string | Date): string {
  return DATETIME.format(typeof input === 'string' ? new Date(input) : input);
}

/** Formata CPF: `12345678900` -> `123.456.789-00`. */
export function formatCPF(value: string): string {
  return value
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

/** Formata número de O.S. com prefixo `#`. */
export function formatOS(os: string | number): string {
  return `#${String(os).padStart(6, '0')}`;
}

/** Formata telefone BR: `5577988018192` -> `(77) 98801-8192`. */
export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');
  const local = digits.startsWith('55') ? digits.slice(2) : digits;
  if (local.length === 11) {
    return `(${local.slice(0, 2)}) ${local.slice(2, 7)}-${local.slice(7)}`;
  }
  if (local.length === 10) {
    return `(${local.slice(0, 2)}) ${local.slice(2, 6)}-${local.slice(6)}`;
  }
  return value;
}
