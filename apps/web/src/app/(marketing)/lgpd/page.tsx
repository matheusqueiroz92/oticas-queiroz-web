import { LegalDocumentShell } from '@/components/marketing/LegalDocumentShell';
import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const LAST_UPDATED = '7 de maio de 2026';

export const metadata: Metadata = buildMetadata({
  title: 'LGPD — Proteção de dados',
  description:
    'Lei Geral de Proteção de Dados (LGPD): saiba seus direitos como titular, como solicitar tratamento de dados pessoais e canais da Óticas Queiroz.',
  path: '/lgpd',
});

export default function LgpdPage() {
  return (
    <LegalDocumentShell
      canonicalPath="/lgpd"
      eyebrow="Compliance"
      title="Lei Geral de"
      highlight="proteção de dados."
      description="Este espaço sintetiza o compromisso da Óticas Queiroz com a LGPD (Lei nº 13.709/2018) e os caminhos para você exercer seus direitos como titular de dados pessoais."
      lastUpdatedLabel={LAST_UPDATED}
    >
      <section id="compromisso" aria-labelledby="lgpd-1">
        <h2 id="lgpd-1">1. Compromisso institucional</h2>
        <p>
          A <strong>{siteConfig.name}</strong> ({siteConfig.legal.razaoSocial}, CNPJ{' '}
          {siteConfig.legal.cnpj}) valoriza o respeito à privacidade e à proteção de dados desde a
          coleta até o tratamento técnico necessário às nossas atividades comerciais e de
          relacionamento digital.
        </p>
      </section>

      <section id="titular" aria-labelledby="lgpd-2">
        <h2 id="lgpd-2">2. Quem é o titular?</h2>
        <p>
          Titular é a pessoa natural a quem os dados pessoais se referem. No contexto dos nossos
          canais digitais, isso inclui você enquanto visitante ou interessado em nossos serviços
          quando identificável em função das informações eventualmente tratadas.
        </p>
      </section>

      <section id="direitos" aria-labelledby="lgpd-3">
        <h2 id="lgpd-3">3. Seus direitos (resumo orientativo)</h2>
        <p>
          A LGPD garante ao titular, entre outros pontos quando aplicáveis e observadas razões
          legalmente previstas para manutenção de dados ou segredo comercial protegível:
        </p>
        <ul>
          <li>confirmação da existência de tratamento;</li>
          <li>acesso aos dados;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
          <li>portabilidade de dados a outro fornecedor, nas hipóteses legais;</li>
          <li>informação sobre compartilhamentos regulares ou significativos;</li>
          <li>
            informação sobre a possibilidade de não dar consentimento e consequências quando houver
            decisão unicamente automatizada;
          </li>
          <li>revogação do consentimento, quando esse for a base do tratamento.</li>
        </ul>
      </section>

      <section id="canal" aria-labelledby="lgpd-4">
        <h2 id="lgpd-4">4. Canal para exercício de direitos</h2>
        <p>
          Encaminhe seu pedido de forma objetiva pela página de <a href="/contato">contato</a> ou
          diretamente para o endereço de e-mail institucional, indicando o assunto relacionado à
          LGPD e meios suficientes para verificação segura de identidade quando necessário ao
          atendimento.
        </p>
        <p>
          <strong>E-mail:</strong>{' '}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </p>
      </section>

      <section id="encarregado" aria-labelledby="lgpd-5">
        <h2 id="lgpd-5">5. Encarregado pelo tratamento (DPO)</h2>
        <p>
          O encarregado é responsável por receber comunicações de titulares e autoridades, orientar
          colaboradores quanto ao cumprimento da LGPD e zelar por boas práticas relativas aos dados
          tratados pela organização, sempre em conformidade com a estrutura e porte disponíveis.
        </p>
        <address>
          {siteConfig.legal.razaoSocial}
          <br />
          {siteConfig.contact.address.street}, {siteConfig.contact.address.number},{' '}
          {siteConfig.contact.address.neighborhood}
          <br />
          CEP {siteConfig.contact.address.zip} — {siteConfig.contact.address.city} /{' '}
          {siteConfig.contact.address.state}
          <br />
          E-mail corporativo para questões relacionadas aos dados e à LGPD:{' '}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </address>
      </section>

      <section id="anpd" aria-labelledby="lgpd-6">
        <h2 id="lgpd-6">6. Autoridade Nacional</h2>
        <p>
          Em situações em que você entenda não ter sido atendido de forma compatível com a lei, pode
          recorrer à Autoridade Nacional de Proteção de Dados (ANPD), nos termos e prazos que a lei
          e os órgãos competentes previrem para cada fase institucional.
        </p>
        <p>
          Site oficial para consultas e orientações institucionais:{' '}
          <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">
            gov.br/anpd
          </a>
          .
        </p>
      </section>

      <section id="documentos-relacionados" aria-labelledby="lgpd-7">
        <h2 id="lgpd-7">7. Documentos relacionados</h2>
        <p>
          Para detalhamento técnico e operacional sobre coleta e uso de dados, também consulte a
          nossa <a href="/politica-de-privacidade">Política de Privacidade</a> e{' '}
          <a href="/politica-de-cookies">Política de Cookies</a>.
        </p>
      </section>
    </LegalDocumentShell>
  );
}
