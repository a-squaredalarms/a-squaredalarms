import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildServiceSchema, buildFAQSchema } from '@/lib/seo'
import { CTASection } from '@/components/sections/CTASection'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'
import { ButtonLink } from '@/components/ui/ButtonLink'

const WP = '/a-squaredalarms/images'

const PAXTON = {
  slimReader: 'https://www.paxton-access.com/wp-content/uploads/2019/11/010-296-Paxton10-Slimline-Reader.jpg',
  keypad: 'https://www.paxton-access.com/wp-content/uploads/2019/11/010-824-Paxton10-Keypad.jpg',
  keyfobs: 'https://www.paxton-access.com/wp-content/uploads/2020/03/010-170-Paxton10-Keyfobs-Pack-of-10.jpg',
  cards: 'https://www.paxton-access.com/wp-content/uploads/2019/11/010-427-Paxton10-Cards-Pack-of-Ten.jpg',
  switch2: 'https://www.paxton-access.com/wp-content/uploads/2024/05/242-166-Switch2-controller-12V-1A-PSU-Plastic-housing.jpg',
  net2Reader: 'https://www.paxton-access.com/wp-content/uploads/2020/06/353-110-Proximity-reader-P502.jpg',
  net2Ctrl: 'https://www.paxton-access.com/wp-content/uploads/2019/02/682-531-Net2-plus-1-door-controller-12V-2A-PSU-plastic-cabinet.jpg',
  entryPanel: 'https://www.paxton-access.com/wp-content/uploads/2024/05/337-420-Net2-Entry-Standard-Panel-Surface-Mount.jpg',
  p75Reader: 'https://www.paxton-access.com/wp-content/uploads/2020/06/373-110-Proximity-Reader-P752.jpg',
}

export const metadata: Metadata = buildMetadata({
  title: 'Paxton Access Control Systems | UK Installation & Support',
  description:
    'Professional Paxton access control installation for schools, offices, healthcare settings, and commercial premises. Net2, Paxton10, PaxLock, Entry, readers, cards, fobs, and ongoing support.',
  canonical: 'https://a-squaredalarms.com/access-control',
  keywords: [
    'Paxton access control installation',
    'Paxton10 installer UK',
    'Net2 access control system',
    'PaxLock installation',
    'door access control commercial',
    'access control schools healthcare',
  ],
})

const SERVICES = [
  {
    title: 'Site survey and design',
    description:
      'We assess your doors, user groups, locking requirements, and daily operating patterns before specifying the right Paxton layout for the building.',
    icon: 'clipboard',
  },
  {
    title: 'Installation and commissioning',
    description:
      'Readers, controllers, door hardware, credentials, and software are professionally installed, tested, and configured before handover.',
    icon: 'wrench',
  },
  {
    title: 'User permissions and zoning',
    description:
      'We build practical access groups, time schedules, and area permissions so staff, visitors, and contractors only reach the spaces they should.',
    icon: 'users',
  },
  {
    title: 'Training and support',
    description:
      'Your administrators are shown how to add users, revoke credentials, run reports, and manage day-to-day tasks with confidence after go-live.',
    icon: 'graduation-cap',
  },
]

const PRODUCT_FAMILIES = [
  {
    name: 'Net2',
    description:
      'Networked access control for central management of multiple doors, users, and permissions across one building or a wider estate.',
    image: PAXTON.net2Ctrl,
    imageAlt: 'Paxton Net2 Plus single-door access controller in plastic cabinet',
  },
  {
    name: 'Paxton10',
    description:
      'Web-based access control platform with integrated video capabilities for sites that want modern browser-based management and clearer oversight.',
    image: PAXTON.keypad,
    imageAlt: 'Paxton10 keypad reader installed at commercial door entry point',
  },
  {
    name: 'PaxLock',
    description:
      'Wireless battery-powered door handles and locks for retrofit projects where running new cabling is difficult or disruptive.',
    image: PAXTON.p75Reader,
    imageAlt: 'Paxton proximity reader for wireless door handle access control',
  },
  {
    name: 'Entry Systems',
    description:
      'Door entry panels for visitor management, reception control, and secure release of entrance doors at the point of arrival.',
    image: PAXTON.entryPanel,
    imageAlt: 'Paxton Net2 Entry standard panel surface-mounted at building entrance',
  },
  {
    name: 'Switch2 & Compact',
    description:
      'Simple, dependable single-door control for smaller sites or specific access points that need straightforward credential management.',
    image: PAXTON.switch2,
    imageAlt: 'Paxton Switch2 single-door access controller with integrated power supply',
  },
  {
    name: 'Cards, Fobs & Readers',
    description:
      'A wide range of credentials and readers to suit reception areas, staff entrances, side gates, internal doors, and higher-security spaces.',
    image: PAXTON.keyfobs,
    imageAlt: 'Paxton10 proximity keyfobs pack for access control credentials',
  },
]

