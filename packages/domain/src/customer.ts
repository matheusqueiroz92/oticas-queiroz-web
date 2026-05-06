import { z } from 'zod';

/**
 * Validação completa de CPF (11 dígitos + dígitos verificadores).
 */
export function isValidCPF(cpf: string): boolean {
  const digits = cpf.replace(/\D/g, '');
  if (digits.length !== 11) return false;
  if (/^(\d)\1+$/.test(digits)) return false;

  const calc = (slice: string, factor: number) => {
    let sum = 0;
    for (let i = 0; i < slice.length; i++) {
      sum += Number(slice[i]) * (factor - i);
    }
    const rest = (sum * 10) % 11;
    return rest === 10 ? 0 : rest;
  };

  const d1 = calc(digits.slice(0, 9), 10);
  const d2 = calc(digits.slice(0, 10), 11);
  return d1 === Number(digits[9]) && d2 === Number(digits[10]);
}

export const cpfSchema = z
  .string()
  .transform((val) => val.replace(/\D/g, ''))
  .refine(isValidCPF, { message: 'CPF inválido' });

export const customerSummarySchema = z.object({
  initials: z.string(),
  lastName: z.string(),
});

export type CustomerSummary = z.infer<typeof customerSummarySchema>;
