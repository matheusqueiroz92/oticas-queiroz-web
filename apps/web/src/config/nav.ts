export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNav: NavItem[] = [
  { label: 'Quem Somos', href: '/quem-somos' },
  { label: 'Nossa Equipe', href: '/nossa-equipe' },
  { label: 'Coleções', href: '/colecoes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
];

export const utilityNav: NavItem[] = [
  { label: 'Consultar pedido', href: '/consultar-pedido' },
  { label: 'Agendar consulta', href: '/agendar-consulta' },
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
      { label: 'Agendar Consulta', href: '/agendar-consulta' },
      { label: 'Status do Pedido', href: '/consultar-pedido' },
    ],
  },
];
