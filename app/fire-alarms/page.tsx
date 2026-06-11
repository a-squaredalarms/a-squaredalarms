import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildServiceSchema, buildFAQSchema } from '@/lib/seo'
import { CTASection } from '@/components/sections/CTASection'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'
import { ButtonLink } from '@/components/ui/ButtonLink'

// ─── Image base URL ───────────────────────────────────────────────────────────

const WP = '/images'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: 'Wireless Temporary Fire Alarm Systems — Built for Temporary Protection',
  description:
    'Battery-powered, wireless temporary fire alarm systems deployable in minutes. IP66-rated units for construction sites, demolition sites, road works, and vacant properties. Get an online quote today.',
  canonical: 'https://a-squaredalarms.com/fire-alarms',
  keywords: [
    'temporary fire alarm system UK',
    'wireless temporary fire alarm construction site',
    'battery powered temporary fire alarm',
    'IP66 temporary fire alarm',
    'demolition site temporary fire alarm',
    'rapid deploy fire detection',
  ],
})

// ─── System components ────────────────────────────────────────────────────────

const COMPONENTS = [
  {
    title: 'Master Sounder Beacon Callpoint',
    description:
      'The central hub of the system. Triggers the full-site alarm and coordinates all connected units across the wireless mesh network.',
    image: `${WP}/nexus-12-300x300.png`,
  },
  {
    title: 'Fire & First Aid Sounder Beacon',
    description:
      'IP66-rated combined sounder and beacon unit. Weatherproof for indoor and outdoor deployment with two-year battery life and multi-language announcements.',
    image: `${WP}/nxffa-300x300.png`,
  },
  {
    title: 'Sounder Beacon',
    description:
      'Robust wireless sounder beacon that integrates into the mesh network. Delivers instant audible and visual alerts across every corner of the site.',
    image: `${WP}/NXISB.R-300x300.png`,
  },
  {
    title: 'Wireless Call-Point',
    description:
      'Manual break-glass call point that wirelessly triggers the full system. No cabling required — mounts in seconds on any surface.',
    image: `${WP}/NXCP1.R-300x300.png`,
  },
  {
    title: 'Heat & Smoke Sensor',
    description:
      'Dual-technology detector suited to dusty and variable-temperature environments typical of construction sites and vacant buildings.',
    image: `${WP}/heat-and-smoke-300x300.png`,
  },
]

// ─── Process Steps ────────────────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    image: `${WP}/number-1.png`,
    title: 'We Plan Your Coverage',
    description:
      'Our engineer assesses your site layout and identifies the key detection and alerting areas. We produce a coverage plan before a single unit goes up.',
  },
  {
    image: `${WP}/number-2.png`,
    title: 'We Install & Link the Units',
    description:
      'Battery-powered devices are installed and automatically form a wireless mesh network — no cabling, no building works, no disruption to your programme.',
  },
  {
    image: `${WP}/number-3.png`,
    title: 'The System Reacts Instantly',
    description:
      'When a detector or call point activates, all units across the site flash, sound, and announce the alert simultaneously. No zones missed.',
  },
  {
    image: `${WP}/number-4.png`,
    title: 'Always Connected',
    description:
      'The mesh network constantly self-monitors. If a unit loses connection, the system flags it immediately — keeping you covered even as the site evolves.',
  },
]

// ─── Unit features ────────────────────────────────────────────────────────────

const UNIT_FEATURES = [
  {
    title: 'IP66 Rated',
    detail: 'Weatherproof and dust-tight for indoor and outdoor use.',
  },
  {
    title: 'Two-Year Battery Life',
    detail: 'No mains supply needed. Long-life batteries keep the system running for the full project duration.',
  },
  {
    title: 'Wireless Connectivity',
    detail: 'Mesh network links every unit automatically. Add or move units as the site develops.',
  },
  {
    title: 'Multi-Language Announcement',
    detail: 'Spoken alerts broadcast in multiple languages — essential for mixed-nationality site teams.',
  },
]

// ─── Suitable applications ────────────────────────────────────────────────────

