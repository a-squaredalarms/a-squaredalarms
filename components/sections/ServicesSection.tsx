import Link from 'next/link'
import type { Service } from '@/types'

// ─── Icon Map ─────────────────────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ReactNode> = {
  'shield-alert': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-6 w-6">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
  'flame': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-6 w-6">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7 7 7 0 01-7-7c0-1.507.332-2.942.947-4.235"/>
    </svg>
  ),
  'wind': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-6 w-6">
      <path d="M17.7 7.7a2.5 2.5 0 111.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1111 8H2"/><path d="M12.6 19.4A2 2 0 1014 16H2"/>
    </svg>
  ),
  'cpu': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true" className="h-6 w-6">
      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  ),
}

// ─── Service Card ─────────────────────────────────────────────────────────────

interface ServiceCardProps {
  service: Service
  featured?: boolean
}

function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl border transition-all duration-200 group ${
        featured
          ? 'bg-navy-800 border-sky-400/30 text-white shadow-glow-navy hover:shadow-glow-sky'
          : 'bg-white border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5'
      }`}
      aria-label={service.title}
    >
      {service.badge && (
        <div className="absolute -top-3 left-5">
          <span className={`badge text-xs font-bold ${featured ? 'bg-sky-400 text-navy-900' : 'badge-navy'}`}>
            {service.badge}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1 gap-4">

        {/* Icon */}
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
            featured
              ? 'bg-sky-400/15 text-sky-400'
              : 'bg-navy-50 text-navy-800 group-hover:bg-navy-100'
          }`}
        >
          {ICON_MAP[service.icon]}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <h3 className={`font-display text-lg font-bold leading-tight ${featured ? 'text-white' : 'text-navy-900'}`}>
              {service.title}
            </h3>
          </div>

          <span className={`inline-block text-xs font-semibold uppercase tracking-wider ${featured ? 'text-sky-400' : 'text-sky-600'}`}>
            {service.tagline}
          </span>

          <p className={`text-sm leading-relaxed ${featured ? 'text-slate-300' : 'text-slate-600'}`}>
            {service.description}
          </p>
        </div>

        {/* CTA */}
        <Link
          href={service.href}
          className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
            featured
              ? 'text-sky-400 hover:text-sky-300'
              : 'text-navy-800 hover:text-sky-600'
          }`}
          aria-label={`${service.primaryCTA} — ${service.title}`}
        >
          {service.primaryCTA}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  )
}

// ─── Services Section ─────────────────────────────────────────────────────────

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="section-spacing bg-slate-50" aria-labelledby="services-heading">
      <div className="container-site">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="badge-sky mb-4">What We Install</span>
          <h2
            id="services-heading"
            className="font-display text-display-xl font-bold text-navy-900 mt-2"
          >
            Complete Safety Systems,<br />
            <span className="text-sky-600">Built for UK Compliance</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            Every system we install is designed around your site's specific risks, your staff's operational needs, and the UK regulatory requirements that apply to your organisation.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              featured={index === 0}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-sm text-slate-500 text-center">
          Not sure which system you need?{' '}
          <Link href="/contact" className="font-semibold text-navy-800 hover:text-sky-600 underline underline-offset-2 transition-colors">
            Book a free site survey
          </Link>{' '}
          and we'll advise you at no cost.
        </p>
      </div>
    </section>
  )
}
