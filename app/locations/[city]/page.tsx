import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  buildLocationMetadata,
  buildLocationSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
} from '@/lib/seo'
import { LOCATIONS, SERVICES, BRAND } from '@/lib/data'
import type { LocationPage } from '@/types'
import { CTASection } from '@/components/sections/CTASection'
import { ButtonLink } from '@/components/ui/ButtonLink'

// ─── Static Params ────────────────────────────────────────────────────────────

export async function generateStaticParams(): Promise<Array<{ city: string }>> {
  return LOCATIONS.map((location) => ({
    city: location.slug,
  }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const location = LOCATIONS.find((l) => l.slug === city)
  if (!location) return {}
  return buildLocationMetadata(location)
}

// ─── Helper ───────────────────────────────────────────────────────────────────

function getLocation(slug: string): LocationPage {
  const location = LOCATIONS.find((l) => l.slug === slug)
  if (!location) notFound()
  return location
}

// ─── Local Services Block ─────────────────────────────────────────────────────

function LocalServiceCard({
  title,
  description,
  href,
  city,
}: {
  title: string
  description: string
  href: string
  city: string
}) {
  return (
    <Link
      href={href}
      className="group card-hover flex h-full flex-col p-6"
      aria-label={`${title} in ${city}`}
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
        </svg>
      </div>
      <h3 className="mt-5 font-display text-display-sm font-bold text-navy-900">
        {title} in {city}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
      <span className="mt-5 text-sm font-semibold text-navy-800 transition-colors group-hover:text-sky-700">
        Learn more →
      </span>
    </Link>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function LocationPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const location = getLocation(city)
  const locationSchema = buildLocationSchema(location)
  const areaLabel = location.areaType === 'county' ? location.city : `${location.city} and ${location.region}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: locationSchema }} />
      {location.faqs && location.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildFAQSchema(location.faqs) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: buildBreadcrumbSchema([
            { name: 'Locations', path: '/locations' },
            { name: location.city, path: `/locations/${location.slug}` },
          ]),
        }}
      />


      {/* Hero */}
      <section
        className="relative overflow-hidden bg-navy-900"
        aria-label={`Safety systems in ${location.city}`}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400" aria-hidden="true" />
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 80% 50%, #6EC1E4 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container-site relative z-10 py-16 md:py-20">
          <div className="max-w-3xl space-y-5">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-slate-400">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/locations" className="transition-colors hover:text-white">
                    Locations
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-white">{location.city}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-sky-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="font-medium text-sky-300">
                {location.city}
                {location.areaType === 'county' ? '' : `, ${location.region}`}
              </span>
            </div>

            <h1 className="font-display text-display-2xl font-extrabold leading-[1.05] text-white">
              {location.heading ?? `Lockdown Alarms & Safety Systems in ${location.city}`}
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              {location.lead ??
                `Lockdown alarms, temporary fire alarms, vape detection, access control and intrusion protection for schools, construction sites and commercial premises across ${areaLabel}.`}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="btn btn-accent btn-lg">
                Book a Free Site Survey
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </ButtonLink>
              <ButtonLink
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900"
              >
                {BRAND.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section
        className="section-spacing-sm bg-white"
        aria-labelledby={`intro-${location.slug}-heading`}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-7">
              <span className="badge-navy">Local Coverage</span>
              <h2
                id={`intro-${location.slug}-heading`}
                className="font-display text-display-lg font-bold text-navy-900"
              >
                Safety Systems for {location.city} Sites
              </h2>
              {location.intro && (
                <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                  {location.intro}
                </p>
              )}
              <p className="leading-relaxed text-slate-600">
                We install and support wireless lockdown alarm systems across {areaLabel}, alongside
                temporary fire alarms, vape detection, access control and intrusion protection. Every
                installation starts with a free site survey, because the right specification depends on
                the building rather than on floor area.
              </p>

              {location.authorities && location.authorities.length > 0 && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="mb-3 text-sm font-semibold text-navy-900">
                    Local authority areas we cover:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {location.authorities.map((authority) => (
                      <span key={authority} className="badge-navy text-xs">
                        {authority}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {location.nearbyAreas && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="mb-3 text-sm font-semibold text-navy-900">Also serving nearby:</p>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAreas.map((area) => (
                      <span key={area} className="badge-sky text-xs">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {location.siteTypes && location.siteTypes.length > 0 && (
              <div className="lg:col-span-5">
                <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Site types we work with here
                  </p>
                  <ul className="mt-4 space-y-3">
                    {location.siteTypes.map((siteType) => (
                      <li key={siteType} className="flex items-start gap-3">
                        <span
                          className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-slate-700">{siteType}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn btn-primary btn-md mt-6 w-full">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="section-spacing bg-slate-50"
        aria-labelledby={`services-${location.slug}-heading`}
      >
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <span className="badge-sky">Our Services</span>
            <h2
              id={`services-${location.slug}-heading`}
              className="mt-4 font-display text-display-lg font-bold text-navy-900"
            >
              Every system we install in {location.city}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Most sites start with one system and add others as procedures develop. Each links through
              to full detail on what it involves.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => (
              <LocalServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                href={service.href}
                city={location.city}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Local context — the genuinely area-specific content */}
      {location.localContext && location.localContext.length > 0 && (
        <section
          className="section-spacing bg-white"
          aria-labelledby={`context-${location.slug}-heading`}
        >
          <div className="container-site">
            <div className="mb-10 max-w-3xl">
              <span className="badge-navy">Local Knowledge</span>
              <h2
                id={`context-${location.slug}-heading`}
                className="mt-4 font-display text-display-lg font-bold text-navy-900"
              >
                What we have learned working in {location.city}
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {location.localContext.map((section) => (
                <article
                  key={section.heading}
                  className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card md:p-8"
                >
                  <h3 className="font-display text-display-sm font-bold text-navy-900">
                    {section.heading}
                  </h3>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 space-y-3 rounded-2xl bg-slate-50 p-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500"
                            aria-hidden="true"
                          />
                          <span className="text-sm leading-relaxed text-slate-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section
        className="section-spacing bg-slate-50"
        aria-labelledby={`process-${location.slug}-heading`}
      >
        <div className="container-site">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-6">
              <span className="badge-sky">How It Works</span>
              <h2
                id={`process-${location.slug}-heading`}
                className="font-display text-display-lg font-bold text-navy-900"
              >
                Getting a system into your {location.city} site
              </h2>
              <p className="leading-relaxed text-slate-600">
                The process is the same wherever you are. What changes is the specification, which comes
                out of walking your building rather than applying a formula to its floor area.
              </p>
              <p className="leading-relaxed text-slate-600">
                You keep the specification either way. If you use it to compare quotes from other
                suppliers, that is a reasonable outcome of a free survey.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Link href="/contact" className="btn btn-primary btn-md">
                  Book a Free Site Survey
                </Link>
                <Link href="/blog/lockdown-alarm-site-survey-what-to-expect" className="btn btn-outline btn-md">
                  What Happens at a Survey
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ol className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Free site survey',
                    body: `We walk your ${location.city} site, discuss what should happen when the alert sounds, and identify where coverage is needed including outdoor areas.`,
                  },
                  {
                    step: '2',
                    title: 'Written specification',
                    body: 'You receive what is proposed, where it goes and why, in language you can take to a governing body or finance lead without translation.',
                  },
                  {
                    step: '3',
                    title: 'Installation around your calendar',
                    body: 'Work is sequenced area by area so disruption stays local. Wireless systems mean most sites do not need to close.',
                  },
                  {
                    step: '4',
                    title: 'Handover and first drill',
                    body: 'We walk your team through triggering, the all-clear and fault indications, then you test it while it is still fresh.',
                  },
                ].map((item) => (
                  <li
                    key={item.step}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-sky-400 font-bold text-navy-900">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy-900">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {location.faqs && location.faqs.length > 0 && (
        <section className="section-spacing bg-white" aria-labelledby={`faq-${location.slug}-heading`}>
          <div className="container-site">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <span className="badge-navy">FAQs</span>
                <h2
                  id={`faq-${location.slug}-heading`}
                  className="mt-4 font-display text-display-lg font-bold text-navy-900"
                >
                  Common questions from {location.city} sites
                </h2>
              </div>
              <div className="divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white px-6 shadow-card md:px-8">
                {location.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-navy-900 marker:hidden">
                      {faq.question}
                      <span
                        className="mt-1 flex-shrink-0 text-sky-600 transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CTASection
        variant="navy"
        headline={`Book a free site survey in ${location.city}`}
        subheading={`Tell us about your site and we will walk it, specify what it needs, and put the whole thing in writing. No obligation, and the specification is yours to keep.`}
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'Call Us', phone: true }}
        note={`Covering ${areaLabel} and the surrounding area.`}
      />
    </>
  )
}