const CAPABILITIES = [
  {
    title: 'Keyless entry',
    description:
      'Replace physical keys with cards, fobs, PINs, and compatible digital credentials that are easier to issue, track, and revoke.',
    icon: 'key',
  },
  {
    title: 'Role-based permissions',
    description:
      'Give different people access to different doors, buildings, or floors based on their job role, site access needs, or safeguarding requirements.',
    icon: 'users',
  },
  {
    title: 'Time schedules',
    description:
      'Control when credentials work, keeping restricted spaces locked outside authorised hours without relying on manual locking routines.',
    icon: 'clock',
  },
  {
    title: 'Audit trails',
    description:
      'Review a time-stamped history of access events for compliance, incident investigation, staff accountability, and operational review.',
    icon: 'file-text',
  },
  {
    title: 'Door entry management',
    description:
      'Manage visitors at main entrances with Paxton entry panels and controlled release from reception or approved internal stations.',
    icon: 'door',
  },
  {
    title: 'Integrated video options',
    description:
      'Where the system design requires it, Paxton10 can combine access control with video management for better visibility around key entry points.',
    icon: 'camera',
  },
  {
    title: 'Remote administration',
    description:
      'Networked Paxton systems allow administrators to manage users, reports, and permission changes without having to stand at the door itself.',
    icon: 'globe',
  },
  {
    title: 'Scalable growth',
    description:
      'Start with the doors that matter most and extend the system as your headcount, building footprint, or compliance needs change.',
    icon: 'trending-up',
  },
]

const SECTORS = [
  {
    title: 'Commercial offices',
    description:
      'Control entry to offices, meeting suites, comms rooms, and sensitive departments while keeping staff movement efficient.',
    icon: 'building',
  },
  {
    title: 'Schools and education',
    description:
      'Manage reception-led visitor access, staff permissions across multiple buildings, and controlled entry to safeguarding-sensitive areas.',
    icon: 'graduation-cap',
  },
  {
    title: 'Healthcare and care settings',
    description:
      'Protect medicine stores, admin zones, clinical support areas, and staff-only routes without disrupting daily site operation.',
    icon: 'heart',
  },
  {
    title: 'Residential and mixed-use',
    description:
      'Provide managed entry for residents, contractors, caretakers, and letting teams across apartment blocks and shared access points.',
    icon: 'home',
  },
  {
    title: 'Retail and hospitality',
    description:
      'Secure stock rooms, cash handling spaces, staff entrances, and back-of-house areas with clearer access accountability.',
    icon: 'shopping-bag',
  },
  {
    title: 'Warehouses and industrial',
    description:
      'Restrict access to operational zones, plant rooms, and site-critical spaces while maintaining reliable movement logging.',
    icon: 'package',
  },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Survey the site',
    description:
      'We review doors, traffic flow, locking points, staff routines, and the practical risks that the Paxton system needs to solve.',
  },
  {
    number: '02',
    title: 'Specify the right Paxton platform',
    description:
      'We recommend Net2, Paxton10, PaxLock, Entry, or a combination of Paxton hardware based on the size and complexity of your site.',
  },
  {
    number: '03',
    title: 'Install readers and controllers',
    description:
      'Readers, controllers, credentials, and door entry devices are installed neatly and tested as the physical system comes together.',
  },
  {
    number: '04',
    title: 'Configure users and permissions',
    description:
      'We set user groups, time schedules, restricted areas, and admin controls so the system works properly from the first day of use.',
  },
  {
    number: '05',
    title: 'Train your team',
    description:
      'Your site team is shown how to add staff, remove credentials, view logs, and manage the system without relying on guesswork.',
  },
  {
    number: '06',
    title: 'Support future changes',
    description:
      'As your site grows or changes, we can add doors, credentials, product upgrades, and ongoing maintenance support around the existing Paxton setup.',
  },
]