const APPLICATIONS = [
  'Construction Sites',
  'Demolition Sites',
  'Road Works',
  'Vacant Properties',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FireAlarmsPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Temporary Fire Alarm Systems',
    description:
      'Wireless, battery-powered temporary fire alarm systems for construction sites, demolition sites, road works, and vacant properties across the UK.',
    provider: 'A-Squared Alarms',
    areaServed: 'United Kingdom',
    serviceType: 'Temporary Fire Alarm Installation',
    url: 'https://a-squaredalarms.com/fire-alarms',
  })

  const faqSchema = buildFAQSchema([
    {
      question: 'How quickly can the system be deployed?',
      answer:
        'Our wireless, battery-powered units can be installed and operational in minutes. No cabling, no mains power, and no building works are required. Most sites are covered within a single day.',
    },
    {
      question: 'What sites is this system suitable for?',
      answer:
        'The system is designed for temporary protection on construction sites, demolition sites, road works, and vacant properties — anywhere that needs immediate, reliable fire detection without a permanent infrastructure.',
    },
    {
      question: 'What happens when one unit triggers?',
      answer:
        'All units across the site simultaneously flash, sound, and broadcast a spoken announcement. There are no zones to miss and no delays — the entire mesh activates within seconds.',
    },
    {
      question: 'What does IP66 rated mean?',
      answer:
        'IP66 means the units are fully protected against dust ingress and powerful water jets — making them suitable for outdoor use and the harsh, variable conditions found on construction and demolition sites.',
    },
    {
      question: 'How long do the batteries last?',
      answer:
        'The Emergency Fire & First Aid Sounder Beacon units have a two-year battery life, covering the typical duration of most construction projects without the need for mains power or battery replacement.',
    },
    {
      question: 'Can the system be reconfigured as the site develops?',
      answer:
        'Yes. Because units communicate via a self-forming wireless mesh, you can add, remove, or reposition units as your site changes — floors are added, areas are enclosed, or welfare arrangements move.',
    },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      {/* ── Hero ── */}
      <section className="relative bg-navy-900 overflow-hidden" aria-label="Fire alarms hero">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-orange-500" aria-hidden="true" />

        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="badge bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  Temporary Fire Alarm System
                </span>
                <span className="badge bg-sky-400/15 text-sky-300 border border-sky-400/25">
                  IP66 Rated
                </span>
              </div>
              <h1 className="font-display text-display-2xl font-extrabold text-white leading-[1.05]">
                Built for Temporary Protection
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">
                Wireless and battery-powered temporary fire alarm systems that deploy in minutes — no cabling, no mains supply. Designed for construction sites, demolition sites, road works, and vacant properties.
              </p>

              {/* Key specs */}
              <div className="flex flex-wrap gap-4 pt-2">
                {['Wireless & battery-powered', 'Deployable in minutes', 'IP66 rated'].map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-sm text-slate-300">
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-orange-400"
                      aria-hidden="true"
                    >
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {spec}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <ButtonLink href="#survey" className="btn btn-accent btn-lg">
                  Get an Online Quote
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </ButtonLink>
                <ButtonLink
                  href="tel:07778387989"
                  className="btn btn-lg border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 hover:border-white"
                >
                  Call 07778 387 989
                </ButtonLink>
              </div>
            </div>

            {/* Hero product image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md">
                <Image
                  src={`${WP}/Asset-28.png`}
                  alt="A-Squared Alarms wireless temporary fire alarm system"
                  width={600}
                  height={539}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── System Components ── */}
      <section className="section-spacing bg-white" aria-labelledby="components-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="badge-navy mb-4">System Components</span>
            <h2 id="components-heading" className="font-display text-display-xl font-bold text-navy-900 mt-2">
              What&apos;s in the System?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Every component is wireless, battery-powered, and purpose-built for temporary environments. The units form a self-linking mesh — install them, and they find each other.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {COMPONENTS.map((component) => (
              <div key={component.title} className="card p-6 flex flex-col items-center text-center space-y-4">
                <div className="w-28 h-28 flex items-center justify-center">
                  <Image
                    src={component.image}
                    alt={component.title}
                    width={300}
                    height={300}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-navy-900 text-sm leading-snug">{component.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-spacing bg-navy-900" aria-labelledby="process-heading">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge bg-sky-400/15 text-sky-300 border border-sky-400/25 mb-4">
              Installation Process
            </span>
            <h2 id="process-heading" className="font-display text-display-xl font-bold text-white mt-2">
              We Install It for You — How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.title} className="card-navy p-6 flex flex-col items-center text-center space-y-4">
                <Image
                  src={step.image}
                  alt={`Step: ${step.title}`}
                  width={512}
                  height={512}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="font-display font-bold text-white text-sm leading-snug">{step.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emergency Unit Features + Control Hub ── */}
      <section className="section-spacing bg-slate-50" aria-labelledby="features-heading">
        <div className="container-site space-y-16">

          {/* Emergency Fire & First Aid Unit */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <Image
                src={`${WP}/check@4x.png`}
                alt="Emergency Fire & First Aid Sounder Beacon unit features"
                width={1294}
                height={1104}
                className="w-full max-w-md h-auto"
              />
            </div>
            <div>
              <span className="badge-navy mb-4">Emergency Fire &amp; First Aid Unit</span>
              <h2 id="features-heading" className="font-display text-display-lg font-bold text-navy-900 mt-2 mb-8">
                Every Unit Built to Perform in the Harshest Conditions
              </h2>
              <div className="space-y-5">
                {UNIT_FEATURES.map((feat) => (
                  <div key={feat.title} className="flex gap-4">
                    <span
                      className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600"
                      aria-hidden="true"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-navy-900">{feat.title}</p>
                      <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{feat.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Central Control Hub */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-sky mb-4">Central Control Hub</span>
              <h3 className="font-display text-display-lg font-bold text-navy-900 mt-2 mb-6">
                Real-Time Monitoring. Instant Alerts.
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                The hub gives you a live view of your entire fire detection network. At a glance you can see any active alarm and its location, the battery status of every unit, and any faults — so you always know the system is operational.
              </p>
              <ul className="space-y-3">
                {[
                  'Instant alerts showing alarm location',
                  'Battery status across all units',
                  'Unit fault notifications',
                  'Automated email and text notifications',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600"
                      aria-hidden="true"
                    >
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src={`${WP}/nxipbridge-1024x717.png`}
                  alt="Central control hub for temporary fire alarm monitoring"
                width={1024}
                height={717}
                className="w-full max-w-lg h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Suitable Applications ── */}
      <section className="section-spacing bg-white" aria-labelledby="applications-heading">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge-sky mb-4">Suitable Applications</span>
            <h2 id="applications-heading" className="font-display text-display-xl font-bold text-navy-900 mt-2">
              Where We Deploy
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {APPLICATIONS.map((app) => (
              <div key={app} className="card p-6 flex flex-col items-center text-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-semibold text-navy-900 text-sm">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ + Image ── */}
      <section className="section-spacing bg-white" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                id="faq-heading"
                className="font-display text-display-lg font-bold text-navy-900 mb-8"
              >
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {[
                  {
                    question: 'How quickly can the system be deployed?',
                    answer:
                      'Our wireless, battery-powered units can be installed and operational in minutes. No cabling, no mains power, and no building works are required. Most sites are covered within a single day.',
                  },
                  {
                    question: 'What sites is this system suitable for?',
                    answer:
                      'The system is designed for temporary protection on construction sites, demolition sites, road works, and vacant properties — anywhere that needs immediate, reliable fire detection without a permanent infrastructure.',
                  },
                  {
                    question: 'What happens when one unit triggers?',
                    answer:
                      'All units across the site simultaneously flash, sound, and broadcast a spoken announcement. There are no zones to miss and no delays — the entire mesh activates within seconds.',
                  },
                  {
                    question: 'What does IP66 rated mean?',
                    answer:
                      'IP66 means the units are fully protected against dust ingress and powerful water jets — making them suitable for outdoor use and the harsh, variable conditions found on construction and demolition sites.',
                  },
                  {
                    question: 'How long do the batteries last?',
                    answer:
                      'The Emergency Fire & First Aid Sounder Beacon units have a two-year battery life, covering the typical duration of most construction projects without the need for mains power or battery replacement.',
                  },
                  {
                    question: 'Can the system be reconfigured as the site develops?',
                    answer:
                      'Yes. Because units communicate via a self-forming wireless mesh, you can add, remove, or reposition units as your site changes — floors are added, areas are enclosed, or welfare arrangements move.',
                  },
                ].map((faq, i) => (
                  <details key={i} className="card p-5 group open:shadow-card-hover">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-navy-900 text-sm">
                      {faq.question}
                      <svg
                        className="h-4 w-4 text-slate-400 flex-shrink-0 transition-transform group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
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
        headline="Your Site Needs Fire Detection From Day One."
        subheading="Whether you're breaking ground tomorrow or managing a vacant property today — we can have a system live within hours. Free site assessment, no obligation."
        primaryCTA={{ label: 'Get an Online Quote', href: '#survey' }}
        secondaryCTA={{ label: 'Call Us Now', phone: true }}
        urgencyLead="Rapid deployment for temporary site protection"
      />
    </>
  )
}
