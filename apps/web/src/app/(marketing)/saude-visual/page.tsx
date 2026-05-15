import { HealthVisualInfo } from '@/components/marketing/HealthVisualInfo';
import { PageHero } from '@/components/marketing/PageHero';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
  title: 'Saúde visual',
  description:
    'Exame de refração na Óticas Queiroz e consulta com oftalmologista parceiro (Oftalmedic). Solicite horário por WhatsApp ou telefone.',
  path: '/saude-visual',
});

const HERO_IMAGE = {
  src: 'https://images.unsplash.com/photo-1614859275907-c6c95cb73fcc?w=1200&q=80&auto=format&fit=crop',
  alt: 'Atendimento de saúde visual — substituir por foto real da loja ou consultório parceiro',
};

export default function SaudeVisualPage() {
  return (
    <>
      <PageHero
        eyebrow="Saúde visual"
        title="Cuidado com seus"
        highlight="olhos."
        description="Na loja, fazemos a refração para seus óculos. Para consulta com oftalmologista, contamos com a parceria Oftalmedic — nossa equipe ajuda você a solicitar o horário."
        image={HERO_IMAGE}
      />
      <HealthVisualInfo />
    </>
  );
}
