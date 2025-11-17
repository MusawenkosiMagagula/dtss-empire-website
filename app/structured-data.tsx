export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DTSS&DE Empire',
    description: 'Comprehensive security services, cash loans, transport solutions, and food catering in Hazyview, Mpumalanga.',
    url: 'https://dtss-empire.co.za',
    telephone: '+27-76-173-0711',
    email: 'dtssanddde@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '05 NUMBI TRUST HAZYVIEW',
      addressLocality: 'Hazyview',
      addressRegion: 'Mpumalanga',
      postalCode: '1242',
      addressCountry: 'ZA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-25.0519',
      longitude: '31.1367'
    },
    areaServed: 'Hazyview, Mpumalanga and surrounding areas',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Business Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Security Services',
            description: '24/7 armed response, VIP protection, event security, access control systems',
            areaServed: 'Hazyview Mpumalanga'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cash Loans',
            description: 'Quick micro-loans with flexible repayment terms, emergency financial solutions',
            areaServed: 'Mpumalanga'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transport Services',
            description: 'Business logistics, personal transport, event transport, 24/7 availability',
            areaServed: 'Hazyview and surrounding areas'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Food Services',
            description: 'Premium catering for corporate events, special occasions, daily meal services',
            areaServed: 'Hazyview Mpumalanga'
          }
        }
      ]
    },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '$$'
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}