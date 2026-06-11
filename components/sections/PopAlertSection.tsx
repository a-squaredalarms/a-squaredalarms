'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface AlertPreset {
  id: string
  label: string
  title: string
  message: string
  panelBackground: string
  sweepBackground: string
  activeTabClassName: string
  inactiveTabClassName: string
}

const ALERTS: AlertPreset[] = [
  {
    id: 'lockdown',
    label: 'Lockdown',
    title: 'LOCKDOWN',
    message:
      'Secure doors immediately. Move away from windows, stay low, and remain silent until further instruction is given.',
    panelBackground: 'linear-gradient(135deg, #17456f 0%, #0b2743 100%)',
    sweepBackground: 'linear-gradient(90deg, transparent, rgba(141, 210, 255, 0.32), transparent)',
    activeTabClassName:
      'border-sky-300 bg-sky-100 text-sky-900 shadow-[0_18px_40px_rgba(110,193,228,0.18)]',
    inactiveTabClassName:
      'border-sky-200/70 bg-white text-sky-800 hover:border-sky-300 hover:bg-sky-50',
  },
  {
    id: 'evacuation',
    label: 'Evacuation',
    title: 'EVACUATION',
    message:
      'Exit the building immediately via the nearest emergency exit. Do not use lifts.',
    panelBackground: 'linear-gradient(135deg, #cc5615 0%, #a53a0c 100%)',
    sweepBackground: 'linear-gradient(90deg, transparent, rgba(255, 225, 179, 0.28), transparent)',
    activeTabClassName:
      'border-orange-300 bg-orange-100 text-orange-900 shadow-[0_18px_40px_rgba(217,119,6,0.18)]',
    inactiveTabClassName:
      'border-orange-200/80 bg-white text-orange-900 hover:border-orange-300 hover:bg-orange-50',
  },
  {
    id: 'invacuation',
    label: 'Invacuation',
    title: 'INVACUATION',
    message:
      'Move everyone inside immediately. Secure external access points and keep all occupants away from entrances until the threat has passed.',
    panelBackground: 'linear-gradient(135deg, #9f244a 0%, #6e1634 100%)',
    sweepBackground: 'linear-gradient(90deg, transparent, rgba(255, 194, 217, 0.24), transparent)',
    activeTabClassName:
      'border-rose-300 bg-rose-100 text-rose-900 shadow-[0_18px_40px_rgba(225,29,72,0.18)]',
    inactiveTabClassName:
      'border-rose-200/80 bg-white text-rose-900 hover:border-rose-300 hover:bg-rose-50',
  },
  {
    id: 'all-clear',
    label: 'All Clear',
    title: 'ALL CLEAR',
    message:
      'The incident has ended. Resume normal activity and await any follow-up instructions from your site lead.',
    panelBackground: 'linear-gradient(135deg, #16854f 0%, #0f5d37 100%)',
    sweepBackground: 'linear-gradient(90deg, transparent, rgba(181, 255, 206, 0.24), transparent)',
    activeTabClassName:
      'border-emerald-300 bg-emerald-100 text-emerald-900 shadow-[0_18px_40px_rgba(22,163,74,0.18)]',
    inactiveTabClassName:
      'border-emerald-200/80 bg-white text-emerald-900 hover:border-emerald-300 hover:bg-emerald-50',
  },
]

