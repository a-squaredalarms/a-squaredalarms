import type { Metadata } from 'next'
import type { ServiceSchema, LocalBusinessSchema, LocationPage } from '@/types'
import { BRAND, LOCAL_BUSINESS_SCHEMA } from '@/lib/data'

// ─── Base Metadata ────────────────────────────────────────────────────────────

const BASE_URL = 'https://a-squaredalarms.com'
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-default.jpg`

/**
 * Trims a description to the length Google will actually display (~155 chars),
 * cutting at a sentence end where possible and a word boundary otherwise.
 * Prefer writing a short description; this is the safety net.
 */
export function clampDescription(text: string, max = 155): string {
  if (text.length <= max) return text

  const window = text.slice(0, max + 1)

  // Prefer ending on a complete sentence.
  const lastStop = Math.max(window.lastIndexOf('. '), window.lastIndexOf('? '))
  if (lastStop > max * 0.6) return window.slice(0, lastStop + 1).trim()

  const lastSpace = window.lastIndexOf(' ')
  return `${window.slice(0, lastSpace > 0 ? lastSpace : max).trim()}…`
}

export function buildMetadata({
  title,
  description,
  canonical,
  ogImage,
  keywords = [],
  noIndex = false,
}: {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string[]
  noIndex?: boolean
}): Metadata {
  const fullTitle = `${title} | A-Squared Alarms`

  return {
    // `absolute` opts out of the root layout's title template. Without it the
    // template appends the brand a second time on every nested route.
    title: { absolute: fullTitle },
    description,
    keywords: [
      ...keywords,
      'lockdown alarm UK',
      'Martyn\'s Law compliance',
      'temporary fire alarm system',
      'safety alarm installation',
      'vape detection school',
    ].join(', '),
    authors: [{ name: 'A-Squared Alarms' }],
    creator: 'A-Squared Alarms',
    publisher: 'A-Squared Alarms',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonical ?? `${BASE_URL}`,
    },
    openGraph: {
      type: 'website',
      locale: 'en_GB',
      url: canonical ?? BASE_URL,
      siteName: 'A-Squared Alarms',
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage ?? DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage ?? DEFAULT_OG_IMAGE],
    },
    other: {
      'geo.region': 'GB',
      'geo.placename': 'London, United Kingdom',
    },
  }
}

// ─── JSON-LD Generators ───────────────────────────────────────────────────────

export function buildLocalBusinessSchema(override?: Partial<LocalBusinessSchema>): string {
  const data = { ...LOCAL_BUSINESS_SCHEMA, ...override }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: data.name,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHoursSpecification: data.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours,
    })),
    sameAs: data.sameAs,
    priceRange: '££',
    currenciesAccepted: 'GBP',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  })
}

export function buildServiceSchema(service: ServiceSchema): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: service.provider,
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: service.areaServed,
    },
    serviceType: service.serviceType,
    url: service.url,
  })
}

export function buildLocationSchema(location: LocationPage): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `A-Squared Alarms — ${location.city}`,
    url: `${BASE_URL}/locations/${location.slug}`,
    telephone: BRAND.phone,
    email: BRAND.email,
    areaServed: {
      '@type': 'City',
      name: location.city,
      containedIn: {
        '@type': 'AdministrativeArea',
        name: location.region,
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    },
  })
}

/**
 * Organisation-level identity. Emitted once, in the root layout, so search
 * engines can associate the brand, logo and contact details with the domain.
 */
export function buildOrganizationSchema(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: BRAND.name,
    legalName: 'A-Squared (A2) Ltd',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo-dark.webp`,
    },
    description:
      "UK specialists in Martyn's Law-aligned lockdown alarm systems, temporary fire alarms, vape detection, access control and intrusion protection.",
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND.address.line1,
      addressLocality: BRAND.address.city,
      postalCode: BRAND.address.postcode,
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.phone,
      email: BRAND.email,
      contactType: 'sales',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  })
}

/**
 * Breadcrumb trail for a page. Pass the crumbs in order, excluding Home, which
 * is added automatically as the first item.
 */
export function buildBreadcrumbSchema(
  crumbs: Array<{ name: string; path: string }>,
): string {
  const items = [{ name: 'Home', path: '/' }, ...crumbs]

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path === '/' ? '' : crumb.path}`,
    })),
  })
}

export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  })
}

// ─── Location Page Metadata ───────────────────────────────────────────────────

export function buildLocationMetadata(location: LocationPage): Metadata {
  return buildMetadata({
    title: `Lockdown Alarms in ${location.city}`,
    description: clampDescription(
      `Lockdown alarms, temporary fire alarms and vape detection installed across ${location.city}. Free site survey and a written specification you can keep.`,
    ),
    canonical: `${BASE_URL}/locations/${location.slug}`,
    keywords: [
      `lockdown alarm ${location.city}`,
      `temporary fire alarm ${location.city}`,
      `alarm installation ${location.city}`,
      `Martyn's Law ${location.city}`,
      `safety systems ${location.region}`,
    ],
  })
}
