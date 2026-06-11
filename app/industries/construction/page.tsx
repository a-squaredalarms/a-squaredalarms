import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'
import { CTASection } from '@/components/sections/CTASection'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'
import { ButtonLink } from '@/components/ui/ButtonLink'

const WP = 'https://a-squaredalarms.com/wp-content/uploads'

export const metadata: Metadata = buildMetadata({
  title: 'Construction Site Safety Systems | Temporary Fire Alarm & AJAX Site Security',
  description:
    'Construction site safety systems across the UK including temporary fire alarm systems and AJAX wireless site security. Fast deployment for active builds, cabins, compounds, welfare areas, and changing site layouts.',
  canonical: 'https://a-squaredalarms.com/industries/construction',
  keywords: [
    'temporary fire alarm system for construction site',
    'construction site fire alarm UK',
    'AJAX wireless security construction site',
    'construction site intruder alarm',
    'wireless site security for temporary buildings',
    'construction compound alarm system',
  ],
})

const CONSTRUCTION_PRIORITIES = [
  {
    title: 'Fast deployment',
    description:
      'Construction sites need protection that can be installed quickly, without waiting for permanent infrastructure, cabling, or finished layouts.',
  },
  {
    title: 'Adaptable coverage',
    description:
      'As phases change, cabins move, and temporary buildings are added, the system needs to scale and reconfigure without disruption.',
  },
  {
    title: 'Out-of-hours resilience',
    description:
      'A large part of site risk happens after working hours, so detection and security need to stay dependable overnight, on weekends, and during shutdown periods.',
  },
]

