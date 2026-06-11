import type { StatItem, TrustBadge } from '@/types'

// ─── Stat Item ────────────────────────────────────────────────────────────────

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="flex flex-col gap-1 text-center py-8 px-4 border-b border-r border-slate-200 last:border-r-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0">
      <span className="font-display text-4xl md:text-5xl font-extrabold text-navy-800 leading-none">
        {stat.value}
      </span>
      <span className="font-semibold text-sm text-slate-800 mt-1">{stat.label}</span>
      {stat.sublabel && (
        <span className="text-xs text-slate-400">{stat.sublabel}</span>
      )}
    </div>
  )
}

// ─── Trust Badge ─────────────────────────────────────────────────────────────

const TRUST_ICONS: Record<string, React.ReactNode> = {
  'badge-check': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
  'flame': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 01-7 7 7 7 0 01-7-7c0-1.507.332-2.942.947-4.235"/>
    </svg>
  ),
  'shield': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
    </svg>
  ),
  'landmark': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <line x1="3" y1="22" x2="21" y2="22"/>
      <line x1="6" y1="18" x2="6" y2="11"/>
      <line x1="10" y1="18" x2="10" y2="11"/>
      <line x1="14" y1="18" x2="14" y2="11"/>
      <line x1="18" y1="18" x2="18" y2="11"/>
      <polygon points="12 2 20 7 4 7"/>
    </svg>
  ),
  'check-circle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  'lock': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  ),
}

function TrustBadgeItem({ badge }: { badge: TrustBadge }) {
  return (
    <div
      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-slate-200 text-center"
      aria-label={`${badge.label}${badge.sublabel ? ` — ${badge.sublabel}` : ''}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
        {TRUST_ICONS[badge.icon]}
      </div>
      <div>
        <p className="text-xs font-bold text-navy-900">{badge.label}</p>
        {badge.sublabel && (
          <p className="text-xs text-slate-400 mt-0.5">{badge.sublabel}</p>
        )}
      </div>
    </div>
  )
}

// ─── Stats Section ────────────────────────────────────────────────────────────

interface StatsSectionProps {
  stats: StatItem[]
  badges: TrustBadge[]
}

export function StatsSection({ stats, badges }: StatsSectionProps) {
  return (
    <section className="section-spacing-sm bg-white" aria-label="Company statistics and certifications">
      <div className="container-site space-y-12">

        {/* Stats grid */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Certified, Approved & Recognised
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {badges.map((badge) => (
              <TrustBadgeItem key={badge.label} badge={badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
