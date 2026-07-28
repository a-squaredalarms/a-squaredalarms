import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema } from '@/lib/seo'
import { LOCATIONS, SERVICES } from '@/lib/data'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'Areas We Cover | Lockdown Alarm Installation Across the UK',
  description:
    'A-Squared Alarms installs lockdown alarms, temporary fire alarms, vape detection, access control and intrusion protection across London, Manchester, Birmingham, Leeds, Bristol and counties throughout England.',
  canonical: 'https://a-squaredalarms.com/locations',
  keywords: [
    'lockdown alarm installer UK',
    'safety systems near me',
    'lockdown alarm London',
    'school lockdown system installer',
    'nationwide lockdown alarm installation',
  ],
})

function AreaCard({ city, slug, region }: { city: string; slug: string; region: string }) {
  return (
    <Link href={`/locations/${slug}`} className="group card-hover flex flex-col p-5">
      <div className="flex items-center gap-2">
        <svg
          className="h-4 w-4 flex-shrink-0 text-sky-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <h3 className="font-display text-lg font-bold text-navy-900">{city}</h3>
      </div>
      <p className="mt-2 text-sm text-slate-500">{region}</p>
      <span className="mt-4 text-sm font-semibold text-navy-800 transition-colors group-hover:text-sky-700">
        View coverage →
      </span>
    </Link>
  )
}

export default function LocationsPage() {
  const cities = LOCATIONS.filter((l) => l.areaType !== 'county')
  const counties = LOCATIONS.filter((l) => l.areaType === 'county')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: buildBreadcrumbSchema([{ name: 'Locations', path: '/locations' }]),
        }}
      />

      <section className="relative overflow-hidden bg-navy-900" aria-label="Areas we cover">
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
                <li className="font-medium text-white">Locations</li>
              </ol>
            </nav>
            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
              Areas We Cover
            </span>
            <h1 className="font-display text-display-2xl font-extrabold leading-[1.05] text-white">
              Lockdown Alarm Installation Across the UK
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              We install and support safety systems for schools, construction sites and commercial
              premises nationwide. Choose your area for local detail, or get in touch wherever you are.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-accent btn-lg">
                Book a Free Site Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing-sm bg-white" aria-labelledby="cities-heading">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <span className="badge-navy">Major Cities</span>
            <h2 id="cities-heading" className="mt-4 font-display text-display-lg font-bold text-navy-900">
              City coverage
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Detailed local pages covering the building types, access constraints and site
              characteristics specific to each city.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
            {cities.map((location) => (
              <AreaCard
                key={location.slug}
                city={location.city}
                slug={location.slug}
                region={location.region}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="counties-heading">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <span className="badge-sky">Counties</span>
            <h2
              id="counties-heading"
              className="mt-4 font-display text-display-lg font-bold text-navy-900"
            >
              County coverage
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Wider county pages covering the towns and authorities around each region. If your area
              is not listed, we almost certainly still cover it — just ask.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
            {counties.map((location) => (
              <AreaCard
                key={location.slug}
                city={location.city}
                slug={location.slug}
                region={location.region}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="services-everywhere-heading">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <span className="badge-navy">What We Install</span>
            <h2
              id="services-everywhere-heading"
              className="mt-4 font-display text-display-lg font-bold text-navy-900"
            >
              The same systems, wherever you are
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Coverage is national. What changes between sites is the specification, which comes out of
              walking the building rather than applying a formula to its floor area.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service) => (
              <Link key={service.id} href={service.href} className="card-hover p-6">
                <h3 className="font-display text-display-sm font-bold text-navy-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <p className="mt-5 text-sm font-semibold text-navy-800">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        headline="Not sure if we cover your area?"
        subheading="We work nationwide, and the pages above are the areas we are asked about most. If yours is not listed, get in touch and we will tell you straight away."
        primaryCTA={{ label: 'Contact Us', href: '/contact' }}
        secondaryCTA={{ label: 'Call Us', phone: true }}
      />
    </>
  )
}
