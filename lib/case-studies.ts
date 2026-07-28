import type { CaseStudy } from '@/types'

/**
 * Case studies published by Luminite, the manufacturer of the Alertex lockdown
 * range we install. These are the manufacturer's own write-ups of real
 * deployments — they are not A-Squared Alarms installations. Every entry links
 * back to the original so readers can verify the source.
 */

export const MANUFACTURER = {
  name: 'Luminite',
  brand: 'Alertex',
  caseStudiesUrl: 'https://alertex.co.uk/case-studies',
  siteUrl: 'https://alertex.co.uk',
} as const

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'the-piggott-school',
    organisation: 'The Piggott School',
    sector: 'All-Through School',
    location: 'Wargrave, near Reading, Berkshire',
    publishedAt: '2023-08-15',
    displayDate: '15 August 2023',
    excerpt:
      'A Church of England school for over 1,700 pupils aged 4 to 18 needed lockdown alerting that reached outdoor areas as well as indoor spaces, including the football pitch. Thirty-four wireless devices went in during 2021, with a further seven sounder/beacons added a year later.',
    system: 'Alertex wireless sounder/beacons and call points',
    scale: '34 devices, extended by 7 the following year',
    highlights: [
      'Mix of combined sounder/beacons, call points and external devices',
      'IP Bridge provides battery monitoring and email alerts',
      'Expanded a year later without reworking the original install',
    ],
    sourceUrl: 'https://alertex.co.uk/alertex-school-lockdown-system-installed-at-piggott-school.php',
    featured: true,
  },
  {
    id: 'archway-learning-trust',
    organisation: 'The Archway Learning Trust',
    sector: 'Multi-Academy Trust',
    location: 'Nottinghamshire and Derbyshire',
    publishedAt: '2023-07-20',
    displayDate: '20 July 2023',
    excerpt:
      'A Christian trust of primary and secondary schools plus a sixth form college, serving over 8,000 students, needed lockdown alerting for a temporary site that its own staff could put up. Twenty-three sounder/beacons and a master call point arrived pre-programmed and ready to mount.',
    system: 'Alertex wireless lockdown system',
    scale: '23 sounder/beacons and 1 master call point',
    highlights: [
      'Units pre-programmed with tone and decibel levels before delivery',
      'Simple enough for the trust’s own staff to install on a temporary site',
      'Scalable, so coverage grew alongside the trust’s expansion plans',
    ],
    sourceUrl:
      'https://alertex.co.uk/alertex-school-lockdown-system-installed-at-archway-learning-trust.php',
  },
  {
    id: 'teach-multi-academy-trust',
    organisation: 'TEACH Multi-Academy Trust',
    sector: 'Multi-Academy Trust',
    location: 'Canford Heath, Poole, Dorset',
    publishedAt: '2020-11-17',
    displayDate: '17 November 2020',
    excerpt:
      'A trust of four primary schools and a teacher training centre, with almost 1,500 pupils aged 4 to 11, wanted lockdown alerting without the cost of a hard-wired installation. A wireless mix of internal and external units was fitted by the trust’s own site managers.',
    system: 'Alertex wireless internal and external units',
    scale: '4 schools, almost 1,500 pupils',
    highlights: [
      'Blue flashing beacons keep the alert distinct from the fire alarm',
      '32 selectable sounds across internal and external units',
      'Fitted by site staff with no disruption to the school day',
    ],
    sourceUrl: 'https://alertex.co.uk/teach-multi-academy-trust-installs-alertex-lockdown-system.php',
  },
]

export function getFeaturedCaseStudy(): CaseStudy {
  const featuredStudy = CASE_STUDIES.find((study) => study.featured) ?? CASE_STUDIES[0]
  if (!featuredStudy) {
    throw new Error('CASE_STUDIES must contain at least one case study')
  }
  return featuredStudy
}
