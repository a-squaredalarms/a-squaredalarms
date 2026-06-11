const BANNER_ITEMS = [
  "Martyn's Law aligned",
  'UK-wide site surveys',
  '24/7 UK support',
  'Built for schools, healthcare & public venues',
  'PopAlert digital alerts',
  'Lockdown alarm systems',
  'Temporary fire alarm systems',
  'Wireless intrusion protection',
]

export function HomeMovingBanner() {
  const items = [...BANNER_ITEMS, ...BANNER_ITEMS]

  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white" aria-label="Key service highlights">
      <p className="sr-only">
        A-Squared Alarms provides Martyn&apos;s Law aligned systems, UK-wide site surveys,
        24/7 UK support, PopAlert digital alerts, lockdown alarm systems, temporary fire alarm
        systems, and wireless intrusion protection.
      </p>

      <div className="home-banner-track flex min-w-max items-center gap-8 py-4" aria-hidden="true">
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500 md:text-xs">
              {item}
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          </div>
        ))}
      </div>
    </section>
  )
}