const CONSTRUCTION_SYSTEMS = [
  {
    id: 'temporary-fire-alarm',
    eyebrow: 'Temporary Fire Alarm Systems',
    title: 'Temporary fire alarm systems for construction sites that can be deployed quickly and repositioned as the build evolves.',
    intro:
      'Construction site fire alarm systems need to protect workers from day one, even when the site is still changing weekly. Temporary fire alarm systems give active builds a fast way to deliver site-wide fire detection and clear evacuation alerting without relying on a finished permanent installation.',
    detail:
      'We help principal contractors, site managers, and developers deploy temporary fire alarm systems across cabins, welfare areas, temporary accommodation, stair cores, access routes, and working floors, with layouts that can be expanded or adjusted as the project develops.',
    bullets: [
      'Rapid deployment for active construction sites, compounds, and temporary buildings',
      'Wireless site-wide alerting that can be moved as layouts and welfare areas change',
      'Suitable for phased works, refurbishments, new builds, and high-risk temporary occupancy',
    ],
    accent: 'amber',
    href: '/fire-alarms',
    cta: 'Explore Temporary Fire Alarm',
    fitTitle: 'Where it performs best',
    fitItems: [
      'Live construction sites needing immediate fire detection before permanent systems exist',
      'Cabins, welfare units, access routes, hoists, and temporary accommodation blocks',
      'Projects where zones, routes, and occupied areas will keep changing over the build programme',
    ],
    note:
      'The best temporary fire alarm systems for construction do two things well: they go live quickly, and they stay practical as the site changes around them.',
    searchTitle: 'What contractors search for',
    searchItems: [
      'temporary fire alarm system construction site',
      'wireless construction site fire alarm',
      'site evacuation alarm for temporary buildings',
    ],
    atAGlance: [
      { label: 'Main goal', value: 'Early fire warning and clear site evacuation' },
      { label: 'Best locations', value: 'Cabins, welfare, temporary blocks, live work areas' },
      { label: 'Operational benefit', value: 'Fast setup with flexible repositioning' },
    ],
    scenarioTitle: 'Typical site deployment',
    scenarioLead:
      'A temporary fire alarm system can be installed early in the programme, then expanded floor by floor or zone by zone as the project progresses.',
    scenarioSteps: [
      'Initial coverage is installed across welfare, cabins, and active work areas',
      'Additional units are added or moved as floors open up or temporary spaces relocate',
      'The site maintains a clear evacuation signal throughout the changing build programme',
    ],
  },
  {
    id: 'ajax-wireless-security',
    eyebrow: 'AJAX Wireless Security',
    title: 'AJAX wireless security for construction sites that need stronger protection for compounds, cabins, tools, and unfinished buildings.',
    intro:
      'Construction site security is rarely just about one door or one alarm panel. AJAX wireless security helps protect cabins, plant rooms, material stores, compounds, and unfinished internal spaces where theft, unauthorised access, and out-of-hours entry are real project risks.',
    detail:
      'For construction environments, AJAX systems are useful because they can be deployed without heavy cabling, positioned around temporary layouts, and adjusted as site boundaries, internal partitions, and secure areas change over time.',
    bullets: [
      'Wireless intrusion protection for site cabins, compounds, stores, and vulnerable entry points',
      'Useful for high-value tools, plant, stock, and temporary admin or welfare spaces',
      'Designed for changing site layouts where traditional fixed security can be impractical',
    ],
    accent: 'rose',
    href: '/intrusion-protection',
    cta: 'Explore AJAX Security',
    fitTitle: 'Where it helps most',
    fitItems: [
      'Cabins, site offices, welfare units, and temporary admin spaces',
      'Tool stores, plant rooms, material containers, and vulnerable perimeter access points',
      'Part-complete buildings where weekend, night-time, or holiday access is a concern',
    ],
    note:
      'AJAX works best on construction sites when it improves awareness of out-of-hours risk without slowing down the project team during working hours.',
    searchTitle: 'What site teams search for',
    searchItems: [
      'AJAX alarm construction site',
      'wireless intruder alarm for construction compound',
      'site cabin security system',
    ],
    atAGlance: [
      { label: 'Main purpose', value: 'Unauthorised access and asset protection' },
      { label: 'Best coverage', value: 'Cabins, compounds, stores, unfinished spaces' },
      { label: 'Best outcome', value: 'Faster awareness of out-of-hours activity' },
    ],
    scenarioTitle: 'Illustrative security use',
    scenarioLead:
      'Instead of discovering a break-in after the fact, approved site contacts can be made aware earlier that a protected cabin, store, or access point has been triggered.',
    scenarioSteps: [
      'A detector or protected entry point activates outside working hours',
      'Approved contacts receive a site security alert for faster follow-up',
      'The project gains better protection for tools, stock, cabins, and unfinished areas',
    ],
  },
] as const

const FAQS = [
  {
    question: 'Why use a temporary fire alarm instead of waiting for the permanent system?',
    answer:
      'Because live construction sites still need dependable fire detection before the permanent building systems are installed, commissioned, or energised. Temporary fire alarm systems protect the site during the build itself.',
  },
  {
    question: 'Can the fire alarm layout be changed as the project moves on?',
    answer:
      'Yes. That is one of the main benefits of a temporary wireless setup. Coverage can be expanded, moved, or reconfigured as new areas open, cabins relocate, or welfare arrangements change.',
  },
  {
    question: 'What is AJAX security most useful for on construction sites?',
    answer:
      'AJAX is especially useful for site cabins, admin spaces, stores, compounds, containers, and unfinished buildings where there is a risk of theft, unauthorised access, or out-of-hours intrusion.',
  },
  {
    question: 'Can temporary fire alarm and site security be planned together?',
    answer:
      'Yes. Many projects benefit from looking at temporary life safety and site security together so evacuation, occupied welfare areas, vulnerable compounds, and out-of-hours protection are all considered as part of one site plan.',
  },
]