const POPALERT_FEATURES = [
  'Sub-2-second broadcast',
  'Admin web console + scheduled drills',
  'Works on your existing PCs',
  'SCIM / AD integration',
]

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function PopAlertSection() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [autoCycle, setAutoCycle] = useState(true)

  useEffect(() => {
    if (!autoCycle) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % ALERTS.length)
    }, 4200)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [autoCycle])

  const activeAlert = ALERTS[activeIndex] ?? ALERTS[0]!

  function selectAlert(index: number) {
    setAutoCycle(false)
    setActiveIndex(index)
  }

  function showNextAlert() {
    setAutoCycle(false)
    setActiveIndex((currentIndex) => (currentIndex + 1) % ALERTS.length)
  }

  return (
    <section
      id="popalert"
      className="relative overflow-x-hidden scroll-mt-24 bg-white pt-16 pb-10 md:pt-20 md:pb-14 lg:pt-28 lg:pb-16"
      aria-labelledby="popalert-heading"
    >
      <div className="container-site relative">
        <div className="grid gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="min-w-0 max-w-3xl space-y-8 xl:self-center xl:pr-4">
            <div>
              <span className="inline-flex rounded-full bg-slate-200 px-6 py-3 font-display text-[1.05rem] font-extrabold uppercase tracking-[0.03em] text-navy-900">
                Internal Digital Alerts
              </span>
            </div>

            <div className="space-y-7">
              <h2
                id="popalert-heading"
                className="font-display text-display-2xl font-extrabold leading-[1.05] text-navy-900"
              >
                PopAlert
                <sup className="ml-1 align-top text-[0.38em] leading-none">®</sup>
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-slate-700">
                Full-screen lockdown and evacuation alerts pushed to every computer on your
                network. No new hardware. Martyn&apos;s Law ready.
              </p>
            </div>

            <div className="h-px w-full bg-slate-200" aria-hidden="true" />

            <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
              {POPALERT_FEATURES.map((feature) => (
                <div key={feature} className="flex items-start gap-4">
                  <span className="mt-2 h-3 w-3 flex-shrink-0 bg-sky-400" aria-hidden="true" />
                  <p className="font-normal text-[1.15rem] leading-relaxed text-navy-900 md:text-[1.25rem]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/lockdown-alarms"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-400 px-8 py-4 text-lg font-bold text-navy-900 shadow-[0_14px_30px_rgba(110,193,228,0.28)] transition-all duration-200 hover:bg-sky-300 hover:shadow-[0_18px_36px_rgba(110,193,228,0.34)]"
              >
                Learn More
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div
            id="popalert-preview"
            className="relative mx-auto min-w-0 max-w-[42rem] scroll-mt-28 xl:sticky xl:top-28 xl:mx-0 xl:max-w-[42rem] xl:justify-self-end xl:self-start"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="inline-flex items-center gap-3 text-sm font-medium text-slate-600">
                  <span className="h-3 w-3 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>Live Alert Preview - click to switch</span>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-full bg-slate-950 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white md:text-[11px]">
                  <span
                    className={classNames(
                      'h-2 w-2 rounded-full',
                      autoCycle ? 'animate-pulse bg-emerald-400' : 'bg-amber-300'
                    )}
                    aria-hidden="true"
                  />
                  <span>{autoCycle ? 'Auto cycling' : 'Manual mode'}</span>
                </div>
              </div>

              <div role="tablist" aria-label="PopAlert preview modes" className="flex flex-wrap gap-2">
                {ALERTS.map((alert, index) => {
                  const isActive = index === activeIndex

                  return (
                    <button
                      key={alert.id}
                      type="button"
                      role="tab"
                      id={`${alert.id}-tab`}
                      aria-selected={isActive}
                      aria-controls={`${alert.id}-panel`}
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => selectAlert(index)}
                      className={classNames(
                        'rounded-full border px-3.5 py-2 text-[0.95rem] font-semibold transition-all duration-300',
                        isActive ? alert.activeTabClassName : alert.inactiveTabClassName
                      )}
                    >
                      {alert.label}
                    </button>
                  )
                })}
              </div>

              <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.12)]">
                <div className="flex items-center justify-between border-b border-slate-200 bg-slate-950 px-4 py-2.5">
                  <div className="flex items-center gap-2" aria-hidden="true">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="hidden text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55 md:inline">
                    PopAlert screen takeover
                  </span>
                  <button
                    type="button"
                    onClick={showNextAlert}
                    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    aria-label="Show next alert mode"
                  >
                    <svg
                      className="h-[1.125rem] w-[1.125rem] transition-transform duration-300 group-hover:translate-x-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <div
                  id={`${activeAlert.id}-panel`}
                  role="tabpanel"
                  aria-labelledby={`${activeAlert.id}-tab`}
                  aria-live="polite"
                  className="relative h-[400px] overflow-hidden px-5 py-6 sm:h-[390px] md:h-[420px] md:px-8 md:py-8"
                  style={{ background: activeAlert.panelBackground }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%)]" aria-hidden="true" />
                  <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_44%,rgba(255,255,255,0.05))]" aria-hidden="true" />
                  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                    <div
                      key={activeAlert.id}
                      className="popalert-sweep absolute -left-1/3 top-0 h-full w-1/2"
                      style={{ background: activeAlert.sweepBackground }}
                    />
                  </div>

                  <div
                    key={`${activeAlert.id}-content`}
                    className="popalert-content relative z-10 flex h-full items-center justify-center text-center text-white"
                  >
                    <div className="flex flex-col items-center justify-center px-2">
                      <div className="flex min-h-[5rem] items-center justify-center md:min-h-[5.75rem]">
                        <h3 className="font-display text-[clamp(1.8rem,5vw,3.2rem)] font-extrabold uppercase tracking-[0.03em] text-white">
                          {activeAlert.title}
                        </h3>
                      </div>

                      <div className="mt-4 flex min-h-[6.5rem] max-w-xl items-start justify-center md:min-h-[6rem]">
                        <p className="text-sm leading-relaxed text-white/92 md:text-[1.05rem]">
                          {activeAlert.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .popalert-sweep {
          animation: popalertSweep 2.6s ease-out forwards;
          transform: skewX(-18deg);
        }

        .popalert-content {
          animation: popalertContentIn 480ms var(--ease-smooth);
        }

        @keyframes popalertSweep {
          0% {
            opacity: 0;
            transform: translate3d(-16%, 0, 0) skewX(-18deg);
          }

          20% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate3d(210%, 0, 0) skewX(-18deg);
          }
        }

        @keyframes popalertContentIn {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.98);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  )
}
