import { siteConfig } from '@/config/site';

/**
 * JSON-LD `LocalBusiness` — alimenta resultados ricos no Google
 * (cartão de negócio com endereço, horários, telefone).
 */
export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'OpticalStore',
    name: siteConfig.name,
    image: `${siteConfig.url}/images/loja.jpg`,
    url: siteConfig.url,
    telephone: `+${siteConfig.contact.phone}`,
    email: siteConfig.contact.email,
    priceRange: 'R$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.number}`,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.contact.geo.lat,
      longitude: siteConfig.contact.geo.lng,
    },
    openingHoursSpecification: siteConfig.contact.businessHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requer innerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ContactPageJsonLd() {
  const contactUrl = `${siteConfig.url}/contato`;
  const mapQuery = encodeURIComponent(
    `${siteConfig.contact.address.street}, ${siteConfig.contact.address.number}, ${siteConfig.contact.address.city}`,
  );

  const data = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contato ${siteConfig.name}`,
    description:
      'Canal oficial de contato da Óticas Queiroz para dúvidas, reclamações e sugestões em Itapetinga.',
    url: contactUrl,
    mainEntity: {
      '@type': 'OpticalStore',
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: `+${siteConfig.contact.phone}`,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${siteConfig.contact.address.street}, ${siteConfig.contact.address.number}`,
        addressLocality: siteConfig.contact.address.city,
        addressRegion: siteConfig.contact.address.state,
        postalCode: siteConfig.contact.address.zip,
        addressCountry: siteConfig.contact.address.country,
      },
      hasMap: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
      sameAs: [siteConfig.social.instagram, siteConfig.social.whatsappLink],
    },
  };

  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requer innerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
