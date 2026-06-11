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
  openingHours: string[]
  sameAs: string[]
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
}

// ─── Compliance Types ─────────────────────────────────────────────────────────

export interface ComplianceItem {
  regulation: string
  description: string
  applies_to: string[]
  mandatory_by?: string
}
