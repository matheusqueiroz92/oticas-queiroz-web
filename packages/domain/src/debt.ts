import { z } from 'zod';

export const installmentStatusSchema = z.enum(['OPEN', 'OVERDUE', 'PAID']);
export type InstallmentStatus = z.infer<typeof installmentStatusSchema>;

export const installmentSchema = z.object({
  id: z.string(),
  dueDate: z.string(),
  amount: z.number().int().nonnegative(),
  status: installmentStatusSchema,
});

export type Installment = z.infer<typeof installmentSchema>;

export const debtSummarySchema = z.object({
  totalOpen: z.number().int().nonnegative(),
  installments: z.array(installmentSchema),
  paymentLink: z.string().url().nullable().optional(),
});

export type DebtSummary = z.infer<typeof debtSummarySchema>;
