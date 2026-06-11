import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, buildServiceSchema, buildFAQSchema } from '@/lib/seo'
import { CTASection } from '@/components/sections/CTASection'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'
import { LockdownHardwareSection } from '@/components/sections/LockdownHardwareSection'
import { PopAlertSection } from '@/components/sections/PopAlertSection'
import { ButtonLink } from '@/components/ui/ButtonLink'

const WP = '/a-squaredalarms/images'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "Lockdown Alarm Systems for UK Schools & Organisations",
  description:
    "Martyn's Law-aligned lockdown alarm systems designed for schools, offices, and public venues. Full-site alerting in under 3 seconds. Free survey.",
  canonical: 'https://a-squaredalarms.com/lockdown-alarms',
  keywords: [
    'lockdown alarm system UK',
    'school lockdown alarm',
    "Martyn's Law lockdown system",
    'lockdown system installation UK',
    'Protect Duty alarm',
    'emergency lockdown alarm school',
  ],
})

// ─── Feature items ────────────────────────────────────────────────────────────

const FEATURES = [
  {
    title: 'Full-site activation in under 3 seconds',
    description:
      'A single trigger — button, keyfob, or software — activates every siren, strobe, and digital alert simultaneously. No cascading delays, no missed zones.',
    icon: 'zap',
  },
  {
    title: 'Zoned alerting with clear staff instructions',
    description:
      "Different zones can receive different instructions — 'lock down in place' for classrooms, 'evacuation route B' for corridors. Configurable per your site plan.",
    icon: 'map',
  },
  {
    title: 'PopAlert® digital screen integration',
    description:
      'Full-screen takeover alerts on every networked computer on your site. Staff see exactly what to do — no ambiguity in a high-stress moment.',
    icon: 'monitor',
  },
  {
    title: 'Manual override and test mode',
    description:
      'Practice drills without triggering full site panic. Our test mode lets you run monthly lockdown drills and log them for compliance documentation.',
    icon: 'settings',
  },
  {
    title: 'Wireless or hardwired — your choice',
    description:
      'Grade-C wireless systems for fast deployment with no building works. Hardwired systems for permanent, ultra-reliable installations. We advise on the right fit.',
    icon: 'wifi',
  },
  {
    title: 'Martyn\'s Law documentation package',
    description:
      'Every installation includes a compliance documentation pack — system specification, site plan, maintenance record, and staff training certificate.',
    icon: 'file-check',
  },
]

// ─── Process Steps ────────────────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free Site Survey',
    description:
      'A certified engineer visits your site, maps all zones, identifies vulnerabilities, and assesses your current procedures against Martyn\'s Law obligations.',
  },
  {
    number: '02',
    title: 'System Design',
    description:
      'We produce a detailed system design — equipment specification, wiring/wireless plan, zone maps, and a transparent cost breakdown.',
  },
  {
    number: '03',
    title: 'Professional Installation',
    description:
      'Typically 1–3 days depending on site complexity. Minimal disruption. We work around your operational hours wherever possible.',
  },
  {
    number: '04',
    title: 'Testing & Staff Training',
    description:
      'Every component is tested to BS EN 54 / manufacturer spec. Staff training is included — your team will know exactly what to do before we leave site.',
  },
  {
    number: '05',
    title: 'Compliance Pack & Ongoing Support',
    description:
      'You receive full documentation for your compliance file. Annual maintenance contracts available. UK-based support team on hand for any issues.',
  },
]

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const FAQS = [
  {
    question: "Does our school need a lockdown alarm under Martyn's Law?",
    answer:
      "If your school or college can hold 200 or more people at any one time, it falls under Martyn's Law (Terrorism (Protection of Premises) Act). This requires documented emergency procedures including lockdown protocols. Schools with 800+ capacity fall under enhanced tier requirements including physical measures such as alarm systems.",
  },
  {
    question: 'How quickly can you install a lockdown alarm system?',
    answer:
      'Most installations are completed within 5 working days of the site survey. Wireless systems can often be deployed in a single day. We schedule installations to minimise disruption to your operations.',
  },
  {
    question: 'What is the difference between a lockdown alarm and a fire alarm?',
    answer:
      'A fire alarm is designed to evacuate — it moves people out of a building. A lockdown alarm is designed to shelter people in place and prevent unauthorised entry during an active threat. The two systems serve opposite purposes and should not share triggering. We design both systems to work alongside each other correctly.',
  },
  {
    question: 'How much does a lockdown alarm system cost?',
    answer:
      'Costs range from approximately £1,500 for a small single-storey building to £15,000+ for a large multi-building campus. We provide fully itemised quotes with no hidden costs after the site survey.',
  },
  {
    question: 'Are your systems compliant with British Standards?',
    answer:
      'Yes. Our systems are specified for UK compliance requirements and site risk profiles. Our lockdown systems are designed in accordance with the Secured by Design guidelines and reference the National Counter Terrorism Security Office (NPSA) guidance for protective security.',
  },
]

const HERO_STATS = [
  { value: 'Wireless', label: 'System Option' },
  { value: 'Wired', label: 'System Option' },
  { value: 'Digital', label: 'Alert Type' },
]

