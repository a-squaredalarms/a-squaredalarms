'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CONSENT_KEY, GA_MEASUREMENT_ID, OPEN_CONSENT_EVENT, type ConsentChoice } from '@/lib/analytics'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function readChoice(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY)
    return v === 'granted' || v === 'denied' ? v : null
  } catch {
    return null
  }
}

function saveChoice(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice)
  } catch {
    // Storage blocked (private mode): the choice simply isn't remembered.
  }
}

/** Load GA4 only after consent. Safe to call more than once. */
function loadAnalytics() {
  if (!GA_MEASUREMENT_ID || document.getElementById('ga4-src')) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true })
  const s = document.createElement('script')
  s.id = 'ga4-src'
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(s)
}

/** Remove GA cookies after a visitor withdraws consent. */
function clearAnalyticsCookies() {
  const host = window.location.hostname.replace(/^www\./, '')
  document.cookie.split(';').forEach((c) => {
    const name = (c.split('=')[0] ?? '').trim()
    if (name === '_ga' || name.startsWith('_ga_') || name === '_gid') {
      for (const domain of ['', `; domain=.${host}`, `; domain=${host}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
      }
    }
  })
}

export function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return
    const choice = readChoice()
    if (choice === 'granted') loadAnalytics()
    if (choice === null) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_CONSENT_EVENT, reopen)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen)
  }, [])

  if (!GA_MEASUREMENT_ID || !open) return null

  const decide = (choice: ConsentChoice) => {
    const previous = readChoice()
    saveChoice(choice)
    setOpen(false)
    if (choice === 'granted') loadAnalytics()
    else if (previous === 'granted') {
      clearAnalyticsCookies()
      window.location.reload() // stop the already-loaded GA script
    }
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-2xl border border-navy-700 bg-navy-900 p-5 text-sm text-slate-200 shadow-2xl sm:inset-x-6 sm:bottom-6 md:flex md:items-center md:gap-6"
    >
      <p className="leading-relaxed">
        We use optional Google Analytics cookies to understand how visitors use this site. They are only set if you
        accept. See our{' '}
        <Link href="/cookies" className="font-semibold text-white underline underline-offset-2">
          cookie policy
        </Link>
        .
      </p>
      <div className="mt-4 flex shrink-0 gap-3 md:mt-0">
        <button type="button" onClick={() => decide('denied')} className="btn btn-md border border-slate-500 bg-transparent text-white hover:bg-navy-800">
          Reject
        </button>
        <button type="button" onClick={() => decide('granted')} className="btn btn-accent btn-md">
          Accept
        </button>
      </div>
    </div>
  )
}

/** Footer link that reopens the consent banner. */
export function CookieSettingsLink({ className }: { className?: string }) {
  if (!GA_MEASUREMENT_ID) return null
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}>
      Cookie settings
    </button>
  )
}
