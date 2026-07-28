import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { CASE_STUDIES, MANUFACTURER, getFeaturedCaseStudy } from '@/lib/case-studies'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'Lockdown Alarm Case Studies | Real School & Trust Deployments',
  description:
    'Alertex lockdown system case studies published by the manufacturer, covering all-through schools and multi-academy trusts across the UK. See how wireless lockdown alerting works on real sites.',
  canonical: 'https://a-squaredalarms.com/case-studies',
  keywords: [
    'lockdown alarm case studies',
    'school lockdown system case study',
    'Alertex case studies',
    'multi-academy trust lockdown system',
    'wireless lockdown alarm school',
  ],
})

const DEPLOYMENT_THEMES = [
  {
    title: 'Wireless, Not Rewired',
    description:
      'Every deployment here is wireless, which is why they went in without cabling routes, civil works, or building alterations.',
    href: '/lockdown-alarms',
  },
  {
    title: 'Outdoor Coverage',
    description:
      'Playgrounds, sports pitches, and open sites need alerting too. External units extend the same alert beyond the building.',
    href: '/lockdown-alarms',
  },
  {
    title: 'Distinct From Fire',
    description:
      'Blue beacons and separate tones stop a lockdown being mistaken for a fire evacuation, which reverses what staff should do.',
    href: '/lockdown-alarms',
  },
  {
    title: 'Built To Expand',
    description:
      'Sites added devices later without reworking the original install, which suits phased budgets and growing estates.',
    href: '/lockdown-alarms',
  },
  {
    title: 'Trust-Wide Rollouts',
    description:
      'Multi-academy trusts standardised the same response across several schools rather than site-by-site improvisation.',
    href: '/industries/schools',
  },
  {
    title: 'Central Monitoring',
    description:
      'The IP Bridge reports battery status and system health by email, so nobody has to remember to check devices manually.',
    href: '/compliance',
  },
] as const

