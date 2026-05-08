import { LegalDocumentShell } from '@/components/marketing/LegalDocumentShell';
import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

const LAST_UPDATED = '7 de maio de 2026';

export const metadata: Metadata = buildMetadata({
  title: 'Política de Privacidade',
  description:
    'Saiba como a Óticas Queiroz coleta, usa e protege dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).',
  path: '/politica-de-privacidade',
});

export default function PoliticaPrivacidadePage() {
  return (
    <LegalDocumentShell
      canonicalPath="/politica-de-privacidade"
      eyebrow="Transparência"
      title="Política de"
      highlight="privacidade."
      description="Comprometemo-nos a tratar dados pessoais com responsabilidade, transparência e segurança, em linha com a legislação brasileira aplicável à proteção da privacidade."
      lastUpdatedLabel={LAST_UPDATED}
    >
      <section id="introducao" aria-labelledby="priv-1">
        <h2 id="priv-1">1. Quem é o controlador?</h2>
        <p>
          O tratamento dos dados descritos nesta política é realizado pela{' '}
          <strong>{siteConfig.legal.razaoSocial}</strong>, pessoa jurídica de direito privado,
          inscrita no CNPJ sob o nº <strong>{siteConfig.legal.cnpj}</strong>, com nome fantasia{' '}
          <strong>{siteConfig.name}</strong>, doravante também denominada apenas &quot;nós&quot;.
        </p>
        <p>
          Para dúvidas sobre privacidade, utilize o canal indicado na seção 9 deste documento ou a
          página de <a href="/contato">contato</a>.
        </p>
      </section>

      <section id="abrangencia" aria-labelledby="priv-2">
        <h2 id="priv-2">2. Abrangência</h2>
        <p>
          Esta política aplica-se ao uso dos nossos canais digitais (website, formulários digitais e
          outros recursos conectados a este domínio) e aos dados coletados nesses ambientes quando
          identificável uma pessoa natural.
        </p>
        <p>
          Ao utilizar este site você declara estar ciente desta política. Se você não concordar com
          o descrito aqui, recomendamos não continuar usando os serviços que dependam desses
          tratamentos.
        </p>
      </section>

      <section id="dados-coletados" aria-labelledby="priv-3">
        <h2 id="priv-3">3. Que dados podemos coletar?</h2>
        <p>Dependendo do recurso utilizado em nosso site, poderemos coletar, dentre outros:</p>
        <ul>
          <li>
            <strong>Dados cadastrais e de identificação</strong>: nome completo, e-mail, número de
            telefone quando informados voluntariamente (por exemplo, em formulário de contato).
          </li>
          <li>
            <strong>Dados da navegação</strong>: endereço IP, tipo de dispositivo, navegador,
            páginas visitadas, data e horário de acesso, origem da visita quando identificável (por
            meio de cookies ou tecnologias similares, conforme política própria de cookies).
          </li>
          <li>
            <strong>Dados técnicos e de segurança</strong>: registros mantidos por motivos legítimos
            de segurança da informação e prevenção a fraudes, quando aplicável.
          </li>
        </ul>
      </section>

      <section id="finalidades" aria-labelledby="priv-4">
        <h2 id="priv-4">4. Finalidades e bases legais</h2>
        <p>Os dados tratados relacionados a esta presença digital podem sustentar, entre outras:</p>
        <ul>
          <li>responder mensagens enviadas por meio dos canais de contato disponibilizados;</li>
          <li>cumprir obrigações legais ou regulatórias;</li>
          <li>
            garantir segurança, integridade técnica e continuidade do serviço (legítimo interesse ou
            execução de contrato, conforme aplicável ao caso concreto);
          </li>
          <li>
            melhorar a experiência de uso do site mediante métricas agregadas, quando pertinentes.
          </li>
        </ul>
        <p>
          A base legal será indicada caso a caso quando necessário ao exercício de direitos pelo
          titular ou em comunicações sobre tratamentos específicos.
        </p>
      </section>

      <section id="cookies" aria-labelledby="priv-5">
        <h2 id="priv-5">5. Cookies e tecnologias similares</h2>
        <p>
          Utilizamos cookies e tecnologias afins onde necessários ao funcionamento do site ou à
          medição de desempenho. Detalhamos categorias e opções à sua disposição em nossa{' '}
          <a href="/politica-de-cookies">Política de Cookies</a>.
        </p>
      </section>

      <section id="compartilhamento" aria-labelledby="priv-6">
        <h2 id="priv-6">6. Compartilhamento de dados</h2>
        <p>
          Não vendemos dados pessoais. O compartilhamento poderá ocorrer com prestadores de serviços
          que nos auxiliam na hospedagem, suporte técnico, segurança ou comunicação, sempre
          orientados por contratos e medidas proporcionais de proteção quando exigido pelo contexto.
        </p>
        <p>
          Também poderemos divulgar informações mediante ordem judicial, requisição de autoridade
          competente ou necessidade para defesa dos nossos direitos em sede judicial ou
          extrajudicial.
        </p>
      </section>

      <section id="internacional" aria-labelledby="priv-7">
        <h2 id="priv-7">7. Transferência internacional</h2>
        <p>
          Caso ferramentas de terceiros com infraestrutura fora do Brasil sejam utilizadas, adotamos
          esforços para que esta transferência ocorra em conformidade com a LGPD, inclusive por meio
          de cláusulas contratuais ou mecanismos reconhecidos pela legislação aplicável.
        </p>
      </section>

      <section id="retencao" aria-labelledby="priv-8">
        <h2 id="priv-8">8. Prazo de armazenamento</h2>
        <p>
          Conservamos dados pelo tempo necessário ao cumprimento das finalidades informadas ou para
          atendimento a obrigações legais, regulatórias ou defesa em processos. Ao término do prazo
          ou esgotamento da base legal aplicável, os dados são eliminados ou anonimizados de forma
          compatível com os meios disponíveis, salvo exceções legais ou regulatórias.
        </p>
      </section>

      <section id="titular" aria-labelledby="priv-9">
        <h2 id="priv-9">9. Direitos do titular e canal de solicitações</h2>
        <p>
          Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso aos dados,
          correção incompleta ou inexatos, anonimização, bloqueio ou eliminação de dados tratados
          sem amparo legal, entre outros direitos quando previstos em lei e observadas as
          especificidades da nossa base de dados.
        </p>
        <p>
          Encaminhe pedidos relacionados aos seus dados através do e-mail{' '}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>, descrevendo
          de forma clara sua solicitação para que possamos atendê-la com segurança. Você poderá
          também consultar diretrizes adicionais em nossa página dedicada à <a href="/lgpd">LGPD</a>
          .
        </p>
      </section>

      <section id="seguranca" aria-labelledby="priv-10">
        <h2 id="priv-10">10. Segurança das informações</h2>
        <p>
          Adotamos medidas técnicas e organizacionais razoáveis para proteção dos dados sob nosso
          alcance, em conformidade com a natureza das informações e os riscos envolvidos. Nenhum
          sistema é integralmente isento de risco; assim, recomenda-se sempre o uso seguro dos seus
          próprios dispositivos e conexões.
        </p>
      </section>

      <section id="alteracoes" aria-labelledby="priv-11">
        <h2 id="priv-11">11. Alterações desta política</h2>
        <p>
          Podemos atualizar este texto para refletir mudanças legais, evoluções técnicas ou
          novidades em nossos produtos ou serviços. A versão atualizada será publicada nesta página,
          com revisão na data indicada no topo do documento. Recomendamos consultar periodicamente o
          conteúdo.
        </p>
      </section>

      <section id="lei" aria-labelledby="priv-12">
        <h2 id="priv-12">12. Legislação e foro</h2>
        <p>
          Esta política é regida pelas leis da República Federativa do Brasil. Fica eleito o foro da
          comarca de <strong>{siteConfig.contact.address.city}</strong>, Estado de{' '}
          <strong>{siteConfig.contact.address.state}</strong>, salvo hipótese de foro imperativo do
          consumidor ou outro critério legal que determine competência diversa.
        </p>
      </section>
    </LegalDocumentShell>
  );
}
