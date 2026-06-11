import { BRAND } from '@/lib/data'
import { ButtonLink } from '@/components/ui/ButtonLink'

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeroProps {
  headline: string
  subheading: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA: {
    label: string
    href: string
  }
  badge?: string
  stats?: Array<{ value: string; label: string }>
}

// ─── Stat pill ────────────────────────────────────────────────────────────────

interface StatPillProps {
  value: string
  label: string
}

function BrandPill({ name }: { name: string }) {
  return (
    <div className="flex min-h-16 items-center justify-center px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <span className="font-display text-base sm:text-sm md:text-base font-bold text-sky-400 leading-tight text-center">
        {name}
      </span>
    </div>
  )
}

function StatPill({ value, label }: StatPillProps) {
  return (
    <div className="flex flex-col items-center gap-0.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <span className="font-display text-2xl font-bold text-sky-400 leading-none">{value}</span>
      <span className="text-xs text-slate-400 text-center leading-tight">{label}</span>
    </div>
  )
}

// ─── Hero Component ───────────────────────────────────────────────────────────

const DEFAULT_STATS: HeroProps['stats'] = [
  { value: 'UK-Wide', label: 'Coverage' },
  { value: '24-48hr', label: 'Quotation' },
  { value: '100%', label: 'Compliance Rate' },
]

const HERO_BRANDS = ['PopAlert', 'VapeSense', 'Alertex', 'Ajax']

export function Hero({
  headline,
  subheading,
  primaryCTA,
  secondaryCTA,
  badge,
  stats = DEFAULT_STATS,
}: HeroProps) {
  return (
    <section
      className="relative bg-navy-900 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Gradient overlay — left side */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, #6EC1E4 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Alert accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400" aria-hidden="true" />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-16 md:py-20 lg:py-28 items-center">

          {/* Content */}
          <div className="lg:col-span-7 space-y-7">

            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/25">
                <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
                <span className="text-sky-300 text-xs font-semibold uppercase tracking-wider">{badge}</span>
              </div>
            )}

            <h1 className="font-display text-display-2xl font-extrabold text-white leading-[1.05]">
              {headline}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              {subheading}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <ButtonLink
                href={primaryCTA.href}
                className="btn btn-accent btn-lg"
                aria-label={primaryCTA.label}
              >
                {primaryCTA.label}
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </ButtonLink>
              <ButtonLink
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="btn btn-outline btn-lg border-white/30 text-white hover:bg-white hover:text-navy-900 hover:border-white"
                aria-label={`Call us on ${BRAND.phone}`}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 10a19.79 19.79 0 01-3.07-8.67A2 2 0 013.4 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.09 6.09l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                {BRAND.phone}
              </ButtonLink>
            </div>

          </div>

          {/* Stats + Visual */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* Brand grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {HERO_BRANDS.map((brand) => (
                <BrandPill key={brand} name={brand} />
              ))}
            </div>

            {/* Stats grid */}
            {stats && (
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <StatPill key={stat.label} value={stat.value} label={stat.label} />
                ))}
              </div>
            )}

            {/* Compliance urgency card */}
            <div className="rounded-2xl border border-sky-400/20 bg-navy-800/60 backdrop-blur-sm p-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/25">
                  <svg className="h-5 w-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">Martyn's Law is Now in Force</p>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    The Terrorism (Protection of Premises) Act requires qualifying UK venues to have documented emergency procedures. Non-compliance carries significant penalties.
                  </p>
                </div>
              </div>
              <ButtonLink
                href="/compliance"
                className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                Check if your venue qualifies →
              </ButtonLink>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950/30 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
