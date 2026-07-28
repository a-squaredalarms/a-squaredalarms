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
    areaType: 'city',
    authorities: [
      'Waltham Forest',
      'Hackney',
      'Tower Hamlets',
      'Islington',
      'Haringey',
      'Newham',
      'Redbridge',
      'Camden',
      'Southwark',
      'Lambeth',
    ],
    intro:
      'London sites present a particular combination of constraints: dense buildings on tight plots, a large proportion of Victorian and post-war stock, restricted vehicle access, and organisations operating across several sites in different boroughs. We plan installations around all of it.',
    siteTypes: [
      'Victorian primary schools on constrained inner-city plots',
      'Split-site secondaries operating across two or more addresses',
      'Listed and conservation-area buildings where intrusive work is restricted',
      'Multi-tenant commercial buildings with shared entrances',
      'Post-war blocks with limited service voids',
      'Sites with minimal outdoor space but busy public-facing frontages',
    ],
    localContext: [
      {
        heading: 'Why London buildings change the design',
        paragraphs: [
          'A large share of London’s school estate predates modern building services entirely. Victorian board schools, inter-war expansions and post-war infill blocks sit alongside each other on the same site, often with additions from every decade since. Running cable through that mix is slow, expensive and frequently disruptive.',
          'Conservation areas and listed status add a further layer. Where a building is protected, intrusive work carries consent requirements that can add months, and in some cases rule out the approach entirely. Wireless devices fixed to wall surfaces avoid most of this, which is why the majority of the London retrofits we specify are wireless.',
          'The other recurring factor is plot density. Many London sites have buildings tight against boundaries, shared walls with neighbouring properties, and no space for external containment. That removes options a suburban site would take for granted.',
        ],
      },
      {
        heading: 'Access, parking and getting the work done',
        paragraphs: [
          'The logistics of working in London genuinely affect the programme. Controlled parking zones, restricted loading hours, congestion and emission charges, and narrow access all shape how much can be achieved in a working day.',
          'We plan around this rather than absorbing it into the schedule and hoping. That usually means fewer, better-planned visits with equipment brought in one delivery, rather than the in-and-out pattern that works on a site with a car park.',
          'For schools inside the ULEZ and congestion charge zones, and for sites with only on-street loading, telling us at survey stage means the programme reflects reality. It is the single most common reason a London installation runs longer than estimated when it has not been discussed up front.',
        ],
      },
      {
        heading: 'Multi-site trusts across boroughs',
        paragraphs: [
          'London trusts frequently operate across several boroughs, which introduces a coordination problem that single-site organisations do not have. Different local authorities, different building stock, and staff who move between schools during the week.',
          'That mobility is exactly why the alert should mean the same thing at every site. A teacher covering at a different school on a Thursday should not have to remember which signal that particular building uses.',
          'We approach trust work by agreeing the standard once, then surveying each site against it. Device counts differ because the buildings differ, but the signal, the expected staff response and the all-clear stay identical across the estate.',
        ],
      },
      {
        heading: 'Outdoor space in a dense city',
        paragraphs: [
          'London schools often have less outdoor space than schools elsewhere, but what they have is used intensively and is frequently overlooked in alerting design. A rooftop playground, a small hard-surfaced yard between buildings, or a play area separated from the main block by a service road all need to be reachable.',
          'Enclosed urban yards also behave differently acoustically. Sound reflects off surrounding buildings in ways that can be helpful or produce dead spots, which is one reason we assess outdoor areas on site rather than from a plan.',
          'Where a site sits on a busy road, ambient traffic noise sets the baseline that any outdoor alert has to carry over. That is a specification question, and it is one that gets answered badly when nobody has stood in the space and listened.',
        ],
      },
      {
        heading: 'Split sites and buildings shared with others',
        paragraphs: [
          'London has an unusually high number of schools operating across two or more addresses, sometimes separated by a public road, and organisations occupying part of a building rather than all of it. Both arrangements complicate what securing the site actually means.',
          'For a split site, the first question is whether an alert raised at one address should sound at the other. Usually it should, because staff and pupils move between them, but it needs deciding rather than assuming, and it affects how the system is configured.',
          'For shared buildings, the questions are procedural. Who else is alerted, who controls the entrance, and what happens in circulation areas nobody exclusively occupies. Landlord permission for common parts is frequently the longest lead item, so it is worth starting early. Where entrance control is part of the answer, our access control systems are usually specified alongside the alert.',
        ],
      },
      {
        heading: 'Construction and short-term sites in the capital',
        paragraphs: [
          'London has a constant volume of construction, refurbishment and temporary accommodation, including school sites operating from modular buildings while permanent works proceed. Those sites need fire cover before the permanent system exists.',
          'Wireless temporary fire alarm systems are designed for exactly this: fast to deploy, easy to reconfigure as a site changes phase, and removable when the work finishes. On a constrained London site where storage and access are limited, that flexibility matters more than it would elsewhere.',
          'The same logic applies to security out of hours. Sites holding materials and plant in dense residential areas are exposed when nobody is present, which is where wireless intrusion protection tends to earn its place on a temporary programme.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of London do you cover?',
        answer:
          'We work across Greater London, including all inner and outer boroughs. Our base in Walthamstow means north and east London are closest, but we install across the whole of the capital and into the surrounding counties.',
      },
      {
        question: 'Can you work in a listed or conservation-area building?',
        answer:
          'In most cases yes, and it is one of the main reasons we specify wireless systems in London. Because devices are surface-fixed rather than requiring cable routes through the structure, the work is far less intrusive. Any consents remain your responsibility, and we will tell you honestly if we think an approach needs one.',
      },
      {
        question: 'How do you handle parking and access restrictions?',
        answer:
          'We plan around them. Tell us about controlled parking, restricted loading hours, congestion or emission zones and shared access at survey stage, and the programme will reflect it rather than slipping once work starts.',
      },
      {
        question: 'Do you work with multi-academy trusts across several boroughs?',
        answer:
          'Yes, and it is a common arrangement in London. We agree a trust-wide standard once, then survey each site against it, so the signal and staff response stay consistent even though device counts differ between buildings.',
      },
      {
        question: 'Can you install during term time in a London school?',
        answer:
          'Usually yes with a wireless system. Work is sequenced area by area so disruption stays local, and the only genuinely noisy stage is commissioning, which we schedule around your timetable and exam periods.',
      },
    ],
  },
  {
    city: 'Manchester',
    slug: 'manchester',
    region: 'Greater Manchester',
    population: '2.8 million',
    coordinates: { lat: 53.4808, lng: -2.2426 },
    nearbyAreas: ['Salford', 'Trafford', 'Stockport', 'Oldham', 'Bolton'],
    areaType: 'city',
    authorities: [
      'Manchester',
      'Salford',
      'Trafford',
      'Stockport',
      'Oldham',
      'Bolton',
      'Bury',
      'Rochdale',
      'Tameside',
      'Wigan',
    ],
    intro:
      'Greater Manchester spans ten boroughs and an unusually wide mix of building stock, from Victorian mill-era schools to buildings completed in the last five years. Coverage that works in one often needs a different approach in the other.',
    siteTypes: [
      'Victorian and Edwardian schools with solid masonry construction',
      'Post-war blocks across the outer boroughs',
      'Recent new-build academies with open-plan teaching spaces',
      'Regenerated city-centre commercial and mixed-use buildings',
      'Large secondary sites with extensive playing fields',
      'Trusts operating across several Greater Manchester boroughs',
    ],
    localContext: [
      {
        heading: 'Ten boroughs, very different buildings',
        paragraphs: [
          'Greater Manchester is not one estate but ten, and the differences matter more than they might appear. Solid Victorian masonry in parts of Manchester and Salford behaves quite differently from the lightweight partitions of a recent academy build in Trafford or Wigan.',
          'Solid construction blocks sound effectively, which usually means more devices to achieve the same coverage. Open-plan modern builds need fewer devices but raise different questions about how you secure spaces that were designed to flow into one another.',
          'This is the practical reason we survey each site rather than pricing from floor area. Two schools of identical size in different boroughs can need noticeably different specifications, and neither figure would be wrong.',
        ],
      },
      {
        heading: 'Regeneration and mixed-use sites',
        paragraphs: [
          'Substantial parts of Manchester and Salford have been rebuilt or converted over the past two decades, and that has produced a lot of mixed-use buildings where an organisation occupies part of a larger structure.',
          'Those sites raise procedural questions before technical ones. Who is alerted, who decides, whether neighbouring occupiers are included, and how shared entrances and circulation areas are handled. The answers shape the specification more than the building does.',
          'Where a landlord controls common parts, it is worth establishing early what can be fitted where. That permission is frequently the longest lead item on a mixed-use installation, and it is easier to start before the survey than after.',
        ],
      },
      {
        heading: 'Trusts operating across borough boundaries',
        paragraphs: [
          'Greater Manchester has a high concentration of multi-academy trusts, many of them running schools in more than one borough. Central teams and cover staff move between sites regularly, which makes consistency of alerting more valuable here than in a single-site organisation.',
          'The approach we would suggest is the same one that works elsewhere: agree the trust standard first, then let each site’s survey determine device counts. What travels between schools is the meaning of the signal, not the layout.',
          'Phasing tends to matter for trusts of this size. Few can fund every school at once, and sequencing by assessed risk rather than by convenience produces a defensible order that a board can approve in one decision.',
        ],
      },
      {
        heading: 'Playing fields and outdoor coverage',
        paragraphs: [
          'Many Greater Manchester secondary sites have substantial playing fields, and outdoor coverage is where specifications most often fall short. An alert that works throughout the building may not reach a class at the far end of a pitch.',
          'External units rated for weather and specified for open ground are the answer, and they need positioning based on where people actually are rather than on the building footprint. That includes the boundaries of the field, not just its near edge.',
          'It is worth deciding on outdoor coverage at the start rather than adding it later. It is entirely possible to extend a wireless system afterwards, but pricing it from the outset gives you a budget figure that holds.',
        ],
      },
      {
        heading: 'Construction and refurbishment across the region',
        paragraphs: [
          'Greater Manchester has sustained levels of construction and school refurbishment, and buildings under works frequently lose the fire detection they normally rely on. That gap has to be covered while the work proceeds.',
          'Temporary fire alarm systems are built for this. Wireless call points and sounders can be positioned as the site requires, moved as phases change, and removed when the permanent system is commissioned. On a live school undergoing works, that adaptability is the whole point.',
          'It is worth planning this alongside any lockdown work rather than treating them as separate projects. Where a school is having building work anyway, doing both at once usually reduces total disruption and makes better use of the access you already have.',
        ],
      },
      {
        heading: 'Vape detection in Greater Manchester schools',
        paragraphs: [
          'Vaping in school toilets has become one of the most consistently raised safeguarding issues across the region, and it is difficult to address through supervision alone because the spaces involved are ones staff cannot monitor directly.',
          'Vape detection systems alert staff when vapour is detected, without cameras and without compromising privacy in spaces where that matters. The value is not the alert itself but the pattern it reveals, which tells you where and when the problem actually occurs rather than where you assume it does.',
          'Most schools that deploy this find the deterrent effect matters more than the enforcement. Once pupils know a space is monitored, use tends to move or reduce, and the data helps target pastoral work rather than blanket restrictions.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which areas of Greater Manchester do you cover?',
        answer:
          'All ten boroughs: Manchester, Salford, Trafford, Stockport, Oldham, Bolton, Bury, Rochdale, Tameside and Wigan, along with the surrounding areas of Cheshire and Lancashire.',
      },
      {
        question: 'Do older Manchester school buildings need more devices?',
        answer:
          'Often yes. Solid Victorian masonry blocks sound far more effectively than modern lightweight partitions, so achieving the same audibility usually takes more devices. It is one of the clearest examples of why device counts come from a survey rather than from floor area.',
      },
      {
        question: 'Can you cover playing fields and outdoor areas?',
        answer:
          'Yes, using external units specified for open ground and weather exposure. We assess outdoor areas on site, because how far sound carries across a field depends on boundaries, surrounding buildings and background noise.',
      },
      {
        question: 'Do you work with trusts across multiple boroughs?',
        answer:
          'Yes. We agree a single trust-wide standard for the signal and staff response, then survey each school individually so device counts suit the actual building. That keeps consistency for staff who work across sites.',
      },
      {
        question: 'We occupy part of a larger building. Does that complicate things?',
        answer:
          'It adds procedural questions rather than technical ones: who is alerted, who decides, and what happens in shared areas. Landlord permission for common parts is usually the longest lead item, so it is worth starting that conversation early.',
      },
    ],
  },
  {
    city: 'Birmingham',
    slug: 'birmingham',
    region: 'West Midlands',
    population: '2.6 million',
    coordinates: { lat: 52.4862, lng: -1.8904 },
    nearbyAreas: ['Solihull', 'Wolverhampton', 'Coventry', 'Walsall'],
    areaType: 'city',
    authorities: [
      'Birmingham',
      'Solihull',
      'Wolverhampton',
      'Coventry',
      'Walsall',
      'Dudley',
      'Sandwell',
    ],
    intro:
      'Birmingham operates one of the largest school estates of any local authority in the country, with a building stock weighted heavily towards post-war and 1960s construction. That mix shapes what a workable lockdown system looks like here.',
    siteTypes: [
      'Large 1960s and 1970s school blocks with long corridor runs',
      'Extensive single-storey primary sites spread across a plot',
      'Sites with multiple detached buildings and temporary classrooms',
      'Industrial and light-manufacturing premises across the Black Country',
      'Large sixth form and further education campuses',
      'Faith schools and community buildings with significant out-of-hours use',
    ],
    localContext: [
      {
        heading: 'A large estate with recognisable building types',
        paragraphs: [
          'Birmingham and the wider West Midlands have a school estate weighted towards post-war construction, and those buildings share features that directly affect alerting design. Long corridor runs, repeated classroom blocks, and single-storey primaries spread horizontally across a site rather than stacked vertically.',
          'Horizontal spread is the significant one. A single-storey primary covering a large footprint needs devices distributed across that footprint, because sound does not travel the length of a building through a series of closed classroom doors.',
          'Detached and temporary classrooms are also common across the city, and they are the areas most frequently left out of a specification. A mobile classroom at the edge of a site is exactly where an indoor alert is least likely to reach.',
        ],
      },
      {
        heading: 'Working across the Black Country',
        paragraphs: [
          'Beyond Birmingham itself, Sandwell, Dudley, Walsall and Wolverhampton include substantial industrial and light-manufacturing premises alongside their school estates. Those sites raise different questions from a school.',
          'Background noise is the main one. In a workshop or production environment, an alert has to carry over machinery, which usually means a combination of higher-output sounders and visual indicators rather than relying on sound alone.',
          'Shift patterns matter too. A site running more than one shift needs alerting that works at three in the morning as reliably as at midday, and a decision-making chain that does not assume daytime management presence.',
        ],
      },
      {
        heading: 'Large campuses and further education',
        paragraphs: [
          'The region has a number of large sixth form and further education campuses, and these combine the hardest features of several site types: substantial footprints, independent adult learners moving between buildings, and significant public access.',
          'Students who are not with a member of staff at all times need to know what to do themselves, which shifts the balance towards spoken announcements rather than tones. A voice instruction requires no prior training to act on.',
          'Public access adds to that. Where a campus hosts community provision, evening classes or public-facing services, the people on site at any moment may include a significant number who have never seen the procedure.',
        ],
      },
      {
        heading: 'Out-of-hours and community use',
        paragraphs: [
          'Birmingham has a high level of community use of school and faith buildings, with halls and rooms in use most evenings and weekends. This is consistently the most under-planned part of a lockdown procedure.',
          'The people present during a letting are typically a caretaker and a hirer, with no leadership presence and often no knowledge of the site’s procedures. If the alert cannot be raised or understood in those hours, the coverage is partial regardless of how good it is during the school day.',
          'The fix is usually procedural rather than technical. Decide who holds responsibility during lettings, make sure they can raise an alert, and put a short instruction in the hire agreement.',
        ],
      },
      {
        heading: 'Entrance control on large sites',
        paragraphs: [
          'Many West Midlands school sites have several entrances, a legacy of buildings added over decades, and controlling who comes in is harder when there is more than one way to do it. That makes access control a natural companion to lockdown alerting.',
          'The two work together rather than overlapping. An alert tells everyone a lockdown is underway; access control determines whether someone can get through a door in the first place. Sites that specify both usually find the procedural conversation becomes simpler, because securing the building stops depending entirely on staff physically locking things.',
          'It is worth reviewing entrances at the same time as the alerting survey. The same walk that identifies where devices are needed will usually identify which doors are genuinely controlled and which are propped open every lunchtime.',
        ],
      },
      {
        heading: 'Construction sites across the West Midlands',
        paragraphs: [
          'The region has a high volume of construction and industrial refurbishment, and any site where the permanent fire system is absent or isolated needs interim cover that actually reaches everyone working there.',
          'Wireless temporary fire alarm systems suit this because they can be positioned wherever work is happening and moved as the site progresses. On large or phased sites, that means coverage tracks the work rather than being installed once and slowly becoming irrelevant.',
          'Out-of-hours security is the related question. Sites holding plant and materials overnight across Sandwell, Dudley and Walsall are exposed in the same way any unoccupied commercial site is, and wireless intrusion protection can be deployed and removed on the same timescale as the fire cover.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of the West Midlands do you cover?',
        answer:
          'Birmingham, Solihull, Wolverhampton, Coventry, Walsall, Dudley and Sandwell, along with the surrounding areas of Warwickshire, Staffordshire and Worcestershire.',
      },
      {
        question: 'Can you cover detached and temporary classrooms?',
        answer:
          'Yes, and it is important that you do. Mobile and detached classrooms are the areas most often left out of a specification and the least likely to hear an alert from the main building. Wireless devices cover them without needing cable run across the site.',
      },
      {
        question: 'Do you work with industrial premises as well as schools?',
        answer:
          'Yes. Industrial sites need alerting specified for higher background noise, which usually means combining higher-output sounders with visual indicators, and a decision-making chain that works across shift patterns.',
      },
      {
        question: 'How do you handle large single-storey primary sites?',
        answer:
          'Devices are distributed across the footprint rather than concentrated centrally, because sound does not carry the length of a building through closed classroom doors. Large horizontal sites often need more devices than their floor area suggests.',
      },
      {
        question: 'What about buildings used by the community in the evenings?',
        answer:
          'This needs planning explicitly. Decide who is responsible during lettings, make sure that person can raise the alert, and include a short instruction for hirers. It is the most commonly missed element of a school lockdown plan.',
      },
    ],
  },
  {
    city: 'Leeds',
    slug: 'leeds',
    region: 'West Yorkshire',
    population: '800,000',
    coordinates: { lat: 53.8008, lng: -1.5491 },
    nearbyAreas: ['Bradford', 'Wakefield', 'Harrogate', 'York'],
    areaType: 'city',
    authorities: ['Leeds', 'Bradford', 'Wakefield', 'Kirklees', 'Calderdale', 'Harrogate', 'York'],
    intro:
      'West Yorkshire covers a wide spread of site types, from dense inner-city schools in Leeds and Bradford to village primaries on the rural fringe. The distances involved make coverage planning and maintenance access a genuine consideration.',
    siteTypes: [
      'Inner-city primaries and secondaries in Leeds and Bradford',
      'Village and rural primaries with small staff teams',
      'Large secondary sites with extensive grounds',
      'Converted stone-built schools with solid construction',
      'Business park and out-of-town commercial premises',
      'Trusts spanning both urban and rural schools',
    ],
    localContext: [
      {
        heading: 'Urban and rural sites in the same county',
        paragraphs: [
          'West Yorkshire contains a wider spread of site types than most regions. A large inner-city Leeds secondary and a two-form village primary on the edge of the Dales are both routine here, and they need quite different thinking.',
          'Rural and village schools tend to have small staff teams, which changes the trigger question significantly. Where a site has three or four adults on the premises, restricting who can raise an alert to a senior role creates a gap almost immediately.',
          'They also tend to have larger outdoor areas relative to their building, and greater distances between buildings. That usually means external units and, in some cases, extending coverage further from the main block than a comparable urban site would need.',
        ],
      },
      {
        heading: 'Stone construction and older buildings',
        paragraphs: [
          'Much of the older school and civic estate across West Yorkshire is stone built, with thick solid walls that behave very differently from brick cavity or modern partition construction.',
          'Solid stone is extremely effective at blocking sound. In practice that means an alert in a corridor may be barely audible in the rooms off it, and coverage has to be assessed room by room rather than assumed from a central position.',
          'These buildings are also among the least suited to cable routes, both because of the construction itself and because many are locally significant or listed. Surface-fixed wireless devices avoid most of that difficulty.',
        ],
      },
      {
        heading: 'Distance, travel and maintenance access',
        paragraphs: [
          'Coverage across West Yorkshire involves genuine travel. Leeds, Bradford, Wakefield, Kirklees and Calderdale are distinct areas, and a trust with schools in several of them has a maintenance and support problem as well as an installation one.',
          'This is where central monitoring earns its place. A system that reports device and battery status remotely means the position across every site is visible without anyone driving between them, which matters far more here than in a compact urban estate.',
          'For phased rollouts, it also makes sense to group sites geographically where possible, so a single visit can cover more than one school and the programme is not dictated entirely by travel.',
        ],
      },
      {
        heading: 'Small schools and thin staffing',
        paragraphs: [
          'Small primaries face a version of the lockdown problem that larger schools do not. With few adults on site, the person who spots a problem is frequently the only person nearby, and there may be no realistic prospect of finding someone more senior first.',
          'For these sites, portable triggers matter more than fixed call points alone. A member of staff supervising outdoors or working in a detached room needs to be able to raise the alert from where they are.',
          'The all-clear needs equal thought. Where there is no deputy on site, the procedure needs to say what happens if the person who would normally give it is the one dealing with the incident.',
        ],
      },
      {
        heading: 'Commercial and business park premises',
        paragraphs: [
          'Beyond the school estate, West Yorkshire has substantial business park and out-of-town commercial development across Leeds, Bradford and Wakefield. Those sites face a different version of the same problem.',
          'Offices tend to need fewer devices than schools because the spaces are larger and more open, but they raise harder procedural questions. Who decides, who is responsible for visitors, and what happens in a building where several organisations share an entrance.',
          'Out-of-hours exposure is usually the more immediate concern for commercial premises, and intrusion protection is often the first system these sites specify. Where a building is empty overnight and at weekends, wireless detection gives cover without the cabling a traditional system would need.',
        ],
      },
      {
        heading: 'Planning around the Yorkshire school calendar',
        paragraphs: [
          'Term dates vary between West Yorkshire authorities, and for a trust operating across Leeds, Bradford and Kirklees that means the available installation windows do not always line up. It is a scheduling problem more than a technical one.',
          'The practical answer is to sequence sites across the year rather than compressing everything into one holiday. That spreads the work, means each handover gets proper attention, and avoids competing with yourself for the same weeks.',
          'Travel between sites makes this more pronounced here than in a compact urban estate. Grouping schools geographically within each phase means fewer journeys and more time on site, which usually shortens the overall programme.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Yorkshire do you cover?',
        answer:
          'Leeds, Bradford, Wakefield, Kirklees and Calderdale across West Yorkshire, plus Harrogate, York and the surrounding North Yorkshire areas.',
      },
      {
        question: 'Do you work with small village primaries?',
        answer:
          'Yes, and they need a slightly different approach. With small staff teams, portable triggers matter more than fixed call points alone, and the procedure needs to account for there being no deputy on site.',
      },
      {
        question: 'How does stone construction affect coverage?',
        answer:
          'Solid stone blocks sound very effectively, so an alert in a corridor may be barely audible inside the rooms off it. Coverage on stone-built sites has to be assessed room by room rather than assumed from a central sounder.',
      },
      {
        question: 'We have schools spread across West Yorkshire. How does maintenance work?',
        answer:
          'Central monitoring is the practical answer. It reports device and battery status remotely, so you can see the position across every site without travelling between them. On a geographically spread estate that saves considerable time.',
      },
      {
        question: 'Can you cover large school grounds?',
        answer:
          'Yes, with external units positioned according to where people actually are, including the far boundaries of playing fields rather than just the area nearest the building.',
      },
    ],
  },
  {
    city: 'Bristol',
    slug: 'bristol',
    region: 'South West England',
    population: '470,000',
    coordinates: { lat: 51.4545, lng: -2.5879 },
    nearbyAreas: ['Bath', 'Weston-super-Mare', 'Swindon', 'Gloucester'],
    areaType: 'city',
    authorities: [
      'Bristol',
      'Bath and North East Somerset',
      'South Gloucestershire',
      'North Somerset',
      'Gloucestershire',
      'Wiltshire',
    ],
    intro:
      'Bristol and the wider South West include a high proportion of Georgian and Victorian buildings, extensive conservation areas, and sites built across steeply sloping ground. All three affect how a lockdown system gets specified.',
    siteTypes: [
      'Georgian and Victorian buildings in conservation areas',
      'Schools built across sloping and split-level sites',
      'Converted period properties in educational or office use',
      'Large further and higher education campuses',
      'Business park premises across South Gloucestershire',
      'Rural primaries across Somerset and Wiltshire',
    ],
    localContext: [
      {
        heading: 'Period buildings and conservation constraints',
        paragraphs: [
          'Bristol and Bath contain some of the most extensive Georgian and Victorian building stock in the country, much of it in conservation areas and a significant proportion listed. A large number of schools, colleges and offices occupy those buildings.',
          'The constraint this creates is straightforward: intrusive work is difficult, sometimes requires consent, and occasionally is not permitted at all. Cable routes through protected fabric are exactly the kind of intervention that attracts scrutiny.',
          'Surface-fixed wireless devices sidestep most of this, which is why they dominate our specifications in this part of the country. Any consent requirements remain the building owner’s responsibility, and we will say plainly if we think an approach would need one.',
        ],
      },
      {
        heading: 'Split-level and sloping sites',
        paragraphs: [
          'Bristol’s topography produces a lot of sites built across changes in level. Buildings connected by external steps, playgrounds on a different level from the entrance, and blocks that are single storey on one side and two on the other are all common.',
          'Level changes complicate alerting because they interrupt the assumption that a floor is a continuous space. Two areas on the same nominal floor may be acoustically separate, and an alert in one may not carry to the other.',
          'They also affect the procedural side. Where staff need to move people to a safer area, the route may involve external steps or a level change that is not obvious from a plan, which is worth walking rather than assuming.',
        ],
      },
      {
        heading: 'Education campuses and public access',
        paragraphs: [
          'The city has a substantial further and higher education presence, and those campuses combine several difficult characteristics: multiple buildings, independent adult learners, significant public footfall and, frequently, buildings distributed across a city-centre area rather than a single enclosed site.',
          'Where a campus is not enclosed, the notion of securing the site is different from a school with a boundary and a single controlled entrance. The procedure needs to reflect what is actually achievable building by building.',
          'Voice announcements tend to be more valuable in these environments than tones, because a large proportion of the people present at any moment will never have received a briefing.',
        ],
      },
      {
        heading: 'Covering the wider South West',
        paragraphs: [
          'Beyond Bristol itself, the region extends across Bath and North East Somerset, South Gloucestershire, North Somerset, Wiltshire and Gloucestershire, with a mix of market town schools, rural primaries and business park premises.',
          'Rural sites in this region face the same considerations as elsewhere: small staff teams, larger outdoor areas relative to the building, and greater distance from support. Portable triggers and outdoor coverage matter proportionally more.',
          'For organisations operating across the region, monitoring again does the heavy lifting on maintenance, because it removes the need to physically visit sites simply to confirm that everything is working.',
        ],
      },
      {
        heading: 'Vape detection and safeguarding',
        paragraphs: [
          'Schools across Bristol and the surrounding authorities raise vaping as a persistent safeguarding concern, and it is one of the harder problems to address because it happens in exactly the spaces staff cannot supervise directly.',
          'Vape detection alerts staff when vapour is detected in a monitored space, without cameras and without compromising privacy where privacy is required. What most schools find valuable is not the individual alert but the pattern, which shows where and when it is actually happening.',
          'That evidence tends to change the response. Rather than blanket restrictions on toilet access, which create their own safeguarding problems, schools can target pastoral work and supervision at the specific times and places the data identifies.',
        ],
      },
      {
        heading: 'Temporary sites and buildings under works',
        paragraphs: [
          'Refurbishment of period buildings is common across Bristol and Bath, and works of that kind frequently isolate or remove the permanent fire detection for extended periods. That gap needs covering while the building remains partly in use.',
          'Temporary fire alarm systems are designed for this, and their wireless nature is doubly useful in protected buildings where fixing anything permanent is restricted. Devices can be positioned where the work requires, moved between phases, and removed entirely at the end.',
          'Where a site is unoccupied overnight during works, holding tools, materials and plant, intrusion protection can be deployed on the same temporary basis. Both systems come out when the building returns to normal use.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which areas of the South West do you cover?',
        answer:
          'Bristol, Bath and North East Somerset, South Gloucestershire and North Somerset, extending into Gloucestershire, Wiltshire and Somerset.',
      },
      {
        question: 'Can you install in a listed Georgian building?',
        answer:
          'In most cases yes. Wireless devices are surface-fixed rather than requiring cable routes through protected fabric, which makes them far better suited to period buildings. Any listed building or conservation consents remain the owner’s responsibility.',
      },
      {
        question: 'How do split-level sites affect coverage?',
        answer:
          'Level changes interrupt the assumption that a floor is one continuous space. Two areas on the same nominal level can be acoustically separate, so coverage has to be assessed by walking the site rather than reading a plan.',
      },
      {
        question: 'Do you work with colleges and university buildings?',
        answer:
          'Yes. Campuses with independent adult learners and public access usually benefit from voice announcements rather than tones alone, because many people present will never have had a briefing.',
      },
      {
        question: 'Do you cover rural schools outside Bristol?',
        answer:
          'Yes, across Somerset, Wiltshire and Gloucestershire. Rural sites typically need more emphasis on portable triggers and outdoor coverage, because staff teams are smaller and grounds are larger relative to the building.',
      },
    ],
  },
  {
    city: 'Essex',
    slug: 'essex',
    region: 'East of England',
    coordinates: { lat: 51.7343, lng: 0.4691 },
    nearbyAreas: ['Chelmsford', 'Colchester', 'Basildon', 'Southend-on-Sea', 'Harlow', 'Brentwood'],
    areaType: 'county',
    authorities: [
      'Chelmsford',
      'Colchester',
      'Basildon',
      'Southend-on-Sea',
      'Thurrock',
      'Harlow',
      'Brentwood',
      'Epping Forest',
      'Braintree',
      'Tendring',
    ],
    intro:
      'Essex covers an unusually broad range in a single county: Thames Gateway industry, dense commuter towns, coastal communities and genuinely rural villages in the north. Coverage that suits one rarely transfers unchanged to another.',
    siteTypes: [
      'Large secondary schools in Chelmsford, Colchester and Basildon',
      'Coastal schools and community buildings around Southend and Tendring',
      'Thames Gateway industrial and distribution premises',
      'Rural primaries across Braintree, Uttlesford and north Essex',
      'New-build housing estate schools serving expanding commuter towns',
      'Business park and office premises along the M11 and A12 corridors',
    ],
    localContext: [
      {
        heading: 'One county, several different estates',
        paragraphs: [
          'Essex behaves like several counties at once. Thurrock and the Thames Gateway are heavily industrial, Chelmsford and Brentwood are dense commuter towns, Tendring and the coast have their own character, and the north of the county is properly rural.',
          'That matters because the design questions differ. An industrial site near Grays needs alerting that carries over machinery noise. A village primary near Saffron Walden needs portable triggers because there are four adults on site. Neither approach suits the other.',
          'The practical consequence is that we survey rather than apply a county-wide template, and organisations operating across Essex should expect their sites to need genuinely different specifications.',
        ],
      },
      {
        heading: 'Growth areas and new-build schools',
        paragraphs: [
          'Essex has sustained housing growth, and with it a steady stream of new and expanded schools. New-build sites are usually straightforward to cover, with lightweight construction and open layouts requiring fewer devices than older stock.',
          'The harder cases are schools expanding onto existing sites, where a modern block is bolted onto a Victorian or post-war original. Those junctions between old and new construction are where coverage most often breaks down, because a device count based on the new building does not reflect the old one.',
          'Temporary and modular classrooms are common during expansion phases, and they are the areas most frequently missed. A wireless system covers them without needing cable run across a site that is still changing.',
        ],
      },
      {
        heading: 'Industrial and distribution premises',
        paragraphs: [
          'The Thames Gateway and the A13 corridor hold a significant concentration of warehousing, distribution and light industrial premises. These sites raise different questions from schools and offices.',
          'Background noise is the first. An alert has to carry over plant and vehicle movement, which usually means combining higher-output sounders with visual indicators rather than relying on sound alone.',
          'Shift working is the second. A site operating around the clock needs a decision-making chain that does not assume daytime management presence, and out-of-hours intrusion protection is frequently specified alongside the alerting.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Essex do you cover?',
        answer:
          'The whole county, including Chelmsford, Colchester, Basildon, Southend-on-Sea, Thurrock, Harlow, Brentwood, Epping Forest, Braintree and Tendring, along with the surrounding areas of Suffolk and east London.',
      },
      {
        question: 'Do you cover rural schools in north Essex?',
        answer:
          'Yes. Rural primaries typically need more emphasis on portable triggers, because small staff teams mean the person who spots a problem is often the only adult nearby, and on outdoor coverage because grounds are larger relative to the building.',
      },
      {
        question: 'Can you work with industrial and warehouse sites?',
        answer:
          'Yes. Industrial premises need alerting specified for higher background noise, usually combining louder sounders with visual indicators, plus a procedure that works across shift patterns rather than assuming daytime management.',
      },
      {
        question: 'We are expanding our school. Should we wait until works finish?',
        answer:
          'Not necessarily. A wireless system can cover the existing buildings now and extend to the new block when it completes, without reworking what is already installed. Temporary classrooms can be covered in the interim.',
      },
    ],
  },
  {
    city: 'Kent',
    slug: 'kent',
    region: 'South East England',
    coordinates: { lat: 51.2787, lng: 0.5217 },
    nearbyAreas: ['Maidstone', 'Canterbury', 'Medway', 'Dartford', 'Ashford', 'Tunbridge Wells'],
    areaType: 'county',
    authorities: [
      'Maidstone',
      'Canterbury',
      'Medway',
      'Dartford',
      'Ashford',
      'Tunbridge Wells',
      'Thanet',
      'Dover',
      'Folkestone and Hythe',
      'Sevenoaks',
    ],
    intro:
      'Kent retains a selective secondary system, which produces a school estate with large grammar schools drawing pupils from across wide catchments alongside local secondaries and a substantial rural primary network.',
    siteTypes: [
      'Large grammar schools with wide travel catchments',
      'Coastal schools and community buildings across Thanet and Dover',
      'Historic and listed buildings in Canterbury, Rochester and Sevenoaks',
      'Port and logistics premises around Dover and the Channel corridor',
      'Rural primaries across the Weald and Romney Marsh',
      'Commuter town sites in Dartford, Gravesend and Maidstone',
    ],
    localContext: [
      {
        heading: 'A selective system and wide catchments',
        paragraphs: [
          'Kent’s grammar schools draw pupils from considerably wider areas than a typical catchment secondary, and many operate on large sites with substantial grounds. That has a direct effect on lockdown planning.',
          'Wide catchments mean a higher proportion of pupils travelling independently, arriving and leaving across a longer window, and present on site outside the core day. The procedure needs to account for people arriving during an incident, not only those already inside.',
          'Large sites also mean the distance between the furthest occupied point and the nearest trigger can be considerable, which usually argues for portable triggers alongside fixed call points.',
        ],
      },
      {
        heading: 'Historic buildings and conservation areas',
        paragraphs: [
          'Canterbury, Rochester, Sevenoaks and Tunbridge Wells contain extensive historic building stock, much of it listed or within conservation areas, and a significant number of schools and public buildings occupy those structures.',
          'Intrusive work in protected fabric is difficult and sometimes requires consent. Surface-fixed wireless devices avoid most of that, which is why they dominate our specifications in the historic parts of the county.',
          'Solid masonry and stone construction in these buildings also blocks sound effectively, so coverage has to be assessed room by room rather than assumed from a corridor sounder.',
        ],
      },
      {
        heading: 'Coastal and port sites',
        paragraphs: [
          'The Kent coast and the Channel corridor around Dover and Folkestone include port, logistics and industrial premises alongside the towns’ schools and community buildings.',
          'Exposed coastal locations affect outdoor alerting more than inland sites do. Wind carries sound away and background noise is higher, so external devices need specifying with that in mind rather than to a general standard.',
          'Weather exposure also matters for device selection. External units on a coastal site face conditions that an inland playground does not, and that belongs in the specification rather than being discovered later.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Kent do you cover?',
        answer:
          'The whole county, including Maidstone, Canterbury, Medway, Dartford, Ashford, Tunbridge Wells, Thanet, Dover, Folkestone and Sevenoaks, plus the surrounding parts of Sussex and south-east London.',
      },
      {
        question: 'Can you install in a listed school building?',
        answer:
          'In most cases yes. Wireless devices are surface-fixed rather than requiring cable through protected fabric, which makes them far better suited to historic buildings. Any listed building or conservation consents remain the owner’s responsibility.',
      },
      {
        question: 'Do coastal sites need different equipment?',
        answer:
          'External devices on exposed coastal sites face higher wind, more background noise and greater weather exposure than inland playgrounds. We specify for the actual location rather than to a general standard.',
      },
      {
        question: 'Do you work with large grammar school sites?',
        answer:
          'Yes. Large sites with wide catchments usually need portable triggers alongside fixed call points, because the distance from the furthest occupied area to the nearest fixed trigger can be considerable.',
      },
    ],
  },
  {
    city: 'Surrey',
    slug: 'surrey',
    region: 'South East England',
    coordinates: { lat: 51.2362, lng: -0.5704 },
    nearbyAreas: ['Guildford', 'Woking', 'Epsom', 'Reigate', 'Camberley', 'Staines'],
    areaType: 'county',
    authorities: [
      'Guildford',
      'Woking',
      'Epsom and Ewell',
      'Reigate and Banstead',
      'Elmbridge',
      'Surrey Heath',
      'Runnymede',
      'Waverley',
      'Mole Valley',
      'Spelthorne',
    ],
    intro:
      'Surrey has one of the highest concentrations of independent schools in the country, alongside a substantial state estate and significant commercial development along the M25 and A3 corridors.',
    siteTypes: [
      'Independent schools occupying large country-house campuses',
      'Boarding schools with residential accommodation on site',
      'Green belt sites with extensive grounds and detached buildings',
      'Corporate headquarters and business parks along the M25 and A3',
      'Listed and period buildings in educational use',
      'State primaries and secondaries across the county’s towns',
    ],
    localContext: [
      {
        heading: 'Independent and boarding schools',
        paragraphs: [
          'Surrey’s concentration of independent schools produces site types that are uncommon elsewhere: large campuses of converted country houses, purpose-built additions across extensive grounds, and in many cases residential boarding accommodation.',
          'Boarding changes the problem substantially. The site is occupied around the clock, which means alerting has to work at three in the morning as reliably as at midday, and the procedure needs a decision-making chain that covers nights and weekends.',
          'Residential accommodation also raises questions a day school does not face. Where pupils sleep, how they are accounted for, and how an alert reaches them without causing disproportionate alarm all need deciding rather than assuming.',
        ],
      },
      {
        heading: 'Large grounds and detached buildings',
        paragraphs: [
          'Many Surrey campuses are spread across substantial grounds, with sports facilities, boarding houses, teaching blocks and administrative buildings separated by open space rather than connected by corridors.',
          'That is precisely the arrangement wired systems handle badly, because linking separate buildings means external cable routes, and it is where wireless links between buildings deliver the clearest advantage.',
          'Grounds coverage is the related question. On a campus where pupils may be a considerable distance from any building, external units positioned by where people actually are, rather than by the building footprint, become essential rather than optional.',
        ],
      },
      {
        heading: 'Corporate premises and business parks',
        paragraphs: [
          'The M25 and A3 corridors hold a high density of corporate headquarters and business park premises, and these sites approach the question differently from schools.',
          'Offices typically need fewer devices because spaces are larger and more open, but the procedural questions are harder: who decides, how visitors are handled, and what happens in multi-tenant buildings with shared entrances and reception.',
          'Access control frequently forms part of the answer here, since controlling entry is often more practical than relying on individual staff to secure spaces designed to be open.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Surrey do you cover?',
        answer:
          'The whole county, including Guildford, Woking, Epsom, Reigate, Camberley, Staines, Esher and Farnham, plus the surrounding parts of Hampshire, Sussex and south-west London.',
      },
      {
        question: 'Do you work with independent and boarding schools?',
        answer:
          'Yes. Boarding sites are occupied around the clock, so alerting has to work at night as reliably as during the day, and the procedure needs a decision-making chain covering nights and weekends.',
      },
      {
        question: 'Can a system cover several buildings across a large campus?',
        answer:
          'Yes. Wireless links between buildings avoid the external cable routes a wired system would need, which is one of the clearest advantages on spread-out campus sites.',
      },
      {
        question: 'Do you cover corporate offices as well as schools?',
        answer:
          'Yes. Offices usually need fewer devices than schools but raise harder procedural questions around visitors, decision-making and shared entrances in multi-tenant buildings.',
      },
    ],
  },
  {
    city: 'Hertfordshire',
    slug: 'hertfordshire',
    region: 'East of England',
    coordinates: { lat: 51.8098, lng: -0.2377 },
    nearbyAreas: ['Watford', 'St Albans', 'Stevenage', 'Hemel Hempstead', 'Hertford', 'Welwyn Garden City'],
    areaType: 'county',
    authorities: [
      'Watford',
      'St Albans',
      'Stevenage',
      'Dacorum',
      'Welwyn Hatfield',
      'East Hertfordshire',
      'Three Rivers',
      'Broxbourne',
      'North Hertfordshire',
      'Hertsmere',
    ],
    intro:
      'Hertfordshire combines post-war new towns with historic market towns, producing a school and commercial estate that spans mid-century system-built blocks and buildings several centuries older.',
    siteTypes: [
      'Post-war new town schools in Stevenage, Hemel Hempstead and Welwyn Garden City',
      'Historic buildings in St Albans, Hertford and Berkhamsted',
      'Business park and studio premises along the M1 and A1(M)',
      'Large secondary sites with extensive playing fields',
      'Commuter town primaries with constrained urban plots',
      'Distribution and light industrial premises near the motorway corridors',
    ],
    localContext: [
      {
        heading: 'New town building stock',
        paragraphs: [
          'Stevenage, Hemel Hempstead and Welwyn Garden City were built or substantially expanded as post-war new towns, and their schools reflect that: system-built blocks, standardised layouts, and construction methods characteristic of the period.',
          'These buildings are generally straightforward to work in, with accessible surfaces and predictable layouts. What they often lack is any provision for modern services, so retrofitting cable is more disruptive than the buildings’ apparent simplicity suggests.',
          'Many are also now at an age where refurbishment is common, which creates an opportunity. Where a building is being worked on anyway, coordinating alerting with those works usually reduces total disruption.',
        ],
      },
      {
        heading: 'Historic towns alongside the new',
        paragraphs: [
          'St Albans, Hertford, Berkhamsted and Bishop’s Stortford contain building stock several centuries older, much of it listed or in conservation areas, and a number of schools and civic buildings occupy those structures.',
          'The contrast within a single county is unusually sharp. A trust operating a new town secondary and a historic primary will find the two need genuinely different approaches, and a specification written for one will not transfer.',
          'For the older buildings, the constraints are the familiar ones: consent requirements for intrusive work, solid construction that blocks sound, and a strong argument for surface-fixed wireless devices.',
        ],
      },
      {
        heading: 'Commercial premises along the corridors',
        paragraphs: [
          'The M1, M25 and A1(M) corridors through Hertfordshire hold substantial business park, studio and distribution development, and these premises have their own requirements.',
          'For distribution and warehousing, background noise and shift working shape the specification in the same way they do on any industrial site. For office and studio premises, the questions are more procedural than technical.',
          'Out-of-hours exposure is frequently the more immediate concern for commercial sites, and intrusion protection is often the first system specified, with lockdown alerting added as procedures develop.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Hertfordshire do you cover?',
        answer:
          'The whole county, including Watford, St Albans, Stevenage, Hemel Hempstead, Hertford, Welwyn Garden City, Bishop’s Stortford and Borehamwood, plus the surrounding parts of Bedfordshire, Buckinghamshire and north London.',
      },
      {
        question: 'Are post-war school buildings easier to work in?',
        answer:
          'The surfaces are usually more accessible than older stock, but many have no provision for modern services, so retrofitting cable is more disruptive than they look. Wireless avoids that entirely.',
      },
      {
        question: 'We are refurbishing. Should we install at the same time?',
        answer:
          'Usually yes. Where a building is being worked on anyway, coordinating alerting with those works reduces total disruption and makes better use of the access already available.',
      },
      {
        question: 'Do you cover business parks and distribution premises?',
        answer:
          'Yes. Warehousing and distribution sites need alerting specified for background noise and shift patterns, and out-of-hours intrusion protection is frequently specified alongside.',
      },
    ],
  },
  {
    city: 'Berkshire',
    slug: 'berkshire',
    region: 'South East England',
    coordinates: { lat: 51.4309, lng: -0.9797 },
    nearbyAreas: ['Reading', 'Slough', 'Bracknell', 'Windsor', 'Newbury', 'Maidenhead'],
    areaType: 'county',
    authorities: [
      'Reading',
      'Slough',
      'Bracknell Forest',
      'Windsor and Maidenhead',
      'West Berkshire',
      'Wokingham',
    ],
    intro:
      'Berkshire holds one of the highest concentrations of corporate and technology premises in the country along the Thames Valley, alongside a school estate ranging from urban Slough and Reading to rural West Berkshire.',
    siteTypes: [
      'Technology and corporate campuses along the M4 corridor',
      'Multi-tenant office buildings in Reading, Slough and Bracknell',
      'Historic buildings and independent schools around Windsor and Eton',
      'Urban primaries and secondaries in Slough and Reading',
      'Rural primaries across West Berkshire and the Downs',
      'Data centre and secure facility premises',
    ],
    localContext: [
      {
        heading: 'The Thames Valley corporate estate',
        paragraphs: [
          'The M4 corridor through Reading, Slough, Bracknell and Maidenhead holds a dense concentration of corporate headquarters, technology campuses and multi-tenant office buildings. These are among the more complex sites to plan for.',
          'The technical requirement is usually modest, because open-plan offices need fewer devices than cellular buildings. The complexity is procedural: who decides, whether tenants are alerted independently, and how shared entrances and reception areas are handled.',
          'Corporate sites also tend to have existing security infrastructure, and the sensible approach is to establish how lockdown alerting sits alongside it rather than duplicating capability that already exists.',
        ],
      },
      {
        heading: 'Multi-tenant buildings and shared responsibility',
        paragraphs: [
          'A substantial proportion of Berkshire commercial premises are occupied by more than one organisation, and that raises the question of who owns the response.',
          'Where a landlord controls common parts, permission for anything fitted there is required, and that is frequently the longest lead item on the project. Starting that conversation before the survey rather than after usually saves weeks.',
          'The procedural question is harder than the permission one. If one tenant declares a lockdown, are the others alerted, and who decides for the building as a whole. That needs agreeing between occupiers, not specifying by an installer.',
        ],
      },
      {
        heading: 'Schools across a varied county',
        paragraphs: [
          'Berkshire’s school estate spans dense urban sites in Slough and Reading, affluent commuter areas around Windsor and Wokingham, and genuinely rural primaries across West Berkshire and the Downs.',
          'The urban sites face the constraints familiar from any dense area: tight plots, limited outdoor space used intensively, and restricted access for installation. The rural ones face the opposite, with small staff teams and large grounds.',
          'Windsor and the surrounding area also include significant historic and independent school estate, where period buildings and conservation constraints shape the approach in the same way they do elsewhere in the South East.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Berkshire do you cover?',
        answer:
          'The whole county, including Reading, Slough, Bracknell, Windsor, Maidenhead, Newbury and Wokingham, plus the surrounding parts of Oxfordshire, Hampshire and Surrey.',
      },
      {
        question: 'We share a building with other tenants. How does that work?',
        answer:
          'It needs agreeing between occupiers rather than specifying by an installer. The key questions are whether one tenant declaring a lockdown alerts the others, and who decides for the building as a whole. Landlord permission for common parts is usually the longest lead item.',
      },
      {
        question: 'Do offices need fewer devices than schools?',
        answer:
          'Usually yes, because open-plan spaces carry sound better than cellular classrooms. The complexity in an office is procedural rather than technical.',
      },
      {
        question: 'Do you work with corporate sites that already have security systems?',
        answer:
          'Yes, and the sensible first step is establishing how lockdown alerting sits alongside what exists rather than duplicating it. The signal still needs to be unmistakably distinct from the fire alarm.',
      },
    ],
  },
  {
    city: 'Cheshire',
    slug: 'cheshire',
    region: 'North West England',
    coordinates: { lat: 53.1667, lng: -2.5833 },
    nearbyAreas: ['Chester', 'Warrington', 'Macclesfield', 'Crewe', 'Wilmslow', 'Northwich'],
    areaType: 'county',
    authorities: [
      'Cheshire East',
      'Cheshire West and Chester',
      'Warrington',
      'Halton',
    ],
    intro:
      'Cheshire spans the historic walled city of Chester, affluent commuter areas in the east, and substantial chemical and process industry along the Mersey corridor. Few counties contain that range.',
    siteTypes: [
      'Historic and listed buildings within Chester’s city walls',
      'Independent and state schools across Wilmslow, Alderley Edge and Macclesfield',
      'Chemical and process industry premises around Runcorn and Ellesmere Port',
      'Distribution and logistics premises around Warrington',
      'Rural primaries across the Cheshire Plain',
      'Business park premises along the M56 and M6 corridors',
    ],
    localContext: [
      {
        heading: 'Chester and historic building stock',
        paragraphs: [
          'Chester contains one of the most complete historic city centres in the country, with extensive listed building stock and conservation designation across much of the centre. A number of schools, colleges and civic buildings occupy those structures.',
          'The constraints are the familiar ones for protected buildings: intrusive work is difficult and may require consent, and solid historic construction blocks sound effectively enough that coverage must be assessed room by room.',
          'Surface-fixed wireless devices are usually the practical answer, and they are considerably easier to justify to a conservation officer than cable routes through historic fabric.',
        ],
      },
      {
        heading: 'Process industry along the Mersey corridor',
        paragraphs: [
          'Runcorn, Ellesmere Port and the surrounding Mersey corridor hold a significant concentration of chemical and process industry. These are among the most demanding environments for any alerting system.',
          'High background noise, large distances, outdoor plant areas and continuous shift operation all shape the specification. Visual indicators become essential rather than supplementary, because sound alone cannot be relied on.',
          'These sites also typically have established emergency procedures and existing alarm systems, so the important early question is how a lockdown alert remains distinguishable from signals staff already respond to.',
        ],
      },
      {
        heading: 'Schools across east and west Cheshire',
        paragraphs: [
          'Cheshire’s school estate ranges from independent and state schools in the affluent east around Wilmslow and Alderley Edge, through the towns of Macclesfield and Crewe, to rural primaries across the Cheshire Plain.',
          'The rural primaries face the pattern common to small schools everywhere: few adults on site, large grounds relative to the building, and a real need for portable triggers rather than reliance on fixed call points alone.',
          'Larger sites in the east frequently have extensive grounds and detached buildings, where wireless links between buildings avoid the external cable routes a wired system would require.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Cheshire do you cover?',
        answer:
          'The whole county, including Chester, Warrington, Macclesfield, Crewe, Wilmslow, Northwich, Runcorn and Ellesmere Port, plus the surrounding parts of Greater Manchester, Merseyside and Staffordshire.',
      },
      {
        question: 'Can you work with chemical and process industry sites?',
        answer:
          'Yes. These environments need visual indicators as well as sound because background noise is too high to rely on audible alerts alone, plus a procedure that works across continuous shift operation.',
      },
      {
        question: 'Can you install in listed buildings in Chester?',
        answer:
          'In most cases yes. Wireless devices are surface-fixed rather than requiring cable through historic fabric, which is considerably easier to justify to a conservation officer. Any consents remain the owner’s responsibility.',
      },
      {
        question: 'We already have alarm systems on site. Will there be confusion?',
        answer:
          'That is exactly the right question. A lockdown alert must be unmistakably distinct from every existing signal staff respond to, particularly the fire alarm, since the required actions are opposite.',
      },
    ],
  },
  {
    city: 'Merseyside',
    slug: 'merseyside',
    region: 'North West England',
    coordinates: { lat: 53.4084, lng: -2.9916 },
    nearbyAreas: ['Liverpool', 'Wirral', 'St Helens', 'Southport', 'Bootle', 'Birkenhead'],
    areaType: 'county',
    authorities: ['Liverpool', 'Wirral', 'St Helens', 'Sefton', 'Knowsley'],
    intro:
      'Merseyside combines dense Victorian and maritime-era building stock with two decades of substantial regeneration, and a school estate that includes some of the oldest and some of the newest buildings in the North West.',
    siteTypes: [
      'Victorian and Edwardian schools with solid masonry construction',
      'Recent new-build academies replacing older stock',
      'Waterfront and regenerated commercial premises',
      'Large secondary sites across Knowsley and St Helens',
      'Coastal schools and community buildings around Southport and Wirral',
      'Listed maritime and civic buildings in educational or office use',
    ],
    localContext: [
      {
        heading: 'Old and new stock side by side',
        paragraphs: [
          'Merseyside’s school estate contains an unusually sharp contrast. Substantial rebuilding programmes have produced modern academies alongside Victorian board schools that remain in daily use, sometimes within the same trust.',
          'The two need genuinely different specifications. Solid Victorian masonry blocks sound effectively and needs more devices; modern lightweight construction needs fewer but raises different questions about securing open-plan spaces.',
          'For organisations running both, the practical approach is a single standard for what the alert means and per-site surveys for how many devices deliver it.',
        ],
      },
      {
        heading: 'Regeneration and waterfront premises',
        paragraphs: [
          'Liverpool’s waterfront and city centre have seen extensive regeneration, producing converted warehouses, mixed-use developments and offices occupying buildings originally constructed for entirely different purposes.',
          'Converted buildings are frequently harder to assess than either purpose-built modern premises or unaltered historic ones, because the internal structure often bears little relation to the external form. Coverage genuinely has to be walked.',
          'Many are also listed or in conservation areas, which restricts intrusive work and makes surface-fixed wireless devices the practical route.',
        ],
      },
      {
        heading: 'Coastal exposure and outdoor coverage',
        paragraphs: [
          'Sites across Wirral, Sefton and Southport face genuine coastal exposure, and that affects outdoor alerting more than it does inland. Wind carries sound away and background noise from open exposure is higher.',
          'External devices need specifying for the actual location rather than to a general standard, both for audibility and for weather resistance over the life of the system.',
          'It is one of the clearer examples of why we assess outdoor areas on site. How far an alert carries across an exposed coastal playing field is not something that can be calculated from a plan.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Merseyside do you cover?',
        answer:
          'Liverpool, Wirral, St Helens, Sefton and Knowsley, including Southport, Bootle and Birkenhead, plus the surrounding parts of Cheshire and Lancashire.',
      },
      {
        question: 'Do Victorian school buildings need more devices?',
        answer:
          'Usually yes. Solid masonry blocks sound far more effectively than modern lightweight partitions, so achieving the same audibility takes more devices. It is why device counts come from a survey rather than floor area.',
      },
      {
        question: 'Can you work in converted warehouse and waterfront buildings?',
        answer:
          'Yes, though these need walking rather than assessing from plans, because the internal structure of a converted building often bears little relation to its external form.',
      },
      {
        question: 'Does coastal exposure affect outdoor devices?',
        answer:
          'Yes, both for audibility and durability. Wind carries sound away and exposure is harder on equipment, so external units on coastal sites are specified differently from inland playgrounds.',
      },
    ],
  },
  {
    city: 'South Yorkshire',
    slug: 'south-yorkshire',
    region: 'Yorkshire and the Humber',
    coordinates: { lat: 53.3811, lng: -1.4701 },
    nearbyAreas: ['Sheffield', 'Rotherham', 'Doncaster', 'Barnsley'],
    areaType: 'county',
    authorities: ['Sheffield', 'Rotherham', 'Doncaster', 'Barnsley'],
    intro:
      'South Yorkshire combines Sheffield’s steeply sloping urban sites with former industrial towns, large further education campuses, and a substantial logistics presence around Doncaster.',
    siteTypes: [
      'Schools built across Sheffield’s steep and split-level terrain',
      'Large further education and sixth form campuses',
      'Former industrial and manufacturing premises in reuse',
      'Distribution and logistics premises around Doncaster',
      'Stone-built schools and civic buildings',
      'Rural primaries on the Peak District fringe',
    ],
    localContext: [
      {
        heading: 'Sheffield’s terrain and split-level sites',
        paragraphs: [
          'Sheffield is built across steep and varied terrain, and its school and civic buildings reflect that. Sites connected by external steps, playgrounds several levels below the entrance, and buildings that are single storey on one elevation and three on another are common.',
          'Level changes interrupt the assumption that a floor is a continuous space. Two areas on the same nominal level can be acoustically separate, and an alert in one may not reach the other.',
          'They also affect the procedural side. Where a plan requires moving people to a safer area, the route may involve external steps or a significant level change that is not obvious from a drawing.',
        ],
      },
      {
        heading: 'Large further education campuses',
        paragraphs: [
          'South Yorkshire has several substantial further education and sixth form campuses, which combine large footprints, independent adult learners and significant public access.',
          'Students moving independently need to know what to do themselves rather than relying on a teacher being present, which shifts the balance towards spoken announcements over tones. A voice instruction needs no prior briefing to act on.',
          'Public access reinforces that. Where a campus hosts community provision or public-facing services, a meaningful proportion of people on site at any moment will never have seen the procedure.',
        ],
      },
      {
        heading: 'Industrial reuse and logistics',
        paragraphs: [
          'The region’s industrial heritage has left a substantial stock of former manufacturing premises, many now in other uses, alongside newer distribution development around Doncaster and the M18 corridor.',
          'Converted industrial buildings are frequently large-volume spaces with hard surfaces, which behave differently acoustically from either offices or classrooms. Sound carries but reverberates, and intelligibility rather than volume becomes the design question.',
          'Active distribution premises face the more familiar industrial requirements: background noise, shift working, and out-of-hours security exposure that intrusion protection is usually specified to address.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of South Yorkshire do you cover?',
        answer:
          'Sheffield, Rotherham, Doncaster and Barnsley, plus the surrounding parts of West Yorkshire, Derbyshire and Nottinghamshire.',
      },
      {
        question: 'How do Sheffield’s split-level sites affect coverage?',
        answer:
          'Level changes mean two areas on the same nominal floor can be acoustically separate, so coverage has to be assessed by walking the site. The procedural side matters too, since routes to safer areas may involve external steps.',
      },
      {
        question: 'Do you work with colleges and sixth form campuses?',
        answer:
          'Yes. Campuses with independent adult learners and public access usually benefit from spoken announcements rather than tones alone, because many people present will never have been briefed.',
      },
      {
        question: 'Can you cover large converted industrial buildings?',
        answer:
          'Yes. Large-volume spaces with hard surfaces reverberate, so the design question becomes intelligibility rather than raw volume. That usually means more, lower-output devices rather than fewer loud ones.',
      },
    ],
  },
  {
    city: 'Nottinghamshire',
    slug: 'nottinghamshire',
    region: 'East Midlands',
    coordinates: { lat: 53.1, lng: -1.0 },
    nearbyAreas: ['Nottingham', 'Mansfield', 'Newark', 'Worksop', 'Beeston'],
    areaType: 'county',
    authorities: [
      'Nottingham',
      'Mansfield',
      'Newark and Sherwood',
      'Bassetlaw',
      'Broxtowe',
      'Gedling',
      'Rushcliffe',
      'Ashfield',
    ],
    intro:
      'Nottinghamshire spans a dense urban core, former coalfield towns across the north of the county, and rural areas around Sherwood and the Trent valley, with several large multi-academy trusts operating across all three.',
    siteTypes: [
      'Urban primaries and secondaries across Nottingham city',
      'Former coalfield town schools in Mansfield, Ashfield and Bassetlaw',
      'Large multi-academy trust estates spanning urban and rural sites',
      'University and further education buildings',
      'Rural primaries around Sherwood and the Trent valley',
      'Distribution premises along the A1 and M1 corridors',
    ],
    localContext: [
      {
        heading: 'Trusts spanning very different communities',
        paragraphs: [
          'Nottinghamshire has several large multi-academy trusts operating schools across the city, the former coalfield towns and rural areas. Few counties present such different contexts within a single organisation.',
          'The buildings differ as much as the communities. A city primary on a constrained plot, a 1960s secondary in a former mining town, and a village school on the Trent valley need genuinely different specifications.',
          'What should not differ is the meaning of the alert. Staff moving between trust schools need the same signal to mean the same thing, which is the argument for a trust standard covering response rather than layout.',
        ],
      },
      {
        heading: 'Coalfield towns and post-war stock',
        paragraphs: [
          'Mansfield, Ashfield and Bassetlaw contain substantial post-war school building stock, built during the expansion of the coalfield communities and now at an age where refurbishment is common.',
          'These buildings share the characteristics of their period: long corridor runs, repeated classroom blocks, and construction that made no provision for modern services. Retrofitting cable through them is more disruptive than their simple layouts suggest.',
          'Where refurbishment is planned anyway, coordinating alerting with those works is usually the efficient route, because the access is already there and the disruption is already being absorbed.',
        ],
      },
      {
        heading: 'Rural schools and distance',
        paragraphs: [
          'The north and east of the county include genuinely rural primaries, some a considerable distance from the nearest town, with the small staff teams that go with them.',
          'For these sites, portable triggers matter more than fixed call points alone, because the person who notices a problem is frequently the only adult nearby and may be supervising outdoors.',
          'Distance also makes central monitoring more valuable. For a trust with schools spread across the county, remote reporting of device and battery status removes journeys made solely to confirm that everything is working.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Nottinghamshire do you cover?',
        answer:
          'The whole county, including Nottingham, Mansfield, Newark, Worksop, Beeston and Retford, plus the surrounding parts of Derbyshire, Lincolnshire and South Yorkshire.',
      },
      {
        question: 'Do you work with trusts covering both urban and rural schools?',
        answer:
          'Yes, and it is common here. We agree one trust standard for what the alert means and how staff respond, then survey each school individually so device counts suit the actual building.',
      },
      {
        question: 'We are refurbishing a 1960s school block. Should we install now or after?',
        answer:
          'Usually during. The access is already there and disruption is already being absorbed, so coordinating the two is more efficient than treating them as separate projects.',
      },
      {
        question: 'How does monitoring help a spread-out trust?',
        answer:
          'It reports device and battery status remotely, so you can see the position across every school without travelling between them. On a geographically spread estate that saves considerable time.',
      },
    ],
  },
  {
    city: 'Staffordshire',
    slug: 'staffordshire',
    region: 'West Midlands',
    coordinates: { lat: 52.8793, lng: -2.0572 },
    nearbyAreas: ['Stoke-on-Trent', 'Stafford', 'Lichfield', 'Tamworth', 'Burton upon Trent', 'Cannock'],
    areaType: 'county',
    authorities: [
      'Stoke-on-Trent',
      'Stafford',
      'Lichfield',
      'Tamworth',
      'East Staffordshire',
      'Cannock Chase',
      'Newcastle-under-Lyme',
      'South Staffordshire',
    ],
    intro:
      'Staffordshire runs from the industrial Potteries in the north to commuter areas bordering the West Midlands conurbation in the south, with substantial manufacturing and rural areas in between.',
    siteTypes: [
      'Schools across the Potteries and Newcastle-under-Lyme',
      'Manufacturing and ceramics industry premises',
      'Historic buildings in Lichfield and Stafford',
      'Distribution premises along the M6 and A38 corridors',
      'Rural primaries across Staffordshire Moorlands and the county’s south',
      'Commuter town sites in Tamworth, Cannock and Burton',
    ],
    localContext: [
      {
        heading: 'The Potteries and industrial premises',
        paragraphs: [
          'Stoke-on-Trent and the surrounding Potteries retain substantial manufacturing activity alongside a school estate built largely to serve those industrial communities.',
          'For the industrial premises, the requirements follow the pattern of any manufacturing environment: alerting that carries over machinery noise, visual indicators to supplement sound, and a decision-making chain that works across shifts.',
          'Kilns, ovens and process equipment also mean some areas have environmental conditions that affect device selection, which is worth identifying at survey rather than after installation.',
        ],
      },
      {
        heading: 'Historic buildings in the county towns',
        paragraphs: [
          'Lichfield and Stafford contain significant historic building stock, including listed buildings and conservation areas, with schools and civic buildings occupying a number of them.',
          'The considerations are those familiar from any protected building: intrusive work is difficult and may require consent, solid construction blocks sound, and coverage must be assessed room by room rather than from a corridor.',
          'Surface-fixed wireless devices are almost always the practical answer, avoiding cable routes through fabric that would attract scrutiny.',
        ],
      },
      {
        heading: 'Distribution along the motorway corridors',
        paragraphs: [
          'The M6 and A38 corridors through Staffordshire carry a high concentration of distribution and warehousing, much of it operating continuously.',
          'Large-volume warehouse spaces present a specific challenge: sound carries but reverberates off hard surfaces, so intelligibility rather than volume becomes the design question. That usually means more devices at moderate output rather than fewer loud ones.',
          'Continuous operation also means there is no quiet window for installation, so work has to be planned around live activity in the same way it would be in an occupied school.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which parts of Staffordshire do you cover?',
        answer:
          'The whole county, including Stoke-on-Trent, Stafford, Lichfield, Tamworth, Burton upon Trent, Cannock and Newcastle-under-Lyme, plus the surrounding parts of the West Midlands, Cheshire and Derbyshire.',
      },
      {
        question: 'Can you work with manufacturing premises?',
        answer:
          'Yes. Manufacturing environments need alerting that carries over machinery noise, visual indicators alongside sound, and a procedure covering shift working rather than assuming daytime management.',
      },
      {
        question: 'How do you handle large warehouse spaces?',
        answer:
          'Sound reverberates off hard surfaces in large-volume buildings, so intelligibility matters more than volume. That usually means more devices at moderate output rather than fewer loud ones.',
      },
      {
        question: 'Can you install without stopping production?',
        answer:
          'Generally yes. Work is sequenced area by area so disruption stays local, in the same way it would be on an occupied school site. Commissioning is the noisy stage and gets scheduled by agreement.',
      },
    ],
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