// ─── Icon components ──────────────────────────────────────────────────────────

function FeatureIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    zap:        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>,
    map:        <><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></>,
    monitor:    <><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,
    settings:   <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></>,
    wifi:       <><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></>,
    'file-check':<><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/></>,
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-6 w-6" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LockdownAlarmsPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Lockdown Alarm Systems',
    description:
      "Martyn's Law-aligned lockdown alarm systems for UK schools, offices, and public venues.",
    provider: 'A-Squared Alarms',
    areaServed: 'United Kingdom',
    serviceType: 'Security Alarm Installation',
    url: 'https://a-squaredalarms.com/lockdown-alarms',
  })

  const faqSchema = buildFAQSchema(FAQS)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      {/* Hero */}
      <section className="relative bg-navy-900 overflow-hidden" aria-label="Lockdown alarms hero">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} aria-hidden="true"/>
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" aria-hidden="true"/>

        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="space-y-6 lg:col-span-7">
              <div className="flex flex-wrap gap-2">
                <span className="badge bg-red-500/20 text-red-400 border border-red-500/30">Martyn's Law Compliance</span>
              </div>
              <h1 className="font-display text-display-2xl font-extrabold text-white leading-[1.05]">
                Lockdown Alarm Systems That Work When It Matters Most
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Designed for UK schools, healthcare sites, and public venues. Full-site lockdown activation in under 3 seconds. Compliant with Martyn's Law.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <ButtonLink href="#survey" className="btn btn-accent btn-lg">
                  Get a Free Site Survey
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </ButtonLink>
                <ButtonLink href="tel:07778387989" className="btn btn-lg border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 hover:border-white">
                  Call 07778 387 989
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {HERO_STATS.map((stat) => (
                    <div
                      key={stat.value}
                      className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-center backdrop-blur-sm shadow-[0_10px_30px_rgba(6,23,43,0.2)]"
                    >
                      <p className="font-display text-3xl font-bold leading-none text-sky-400">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[2rem] border border-sky-400/20 bg-[#173f66]/85 p-6 shadow-[0_18px_50px_rgba(6,23,43,0.28)] backdrop-blur-sm md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-amber-400">
                      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-display text-2xl font-bold leading-tight text-white">
                        Martyn&apos;s Law Is Approaching Commencement
                      </h2>
                      <p className="text-lg leading-relaxed text-slate-300">
                        The Terrorism (Protection of Premises) Act requires qualifying UK venues
                        to prepare documented emergency procedures and proportionate protective
                        measures. Early preparation helps reduce pressure before commencement.
                      </p>
                      <Link
                        href="/compliance"
                        className="inline-flex items-center gap-2 pt-2 text-lg font-semibold text-sky-400 transition-colors hover:text-sky-300"
                      >
                        Check if your venue may qualify
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PopAlertSection />
      <LockdownHardwareSection />

      {/* What it does */}
      <section className="section-spacing bg-white" aria-labelledby="features-heading">
        <div className="container-site">
          <div className="max-w-2xl mb-12">
            <span className="badge-navy mb-4">System Capabilities</span>
            <h2 id="features-heading" className="font-display text-display-xl font-bold text-navy-900 mt-2">
              Every Feature Designed for Real-World Emergencies
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our lockdown systems aren't adapted from burglar alarms. They're purpose-built for active threat response — with the features your staff need in a high-stress situation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="card p-6 space-y-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="font-semibold text-navy-900">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-spacing bg-navy-900" aria-labelledby="process-heading">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="badge bg-sky-400/15 text-sky-300 border border-sky-400/25 mb-4">Our Process</span>
            <h2 id="process-heading" className="font-display text-display-xl font-bold text-white mt-2">
              From Survey to Signed-Off in 5 Steps
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-navy-700 md:-translate-x-px" aria-hidden="true"/>
            <div className="space-y-8">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <div className="card-navy p-5 inline-block text-left max-w-sm">
                      <p className="text-sky-400 font-mono text-xs font-bold mb-1">{step.number}</p>
                      <h3 className="font-display font-bold text-white">{step.title}</h3>
                      <p className="text-slate-300 text-sm mt-2 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-sky-400 text-navy-900 font-bold text-xs border-2 border-navy-900 top-5">
                    {i + 1}
                  </div>
                  <div className="hidden md:block md:w-1/2"/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Image */}
      <section className="section-spacing bg-slate-50" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 id="faq-heading" className="mb-8 font-display text-display-lg font-bold text-navy-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {FAQS.map((faq, i) => (
                  <details
                    key={i}
                    className="card group p-5 open:shadow-card-hover"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy-900">
                      {faq.question}
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6"/>
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
                className="h-auto w-full max-w-xs drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <HomeQuoteSection sectionId="survey" />

      <CTASection
        variant="urgent"
        headline="Your Lockdown System Should Be Operational Before the Next Incident."
        subheading="Most of our clients book a survey within 48 hours of first contact. The process is fast, transparent, and fully compliant."
        primaryCTA={{ label: 'Book a Free Survey', href: '#survey' }}
        secondaryCTA={{ label: 'Call Us Now', phone: true }}
      />
    </>
  )
}