function SourceNote({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm leading-relaxed text-slate-500 ${className}`}>
      These case studies were published by {MANUFACTURER.name}, the manufacturer of the{' '}
      {MANUFACTURER.brand} range. They document {MANUFACTURER.brand} deployments on real sites, not
      installations carried out by A-Squared Alarms. Each one links to the original write-up.
    </p>
  )
}

function CaseStudyCard({
  organisation,
  sector,
  location,
  displayDate,
  excerpt,
  scale,
  sourceUrl,
}: (typeof CASE_STUDIES)[number]) {
  return (
    <a
      href={sourceUrl}
      className="group card-hover flex h-full flex-col overflow-hidden p-6"
      aria-label={`Read the ${organisation} case study on the ${MANUFACTURER.brand} website`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="badge-sky shrink-0 whitespace-nowrap">{sector}</span>
        <span className="min-w-0 text-right text-xs font-medium leading-relaxed text-slate-400">
          {location}
        </span>
      </div>
      <h2 className="mt-5 font-display text-display-sm font-bold text-navy-900">{organisation}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">{scale}</p>
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="text-xs uppercase tracking-[0.16em] text-slate-400">{displayDate}</span>
        <span className="text-sm font-semibold text-navy-800 transition-colors group-hover:text-sky-700">
          Read on {MANUFACTURER.brand} →
        </span>
      </div>
    </a>
  )
}

export default function CaseStudiesPage() {
  const featuredStudy = getFeaturedCaseStudy()
  const otherStudies = CASE_STUDIES.filter((study) => study.id !== featuredStudy.id)

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900" aria-label="Case studies hero">
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

        <div className="container-site relative z-10 py-16 md:py-20">
          <div className="max-w-4xl space-y-6">
            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
              Real Site Deployments
            </span>
            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              Lockdown Alarm Case Studies
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              All-through schools and multi-academy trusts that put {MANUFACTURER.brand} lockdown
              alerting into buildings already full of pupils. Useful reading if you want to see how
              wireless coverage, outdoor alerting, and trust-wide rollouts work in practice.
            </p>
            <p className="max-w-3xl rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 text-sm leading-relaxed text-slate-300">
              <span className="font-semibold text-white">Source:</span> these case studies are
              published by {MANUFACTURER.name}, the manufacturer of the {MANUFACTURER.brand} systems
              we install. They are not A-Squared Alarms installations, and each one links back to the
              manufacturer&apos;s original write-up.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-accent btn-lg">
                Book a Free Site Survey
              </Link>
              <Link
                href="/lockdown-alarms"
                className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900"
              >
                Explore Lockdown Systems
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950/30 to-transparent"
          aria-hidden="true"
        />
      </section>

      <section className="section-spacing-sm bg-white" aria-labelledby="deployment-themes-heading">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <span className="badge-navy">Patterns Worth Noting</span>
            <h2
              id="deployment-themes-heading"
              className="mt-4 font-display text-display-lg font-bold text-navy-900"
            >
              What these deployments have in common.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Different sites, similar decisions. Read across the case studies and the same handful of
              practical constraints keep shaping the design.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {DEPLOYMENT_THEMES.map((theme) => (
              <Link key={theme.title} href={theme.href} className="card-hover p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">
                  Design Pattern
                </p>
                <h3 className="mt-4 font-display text-display-sm font-bold text-navy-900">
                  {theme.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{theme.description}</p>
                <p className="mt-5 text-sm font-semibold text-navy-800">Explore topic →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="featured-case-study-heading">
        <div className="container-site">
          <div className="grid items-stretch gap-8 xl:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)]">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
              <div className="border-b border-slate-200 bg-navy-900 px-6 py-6 md:px-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
                    Featured Case Study
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-300">
                    {featuredStudy.displayDate} · {featuredStudy.location}
                  </span>
                </div>
                <h2
                  id="featured-case-study-heading"
                  className="mt-5 font-display text-display-lg font-bold text-white"
                >
                  {featuredStudy.organisation}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                  {featuredStudy.excerpt}
                </p>
              </div>

              <div className="grid gap-8 px-6 py-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Why this deployment is worth reading
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    <p>
                      An all-through school covering ages 4 to 18 has to make one alert work for
                      reception children and sixth formers at the same time, across a site that
                      includes open outdoor space. External devices were added so coverage reached the
                      football pitch, not just the corridors.
                    </p>
                    <p>
                      It is also a useful reference for phasing. The school started with 34 devices
                      and added seven more sounder/beacons a year later, without reworking what was
                      already in place.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={featuredStudy.sourceUrl}
                      className="btn btn-primary btn-md"
                    >
                      Read the Full Case Study →
                    </a>
                    <Link href="/lockdown-alarms" className="btn btn-outline btn-md">
                      Explore Lockdown Alarm Systems
                    </Link>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Key Details
                  </p>
                  <div className="mt-4 space-y-4">
                    {featuredStudy.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400"
                          aria-hidden="true"
                        />
                        <p className="text-sm leading-relaxed text-slate-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      System
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      {featuredStudy.system}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  More Case Studies
                </p>
                <div className="mt-4 space-y-4">
                  {otherStudies.map((study) => (
                    <a
                      key={study.id}
                      href={study.sourceUrl}
                      className="block rounded-2xl border border-slate-200 px-4 py-4 transition-colors hover:border-sky-300 hover:bg-sky-50/40"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {study.sector}
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-navy-900">
                        {study.organisation}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {study.displayDate} · {study.location}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  About These Case Studies
                </p>
                <SourceNote className="mt-3" />
                <a
                  href={MANUFACTURER.caseStudiesUrl}
                  className="mt-4 inline-block text-sm font-semibold text-navy-800 transition-colors hover:text-sky-700"
                >
                  View all on {MANUFACTURER.brand} →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="all-case-studies-heading">
        <div className="container-site">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="badge-sky">All Case Studies</span>
              <h2
                id="all-case-studies-heading"
                className="mt-4 font-display text-display-lg font-bold text-navy-900"
              >
                Lockdown alerting on sites like yours.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
                Each summary below is ours. Follow the link to read the manufacturer&apos;s full
                write-up, including system detail and comments from the sites themselves.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Attribution
            </p>
            <SourceNote className="mt-3 max-w-4xl" />
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        headline="Want this on your site?"
        subheading="If any of these deployments look like your building, we can walk your site and tell you what a comparable lockdown system would involve."
        primaryCTA={{ label: 'Book a Free Site Survey', href: '/contact' }}
        secondaryCTA={{ label: 'Call Us', phone: true }}
        note="Advice is tailored to your site, procedures, and operational priorities."
      />
    </>
  )
}
