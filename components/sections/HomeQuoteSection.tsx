'use client'

import { useEffect, useState } from 'react'
import {
  buildFormSubmitAutoresponse,
  buildFormSubmitNextUrl,
  buildFormSubmitSubject,
  FORM_SUBMIT_ACTION,
  getServiceLabel,
  validateQuoteEnquiry,
} from '@/lib/formsubmit'
import {
  isValidEmail,
  isValidFullName,
  isValidUKLocation,
  isValidUKPhone,
  UK_AREA_OPTIONS,
  validateContactDetails,
} from '@/lib/form-validation'
import type { FormStatus, QuoteFormData } from '@/types'

const HOME_SERVICE_OPTIONS: Array<{
  value: QuoteFormData['serviceType']
  label: string
  description: string
}> = [
  { value: 'popalert', label: 'PopAlert', description: 'Emergency screen alerts and instant notifications' },
  { value: 'lockdown', label: 'Lockdown Alarm', description: "Martyn's Law-aligned rapid threat response" },
  { value: 'fire', label: 'Temporary Fire Alarm', description: 'Compliant temporary fire detection' },
  { value: 'access-control', label: 'Access Control', description: 'Paxton-managed doors, gates, and permissions' },
  { value: 'intrusion-protection', label: 'Intrusion Protection', description: 'Ajax wireless detectors and instant alerts' },
  { value: 'vape', label: 'Vape Detection', description: 'Discreet sensors for schools and commercial sites' },
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

const STEP_LABELS = ['Product', 'Location', 'Contact', 'Details'] as const

const FIELD_CLASS =
  'w-full rounded-md border border-slate-300 bg-white px-4 py-3.5 text-[15px] text-slate-900 placeholder:text-slate-400 transition-colors duration-200 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100'

const STEP_QUESTION_CLASS = 'font-display text-display-xl font-bold leading-[1.02] text-navy-900'
const STEP_QUESTION_CLASS_CONTACT = 'font-display text-display-lg font-bold leading-[1.04] text-navy-900'

interface HomeQuoteSectionProps {
  sectionId?: string
  embedded?: boolean
  showIntro?: boolean
  layout?: 'default' | 'contact'
}

export function HomeQuoteSection({
  sectionId = 'quote',
  embedded = false,
  showIntro = true,
  layout = 'default',
}: HomeQuoteSectionProps) {
  const [formData, setFormData] = useState<QuoteFormData>(createInitialFormData)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [activeStep, setActiveStep] = useState(0)
  const [stepError, setStepError] = useState('')
  const [nextUrl, setNextUrl] = useState(() => buildFormSubmitNextUrl('/thank-you'))
  const [currentPath, setCurrentPath] = useState(sectionId)
  const stepQuestionClass = layout === 'contact' ? STEP_QUESTION_CLASS_CONTACT : STEP_QUESTION_CLASS

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const queryService = searchParams.get('service')
    setNextUrl(buildFormSubmitNextUrl('/thank-you', window.location.origin))
    setCurrentPath(window.location.pathname)

    if (
      queryService &&
      QUERY_SERVICE_VALUES.includes(queryService as (typeof QUERY_SERVICE_VALUES)[number])
    ) {
      setFormData((prev) => ({ ...prev, serviceType: queryService as QuoteFormData['serviceType'] }))
    }
  }, [])

  const updateField = <K extends keyof QuoteFormData>(key: K, value: QuoteFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    setStepError('')
    if (status === 'error') {
      setStatus('idle')
    }
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    updateField('photos', Array.from(e.target.files ?? []))
  }

  function getStepSummary(index: number) {
    switch (index) {
      case 0:
        return formData.serviceType ? getServiceLabel(formData.serviceType) : '—'
      case 1:
        if (!formData.organisation && !formData.siteType) return '—'
        return [formData.organisation, formData.siteType].filter(Boolean).join(' · ')
      case 2:
        if (!formData.name && !formData.email) return '—'
        return formData.name || formData.email
      case 3:
        if (formData.consent) return 'Ready to send'
        if (formData.message?.trim()) return 'Details added'
        if (formData.photos.length > 0) return `${formData.photos.length} file${formData.photos.length > 1 ? 's' : ''} attached`
        return '—'
      default:
        return '—'
    }
  }

  function validateStep(step: number) {
    switch (step) {
      case 0:
        return formData.serviceType ? '' : 'Select a system to continue.'
      case 1:
        if (!formData.organisation.trim() || !formData.siteType.trim()) {
          return 'Add your organisation and site location to continue.'
        }
        if (!isValidUKLocation(formData.siteType)) {
          return 'Enter a UK city, town, area, or a valid UK postcode.'
        }
        return ''
      case 2:
        return validateContactDetails(formData)
      case 3:
        return formData.consent ? '' : 'Please confirm consent before sending your enquiry.'
      default:
        return ''
    }
  }

  function handleContinue() {
    const error = validateStep(activeStep)

    if (error) {
      setStepError(error)
      return
    }

    setStepError('')
    setActiveStep((current) => Math.min(current + 1, STEP_LABELS.length - 1))
  }

  function handleBack() {
    setStepError('')
    setActiveStep((current) => Math.max(current - 1, 0))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const error = validateStep(activeStep)
    if (error) {
      e.preventDefault()
      setStepError(error)
      return
    }

    const uploadError = validateQuoteEnquiry(formData)
    if (uploadError) {
      e.preventDefault()
      setStepError(uploadError)
      setStatus('error')
      return
    }

    setStepError('')
    setStatus('submitting')
  }

  function renderStepContent() {
    switch (activeStep) {
      case 0:
        return (
          <>
            <div className="space-y-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Question 01 / 04
              </p>
              <h3 className={stepQuestionClass}>
                What system are you interested in?
              </h3>
            </div>
            <div role="radiogroup" aria-label="System selection" className="grid gap-4 md:grid-cols-2">
              {HOME_SERVICE_OPTIONS.map((option, index) => {
                    const isSelected = (formData.serviceType ?? '') === option.value

                return (
                  <button
                    key={option.value}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => updateField('serviceType', option.value)}
                    className={`min-h-[8.5rem] rounded-md border p-5 text-left transition-all duration-200 ${
                      isSelected
                        ? 'border-sky-400 bg-navy-900 text-white shadow-[0_14px_30px_rgba(12,48,87,0.16)]'
                        : 'border-slate-300 bg-white text-navy-900 hover:border-sky-300 hover:bg-sky-50/40'
                    }`}
                  >
                    <span className={`font-mono text-[11px] font-semibold uppercase tracking-[0.22em] ${isSelected ? 'text-sky-300' : 'text-slate-400'}`}>
                      OPT.{index + 1}
                    </span>
                    <p className="mt-3 text-2xl font-bold leading-tight">{option.label}</p>
                    <p className={`mt-2 text-sm leading-relaxed ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                      {option.description}
                    </p>
                  </button>
                )
              })}
            </div>
          </>
        )
      case 1:
        return (
          <>
            <div className="space-y-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Question 02 / 04
              </p>
              <h3 className={stepQuestionClass}>
                Where is the project site?
              </h3>
              <p className="max-w-2xl text-base text-slate-600 md:text-lg">
                Tell us the organisation and the location we should quote for.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="organisation" className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Organisation
                </label>
                <input
                  id="organisation"
                  name="Organisation"
                  type="text"
                  className={FIELD_CLASS}
                  placeholder="Riverside Academy"
                  value={formData.organisation ?? ''}
                  onChange={(e) => updateField('organisation', e.target.value)}
                  autoComplete="organization"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="siteType" className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Site Location
                </label>
                <input
                  id="siteType"
                  name="Site Location"
                  type="text"
                  className={FIELD_CLASS}
                  placeholder="Enter a UK postcode or choose an area below"
                  value={formData.siteType ?? ''}
                  onChange={(e) => updateField('siteType', e.target.value)}
                  autoComplete="off"
                  spellCheck={false}
                />
                <select
                  id="siteTypeArea"
                  className={FIELD_CLASS}
                  value={UK_AREA_OPTIONS.includes(formData.siteType as (typeof UK_AREA_OPTIONS)[number]) ? formData.siteType : ''}
                  onChange={(e) => updateField('siteType', e.target.value)}
                >
                  <option value="">Choose a UK area</option>
                  {UK_AREA_OPTIONS.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className="space-y-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Question 03 / 04
              </p>
              <h3 className={stepQuestionClass}>
                Who should we send the proposal to?
              </h3>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={FIELD_CLASS}
                  placeholder="Jane Smith"
                  value={formData.name ?? ''}
                  onChange={(e) => updateField('name', e.target.value)}
                  autoComplete="name"
                  inputMode="text"
                />
                {formData.name.trim() && !isValidFullName(formData.name) ? (
                  <p className="text-xs text-red-600">Enter first and last name.</p>
                ) : null}
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="Phone Number"
                  type="tel"
                  className={FIELD_CLASS}
                  placeholder="07700 900000"
                  value={formData.phone ?? ''}
                  onChange={(e) => updateField('phone', e.target.value)}
                  autoComplete="tel"
                  inputMode="tel"
                />
                {formData.phone.trim() && !isValidUKPhone(formData.phone) ? (
                  <p className="text-xs text-red-600">Use a valid UK phone number.</p>
                ) : null}
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={FIELD_CLASS}
                  placeholder="jane@organisation.co.uk"
                  value={formData.email ?? ''}
                  onChange={(e) => updateField('email', e.target.value)}
                  autoComplete="email"
                  inputMode="email"
                />
                {formData.email.trim() && !isValidEmail(formData.email) ? (
                  <p className="text-xs text-red-600">Use a valid email address.</p>
                ) : null}
              </div>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className="space-y-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Question 04 / 04
              </p>
              <h3 className={stepQuestionClass}>
                Anything else we should know?
              </h3>
              <p className="max-w-2xl text-base text-slate-600 md:text-lg">
                Add any site details, photos, or timing notes. Then send it through and we&apos;ll come back with a tailored proposal.
              </p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="Project Details"
                  className={`${FIELD_CLASS} min-h-[160px] resize-none`}
                  rows={5}
                  placeholder="Site type, number of doors or buildings, existing systems, preferred timeline, and anything else helpful for the quote."
                  value={formData.message ?? ''}
                  onChange={(e) => updateField('message', e.target.value)}
                />
              </div>

              <div className="rounded-md border border-dashed border-slate-300 bg-slate-50/70 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Upload pictures</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Optional: images, PDFs, or Word documents showing entrances, exits, gates, or existing equipment.
                    </p>
                  </div>
                  <label
                    htmlFor="photos"
                    className="inline-flex cursor-pointer items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-sky-400 hover:text-sky-700"
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
                        className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600"
                      >
                        {photo.name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <label className="flex items-start gap-3 rounded-md border border-slate-200 bg-white p-4">
                <input
                  id="consent"
                  type="checkbox"
                  checked={!!formData.consent}
                  onChange={(e) => updateField('consent', e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-500 focus:ring-2 focus:ring-sky-200"
                />
                <span className="text-sm leading-relaxed text-slate-600">
                  I agree to A-Squared Alarms contacting me about this enquiry. We never share your data with third parties.
                </span>
              </label>
            </div>
          </>
        )
      default:
        return null
    }
  }

  if (status === 'success') {
    const successContent = (
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-14 text-center shadow-card md:px-10">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <div className="space-y-3">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Enquiry Received
            </p>
            <h2 id="quote-heading" className="font-display text-display-lg font-bold text-navy-900">
              Thanks, we&apos;ve got it.
            </h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              A specialist will review your answers and come back with a tailored proposal, usually the same day.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setStatus('idle')
              setFormData(createInitialFormData())
              setActiveStep(0)
              setStepError('')
            }}
            className="btn btn-outline btn-md"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    )

    if (embedded) {
      return <div id={sectionId}>{successContent}</div>
    }

    return (
      <section className="section-spacing bg-white" id={sectionId} aria-labelledby="quote-heading">
        <div className="container-site">{successContent}</div>
      </section>
    )
  }

  const introContent = showIntro ? (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] xl:items-end">
      <div className="space-y-4">
        <span className="badge-sky">Free Quote</span>
        <h2
          id="quote-heading"
          className="font-display text-display-xl font-bold leading-[1.02] text-navy-900"
        >
          One Minute.
          <span className="block">No Obligation.</span>
        </h2>
      </div>
      <p className="max-w-xl text-lg leading-relaxed text-slate-600">
        Answer four questions and we&apos;ll come back with a tailored proposal, usually the same day.
      </p>
    </div>
  ) : null

  const isContactLayout = layout === 'contact'
  const formName = isContactLayout ? 'Contact Page Quote Form' : 'Website Quote Form'

  const stepCards = STEP_LABELS.map((label, index) => {
    const isActive = index === activeStep
    const isComplete = index < activeStep

    return (
      <div
        key={label}
        className={`rounded-md border px-5 py-4 transition-colors ${
          isActive
            ? 'border-sky-400 bg-navy-900 text-white shadow-[0_14px_28px_rgba(12,48,87,0.12)]'
            : 'border-slate-300 bg-white text-navy-900'
        }`}
      >
        <p className={`font-mono text-[11px] font-semibold uppercase tracking-[0.24em] ${isActive ? 'text-sky-300' : 'text-slate-400'}`}>
          Step {String(index + 1).padStart(2, '0')}
        </p>
        <p className="mt-3 text-lg font-bold leading-tight">{label}</p>
        <p className={`mt-2 min-h-[1.5rem] text-sm ${isActive ? 'text-slate-200' : isComplete ? 'text-slate-600' : 'text-slate-400'}`}>
          {getStepSummary(index)}
        </p>
      </div>
    )
  })

  const formContent = (
    <form
      onSubmit={handleSubmit}
      action={FORM_SUBMIT_ACTION}
      method="POST"
      encType="multipart/form-data"
      noValidate
      className={
        isContactLayout
          ? 'space-y-8'
          : 'grid gap-8 xl:grid-cols-[17rem_minmax(0,1fr)] xl:gap-10'
      }
    >
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="_subject" value={buildFormSubmitSubject(formData.serviceType, formName)} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_replyto" value={formData.email ?? ''} />
      <input type="hidden" name="_autoresponse" value={buildFormSubmitAutoresponse(formData.serviceType)} />
      <input type="hidden" name="_blacklist" value="http://,https://,viagra,casino,crypto" />
      <input type="hidden" name="Form Name" value={formName} />
      <input type="hidden" name="Source Page" value={currentPath} />
      <input type="hidden" name="Service Required" value={getServiceLabel(formData.serviceType)} />
      <input type="hidden" name="Consent Given" value={formData.consent ? 'Yes' : 'No'} />
      <input type="hidden" name="Step 01 - Product" value={getServiceLabel(formData.serviceType)} />
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

      <div
        className={
          isContactLayout
            ? 'grid gap-4 sm:grid-cols-2'
            : 'space-y-4 xl:border-r xl:border-slate-200 xl:pr-10'
        }
      >
        {stepCards}
      </div>

      <div className={isContactLayout ? 'space-y-8' : 'space-y-8 xl:pl-2'}>
        {renderStepContent()}

        {stepError ? (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            {stepError}
          </div>
        ) : null}

        {status === 'error' && !stepError ? (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
            Something went wrong. Please call us directly on{' '}
            <a href="tel:07778387989" className="font-semibold underline">
              07778 387 989
            </a>
            .
          </div>
        ) : null}

        <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={handleBack}
            disabled={activeStep === 0}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 transition-colors hover:border-slate-400 hover:text-navy-900 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span aria-hidden="true">←</span>
            Back
          </button>

          {activeStep < STEP_LABELS.length - 1 ? (
            <button
              type="button"
              onClick={handleContinue}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-400 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-navy-900 transition-colors hover:bg-sky-300"
            >
              Continue
              <span aria-hidden="true">→</span>
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === 'submitting'}
              aria-busy={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
              <span aria-hidden="true">→</span>
            </button>
          )}
        </div>
      </div>
    </form>
  )

  if (embedded) {
    return (
      <div id={sectionId} className="space-y-8">
        {introContent}
        {formContent}
      </div>
    )
  }

  return (
    <section className="section-spacing bg-white" aria-labelledby="quote-heading" id={sectionId}>
      <div className="container-site space-y-12 lg:space-y-16">
        {introContent}
        {formContent}
      </div>
    </section>
  )
}
