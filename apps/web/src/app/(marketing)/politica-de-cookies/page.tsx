import { LegalDocumentShell } from '@/components/marketing/LegalDocumentShell';
import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const LAST_UPDATED = '7 de maio de 2026';

export const metadata: Metadata = buildMetadata({
  title: 'Política de Cookies',
  description:
    'Entenda como a Óticas Queiroz utiliza cookies e tecnologias similares no site e como gerenciar suas preferências.',
  path: '/politica-de-cookies',
});

export default function PoliticaCookiesPage() {
  return (
    <LegalDocumentShell
      canonicalPath="/politica-de-cookies"
      eyebrow="Preferências"
      title="Política de"
      highlight="cookies."
      description="Cookies ajudam o site a funcionar e nos permitem entender, de forma agregada, como ele é utilizado. Aqui explicamos o que usamos e como você pode controlar essas preferências."
      lastUpdatedLabel={LAST_UPDATED}
    >
      <section id="o-que-sao" aria-labelledby="ck-1">
        <h2 id="ck-1">1. O que são cookies?</h2>
        <p>
          Cookies são pequenos arquivos armazenados no seu navegador ou dispositivo quando você
          visita um site. Eles podem manter preferências, identificar sessões técnicas ou permitir
          medições de desempenho, dependendo da categoria utilizada.
        </p>
      </section>

      <section id="quem-controla" aria-labelledby="ck-2">
        <h2 id="ck-2">2. Quem controla os cookies?</h2>
        <p>
          Quando o cookie é definido pelo domínio do nosso site, trata-se de cookies de{' '}
          <strong>primeira parte</strong>. Quando incluímos recursos de terceiros (por exemplo,
          ferramentas de métricas ou conteúdo incorporado), esses terceiros podem definir cookies
          próprios, sujeitos às respectivas políticas de privacidade.
        </p>
      </section>

      <section id="tipos" aria-labelledby="ck-3">
        <h2 id="ck-3">3. Tipos de cookies que podemos utilizar</h2>
        <ul>
          <li>
            <strong>Estritamente necessários</strong>: essenciais ao funcionamento básico do site,
            como manter segurança de sessão ou lembrar preferências de consentimento quando
            implementadas.
          </li>
          <li>
            <strong>Desempenho e estatística</strong>: ajudam a medir tráfego, identificar erros
            técnicos ou entender padrões de uso de forma agregada, para melhorar conteúdo e
            experiência.
          </li>
          <li>
            <strong>Funcionalidade</strong>: permitem lembrar escolhas (por exemplo idioma ou
            região) para personalizar determinados elementos de navegação.
          </li>
          <li>
            <strong>Marketing (quando utilizados)</strong>: podem estar associados a campanhas de
            divulgação quando e somente quando ativados mediante base legal e configurações
            compatíveis com a lei aplicável.
          </li>
        </ul>
      </section>

      <section id="base-legal" aria-labelledby="ck-4">
        <h2 id="ck-4">4. Consentimento e base legal</h2>
        <p>
          Para cookies não essenciais ao funcionamento indispensável da página, buscaremos observar
          os requisitos aplicáveis de transparência e, quando obrigatório, coleta prévia do
          consentimento. Cookies necessários poderão persistir mesmo após recusa opcional onde
          indispensáveis à prestação segura do serviço.
        </p>
      </section>

      <section id="gerenciar" aria-labelledby="ck-5">
        <h2 id="ck-5">5. Como gerenciar ou excluir cookies</h2>
        <p>
          A maioria dos navegadores permite bloquear ou apagar cookies nas configurações de
          privacidade. Lembre-se de que desativar cookies necessários pode afetar partes do site
          (por exemplo, envio de formulários ou recursos que dependem de sessão).
        </p>
        <p>
          Também é possível utilizar recursos de opt-out oferecidos por determinados fornecedores de
          analytics ou publicidade, quando presentes no site.
        </p>
      </section>

      <section id="terceiros" aria-labelledby="ck-6">
        <h2 id="ck-6">6. Serviços de terceiros</h2>
        <p>
          Se integrarmos serviços como mapas, widgets de redes sociais ou soluções de métrica, estes
          podem definir cookies independentes. Recomendamos consultar as políticas desses
          fornecedores para entender seus tratamentos.
        </p>
      </section>

      <section id="prazos" aria-labelledby="ck-7">
        <h2 id="ck-7">7. Prazo de armazenamento</h2>
        <p>
          Os cookies podem ser de <strong>sessão</strong> (removidos ao fechar o navegador) ou{' '}
          <strong>persistentes</strong> (com validade definida no próprio arquivo). Os prazos variam
          por finalidade e são revistos periodicamente.
        </p>
      </section>

      <section id="atualizacoes" aria-labelledby="ck-8">
        <h2 id="ck-8">8. Atualizações e contato</h2>
        <p>
          Esta política pode ser atualizada para refletir mudanças nas tecnologias utilizadas ou na
          legislação. Dúvidas sobre cookies e privacidade podem ser encaminhadas para{' '}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> ou pelo{' '}
          <a href="/contato">formulário de contato</a>.
        </p>
      </section>
    </LegalDocumentShell>
  );
}
