import Link from 'next/link'
import type { Industry } from '@/types'

// ─── Icon Map ─────────────────────────────────────────────────────────────────

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  'graduation-cap': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  'hard-hat': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <path d="M2 18a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1H3a1 1 0 00-1 1v2z"/>
      <path d="M10 10V5a1 1 0 011-1h2a1 1 0 011 1v5"/>
      <path d="M4 15v-3a8 8 0 0116 0v3"/>
    </svg>
  ),
  'heart-pulse': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      <polyline points="8 12 10 14 16 8"/>
    </svg>
  ),
  'building-2': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18z"/>
      <path d="M6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2"/>
      <path d="M10 6h4M10 10h4M10 14h4M10 18h4"/>
    </svg>
  ),
  'users': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  ),
  'landmark': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
      <line x1="3" y1="22" x2="21" y2="22"/>
      <line x1="6" y1="18" x2="6" y2="11"/>
      <line x1="10" y1="18" x2="10" y2="11"/>
      <line x1="14" y1="18" x2="14" y2="11"/>
      <line x1="18" y1="18" x2="18" y2="11"/>
      <polygon points="12 2 20 7 4 7"/>
    </svg>
  ),
}

// ─── Industry Card ────────────────────────────────────────────────────────────

interface IndustryCardProps {
  industry: Industry
}

function IndustryCard({ industry }: IndustryCardProps) {
  const isFeatured = industry.id === 'schools'
  const isConstruction = industry.id === 'construction'

  if (isFeatured) {
    return (
      <Link
        href={industry.href}
        className="group relative flex self-start flex-col overflow-visible rounded-[2rem] border border-sky-400/25 bg-navy-800 px-5 pt-9 pb-5 text-white shadow-[0_24px_60px_rgba(12,48,87,0.22)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(12,48,87,0.28)] sm:min-h-[15.5rem] sm:px-6 sm:pt-10 sm:pb-6"
        aria-label={`${industry.title} — ${industry.description}`}
      >
        <div className="absolute left-5 top-0 z-10 -translate-y-1/2 sm:left-6">
          <span className="inline-flex rounded-[1.35rem] bg-sky-400 px-5 py-2.5 font-display text-[0.92rem] font-extrabold uppercase tracking-[0.03em] text-navy-900 shadow-[0_12px_24px_rgba(110,193,228,0.28)]">
            Primary Service
          </span>
        </div>

        <div className="mt-1.5 flex items-start gap-3.5 sm:mt-2 sm:gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-sky-400/14 text-sky-300 ring-1 ring-inset ring-sky-300/10 transition-colors group-hover:bg-sky-400/18">
            {INDUSTRY_ICONS[industry.icon]}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-sky-200">
              {industry.title}
            </h3>
            <p className="mt-0.5 text-xs leading-relaxed text-slate-300">
              {industry.description}
            </p>
            {industry.stat && industry.statLabel && (
              <p className="mt-1.5 text-xs font-bold text-sky-300">
                {industry.stat} — {industry.statLabel}
              </p>
            )}
          </div>

          <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-300 transition-colors group-hover:text-sky-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={industry.href}
      className={`group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-sky-300 hover:shadow-card ${
        isConstruction ? 'self-start sm:min-h-[15.5rem]' : ''
      }`}
      aria-label={`${industry.title} — ${industry.description}`}
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-700 group-hover:bg-navy-800 group-hover:text-sky-400 transition-colors">
        {INDUSTRY_ICONS[industry.icon]}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-navy-900 text-sm group-hover:text-sky-700 transition-colors">
          {industry.title}
        </h3>
        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
          {industry.description}
        </p>
        {industry.stat && (
          <p className="text-xs font-bold text-amber-600 mt-1.5">
            {industry.stat} — {industry.statLabel}
          </p>
        )}
      </div>
      <svg className="h-4 w-4 text-slate-300 group-hover:text-sky-500 flex-shrink-0 mt-0.5 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </Link>
  )
}

// ─── Industries Section ───────────────────────────────────────────────────────

interface IndustriesSectionProps {
  industries: Industry[]
}

export function IndustriesSection({ industries }: IndustriesSectionProps) {
  return (
    <section className="section-spacing bg-slate-50" aria-labelledby="industries-heading">
      <div className="container-site">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: copy */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-24">
            <span className="badge-navy">Industries We Serve</span>
            <h2
              id="industries-heading"
              className="font-display text-display-lg font-bold text-navy-900"
            >
              We Know Your Sector's Compliance Requirements
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Safety regulations differ by sector. A school has different obligations under Martyn's Law than a construction site does under CDM. We know both — and everything in between.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary btn-md inline-flex"
            >
              Speak to a Specialist
            </Link>
          </div>

          {/* Right: industry grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
