export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const ERP_URL = 'https://app.oticasqueiroz.com.br';

export const mainNav: NavItem[] = [
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Coleções', href: '/colecoes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

export const utilityNav: NavItem[] = [
  { label: 'Consultar pedido', href: ERP_URL, external: true },
  { label: 'Saúde visual', href: '/saude-visual' },
];

export const footerSections: { title: string; items: NavItem[] }[] = [
  {
    title: 'Políticas',
    items: [
      { label: 'Termos de uso', href: '/termos-de-uso' },
      { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
      { label: 'Política de Cookies', href: '/politica-de-cookies' },
      { label: 'LGPD', href: '/lgpd' },
    ],
  },
  {
    title: 'Links do Site',
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'Coleções', href: '/colecoes' },
      { label: 'Saúde visual', href: '/saude-visual' },
      { label: 'Status do Pedido', href: ERP_URL, external: true },
    ],
  },
];
