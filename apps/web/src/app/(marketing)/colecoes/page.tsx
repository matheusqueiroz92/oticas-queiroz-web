import { ComingSoon } from '@/components/marketing/ComingSoon';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
  title: 'Coleções',
  description: 'Catálogo de armações, óculos de sol, lentes e acessórios da Óticas Queiroz.',
  path: '/colecoes',
});

export default function ColecoesPage() {
  return (
    <ComingSoon
      title="Coleções em breve"
      description="Estamos preparando o catálogo online com nossas armações e lançamentos. Enquanto isso, visite a loja no centro de Itapetinga ou fale conosco pelo WhatsApp."
      backHref="/contato"
      backLabel="Falar com a loja"
    />
  );
}
