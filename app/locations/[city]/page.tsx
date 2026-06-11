import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildLocationMetadata, buildLocationSchema } from '@/lib/seo'
import { LOCATIONS, SERVICES, BRAND } from '@/lib/data'
import type { LocationPage } from '@/types'
import { CTASection } from '@/components/sections/CTASection'
import { QuoteForm } from '@/components/sections/QuoteForm'
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

interface LocalServiceRowProps {
  title: string
  description: string
  href: string
  city: string
}

function LocalServiceRow({ title, description, href, city }: LocalServiceRowProps) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-card transition-all">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
          <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-navy-900 text-sm">{title} in {city}</h3>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{description}</p>
      </div>
      <Link
        href={href}
        className="flex-shrink-0 text-xs font-semibold text-navy-800 hover:text-sky-600 transition-colors"
        aria-label={`Learn about ${title}`}
      >
        Learn more →
      </Link>
    </div>
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: locationSchema }}
      />

      {/* Hero */}
      <section className="bg-navy-900 relative overflow-hidden" aria-label={`Services in ${location.city}`}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400" aria-hidden="true"/>
        <div className="container-site relative z-10 py-16 md:py-20">
          <div className="max-w-3xl space-y-5">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-slate-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium">{location.city}</li>
              </ol>
            </nav>

            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-sky-300 font-medium">{location.city}, {location.region}</span>
            </div>

            <h1 className="font-display text-display-2xl font-extrabold text-white leading-[1.05]">
              Lockdown &amp; Safety Alarm Systems in {location.city}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              A-Squared Alarms provides Martyn's Law-aligned lockdown systems, temporary fire alarms, and vape detection to schools, construction sites, and commercial premises across {location.city} and {location.region}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <ButtonLink href="#enquire" className="btn btn-accent btn-lg">
                Get a Free Survey in {location.city}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </ButtonLink>
              <ButtonLink
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="btn btn-lg border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 hover:border-white"
              >
                {BRAND.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Local intro */}
      <section className="section-spacing-sm bg-white" aria-label={`About our ${location.city} coverage`}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-display text-display-lg font-bold text-navy-900">
                Why {location.city} Organisations Choose A-Squared Alarms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We have installed safety systems across hundreds of sites in {location.city} and throughout {location.region}. Our engineers know the local authority requirements, the school estate challenges, and the construction site access constraints specific to this area.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As organisations prepare for Martyn&apos;s Law, {location.city} venues are reviewing how their procedures, staff awareness, and site security arrangements may need to evolve. Our compliance consultation service cuts through the complexity and helps you prioritise practical next steps.
              </p>

              {location.nearbyAreas && (
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-navy-900 mb-2">Also serving nearby areas:</p>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAreas.map((area) => (
                      <span key={area} className="badge-navy text-xs">{area}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { value: '48 hrs', label: `Survey arranged within 48 hours in ${location.city}` },
                { value: '5 days', label: 'Average time from survey to installation' },
                { value: '100%', label: 'Compliance on every installation we sign off' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 p-4 rounded-xl bg-navy-50 border border-navy-100">
                  <span className="font-display text-3xl font-extrabold text-navy-800 flex-shrink-0">{stat.value}</span>
                  <span className="text-sm text-slate-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="section-spacing bg-slate-50" aria-labelledby={`services-${location.slug}-heading`}>
        <div className="container-site">
          <h2
            id={`services-${location.slug}-heading`}
            className="font-display text-display-lg font-bold text-navy-900 mb-8"
          >
            Safety Systems Available in {location.city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((service) => (
              <LocalServiceRow
                key={service.id}
                title={service.title}
                description={service.description}
                href={`/${service.slug}`}
                city={location.city}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Local enquiry form */}
      <section
        className="section-spacing bg-white"
        aria-labelledby={`enquire-${location.slug}-heading`}
        id="enquire"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              <h2
                id={`enquire-${location.slug}-heading`}
                className="font-display text-display-lg font-bold text-navy-900"
              >
                Get a Free Survey in {location.city}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our {location.city}-area engineer will visit your site, assess your compliance obligations, and provide a no-obligation written quote within 24 hours.
              </p>
              <div className="rounded-xl bg-sky-50 border border-sky-200 p-4 space-y-2">
                <p className="text-sm font-semibold text-sky-800">What happens after you submit:</p>
                <ul className="text-sm text-sky-700 space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">1.</span> We call you within 2 business hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">2.</span> Site survey arranged within 48 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold mt-0.5">3.</span> Written quote within 24 hours of survey
                  </li>
                </ul>
              </div>
            </div>
            <div className="card p-6 md:p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        headline={`Protecting ${location.city} Organisations Since 2018`}
        subheading={`From ${location.nearbyAreas?.[0] ?? 'central ' + location.city} to the wider ${location.region} area — we're your local safety systems specialists.`}
        primaryCTA={{ label: 'Book a Free Survey', href: '#enquire' }}
        secondaryCTA={{ label: `Call ${BRAND.phone}`, phone: true }}
      />
    </>
  )
}
