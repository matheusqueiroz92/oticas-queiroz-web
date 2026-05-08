import { LegalDocumentShell } from '@/components/marketing/LegalDocumentShell';
import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const LAST_UPDATED = '7 de maio de 2026';

export const metadata: Metadata = buildMetadata({
  title: 'Termos de Uso',
  description:
    'Termos e condições de uso do site da Óticas Queiroz. Leia as regras aplicáveis à navegação e aos serviços digitais oferecidos.',
  path: '/termos-de-uso',
});

export default function TermosUsoPage() {
  return (
    <LegalDocumentShell
      canonicalPath="/termos-de-uso"
      eyebrow="Uso do site"
      title="Termos de"
      highlight="uso."
      compactHero
      headingId="termos-doc-heading"
      description={`Ao utilizar este site você concorda em respeitar as regras abaixo, aplicáveis à presença digital da ${siteConfig.name}.`}
      lastUpdatedLabel={LAST_UPDATED}
    >
      <section id="aceitacao" aria-labelledby="tu-1">
        <h2 id="tu-1">1. Aceitação</h2>
        <p>
          Ao acessar ou utilizar este site você declara haver lido e compreendido estes Termos de
          Uso, bem como a nossa <a href="/politica-de-privacidade">Política de Privacidade</a> e{' '}
          <a href="/politica-de-cookies">Política de Cookies</a>, quando aplicável. Caso não
          concorde, abstenda-se de utilizar os recursos disponibilizados.
        </p>
      </section>

      <section id="servico" aria-labelledby="tu-2">
        <h2 id="tu-2">2. Natureza do serviço</h2>
        <p>
          Este site tem caráter informativo sobre nossos produtos e serviços, canais de atendimento
          e conteúdos institucionais. Informações sobre disponibilidade, preços ou condições
          comerciais específicas poderão ser confirmadas diretamente em loja física ou pelos nossos
          canais oficiais de contato.
        </p>
      </section>

      <section id="conta-contato" aria-labelledby="tu-3">
        <h2 id="tu-3">3. Informações cadastrais e comunicações</h2>
        <p>
          Quando você preencher formulários ou nos contatar pela internet, declara que as
          informações fornecidas são verdadeiras e atualizadas na medida do possível, respondendo
          pela sua adequação aos fins informados nos respectivos formulários ou na coleta realizada
          no contexto específico.
        </p>
      </section>

      <section id="propriedade" aria-labelledby="tu-4">
        <h2 id="tu-4">4. Propriedade intelectual</h2>
        <p>
          Textos, marcas (quando indicadas), logotipos, layout, imagens e demais conteúdos
          disponibilizados neste site, salvo indicação em contrário, são de titularidade da{' '}
          {siteConfig.legal.razaoSocial} ou licenciados para uso em contexto publicitário ou
          institucional. É vedada a reprodução comercial sem autorização prévia e expressa.
        </p>
      </section>

      <section id="uso-proibido" aria-labelledby="tu-5">
        <h2 id="tu-5">5. Usos vedados</h2>
        <p>É proibido, sem limitação exemplificativa:</p>
        <ul>
          <li>alterar ou danificar sistemas ou arquivos conectados ao site;</li>
          <li>
            usar o site ou conteúdo para fins ilícitos, difamatórios, discriminatórios ou que violem
            direitos de terceiros;
          </li>
          <li>
            tentativa de interferir na segurança, equilíbrio técnico ou disponibilidade do serviço;
          </li>
          <li>
            coletar dados pessoais de terceiros de forma automatizada não autorizada, inclusive por
            meios de <em>crawlers</em> ou similares, quando configurar violação de lei ou política
            técnica.
          </li>
        </ul>
      </section>

      <section id="links" aria-labelledby="tu-6">
        <h2 id="tu-6">6. Sites e serviços de terceiros</h2>
        <p>
          Links para sites externos podem ser disponibilizados apenas para conveniência. Não
          controlamos nem endossamos integralmente políticas ou práticas de terceiros; ao sair deste
          domínio, aplicam-se as regras e políticas vigentes nos respectivos destinos.
        </p>
      </section>

      <section id="disponibilidade" aria-labelledby="tu-7">
        <h2 id="tu-7">7. Disponibilidade</h2>
        <p>
          Empregamos esforços para manutenção técnica e disponibilidade contínua, porém não
          garantimos ausência de interrupções, erros ou indisponibilidades decorrentes de fatores
          além do nosso controle razoável.
        </p>
      </section>

      <section id="limitacao" aria-labelledby="tu-8">
        <h2 id="tu-8">8. Limitação de responsabilidade</h2>
        <p>
          Na medida máxima permitida pela lei aplicável, não nos responsabilizamos por danos
          indiretos, lucros cessantes ou perdas decorrentes de uso ou impossibilidade de uso do
          site, quando não houver dolo ou culpa grave configurada e comprovada de forma própria a
          este serviço digital.
        </p>
      </section>

      <section id="lgpd-consumer" aria-labelledby="tu-9">
        <h2 id="tu-9">9. Direitos aplicáveis e consumidor</h2>
        <p>
          O tratamento de dados pessoais observa a lei brasileira, em especial o que dispõe a LGPD
          sobre tratamento e direitos dos titulares. Consulte também a nossa página da{' '}
          <a href="/lgpd">LGPD</a> e da{' '}
          <a href="/politica-de-privacidade">Política de Privacidade</a>.
        </p>
        <p>
          Em relações de consumo, aplicam-se as normas previstas no Código de Defesa do Consumidor,
          inclusive quanto ao foro de preferência quando cabível.
        </p>
      </section>

      <section id="alteracoes-foro" aria-labelledby="tu-10">
        <h2 id="tu-10">10. Alterações, lei aplicável e foro</h2>
        <p>
          Podemos alterar estes Termos de Uso a qualquer tempo, mediante publicação atualizada nesta
          página. A continuidade de uso após alterações reputa aceitação salvo onde a lei permita
          comunicação prévia específica obrigatória.
        </p>
        <p>
          Prevê-se eventualmente a lei brasileira, com competência subsidiária, conforme caso, na
          comarca de <strong>{siteConfig.contact.address.city}</strong> /{' '}
          <strong>{siteConfig.contact.address.state}</strong>, sem prejuízo de eventual foro
          especial do consumidor quando devido por lei específica.
        </p>
      </section>
    </LegalDocumentShell>
  );
}
