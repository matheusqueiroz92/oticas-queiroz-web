import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Informe seu nome.'),
  email: z.string().email('Digite um e-mail valido.'),
  phone: z
    .string()
    .min(10, 'Informe telefone com DDD.')
    .max(15, 'Telefone muito longo.')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(20, 'Conte com um pouco mais de detalhe (minimo de 20 caracteres).')
    .max(1200, 'Mensagem muito longa.'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