const BENEFITS = [
  {
    title: 'Fewer key-management problems',
    detail:
      'No more chasing returned keys, re-cutting replacements, or worrying about copied keys remaining in circulation.',
  },
  {
    title: 'Clearer staff accountability',
    detail:
      'Every access event is logged, giving you a reliable record of who entered where and when across the site.',
  },
  {
    title: 'Faster onboarding and offboarding',
    detail:
      'Issue new credentials quickly and revoke access immediately when roles change or staff leave the organisation.',
  },
  {
    title: 'Better control over restricted spaces',
    detail:
      'Keep server rooms, medicine stores, admin areas, stock rooms, and higher-risk spaces limited to authorised users only.',
  },
  {
    title: 'Smarter visitor handling',
    detail:
      'Paxton entry systems help reception teams manage arrivals more securely while keeping the front-of-house experience straightforward.',
  },
  {
    title: 'A system that can grow with you',
    detail:
      'Paxton gives you room to expand from single-door control to larger networked systems without replacing the whole approach.',
  },
]

const FAQS = [
  {
    question: 'Do you install Paxton access control systems?',
    answer:
      'Yes. We supply, install, configure, and support Paxton access control systems including Net2, Paxton10, PaxLock, Entry, Switch2, Compact, readers, cards, fobs, and related hardware.',
  },
  {
    question: 'What Paxton system is right for my site?',
    answer:
      'That depends on the number of doors, the level of central management you need, any retrofit constraints, and whether video entry or broader software control is required. We assess this during the site survey and specify the most suitable Paxton platform for the building.',
  },
  {
    question: 'Can Paxton be added to an existing building?',
    answer:
      'Yes. Many Paxton systems can be retrofitted into existing premises, and PaxLock options can be especially helpful where new cabling needs to be kept to a minimum.',
  },
  {
    question: 'Can administrators manage users and permissions remotely?',
    answer:
      'Yes. Networked Paxton systems such as Net2 and Paxton10 allow administrators to manage users, permissions, and reports without having to be physically at the door controller.',
  },
  {
    question: 'Does Paxton support door entry and visitor control?',
    answer:
      'Yes. Paxton entry systems are designed for controlled visitor access at main entrances, helping teams manage calls, release doors securely, and keep access records aligned with the wider system.',
  },
  {
    question: 'Can Paxton work with CCTV?',
    answer:
      'Yes. Paxton10 can provide integrated video capabilities, and access events can be paired with clearer oversight around important entry points where the system design calls for it.',
  },
  {
    question: 'Do you provide training and ongoing support?',
    answer:
      'Yes. We train the people who will manage the system day to day, and we can also provide ongoing maintenance, additions, and support as the installation evolves.',
  },
]

function Icon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    key: <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" strokeLinecap="round" strokeLinejoin="round" />,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    'file-text': <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>,
    door: <><path d="M3 21h18M9 3h6a2 2 0 012 2v16H7V5a2 2 0 012-2z" /><circle cx="14" cy="13" r="1" /></>,
    camera: <><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></>,
    globe: <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></>,
    'trending-up': <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
    building: <><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M8 10h.01M16 10h.01M12 14h.01M8 14h.01M16 14h.01" /></>,
    home: <><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>,
    'graduation-cap': <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />,
    'shopping-bag': <><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></>,
    package: <><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
    clipboard: <><rect x="8" y="2" width="8" height="4" rx="1" ry="1" /><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><path d="M9 12h6M9 16h6M9 8h6" /></>,
    wrench: <path d="M14.7 6.3a4 4 0 01-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.3 2.3-3.1-3.1 2.4-2.2z" strokeLinecap="round" strokeLinejoin="round" />,
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6" aria-hidden="true">
      {paths[name] ?? null}
    </svg>
  )
}

