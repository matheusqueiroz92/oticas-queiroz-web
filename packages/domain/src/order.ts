import { z } from 'zod';

export const orderStatusSchema = z.enum([
  'PEDIDO',
  'EM_LABORATORIO',
  'PRONTO',
  'ENTREGUE',
  'CANCELADO',
]);

export type OrderStatus = z.infer<typeof orderStatusSchema>;

export const orderStatusLabels: Record<OrderStatus, string> = {
  PEDIDO: 'Pedido recebido',
  EM_LABORATORIO: 'Em laboratório',
  PRONTO: 'Pronto para retirada',
  ENTREGUE: 'Entregue',
  CANCELADO: 'Cancelado',
};

export const orderItemSchema = z.object({
  type: z.enum(['OCULOS_GRAU', 'OCULOS_SOL', 'LENTE', 'ACESSORIO']),
  description: z.string(),
});

export type OrderItem = z.infer<typeof orderItemSchema>;

export const orderStatusEventSchema = z.object({
  status: orderStatusSchema,
  at: z.string().datetime(),
});

export type OrderStatusEvent = z.infer<typeof orderStatusEventSchema>;

export const orderSchema = z.object({
  osNumber: z.string(),
  customerName: z.string(),
  status: orderStatusSchema,
  statusHistory: z.array(orderStatusEventSchema),
  estimatedDelivery: z.string().datetime().nullable(),
  items: z.array(orderItemSchema).default([]),
});

export type Order = z.infer<typeof orderSchema>;