export default function ConstructionIndustryPage() {
  const faqSchema = buildFAQSchema(FAQS)
  const accentStyles = {
    amber: {
      badge: 'badge border border-amber-300 bg-amber-50 text-amber-800',
      border: 'border-amber-200',
      soft: 'bg-amber-50',
      pill: 'border-amber-300 bg-amber-50 text-amber-900',
      dot: 'bg-amber-400',
      card: 'border-amber-200 bg-white',
      glow: 'from-amber-100 via-white to-white',
    },
    rose: {
      badge: 'badge border border-rose-300 bg-rose-50 text-rose-800',
      border: 'border-rose-200',
      soft: 'bg-rose-50',
      pill: 'border-rose-300 bg-rose-50 text-rose-800',
      dot: 'bg-rose-400',
      card: 'border-rose-200 bg-white',
      glow: 'from-rose-100 via-white to-white',
    },
  } as const

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <section className="relative overflow-hidden bg-navy-900" aria-label="Construction sites hero">
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
        <div className="absolute left-0 right-0 top-0 h-1 bg-sky-400" aria-hidden="true" />

        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="badge border border-sky-400/30 bg-sky-400/20 text-sky-300">
                Construction Sites
              </span>
              <span className="badge border border-white/20 bg-white/10 text-slate-300">
                Temporary Fire Alarm &amp; AJAX Site Security
              </span>
            </div>

            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              Construction Site Safety Systems Need to Deploy Fast and Keep Pace with the Build.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              We help contractors, developers, and site teams plan the right mix of temporary fire alarm
              systems and AJAX wireless site security for cabins, compounds, welfare areas, access routes,
              storage zones, and unfinished buildings across the UK.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#survey" className="btn btn-accent btn-lg">
                Request a Site Survey
              </ButtonLink>
              <ButtonLink
                href="/contact?service=temporary-fire-alarm"
                className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900"
              >
                Speak to a Specialist
              </ButtonLink>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950/30 to-transparent"
          aria-hidden="true"
        />
      </section>

      <section className="section-spacing bg-white" aria-labelledby="priorities-heading">
        <div className="container-site space-y-10">
          <div className="max-w-3xl">
            <span className="badge-navy mb-4">Construction Priorities</span>
            <h2 id="priorities-heading" className="mt-2 font-display text-display-xl font-bold text-navy-900">
              The right construction site setup is the one that stays practical while the site keeps changing.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Temporary site protection works best when it reflects real site conditions: evolving layouts,
              changing welfare zones, vulnerable compounds, unfinished structures, and out-of-hours risk.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {CONSTRUCTION_PRIORITIES.map((priority) => (
              <div key={priority.title} className="card p-6">
                <h3 className="font-display text-display-sm font-bold text-navy-900">{priority.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{priority.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">
              Jump to a system
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {CONSTRUCTION_SYSTEMS.map((system) => (
                <a
                  key={system.id}
                  href={`#${system.id}`}
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-sky-400 hover:text-sky-700"
                >
                  {system.eyebrow}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {CONSTRUCTION_SYSTEMS.map((system, index) => (
        <section
          key={system.id}
          id={system.id}
          className={index % 2 === 0 ? 'section-spacing bg-slate-50' : 'section-spacing bg-white'}
          aria-labelledby={`${system.id}-heading`}
        >
          <div className="container-site">
            <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)]">
              <div className="space-y-8">
                <div>
                  <span className={`${accentStyles[system.accent].badge} mb-4`}>{system.eyebrow}</span>
                  <h2 id={`${system.id}-heading`} className="mt-2 font-display text-display-xl font-bold text-navy-900">
                    {system.title}
                  </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
                  <div className="space-y-5">
                    <p className="text-lg leading-relaxed text-slate-600">{system.intro}</p>
                    <p className="text-base leading-relaxed text-slate-600">{system.detail}</p>
                  </div>
                  <div
                    className={`rounded-3xl border p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ${accentStyles[system.accent].card}`}
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-400">
                      {system.searchTitle}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {system.searchItems.map((item) => (
                        <span
                          key={item}
                          className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold ${accentStyles[system.accent].pill}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {system.atAGlance.map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-3xl border bg-gradient-to-br p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] ${accentStyles[system.accent].border} ${accentStyles[system.accent].glow}`}
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-3 text-base font-semibold leading-relaxed text-navy-900">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {system.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className={`group rounded-3xl border bg-white px-5 py-5 text-sm leading-relaxed text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)] ${accentStyles[system.accent].border}`}
                    >
                      <span className={`mb-4 block h-2.5 w-12 rounded-full ${accentStyles[system.accent].dot}`} aria-hidden="true" />
                      {bullet}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href={system.href} className="btn btn-primary btn-md">
                    {system.cta}
                  </Link>
                  <a href="#survey" className="btn btn-outline btn-md">
                    Request a Construction Quote
                  </a>
                </div>
              </div>

              <div className="space-y-5 xl:sticky xl:top-28">
                <div
                  className={`rounded-[2rem] border p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${accentStyles[system.accent].card}`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-400">
                    {system.fitTitle}
                  </p>
                  <div className="mt-5 space-y-4">
                    {system.fitItems.map((item, itemIndex) => (
                      <div key={item} className="flex items-start gap-4">
                        <span
                          className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-navy-900 ${accentStyles[system.accent].soft}`}
                        >
                          0{itemIndex + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card overflow-hidden">
                  <div className={`border-b px-6 py-5 ${accentStyles[system.accent].soft} ${accentStyles[system.accent].border}`}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">
                      {system.scenarioTitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{system.scenarioLead}</p>
                  </div>
                  <div className="space-y-4 px-6 py-6">
                    {system.scenarioSteps.map((step, stepIndex) => (
                      <div key={step} className="flex items-start gap-4">
                        <span className={`mt-0.5 h-3 w-3 rounded-full ${accentStyles[system.accent].dot}`} aria-hidden="true" />
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                            Stage 0{stepIndex + 1}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`rounded-3xl border px-5 py-5 text-sm leading-relaxed shadow-[0_8px_24px_rgba(15,23,42,0.04)] ${accentStyles[system.accent].border} ${accentStyles[system.accent].soft}`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    Why this matters
                  </p>
                  <p className="mt-3 text-slate-700">{system.note}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-spacing bg-navy-900" aria-labelledby="planning-heading">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">Planning Approach</span>
            <h2 id="planning-heading" className="mt-4 font-display text-display-xl font-bold text-white">
              We plan around how construction sites operate in the real world.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              The best construction site systems are the ones that can go live early, move with the programme,
              and keep protecting workers, cabins, compounds, and unfinished buildings as the project changes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Site review',
                detail: 'We review compounds, welfare, active work areas, temporary buildings, and likely out-of-hours risk points before recommending anything.',
              },
              {
                title: 'System choice by phase',
                detail: 'We separate urgent day-one requirements from what should scale later as the build, layout, and occupied areas change.',
              },
              {
                title: 'Operational fit',
                detail: 'Recommendations are shaped around access routes, welfare movement, site boundaries, temporary occupancy, and contractor workflows.',
              },
              {
                title: 'Practical handover',
                detail: 'Your site team gets a solution they can actually use and manage during the project, not just a list of installed equipment.',
              },
            ].map((item, index) => (
              <div key={item.title} className="card-navy p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-300">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-display-sm font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="badge-sky mb-4">FAQs</span>
              <h2 id="faq-heading" className="mb-8 font-display text-display-lg font-bold text-navy-900">
                Construction Sites FAQs
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
                src={`${WP}/2025/05/slide1-top@3x.png`}
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
        variant="navy"
        headline="Need a clearer protection plan for your construction site?"
        subheading="We can help you decide what needs to go live now, what should be phased later, and how temporary fire alarm and site security should fit your programme and site layout."
        primaryCTA={{ label: 'Book a Site Survey', href: '#survey' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
