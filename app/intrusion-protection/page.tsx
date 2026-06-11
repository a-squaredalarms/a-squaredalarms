import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildServiceSchema, buildFAQSchema } from '@/lib/seo'
import { CTASection } from '@/components/sections/CTASection'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'
import { ButtonLink } from '@/components/ui/ButtonLink'

const WP = '/images'

export const metadata: Metadata = buildMetadata({
  title: 'Intrusion Protection Systems | Ajax Wireless Security Installation',
  description:
    'Ajax wireless intrusion protection for schools, offices, and commercial premises. App-controlled detectors, instant alerts, perimeter protection, and professional installation across the UK.',
  canonical: 'https://a-squaredalarms.com/intrusion-protection',
  keywords: [
    'intrusion protection system UK',
    'Ajax wireless security installation',
    'wireless intruder alarm for schools',
    'commercial intrusion alarm system',
    'app monitored security system',
    'break-in alert system UK',
  ],
})

const CORE_FEATURES = [
  {
    title: 'Instant alert delivery',
    description:
      'The moment a detector, door contact, or panic trigger activates, nominated staff and keyholders receive app notifications without waiting for someone to spot the issue.',
  },
  {
    title: 'Wireless installation',
    description:
      'Ajax devices communicate wirelessly, which keeps disruption low and makes the system ideal for schools, offices, listed properties, and retrofit projects.',
  },
  {
    title: 'Flexible perimeter coverage',
    description:
      'Protect entrance doors, corridors, plant rooms, store cupboards, external buildings, and vulnerable access routes with a mix of detectors matched to each risk point.',
  },
  {
    title: 'App-based control',
    description:
      'Arm, disarm, isolate areas, review activity, and confirm system status from the Ajax app with a full event history for management and security teams.',
  },
  {
    title: 'Scalable site zoning',
    description:
      'Split your premises into practical zones so reception, offices, warehouses, and out-of-hours areas can be managed independently without overcomplicating daily use.',
  },
  {
    title: 'Integrated site security',
    description:
      'Intrusion protection can work alongside access control, CCTV, lockdown systems, and life-safety measures to create one clear response plan across the whole site.',
  },
]

const PROTECTED_AREAS = [
  'Main entrances and rear access doors',
  'Reception areas and admin blocks',
  'Stores, stock rooms, and server rooms',
  'Outbuildings, plant areas, and temporary cabins',
  'Perimeter routes vulnerable to after-hours access',
  'Selected internal zones that need separate arming schedules',
]

const RESPONSE_STEPS = [
  {
    number: '01',
    title: 'Survey the risk points',
    description:
      'We review your access routes, vulnerable rooms, operating hours, and staff routines so the system is designed around the way the building is actually used.',
  },
  {
    number: '02',
    title: 'Build the right detection mix',
    description:
      'Door contacts, motion detectors, internal sirens, external warning devices, and keypads are matched to the threats you need to cover without overengineering the site.',
  },
  {
    number: '03',
    title: 'Configure alerts and permissions',
    description:
      'We set who receives notifications, which zones can be armed separately, and what happens when different events are triggered during the day or out of hours.',
  },
  {
    number: '04',
    title: 'Train your team',
    description:
      'Your key staff are shown how to arm, disarm, respond to alerts, and manage the system from the app so the protection remains simple and dependable.',
  },
]

const SITE_TYPES = [
  {
    title: 'Schools and colleges',
    description:
      'Protect reception areas, staff-only rooms, sports blocks, and outbuildings with zoned wireless security that fits around safeguarding and site access routines.',
  },
  {
    title: 'Commercial offices',
    description:
      'Secure entry points, server rooms, archive storage, and quiet floors after hours without relying on an inflexible hard-wired layout.',
  },
  {
    title: 'Retail and mixed-use sites',
    description:
      'Cover shutters, stock rooms, back-of-house areas, and shared access routes with clear alert escalation for managers and keyholders.',
  },
  {
    title: 'Healthcare and care settings',
    description:
      'Protect medicine stores, admin offices, and sensitive access points while keeping day-to-day operation calm, controlled, and easy for authorised staff.',
  },
]

const FAQS = [
  {
    question: 'What is Ajax wireless intrusion protection?',
    answer:
      'Ajax is a professional wireless security platform that uses smart detectors, hubs, sirens, and app-based management to detect unauthorised access and alert the right people immediately.',
  },
  {
    question: 'Is it suitable for schools and commercial premises?',
    answer:
      'Yes. Ajax works well across schools, offices, retail units, healthcare settings, and multi-building commercial sites because it can be zoned around different users, spaces, and operating hours.',
  },
  {
    question: 'Do you need to run lots of new cabling?',
    answer:
      'In many cases, no. Because the devices communicate wirelessly, installation is usually much less disruptive than a traditional hard-wired approach, which makes Ajax especially useful for live sites and retrofit projects.',
  },
  {
    question: 'Can alerts go to more than one person?',
    answer:
      'Yes. We can configure app notifications for multiple authorised users so management, caretakers, facilities teams, or keyholders are informed according to the site’s response plan.',
  },
  {
    question: 'Can it be integrated with other site systems?',
    answer:
      'Yes. Intrusion protection can sit alongside access control, CCTV, and wider site-security measures so the response is coordinated rather than split across disconnected systems.',
  },
]

