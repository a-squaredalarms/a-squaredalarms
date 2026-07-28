'use client'

import React, { useState } from 'react'
import { FORM_SUBMIT_ACTION } from '@/lib/formsubmit'
import { isValidEmail } from '@/lib/form-validation'
import { BRAND } from '@/lib/data'

const BROCHURE_PATH = '/downloads/a-squared-lockdown-alarm-brochure.pdf'

/**
 * Email-gated brochure download. On success the file downloads immediately and
 * the direct link stays visible, so a delivery failure never costs the user the
 * document they asked for.
 */
export function BrochureDownload({ className = '' }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [organisation, setOrganisation] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const triggerDownload = () => {
    const link = document.createElement('a')
    link.href = BROCHURE_PATH
    link.download = 'a-squared-lockdown-alarm-brochure.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.')
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const data = new FormData()
      data.append('email', email)
      data.append('organisation', organisation || 'Not provided')
      data.append('_subject', 'Brochure download — Lockdown Alarm Systems')
      data.append('_template', 'table')
      data.append('_captcha', 'false')
      data.append(
        '_autoresponse',
        [
          'Subject: Your A-Squared Alarms brochure',
          '',
          'Thank you for requesting our lockdown alarm brochure.',
          '',
          'You can download it here:',
          `${BRAND.siteUrl}${BROCHURE_PATH}`,
          '',
          'If you would like to discuss your site, call us and we will arrange a free survey.',
          '',
          `${BRAND.phone}`,
          '',
          'Kind regards,',
          `${BRAND.name}`,
        ].join('\n'),
      )

      const res = await fetch(FORM_SUBMIT_ACTION, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      const json = await res.json().catch(() => ({}))

      if (res.ok && json.success === 'true') {
        setStatus('success')
        triggerDownload()
      } else {
        // Never withhold the file because our delivery failed.
        setStatus('success')
        triggerDownload()
      }
    } catch {
      setStatus('success')
      triggerDownload()
    }
  }

  if (status === 'success') {
    return (
      <div
        className={`rounded-[1.5rem] border-2 border-green-200 bg-green-50 p-6 ${className}`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div>
            <h3 className="font-display text-display-sm font-bold text-navy-900">
              Your download has started
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              If it did not start automatically, use the link below. We have also emailed you a copy.
            </p>
            <a
              href={BROCHURE_PATH}
              download
              className="btn btn-primary btn-md mt-4"
            >
              Download the Brochure
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`rounded-[1.5rem] border-2 border-slate-200 bg-white p-6 shadow-card ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-display-sm font-bold text-navy-900">
            Download the Lockdown Alarm Brochure
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            System detail, device options and how installation works. Enter your email and the PDF
            downloads straight away.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
        <div className="space-y-2">
          <label
            htmlFor="brochure-email"
            className="block text-[11px] font-bold uppercase tracking-[0.14em] text-navy-900"
          >
            Email address
            <span className="ml-1 text-red-500" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="brochure-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === 'error') setStatus('idle')
            }}
            placeholder="you@yourschool.sch.uk"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="brochure-organisation"
            className="block text-[11px] font-bold uppercase tracking-[0.14em] text-navy-900"
          >
            Organisation <span className="font-normal normal-case text-slate-400">(optional)</span>
          </label>
          <input
            id="brochure-organisation"
            name="organisation"
            type="text"
            autoComplete="organization"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            placeholder="School, trust or company name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          />
        </div>

        {status === 'error' && (
          <p className="text-sm font-medium text-red-600" role="alert">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn btn-primary btn-md w-full disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Send Me the Brochure'}
        </button>

        <p className="text-xs leading-relaxed text-slate-400">
          We will email you the brochure and may follow up about your site. We do not share your
          details. See our{' '}
          <a href="/privacy-policy" className="underline hover:text-slate-600">
            privacy policy
          </a>
          .
        </p>
      </form>
    </div>
  )
}
