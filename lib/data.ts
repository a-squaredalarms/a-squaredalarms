import type {
  Service,
  Industry,
  Testimonial,
  NavItem,
  StatItem,
  TrustBadge,
  LocationPage,
  LocalBusinessSchema,
} from '@/types'

// ─── Brand ────────────────────────────────────────────────────────────────────

export const BRAND = {
  name: 'A-Squared Alarms',
  tagline: 'UK Safety Systems Specialists',
  siteUrl: 'https://a-squaredalarms.com',
  phone: '07778 387 989',
  email: 'info@a-squaredalarms.com',
  address: {
    line1: 'Suite RA01, 195–197 Wood Street',
    city: 'London',
    postcode: 'E17 3NU',
    full: 'Suite RA01, 195–197 Wood Street, London, E17 3NU',
  },
  social: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
  },
} as const

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: 'lockdown',
    title: 'Lockdown Alarm Systems',
    slug: 'lockdown-alarms',
    tagline: "Martyn's Law Ready",
    description:
      "Engineered for immediate threat response. Our lockdown systems deliver full-site alerting in under 3 seconds — purpose-built for schools, offices, healthcare, and public venues.",
    icon: 'shield-alert',
    href: '/lockdown-alarms',
    primaryCTA: 'Get a Site Survey',
    badge: 'Primary Service',
  },
  {
    id: 'fire',
    title: 'Temporary Fire Alarm Systems',
    slug: 'fire-alarms',
    tagline: 'Temporary Site Fire Protection',
    description:
      'Temporary and permanent fire detection built for construction sites and commercial premises. Rapid deployment, zero compromise on compliance.',
    icon: 'flame',
    href: '/fire-alarms',
    primaryCTA: 'Get a Quote',
  },
  {
    id: 'vape',
    title: 'Vape Detection Systems',
    slug: 'vape-detection',
    tagline: 'School-Grade Sensors',
    description:
      'Discreet, accurate vape and cannabis detection for schools, colleges, and commercial spaces. Real-time alerts to designated staff without disrupting daily operations.',
    icon: 'wind',
    href: '/vape-detection',
    primaryCTA: 'Learn More',
  },
  {
    id: 'automation',
    title: 'Access Control',
    slug: 'access-control',
    tagline: 'PAXTON ACCESS CONTROL',
    description:
      'Secure and flexible access control systems for doors, gates, and restricted areas. Manage staff permissions, audit trails, key cards, fobs, and remote access with professionally installed Paxton solutions.',
    icon: 'cpu',
    href: '/access-control',
    primaryCTA: 'Request a Quote',
  },
  {
    id: 'intrusion-protection',
    title: 'Intrusion Protection',
    slug: 'intrusion-protection',
    tagline: 'AJAX WIRELESS SECURITY',
    description:
      'Professional-grade intrusion protection for schools, offices, and commercial sites. Smart wireless detectors provide instant alerts for unauthorised access, break-ins, and suspicious activity with app-based control and real-time notifications.',
    icon: 'shield-alert',
    href: '/intrusion-protection',
    primaryCTA: 'Learn More',
  },
  {
    id: 'popalert',
    title: 'PopAlert',
    slug: 'popalert',
    tagline: 'Emergency Screen Alerts',
    description:
      'Instant on-screen emergency alerts for schools, offices, and public venues. Clear visual messaging that helps staff respond quickly during lockdowns or critical incidents.',
    icon: 'shield-alert',
    href: '/lockdown-alarms#popalert',
    primaryCTA: 'Learn More',
  },
]

// ─── Industries ───────────────────────────────────────────────────────────────

