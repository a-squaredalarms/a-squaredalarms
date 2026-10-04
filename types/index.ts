// ─── Service Types ───────────────────────────────────────────────────────────

export interface Service {
  id: string
  title: string
  slug: string
  tagline: string
  description: string
  icon: string
  href: string
  primaryCTA: string
  badge?: string
}

export interface ServiceFeature {
  label: string
  description: string
}

// ─── Testimonial Types ───────────────────────────────────────────────────────

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  organisation: string
  industry: 'school' | 'construction' | 'healthcare' | 'commercial' | 'government'
  rating: 1 | 2 | 3 | 4 | 5
  verified: boolean
}

// ─── Industry Types ───────────────────────────────────────────────────────────

export interface Industry {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  href: string
  stat?: string
  statLabel?: string
}

// ─── Location Types ───────────────────────────────────────────────────────────

export interface LocationSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
}

export interface LocationPage {
  city: string
  slug: string
  region: string
  population?: string
  coordinates: {
    lat: number
    lng: number
  }
  nearbyAreas?: string[]
  /** 'city' for major-city pages, 'county' for wider county coverage pages. */
  areaType?: 'city' | 'county'
  /** Unique opening paragraph. Keeps each page genuinely distinct. */
  intro?: string
  /** Area-specific body content. This is what stops pages being near-duplicates. */
  localContext?: LocationSection[]
  /** Building and site types typical of this area. */
  siteTypes?: string[]
  /** Local authorities covered, used for genuine local relevance. */
  authorities?: string[]
  /** Rendered as an accordion and emitted as FAQPage structured data. */
  faqs?: BlogFAQ[]
  /** Optional SEO overrides for areas where Search Console shows a specific demand (e.g. town names). */
  seoTitle?: string
  seoDescription?: string
  heading?: string
  lead?: string
}

// ─── CTA Types ────────────────────────────────────────────────────────────────

export type CTAVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type CTASize = 'sm' | 'md' | 'lg'

export interface CTAButton {
  label: string
  href: string
  variant: CTAVariant
  size?: CTASize
  icon?: string
  external?: boolean
  ariaLabel?: string
}

// ─── Form Types ───────────────────────────────────────────────────────────────

export interface QuoteFormData {
  serviceType: 'lockdown' | 'fire' | 'vape' | 'access-control' | 'intrusion-protection' | 'popalert' | ''
  siteType: string
  photos: File[]
  consent: boolean
  name: string
  email: string
  phone: string
  organisation: string
  message?: string
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

// ─── Navigation Types ─────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
  badge?: string
}

export interface NavGroup {
  label: string
  items: NavItem[]
}

// ─── SEO / Metadata Types ─────────────────────────────────────────────────────

export interface PageSEO {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  keywords?: string[]
  noIndex?: boolean
}

export interface LocalBusinessSchema {
  name: string
  url: string
  telephone: string
  email: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  openingHours: Array<{ days: string[]; opens: string; closes: string }>
}

export interface ServiceSchema {
  name: string
  description: string
  provider: string
  areaServed: string
  serviceType: string
  url: string
}

// ─── Stats / Social Proof ─────────────────────────────────────────────────────

export interface StatItem {
  value: string
  label: string
  sublabel?: string
}

export interface TrustBadge {
  label: string
  sublabel?: string
  icon: string
}

// ─── Blog Types ──────────────────────────────────────────────────────────────

export interface BlogSection {
  heading: string
  paragraphs: string[]
  /** Scannable points rendered as a checked list under the paragraphs. */
  bullets?: string[]
}

export interface BlogFAQ {
  question: string
  answer: string
}

/**
 * Side-by-side comparison rendered as a table. `columns` are the header cells
 * after the first (label) column, so each row's `cells` must match its length.
 */
export interface BlogComparison {
  title: string
  columns: string[]
  rows: Array<{ label: string; cells: string[] }>
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  image?: {
    src: string
    alt: string
  }
  category: string
  publishedAt: string
  displayDate: string
  readTime: string
  author: string
  featured?: boolean
  serviceHref: string
  serviceLabel: string
  keyTakeaways: string[]
  sections: BlogSection[]
  /** Short scannable summary shown above the article body. */
  atAGlance?: string[]
  /** Rendered as an accordion and emitted as FAQPage structured data. */
  faqs?: BlogFAQ[]
  comparison?: BlogComparison
  /** Renders the playable 32-tone sounder library after the article sections. */
  soundLibrary?: boolean
  /** Shorter title for the <title> tag, where the article title would truncate. */
  seoTitle?: string
  /** Shorter meta description, where the excerpt would truncate. */
  seoDescription?: string
}

// ─── Case Study Types ─────────────────────────────────────────────────────────

/**
 * A case study published by the system manufacturer (Luminite / Alertex).
 * These are not A-Squared installations — every entry links out to the
 * manufacturer's own write-up via `sourceUrl`.
 */
export interface CaseStudy {
  id: string
  organisation: string
  sector: string
  location: string
  publishedAt: string
  displayDate: string
  excerpt: string
  system: string
  scale: string
  highlights: string[]
  sourceUrl: string
  featured?: boolean
}

// ─── Compliance Types ─────────────────────────────────────────────────────────

export interface ComplianceItem {
  regulation: string
  description: string
  applies_to: string[]
  mandatory_by?: string
}
