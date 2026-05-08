import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

/**
 * Validação de variáveis de ambiente — falha cedo com mensagem clara
 * se algo estiver faltando, evitando bugs em produção por env mal configurada.
 *
 * @see https://env.t3.gg
 */
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),

    ERP_API_URL: z.string().url(),
    ERP_API_KEY: z.string().min(1),

    AUTH_SECRET: z.string().min(32, 'AUTH_SECRET deve ter pelo menos 32 caracteres'),

    UPSTASH_REDIS_REST_URL: z.string().url().optional(),
    UPSTASH_REDIS_REST_TOKEN: z.string().optional(),

    SENTRY_AUTH_TOKEN: z.string().optional(),
    CONTACT_WEBHOOK_URL: z.string().url().optional(),
    CONTACT_WEBHOOK_SECRET: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_SITE_URL: z.string().url(),
    NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().regex(/^\d{12,13}$/, 'Número WhatsApp em E.164 sem +'),
    NEXT_PUBLIC_PHONE: z.string().regex(/^\d{10,13}$/),
    NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    ERP_API_URL: process.env.ERP_API_URL,
    ERP_API_KEY: process.env.ERP_API_KEY,
    AUTH_SECRET: process.env.AUTH_SECRET,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    CONTACT_WEBHOOK_URL: process.env.CONTACT_WEBHOOK_URL,
    CONTACT_WEBHOOK_SECRET: process.env.CONTACT_WEBHOOK_SECRET,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    NEXT_PUBLIC_PHONE: process.env.NEXT_PUBLIC_PHONE,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
  },
  emptyStringAsUndefined: true,
  skipValidation: process.env.SKIP_ENV_VALIDATION === 'true',
});
