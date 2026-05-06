import { z } from 'zod';

export const consultationSlotSchema = z.object({
  id: z.string(),
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
  available: z.boolean(),
});

export type ConsultationSlot = z.infer<typeof consultationSlotSchema>;

export const consultationBookingSchema = z.object({
  slotId: z.string(),
  customerName: z.string().min(2),
  phone: z.string().regex(/^\d{10,11}$/, 'Telefone deve ter 10 ou 11 dígitos'),
  notes: z.string().optional(),
});

export type ConsultationBooking = z.infer<typeof consultationBookingSchema>;
