/**
 * Structured data (schema.org JSON-LD) for the pages, so search and answer
 * engines can quote them accurately. Pass the result to `<Base jsonLd>`.
 * URLs are relative to the page's canonical origin, filled in by `abs`.
 */

export const ORG_NAME = 'Conflict Intelligence Training';

export const abs = (origin: string, path: string) => new URL(path, origin).href;

export function organizationJsonLd(origin: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': abs(origin, '/#organization'),
    name: ORG_NAME,
    url: abs(origin, '/'),
    description:
      'An online school and community for developing Conflict Intelligence (CIQ) through the Seven Levels Framework.',
    founder: {'@type': 'Person', name: 'Ian Renaud'},
    knowsAbout: ['Conflict Intelligence', 'Conflict resolution', 'Mediation', 'Conflict coaching', 'Seven Levels Framework'],
  };
}

export function faqJsonLd(items: {q: string; a: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {'@type': 'Answer', text: item.a},
    })),
  };
}

export function breadcrumbJsonLd(origin: string, trail: {name: string; path: string}[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: abs(origin, crumb.path),
    })),
  };
}
