import { env } from '@/env';

export const siteConfig = {
  name: 'Óticas Queiroz',
  shortName: 'OQ',
  tagline: 'Queira o melhor! Óculos bom, bonito e barato.',
  description:
    'Há mais de uma década cuidando da saúde visual de Itapetinga e região. Óculos de grau, óculos de sol, lentes e acessórios.',
  url: env.NEXT_PUBLIC_SITE_URL,
  ogImage: '/images/og-default.jpg',

  urls: {
    erp: 'https://app.oticasqueiroz.com.br',
  },

  contact: {
    whatsapp: env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    phone: env.NEXT_PUBLIC_PHONE,
    email: 'contato@oticasqueiroz.com.br',
    address: {
      street: 'Rua J. J. Seabra',
      number: '116',
      neighborhood: 'Centro',
      city: 'Itapetinga',
      state: 'BA',
      zip: '45700-000',
      country: 'BR',
    },
    geo: { lat: -15.2469, lng: -40.2473 },
    businessHours: [
      { dayOfWeek: 'Mo-Fr', opens: '08:00', closes: '18:00' },
      { dayOfWeek: 'Sa', opens: '08:00', closes: '13:00' },
    ],
  },

  social: {
    instagram: 'https://instagram.com/oticasqueiroz',
    whatsappLink: `https://wa.me/${env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
  },

  legal: {
    cnpj: '49.960.258/0001-29',
    razaoSocial: 'Óticas G Queiroz Ltda',
  },
} as const;

export type SiteConfig = typeof siteConfig;
