'use client'

import React, { useEffect, useState } from 'react'
import {
  buildFormSubmitAutoresponse,
  buildFormSubmitSubject,
  FORM_SUBMIT_ACTION,
  validateQuoteEnquiry,
} from '@/lib/formsubmit'
import {
  isValidEmail,
  isValidFullName,
  isValidUKPhone,
  validateContactDetails,
} from '@/lib/form-validation'
import type { QuoteFormData, FormStatus } from '@/types'

// ─── Field components ─────────────────────────────────────────────────────────

interface FieldProps {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
  hint?: string
}

function Field({ label, htmlFor, required, children, hint }: FieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-[11px] font-bold uppercase tracking-[0.14em] text-navy-900"
      >
        {label}
        {required && <span className="ml-1 text-red-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-slate-400">{hint}</p>}
    </div>
  )
}

// ─── Quote Form ───────────────────────────────────────────────────────────────

const SERVICE_OPTIONS: Array<{
  value: QuoteFormData['serviceType']
  label: string
  description: string
}> = [
  { value: 'lockdown', label: 'Lockdown Alarm System', description: "Martyn's Law aligned" },
  { value: 'fire', label: 'Temporary Fire Alarm System', description: 'Rapid temporary site protection' },
  { value: 'vape', label: 'Vape Detection', description: 'School & commercial' },
  { value: 'access-control', label: 'Access Control', description: 'Doors, entry points & permissions' },
  { value: 'intrusion-protection', label: 'Intrusion Protection', description: 'Ajax wireless security' },
  { value: 'popalert', label: 'PopAlert', description: 'Rapid emergency alerts & notifications' },
]

const QUERY_SERVICE_VALUES = [
  'lockdown',
  'fire',
  'vape',
  'access-control',
  'intrusion-protection',
  'popalert',
] as const

function createInitialFormData(): QuoteFormData {
  return {
    serviceType: '',
    siteType: '',
    photos: [],
    consent: false,
    name: '',
    email: '',
    phone: '',
    organisation: '',
    message: '',
  }
}

const FORM_INPUT_CLASS =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:border-sky-200 hover:shadow-[0_8px_18px_rgba(14,116,144,0.08)] focus:border-sky-500 focus:bg-sky-50/30 focus:outline-none focus:ring-2 focus:ring-sky-200 active:scale-[0.995]'

