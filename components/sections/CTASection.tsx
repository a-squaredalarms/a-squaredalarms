import { BRAND } from '@/lib/data'
import { ButtonLink } from '@/components/ui/ButtonLink'

// ─── Types ────────────────────────────────────────────────────────────────────

interface CTASectionProps {
  variant?: 'navy' | 'sky' | 'urgent'
  headline: string
  subheading: string
  primaryCTA: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href?: string
    phone?: boolean
  }
  note?: string
  urgencyLead?: string
}

// ─── Urgency Indicators ───────────────────────────────────────────────────────

function UrgencyBand({ lead = 'Expected in Spring 2027 — prepare now' }: { lead?: string | undefined }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 px-4 rounded-xl bg-amber-500/10 border border-amber-500/25 mb-8">
      <div className="flex items-center gap-2">
        <svg className="h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
        <span className="text-xs font-medium text-amber-200">{lead}</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span className="text-xs font-medium text-amber-200">Free site survey, no obligation</span>
      </div>
      <div className="flex items-center gap-2">
        <svg className="h-4 w-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
        </svg>
        <span className="text-xs font-medium text-amber-200">Installations within 5 working days</span>
      </div>
    </div>
  )
}

// ─── CTA Section ─────────────────────────────────────────────────────────────

export function CTASection({
  variant = 'navy',
  headline,
  subheading,
  primaryCTA,
  secondaryCTA,
  note,
  urgencyLead,
}: CTASectionProps) {
  const isNavy = variant === 'navy' || variant === 'urgent'

  return (
    <section
      className={`relative overflow-hidden ${isNavy ? 'bg-navy-900' : 'bg-sky-50'}`}
      aria-label="Call to action"
    >
      {/* Background texture for navy */}
      {isNavy && (
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} aria-hidden="true" />
      )}

      {/* Sky accent blob */}
      {isNavy && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 rounded-full bg-sky-400 blur-3xl" aria-hidden="true" />
      )}

      <div className="container-site relative py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">

          {variant === 'urgent' && <UrgencyBand lead={urgencyLead} />}

          <h2
            className={`font-display text-display-xl font-extrabold leading-tight ${
              isNavy ? 'text-white' : 'text-navy-900'
            }`}
          >
            {headline}
          </h2>

          <p
            className={`mt-4 text-lg leading-relaxed max-w-xl mx-auto ${
              isNavy ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {subheading}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink
              href={primaryCTA.href}
              className="btn btn-accent btn-lg"
            >
              {primaryCTA.label}
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </ButtonLink>

            {secondaryCTA && (
              secondaryCTA.phone ? (
                <ButtonLink
                  href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                  className={`btn btn-lg ${
                    isNavy
                      ? 'border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 hover:border-white'
                      : 'btn-outline'
                  }`}
                  aria-label={`Call us: ${BRAND.phone}`}
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 10a19.79 19.79 0 01-3.07-8.67A2 2 0 013.4 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.09 6.09l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  {BRAND.phone}
                </ButtonLink>
              ) : (
                <ButtonLink
                  href={secondaryCTA.href ?? '/contact'}
                  className={`btn btn-lg ${
                    isNavy
                      ? 'border-2 border-white/30 text-white hover:bg-white hover:text-navy-900 hover:border-white'
                      : 'btn-outline'
                  }`}
                >
                  {secondaryCTA.label}
                </ButtonLink>
              )
            )}
          </div>

          {note && (
            <p className={`mt-4 text-sm ${isNavy ? 'text-slate-400' : 'text-slate-500'}`}>
              {note}
            </p>
          )}

          {/* Trust micro-copy */}
          <div className={`mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs ${isNavy ? 'text-slate-400' : 'text-slate-500'}`}>
            {[
              '✓ No obligation',
              '✓ Free site survey',
              '✓ UK-based support',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