export default function AccessControlPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Paxton Access Control Systems',
    description:
      'Professional Paxton access control installation using Net2, Paxton10, PaxLock, Entry, readers, credentials, and centralised user management across the UK.',
    provider: 'A-Squared Alarms',
    areaServed: 'United Kingdom',
    serviceType: 'Paxton Access Control Installation',
    url: 'https://a-squaredalarms.com/access-control',
  })

  const faqSchema = buildFAQSchema(FAQS)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <section className="relative overflow-hidden bg-navy-900" aria-label="Paxton access control hero">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-sky-500" aria-hidden="true" />

        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="badge border border-sky-400/30 bg-sky-400/20 text-sky-300">
                  Paxton Access Control
                </span>
                <span className="badge border border-white/20 bg-white/10 text-slate-300">
                  Net2, Paxton10 &amp; PaxLock
                </span>
              </div>

              <h1 className="font-display text-display-2xl font-extrabold leading-[1.05] text-white">
                Professional Paxton Access Control for Doors, Gates, and Managed Entry Points
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-slate-300">
                We design, install, and support Paxton access control systems for schools,
                healthcare settings, offices, residential buildings, and commercial premises.
                From single-door control to multi-building user management, we build the system
                around how your site actually operates.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {['Paxton-only installation', 'Cards, fobs & keypad access', 'Central user control'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-sky-400"
                      aria-hidden="true"
                    >
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#survey" className="btn btn-accent btn-lg">
                  Request a Quote
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </ButtonLink>
                <ButtonLink href="/contact?service=access-control" className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900">
                  Book a Site Survey
                </ButtonLink>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { src: PAXTON.keypad, alt: 'Paxton10 keypad reader for door access control', label: 'Paxton10 Keypad' },
                    { src: PAXTON.slimReader, alt: 'Paxton10 slimline proximity reader for access control', label: 'Slimline Reader' },
                    { src: PAXTON.keyfobs, alt: 'Paxton proximity keyfobs for access control credentials', label: 'Key Fobs' },
                    { src: PAXTON.entryPanel, alt: 'Paxton Net2 Entry standard panel for building access', label: 'Entry Panel' },
                  ].map((item) => (
                    <div key={item.label} className="card-navy flex flex-col gap-2 overflow-hidden p-3 text-center">
                      <div className="flex h-28 w-full items-center justify-center overflow-hidden rounded-lg bg-navy-800/50">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={300}
                          height={300}
                          className="h-full w-full object-contain p-2"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-300">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="card-navy flex items-center gap-3 p-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Specified, installed, and configured for your site</p>
                    <p className="text-xs text-slate-400">UK engineers with training and support after handover</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="intro-heading">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="badge-navy mb-4">Why Paxton?</span>
            <h2 id="intro-heading" className="mt-2 mb-6 font-display text-display-xl font-bold text-navy-900">
              Dedicated Access Control from a Specialist Manufacturer
            </h2>

            <div className="space-y-4 leading-relaxed text-slate-600">
              <p>
                Paxton is focused specifically on access control and entry management. That makes it
                a strong fit for sites that need clear credential control, dependable day-to-day use,
                and a product range that can scale from one door to a much larger estate.
              </p>
              <p>
                We install Paxton systems for organisations that need cards, fobs, keypads, door
                entry, user permissions, reporting, and practical administration without relying on
                traditional keys. The result is tighter control over access and a cleaner operational
                process for your team.
              </p>
              <p>
                Whether the project is a single entrance, a multi-door school, or a multi-building
                commercial site, we recommend the Paxton platform that best matches the doors, users,
                and management needs involved.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#survey" className="btn btn-primary btn-md">
                Request a Quote
              </Link>
              <Link href="/contact?service=access-control" className="btn btn-outline btn-md">
                Book a Survey
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                src: PAXTON.cards,
                alt: 'Paxton proximity cards for building access',
                label: 'Cards & Credentials',
                detail: 'Issue physical credentials to staff, contractors, or residents and manage them centrally.',
              },
              {
                src: PAXTON.net2Reader,
                alt: 'Paxton Net2 proximity reader for controlled access',
                label: 'Readers & Keypads',
                detail: 'Select the right reader format for main doors, internal access points, or higher-control areas.',
              },
              {
                src: PAXTON.entryPanel,
                alt: 'Paxton entry panel for visitor access and controlled release',
                label: 'Visitor Entry',
                detail: 'Manage front-door access more securely with Paxton entry hardware and controlled door release.',
              },
              {
                src: PAXTON.switch2,
                alt: 'Paxton Switch2 controller for single-door access control',
                label: 'Single-Door Control',
                detail: 'Ideal for smaller access control requirements or the first stage of a wider upgrade plan.',
              },
            ].map((item) => (
              <div key={item.label} className="card overflow-hidden">
                <div className="flex h-40 items-center justify-center overflow-hidden bg-slate-50">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="h-full w-full object-contain p-4"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5 p-5">
                  <h3 className="text-sm font-semibold text-navy-900">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="services-heading">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="badge-sky mb-4">Our Paxton Services</span>
            <h2 id="services-heading" className="mt-2 font-display text-display-xl font-bold text-navy-900">
              Everything around the system, not just the hardware
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We do more than supply the product. We help you choose the right Paxton setup, install
              it cleanly, configure it properly, and make sure your team can actually manage it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service) => (
              <div key={service.title} className="card p-6 space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                  <Icon name={service.icon} />
                </div>
                <h3 className="font-semibold text-navy-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-navy-900" aria-labelledby="products-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
              Paxton Products
            </span>
            <h2 id="products-heading" className="mt-4 font-display text-display-xl font-bold text-white">
              The Paxton range we install and support
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              From entry-level door control to larger managed estates, we specify the right Paxton
              product family for the job and configure it around your users, schedules, and access points.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_FAMILIES.map((product) => (
              <div key={product.name} className="card-navy overflow-hidden border border-navy-700">
                <div className="flex h-44 items-center justify-center overflow-hidden bg-navy-800/60">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={400}
                    height={400}
                    className="h-full w-full object-contain p-6"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 p-6">
                  <h3 className="font-display font-bold text-white">{product.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-300">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-display text-display-sm font-bold text-white">
                  Single door to multi-site management
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Whether you are securing one reception entrance or coordinating access across a
                  larger estate, we size and configure the Paxton system to match your site without
                  overcomplicating everyday use.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link href="#survey" className="btn btn-accent btn-md">
                  Request a Quote
                </Link>
                <Link href="/contact?service=access-control" className="btn btn-lg border-2 border-white/20 px-6 py-3 text-white hover:border-white hover:bg-white hover:text-navy-900">
                  Book a Survey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="capabilities-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="badge-navy mb-4">System Capabilities</span>
            <h2 id="capabilities-heading" className="mt-2 font-display text-display-xl font-bold text-navy-900">
              What a properly configured Paxton system gives you
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              The right Paxton installation is not just about opening a door. It is about improving
              control, reducing admin friction, and giving your organisation clearer visibility over
              access across the whole building.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map((feature) => (
              <div key={feature.title} className="card p-6 space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                  <Icon name={feature.icon} />
                </div>
                <h3 className="font-semibold text-navy-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="sectors-heading">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="badge-sky mb-4">Where We Install</span>
            <h2 id="sectors-heading" className="mt-2 font-display text-display-xl font-bold text-navy-900">
              Paxton access control for different building types
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We adapt the system to the people, rooms, and security pressures that matter on your
              site rather than forcing one standard layout everywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.map((sector) => (
              <div key={sector.title} className="card p-6 space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                  <Icon name={sector.icon} />
                </div>
                <h3 className="font-semibold text-navy-900">{sector.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-navy-900" aria-labelledby="process-heading">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
              Our Process
            </span>
            <h2 id="process-heading" className="mt-4 font-display text-display-xl font-bold text-white">
              From survey to live Paxton system
            </h2>
          </div>

          <div className="relative">
            <div
              className="absolute top-0 bottom-0 left-8 w-px bg-navy-700 md:left-1/2 md:-translate-x-px"
              aria-hidden="true"
            />
            <div className="space-y-8">
              {PROCESS_STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`pl-16 md:w-1/2 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="card-navy inline-block max-w-sm p-5 text-left">
                      <p className="mb-1 font-mono text-xs font-bold text-sky-400">{step.number}</p>
                      <h3 className="font-display font-bold text-white">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                    </div>
                  </div>

                  <div className="absolute top-5 left-5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-navy-900 bg-sky-400 text-xs font-bold text-navy-900 md:left-1/2 md:-translate-x-1/2">
                    {index + 1}
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="benefits-heading">
        <div className="container-site">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="badge-navy mb-4">Why Upgrade?</span>
            <h2 id="benefits-heading" className="mt-2 font-display text-display-xl font-bold text-navy-900">
              Why organisations move to Paxton access control
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              The improvement is not just security. It is smoother administration, cleaner staff
              management, and a much more reliable way to control access than physical keys.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((benefit) => (
              <div key={benefit.title} className="card p-6 space-y-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-semibold text-navy-900">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 id="faq-heading" className="mb-8 font-display text-display-lg font-bold text-navy-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {FAQS.map((faq, index) => (
                  <details key={index} className="card group p-5 open:shadow-card-hover">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy-900">
                      {faq.question}
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={`${WP}/slide1-top@3x.png`}
                alt="A-Squared Alarms protecting what matters"
                width={1408}
                height={1728}
                className="w-full max-w-xs h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <HomeQuoteSection sectionId="survey" />

      <CTASection
        variant="urgent"
        headline="Need a professionally installed Paxton access control system?"
        subheading="We survey the site, specify the right Paxton products, install the hardware, configure the permissions, and support the system after handover."
        primaryCTA={{ label: 'Request a Quote', href: '#survey' }}
        secondaryCTA={{ label: 'Arrange a Site Survey', href: '/contact?service=access-control' }}
        urgencyLead="Professional Paxton installation for controlled entry"
      />
    </>
  )
}