export default function IntrusionProtectionPage() {
  const serviceSchema = buildServiceSchema({
    name: 'Intrusion Protection',
    description:
      'Ajax wireless intrusion protection for schools, offices, healthcare sites, and commercial premises across the UK.',
    provider: 'A-Squared Alarms',
    areaServed: 'United Kingdom',
    serviceType: 'Intrusion Protection Installation',
    url: 'https://a-squaredalarms.com/intrusion-protection',
  })

  const faqSchema = buildFAQSchema(FAQS)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <section className="relative overflow-hidden bg-navy-900" aria-label="Intrusion protection hero">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, #6EC1E4 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400" aria-hidden="true" />

        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
                  Ajax Wireless Security
                </span>
                <span className="badge border border-white/15 bg-white/10 text-slate-200">
                  App-Controlled Protection
                </span>
              </div>

              <h1 className="font-display text-display-2xl font-extrabold leading-[1.02] text-white">
                Intrusion Protection That Responds Fast and Stays Easy to Manage.
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                Professional wireless intrusion protection for schools, offices, and commercial
                premises. We design Ajax systems around your access points, vulnerable zones, and
                out-of-hours risks so the right people know immediately when something is wrong.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {['Wireless retrofit friendly', 'Instant app notifications', 'Zoned site control'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/15 text-sky-300" aria-hidden="true">
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
                  Request a Free Survey
                </ButtonLink>
                <ButtonLink
                  href="tel:07778387989"
                  className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900"
                >
                  Call 07778 387 989
                </ButtonLink>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-[0_24px_80px_rgba(2,6,23,0.28)] backdrop-blur-sm">
                <div className="rounded-[1.7rem] border border-white/10 bg-navy-950/80 p-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">
                        Ajax Site Overview
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">Live protected zones</p>
                    </div>
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      Armed
                    </span>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      ['Front reception', 'Door contact + keypad'],
                      ['Rear delivery door', 'Contact + siren route'],
                      ['Admin offices', 'Motion + app alerts'],
                      ['Server / store room', 'Independent night zone'],
                    ].map(([label, detail]) => (
                      <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold text-white">{label}</p>
                          <span className="h-2.5 w-2.5 rounded-full bg-sky-300" aria-hidden="true" />
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-sky-400/20 bg-sky-400/10 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-sky-200">
                          Alert Path
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          Detector event to app notification in seconds
                        </p>
                      </div>
                      <svg
                        className="h-8 w-8 flex-shrink-0 text-sky-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        aria-hidden="true"
                      >
                        <rect x="7" y="2" width="10" height="20" rx="2" />
                        <path d="M10 6h4M10 10h4M12 18h.01" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="intrusion-overview-heading">
        <div className="container-site grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <span className="badge-navy mb-4">What We Install</span>
              <h2
                id="intrusion-overview-heading"
                className="mt-2 font-display text-display-xl font-bold text-navy-900"
              >
                Wireless security built around real access risks.
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-slate-600">
              Every site has different weak points. Some need better perimeter coverage, some need
              clean out-of-hours management, and others need a faster response when staff are not
              close to the affected area. We design the system around those realities rather than
              forcing a generic detector layout onto your building.
            </p>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                Typical coverage points
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {PROTECTED_AREAS.map((area) => (
                  <div key={area} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CORE_FEATURES.map((feature) => (
              <article key={feature.title} className="card p-6">
                <p className="font-display text-xl font-bold text-navy-900">{feature.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="site-types-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="badge-sky mb-4">Where It Works Best</span>
            <h2
              id="site-types-heading"
              className="mt-2 font-display text-display-xl font-bold text-navy-900"
            >
              Designed for live sites where security still has to stay practical.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Ajax intrusion protection is especially useful where a site is already occupied, where
              layouts may change over time, or where you need clearer control over who gets alerted
              and when.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {SITE_TYPES.map((site) => (
              <article key={site.title} className="card p-6">
                <h3 className="font-display text-display-sm font-bold text-navy-900">{site.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{site.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-navy-900" aria-labelledby="process-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
              Installation Process
            </span>
            <h2
              id="process-heading"
              className="mt-4 font-display text-display-xl font-bold text-white"
            >
              A cleaner route from risk review to active protection.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              We keep the rollout clear: define the risks, position the right devices, set the
              response pathway, and leave your team confident using the system.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {RESPONSE_STEPS.map((step) => (
              <article key={step.number} className="card-navy p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-300">
                  Step {step.number}
                </p>
                <h3 className="mt-4 font-display text-display-sm font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2
                id="faq-heading"
                className="mb-8 font-display text-display-lg font-bold text-navy-900"
              >
                Intrusion Protection FAQs
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="card group p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy-900">
                      <span>{faq.question}</span>
                      <span className="text-sky-600 transition-transform group-open:rotate-45">+</span>
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
        variant="navy"
        headline="Need a stronger after-hours security response?"
        subheading="We install intrusion protection that gives your staff and keyholders clearer visibility, faster alerts, and easier control across the whole site."
        primaryCTA={{ label: 'Book a Free Site Survey', href: '/contact?service=intrusion-protection' }}
        secondaryCTA={{ label: 'Call Us', phone: true }}
        note="Wireless retrofit options available for occupied buildings and phased upgrades."
      />
    </>
  )
}