export const INDUSTRIES: Industry[] = [
  {
    id: 'schools',
    title: 'Schools & Colleges',
    slug: 'schools',
    description: "Protect students and staff with Martyn's Law-aligned lockdown systems.",
    icon: 'graduation-cap',
    href: '/industries/schools',
    stat: '2,400+',
    statLabel: 'UK schools at risk of inadequate lockdown procedures',
  },
  {
    id: 'construction',
    title: 'Construction Sites',
    slug: 'construction',
    description: 'Temporary fire detection and site security for active construction environments.',
    icon: 'hard-hat',
    href: '/industries/construction',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & GP Surgeries',
    slug: 'healthcare',
    description: 'Protect patients and staff with discreet, rapid-response alert systems.',
    icon: 'heart-pulse',
    href: '/industries/healthcare',
  },
  {
    id: 'commercial',
    title: 'Offices & Commercial',
    slug: 'commercial',
    description: 'Scalable safety solutions for single-floor suites to multi-site estates.',
    icon: 'building-2',
    href: '/industries/commercial',
  },
  {
    id: 'care-homes',
    title: 'Care Homes',
    slug: 'care-homes',
    description: 'Quiet, non-disruptive alerting systems designed for vulnerable occupants.',
    icon: 'users',
    href: '/industries/care-homes',
  },
  {
    id: 'worship',
    title: 'Places of Worship',
    slug: 'worship',
    description: 'Community safety planning and lockdown readiness for public gatherings.',
    icon: 'landmark',
    href: '/industries/worship',
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      "A-Squared gave us a system our staff actually understand. The installation was clean, the training thorough, and we now meet our Martyn's Law obligations with confidence.",
    author: 'Richard Clarke',
    role: 'Head of Operations',
    organisation: 'Walthamstow Academy',
    industry: 'school',
    rating: 5,
    verified: true,
  },
  {
    id: 't2',
    quote:
      'After a security incident at another site in our group, we had A-Squared audit all seven of our locations. They found gaps we didn\'t know existed and resolved them within two weeks.',
    author: 'Deborah Mensah',
    role: 'Facilities Director',
    organisation: 'Nexus Property Group',
    industry: 'commercial',
    rating: 5,
    verified: true,
  },
  {
    id: 't3',
    quote:
      'The vape sensors flagged an incident in our sixth form block on day one. The discretion and speed of the system was exactly what we needed.',
    author: 'James Ashworth',
    role: 'Deputy Headteacher',
    organisation: 'Southgate College',
    industry: 'school',
    rating: 5,
    verified: true,
  },
]

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS: StatItem[] = [
  { value: '500+', label: 'Systems Installed', sublabel: 'Across the UK' },
  { value: '<3s', label: 'Alert Activation Time', sublabel: 'Full-site coverage' },
  { value: '100%', label: 'Compliance Rate', sublabel: 'On all installations' },
  { value: '24/7', label: 'Support Available', sublabel: 'UK-based engineers' },
]

// ─── Trust Badges ─────────────────────────────────────────────────────────────

export const TRUST_BADGES: TrustBadge[] = [
  { label: "Martyn's Law Aligned", sublabel: "Protect Duty Ready", icon: "landmark" },
  { label: 'GDPR Compliant', sublabel: 'Data Protection', icon: 'lock' },
]

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Lockdown Alarm Systems', href: '/lockdown-alarms' },
      { label: 'Vape Detection Systems', href: '/vape-detection' },
      { label: 'Access Control', href: '/access-control' },
      { label: 'Intrusion Protection', href: '/intrusion-protection' },
      { label: 'Temporary Fire Alarm Systems', href: '/fire-alarms' },
    ],
  },
  {
    label: 'Industries',
    href: '#',
    children: [
      { label: 'Schools & Colleges', href: '/industries/schools' },
      { label: 'Construction Sites', href: '/industries/construction' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Commercial', href: '/industries/commercial' },
    ],
  },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Contact', href: '/contact' },
]

// ─── Location Pages ───────────────────────────────────────────────────────────

export const LOCATIONS: LocationPage[] = [
  {
    city: 'London',
    slug: 'london',
    region: 'Greater London',
    population: '9 million',
    coordinates: { lat: 51.5074, lng: -0.1278 },
    nearbyAreas: ['Walthamstow', 'Hackney', 'Tower Hamlets', 'Islington', 'Haringey'],
  },
  {
    city: 'Manchester',
    slug: 'manchester',
    region: 'Greater Manchester',
    population: '2.8 million',
    coordinates: { lat: 53.4808, lng: -2.2426 },
    nearbyAreas: ['Salford', 'Trafford', 'Stockport', 'Oldham', 'Bolton'],
  },
  {
    city: 'Birmingham',
    slug: 'birmingham',
    region: 'West Midlands',
    population: '2.6 million',
    coordinates: { lat: 52.4862, lng: -1.8904 },
    nearbyAreas: ['Solihull', 'Wolverhampton', 'Coventry', 'Walsall'],
  },
  {
    city: 'Leeds',
    slug: 'leeds',
    region: 'West Yorkshire',
    population: '800,000',
    coordinates: { lat: 53.8008, lng: -1.5491 },
    nearbyAreas: ['Bradford', 'Wakefield', 'Harrogate', 'York'],
  },
  {
    city: 'Bristol',
    slug: 'bristol',
    region: 'South West England',
    population: '470,000',
    coordinates: { lat: 51.4545, lng: -2.5879 },
    nearbyAreas: ['Bath', 'Weston-super-Mare', 'Swindon', 'Gloucester'],
  },
]

// ─── Local Business JSON-LD ───────────────────────────────────────────────────

export const LOCAL_BUSINESS_SCHEMA: LocalBusinessSchema = {
  name: 'A-Squared Alarms',
  url: 'https://a-squaredalarms.com',
  telephone: '+447778387989',
  email: 'info@a-squaredalarms.com',
  address: {
    streetAddress: 'Suite RA01, 195-197 Wood Street',
    addressLocality: 'London',
    addressRegion: 'London',
    postalCode: 'E17 3NU',
    addressCountry: 'GB',
  },
  geo: {
    latitude: 51.5857,
    longitude: -0.0149,
  },
  openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-13:00'],
  sameAs: [
    'https://www.facebook.com',
    'https://www.twitter.com',
    'https://www.youtube.com',
  ],
}