export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(createInitialFormData)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [currentPath, setCurrentPath] = useState('/locations')

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const queryService = searchParams.get('service')
    setCurrentPath(window.location.pathname)

    if (
      queryService &&
      QUERY_SERVICE_VALUES.includes(queryService as (typeof QUERY_SERVICE_VALUES)[number])
    ) {
      setFormData((prev) => ({ ...prev, serviceType: queryService as QuoteFormData['serviceType'] }))
    }
  }, [])

  const updateField = <K extends keyof QuoteFormData>(
    key: K,
    value: QuoteFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    setErrorMessage('')
    if (status === 'error') {
      setStatus('idle')
    }
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateField('photos', Array.from(e.target.files ?? []))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const contactError = validateContactDetails(formData)
    if (contactError) {
      setErrorMessage(contactError)
      setStatus('error')
      return
    }

    const uploadError = validateQuoteEnquiry(formData)
    if (uploadError) {
      setErrorMessage(uploadError)
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const form = e.currentTarget
      const data = new FormData(form)
      data.append('_subject', buildFormSubmitSubject(formData.serviceType, 'Quote Form'))
      data.append('_template', 'table')
      data.append('_autoresponse', buildFormSubmitAutoresponse(formData.serviceType))
      data.append('_captcha', 'false')

      const res = await fetch(FORM_SUBMIT_ACTION, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      const json = await res.json().catch(() => ({}))

      if (res.ok && json.success === 'true') {
        setStatus('success')
      } else {
        setErrorMessage(json.message || 'Submission failed. Please call us directly.')
        setStatus('error')
      }
    } catch (err) {
      setErrorMessage('Could not send your enquiry. Please call us on 07778 387 989.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center" role="alert" aria-live="polite">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <div>
          <h3 className="font-display text-xl font-bold text-navy-900">Quote Request Received</h3>
          <p className="mt-2 text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
            A specialist will call you within 2 hours during business hours. We'll arrange a free site survey at a time that suits you.
          </p>
        </div>
        <button
          onClick={() => { setStatus('idle'); setFormData(createInitialFormData()) }}
          className="btn btn-ghost btn-sm text-navy-800"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-label="Request a quote"
      noValidate
    >
      <input type="hidden" name="_replyto" value={formData.email ?? ''} />
      <input type="hidden" name="_blacklist" value="http://,https://,viagra,casino,crypto" />
      <input type="hidden" name="Form Name" value="Location Page Quote Form" />
      <input type="hidden" name="Source Page" value={currentPath} />
      <input type="hidden" name="Consent Given" value={formData.consent ? 'Yes' : 'No'} />
      <input type="hidden" name="Step 01 - Product" value={formData.serviceType ? SERVICE_OPTIONS.find((option) => option.value === formData.serviceType)?.label ?? '' : ''} />
      <input type="hidden" name="Step 02 - Organisation" value={formData.organisation ?? ''} />
      <input type="hidden" name="Step 02 - Site Location" value={formData.siteType ?? ''} />
      <input type="hidden" name="Step 03 - Full Name" value={formData.name ?? ''} />
      <input type="hidden" name="Step 03 - Phone Number" value={formData.phone ?? ''} />
      <input type="hidden" name="Step 03 - Email Address" value={formData.email ?? ''} />
      <input type="hidden" name="Step 04 - Project Details" value={formData.message ?? ''} />
      <input
        type="hidden"
        name="Step 04 - Files Attached"
        value={formData.photos.length > 0 ? formData.photos.map((photo) => photo.name).join(', ') : 'None'}
      />
      <input type="hidden" name="Step 04 - Consent" value={formData.consent ? 'Yes' : 'No'} />
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <p className="text-sm leading-relaxed text-slate-500">
        Takes less than 60 seconds. We respond within 2 hours on working days.
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            type="text"
            className={FORM_INPUT_CLASS}
            placeholder="Jane Smith"
            value={formData.name ?? ''}
            onChange={(e) => updateField('name', e.target.value)}
            required
            autoComplete="name"
            inputMode="text"
          />
          {formData.name.trim() && !isValidFullName(formData.name) ? (
            <p className="text-xs text-red-600">Enter first and last name.</p>
          ) : null}
        </Field>

        <Field label="Organisation" htmlFor="organisation" required>
          <input
            id="organisation"
            name="Organisation"
            type="text"
            className={FORM_INPUT_CLASS}
            placeholder="Riverside Academy"
            value={formData.organisation ?? ''}
            onChange={(e) => updateField('organisation', e.target.value)}
            required
            autoComplete="organization"
          />
        </Field>

        <Field label="Email Address" htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            className={FORM_INPUT_CLASS}
            placeholder="jane@organisation.co.uk"
            value={formData.email ?? ''}
            onChange={(e) => updateField('email', e.target.value)}
            required
            autoComplete="email"
            inputMode="email"
          />
          {formData.email.trim() && !isValidEmail(formData.email) ? (
            <p className="text-xs text-red-600">Use a valid email address.</p>
          ) : null}
        </Field>

        <Field label="Phone Number" htmlFor="phone" required>
          <input
            id="phone"
            name="Phone Number"
            type="tel"
            className={FORM_INPUT_CLASS}
            placeholder="07700 900000"
            value={formData.phone ?? ''}
            onChange={(e) => updateField('phone', e.target.value)}
            required
            autoComplete="tel"
            inputMode="tel"
          />
          {formData.phone.trim() && !isValidUKPhone(formData.phone) ? (
            <p className="text-xs text-red-600">Use a valid UK phone number.</p>
          ) : null}
        </Field>
      </div>

      <Field label="Service Required" htmlFor="serviceType" required>
        <div className="relative">
          <select
            id="serviceType"
            name="Service Required"
            className={`${FORM_INPUT_CLASS} appearance-none pr-12`}
            value={formData.serviceType ?? ''}
            onChange={(e) => updateField('serviceType', e.target.value as QuoteFormData['serviceType'])}
            required
          >
            <option value="">Select a system</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-navy-900" aria-hidden="true">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Field>

      <Field label="Tell Us About Your Site" htmlFor="message">
        <textarea
          id="message"
          name="Project Details"
          className={`${FORM_INPUT_CLASS} min-h-[132px] resize-none`}
          rows={4}
          placeholder="Site type (school, office, construction), approximate size, any existing systems, and your timeline..."
          value={formData.message ?? ''}
          onChange={(e) => updateField('message', e.target.value)}
        />
      </Field>

      <Field
        label="Upload Pictures"
        htmlFor="photos"
        hint="Optional: add photos of your site, entrances, exits, or existing systems."
      >
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 transition-colors duration-200 hover:border-sky-300 hover:bg-sky-50/40">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-navy-900">Attach site images</p>
              <p className="mt-1 text-xs text-slate-500">JPG, PNG, HEIC, PDF, DOC, or DOCX. You can upload multiple files.</p>
            </div>

            <label
              htmlFor="photos"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition-all duration-200 hover:border-sky-400 hover:text-sky-700 active:scale-[0.99]"
            >
              Choose files
            </label>
          </div>

          <input
            id="photos"
            name="attachment"
            type="file"
            accept="image/*,.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            multiple
            onChange={handlePhotoChange}
            className="sr-only"
          />

          {formData.photos.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {formData.photos.map((photo) => (
                <li
                  key={`${photo.name}-${photo.lastModified}`}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm"
                >
                  {photo.name}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Field>

      {status === 'error' && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 shadow-sm" role="alert">
          {errorMessage || (
            <>
              Something went wrong. Please call us directly on{' '}
              <a href="tel:07778387989" className="font-semibold underline">07778 387 989</a>.
            </>
          )}
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            checked={!!formData.consent}
            onChange={(e) => updateField('consent', e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-500 transition-colors duration-150 hover:border-sky-400 focus:ring-2 focus:ring-sky-200"
            required
          />
          <label htmlFor="consent" className="text-xs leading-relaxed text-slate-500">
            I agree to A-Squared Alarms contacting me about this enquiry. We never share your data with third parties. See our{' '}
            <a href="/privacy-policy" className="text-red-600 underline hover:text-red-700">
              Privacy Policy
            </a>
            . <span className="text-red-500">*</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting' || !formData.serviceType || !formData.name || !formData.consent}
          className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-navy-800 via-navy-700 to-sky-700 px-8 py-4 text-lg font-bold text-white shadow-[0_14px_26px_rgba(12,48,87,0.2)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_18px_34px_rgba(12,48,87,0.26)] focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 active:translate-y-[1px] active:scale-[0.995] active:shadow-[0_10px_18px_rgba(12,48,87,0.18)] disabled:cursor-not-allowed disabled:opacity-50"
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Sending your enquiry…
            </>
          ) : (
            <>
              Send Enquiry — We&apos;ll Respond Within 2 Hours
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-400">
          Prefer to call?{' '}
          <a href="tel:07778387989" className="font-semibold text-navy-800 hover:text-sky-600">
            07778 387989
          </a>
          {' '}· Mon-Fri 8am-6pm
        </p>
      </div>
    </form>
  )
}
