import Link from 'next/link'

const HARDWARE_FEATURES = [
  'Distinct tone from fire alarms',
  'Discreet trigger buttons',
  'Battery-backed, no Wi-Fi needed',
  'Custom zoning per floor / block',
]

interface ZoneCardProps {
  label: string
  className?: string
}

function ZoneCard({ label, className = '' }: ZoneCardProps) {
  return (
      <div
        className={`relative overflow-hidden border border-slate-300 bg-white ${className}`}
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(148,163,184,0.12) 0px, rgba(148,163,184,0.12) 2px, transparent 2px, transparent 12px)',
      }}
    >
      <p className="absolute left-4 top-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
        {label}
      </p>
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <span className="absolute h-14 w-14 rounded-full border border-sky-300/60" aria-hidden="true" />
        <span className="absolute h-8 w-8 rounded-full border border-sky-300/70" aria-hidden="true" />
        <span className="relative h-5 w-5 rounded-full border-2 border-navy-900 bg-sky-400 shadow-[0_0_0_4px_rgba(110,193,228,0.18)]" />
      </div>
    </div>
  )
}

export function LockdownHardwareSection() {
  return (
    <section className="bg-white pt-16 pb-10 md:pt-20 md:pb-14 lg:pt-28 lg:pb-16" aria-labelledby="hardware-heading">
      <div className="container-site">
        <div className="border-t border-slate-200 pt-10 md:pt-14">
          <div className="grid gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <div className="rounded-[1.75rem] border border-slate-300 bg-slate-50 p-6 shadow-[0_14px_40px_rgba(12,48,87,0.06)] md:p-7">
              <div className="flex items-center justify-between gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <span>A2 / Floor Plan • GF</span>
                <span>Zones: 04</span>
              </div>

              <div className="mt-6 grid grid-cols-[1fr_0.9fr_1fr] grid-rows-2 overflow-hidden border border-slate-400 bg-white">
                <ZoneCard label="Zone 01" className="min-h-[13rem] md:min-h-[15rem]" />

                <div
                  className="relative row-span-2 overflow-hidden border-x border-slate-400 bg-white"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(135deg, rgba(148,163,184,0.12) 0px, rgba(148,163,184,0.12) 2px, transparent 2px, transparent 12px)',
                  }}
                >
                  <p className="absolute left-4 top-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Corridor
                  </p>
                  <div className="absolute left-1/2 top-[42%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <span className="absolute h-14 w-14 rounded-full border border-sky-300/60" aria-hidden="true" />
                    <span className="absolute h-8 w-8 rounded-full border border-sky-300/70" aria-hidden="true" />
                    <span className="relative h-5 w-5 rounded-full border-2 border-navy-900 bg-sky-400 shadow-[0_0_0_4px_rgba(110,193,228,0.18)]" />
                  </div>

                  <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 text-navy-900">
                    <span className="h-9 w-9 bg-navy-900" aria-hidden="true" />
                    <p className="whitespace-nowrap text-sm font-medium">Hub • A2-CTRL</p>
                  </div>
                </div>

                <ZoneCard label="Zone 03" className="min-h-[13rem] md:min-h-[15rem]" />
                <ZoneCard label="Zone 02" className="min-h-[13rem] md:min-h-[15rem]" />
                <ZoneCard label="Zone 04" className="min-h-[13rem] md:min-h-[15rem]" />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" aria-hidden="true" />
                  <span>Trigger Point</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 bg-navy-900" aria-hidden="true" />
                  <span>Control Hub</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="inline-flex rounded-full bg-slate-200 px-6 py-3 font-display text-[1.05rem] font-extrabold uppercase tracking-[0.03em] text-navy-900">
                  Site-Wide Hardware
                </span>
              </div>

              <div className="space-y-5">
                <h2
                  id="hardware-heading"
                  className="font-display text-display-2xl font-extrabold leading-[1.05] text-navy-900"
                >
                  Lockdown Alarm
                </h2>
                <p className="max-w-xl text-lg leading-relaxed text-slate-700">
                  Wireless lockdown alarms tailored to your building plan, distinct from your
                  fire alarm so staff respond correctly under pressure.
                </p>
              </div>

              <div className="h-px w-full bg-slate-200" aria-hidden="true" />

              <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {HARDWARE_FEATURES.map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 bg-sky-400" aria-hidden="true" />
                    <p className="font-normal text-lg leading-relaxed text-navy-900 md:text-[1.35rem]">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="https://alertex.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-400 px-8 py-4 text-lg font-bold text-navy-900 shadow-[0_14px_30px_rgba(110,193,228,0.28)] transition-all duration-200 hover:bg-sky-300 hover:shadow-[0_18px_36px_rgba(110,193,228,0.34)]"
                >
                  Explore the System
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
