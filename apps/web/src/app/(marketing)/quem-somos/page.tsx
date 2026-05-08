import { NumbersBand } from '@/components/marketing/NumbersBand';
import { PageHero } from '@/components/marketing/PageHero';
import { StoreInvite } from '@/components/marketing/StoreInvite';
import { StoryBlock } from '@/components/marketing/StoryBlock';
import { ValuesGrid } from '@/components/marketing/ValuesGrid';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = buildMetadata({
  title: 'Quem somos',
  description:
    'Há mais de uma década cuidando da saúde visual de Itapetinga e região. Conheça a história da Óticas Queiroz, nossa equipe e nossos valores.',
  path: '/quem-somos',
});

/**
 * Imagens vêm do Unsplash como placeholders — substitua pelas fotos reais
 * da Óticas Queiroz quando disponíveis. URLs já dimensionados para evitar
 * download de versões 4K desnecessariamente grandes.
 *
 * Padrão Unsplash: ?w=1600&q=80&auto=format&fit=crop
 */
const IMG = {
  hero: {
    src: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=1200&q=80&auto=format&fit=crop',
    alt: 'Atendimento personalizado em ótica — substituir por foto da loja',
  },
  story1: {
    src: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200&q=80&auto=format&fit=crop',
    alt: 'Vitrine com armações de óculos — substituir por foto do interior da loja',
  },
  story2: {
    src: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200&q=80&auto=format&fit=crop',
    alt: 'Detalhe de armações premium — substituir por foto da equipe',
  },
  value1: {
    src: 'https://images.unsplash.com/photo-1614859275907-c6c95cb73fcc?w=900&q=80&auto=format&fit=crop',
    alt: 'Exame de vista profissional',
  },
  value2: {
    src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=900&q=80&auto=format&fit=crop',
    alt: 'Coleção de armações em destaque',
  },
  value3: {
    src: 'https://images.unsplash.com/photo-1556015048-4d3aa10df74c?w=900&q=80&auto=format&fit=crop',
    alt: 'Atendimento humano em loja física',
  },
  storefront: {
    src: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=1400&q=80&auto=format&fit=crop',
    alt: 'Fachada da loja Óticas Queiroz — substituir por foto real da fachada',
  },
};

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title="Cuidando do olhar de Itapetinga"
        highlight="desde 2009."
        description="Mais que uma loja, somos parte do dia a dia de quem confia o próprio olhar à nossa equipe. Atendemos quem entra pela primeira vez e quem volta pela quarta — sempre pelo nome."
        image={IMG.hero}
      />

      <StoryBlock
        eyebrow="Como tudo começou"
        title="Uma família, uma cidade,"
        highlight="um propósito."
        paragraphs={[
          'A Óticas Queiroz nasceu em 2009, no centro de Itapetinga, com uma ideia simples: oferecer óculos de qualidade com preço justo e atendimento de gente que se importa. De lá pra cá, atravessamos uma década crescendo lado a lado com a cidade.',
          'Hoje, três gerações da família trabalham juntas na loja. Cada armação que sai da nossa porta passa por mãos que conhecem os clientes pelo nome — e muitas vezes pelo grau também.',
        ]}
        image={IMG.story1}
        imageSide="right"
        background="cream"
      />

      <NumbersBand
        stats={[
          { value: '15', label: 'anos de história' },
          { value: '1k+', label: 'clientes ativos' },
          { value: '+200', label: 'modelos em estoque' },
          { value: '4.9', label: 'avaliação Google' },
        ]}
      />

      <ValuesGrid
        eyebrow="O que nos move"
        title="Três valores que"
        highlight="não mudam."
        values={[
          {
            title: 'Atendimento humano',
            description:
              'Sem roteiro decorado. Conversamos com quem entra na loja como se fosse vizinho, porque muitos são. A escolha da armação é decisão sua, mas a opinião sincera é nosso compromisso.',
            image: IMG.value3,
          },
          {
            title: 'Qualidade sem firula',
            description:
              'Trabalhamos só com fornecedores reconhecidos e lentes Crizal. Garantia de 1 ano em armações e 2 em lentes — porque a gente assina embaixo do que vende.',
            image: IMG.value2,
          },
          {
            title: 'Cuidado com o olhar',
            description:
              'Consulta com oftalmologista parceiro toda semana, exame de refração na hora e armação ajustada antes de você sair pela porta.',
            image: IMG.value1,
          },
        ]}
      />

      <StoryBlock
        eyebrow="Por que existimos"
        title="Porque enxergar bem"
        highlight="não é luxo."
        paragraphs={[
          'A gente acredita que ter um óculos confortável e bonito faz parte de viver bem — não importa o orçamento. Por isso oferecemos parcelamento em 10x sem juros, descontos em combos de armação + lente, e atendimento que não te empurra o que você não precisa.',
          'Nosso trabalho é traduzir uma receita em um par de óculos que você gosta de usar. O resto — a tecnologia das lentes, a qualidade da armação, a precisão da montagem — é o feijão com arroz que a gente faz há quinze anos.',
        ]}
        image={IMG.story2}
        imageSide="left"
        background="navy"
      />

      <StoreInvite image={IMG.storefront} />
    </>
  );
}
