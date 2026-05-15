import { ComingSoon } from '@/components/marketing/ComingSoon';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description: 'Dicas de saúde visual, tendências e novidades da Óticas Queiroz.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog em breve"
      description="Em breve você encontrará aqui dicas de cuidado visual, tendências em armações e novidades da nossa loja."
    />
  );
}
