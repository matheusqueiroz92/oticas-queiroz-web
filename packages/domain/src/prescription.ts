import { z } from 'zod';

/**
 * Receita oftalmológica simplificada.
 * Esférico (sph), cilíndrico (cyl) e eixo (axis) por olho.
 * Adição (add) usado em multifocais.
 */
const eyePrescriptionSchema = z.object({
  sph: z.number(),
  cyl: z.number().optional(),
  axis: z.number().int().min(0).max(180).optional(),
  add: z.number().nonnegative().optional(),
});

export const prescriptionSchema = z.object({
  od: eyePrescriptionSchema,
  oe: eyePrescriptionSchema,
  pd: z.number().positive().optional(),
  notes: z.string().optional(),
});

export type Prescription = z.infer<typeof prescriptionSchema>;
