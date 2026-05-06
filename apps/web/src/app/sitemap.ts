import { siteConfig } from '@/config/site';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    '',
    '/quem-somos',
    '/nossa-equipe',
    '/contato',
    '/colecoes',
    '/blog',
    '/agendar-consulta',
    '/consultar-pedido',
    '/orcamento',
    '/politica-de-privacidade',
    '/termos-de-uso',
  ];

  return staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.7,
  }));
}
