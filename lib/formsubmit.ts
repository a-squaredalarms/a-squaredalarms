import { BRAND } from '@/lib/data'
import type { QuoteFormData } from '@/types'

export const FORM_SUBMIT_ACTION = 'https://formsubmit.co/ajax/b252edb821cc29f1c42859125f48218c'
export const MAX_TOTAL_UPLOAD_SIZE = 10 * 1024 * 1024

const SERVICE_LABELS: Record<Exclude<QuoteFormData['serviceType'], ''>, string> = {
  lockdown: 'Lockdown Alarm System',
  fire: 'Temporary Fire Alarm System',
  vape: 'Vape Detection',
  'access-control': 'Access Control',
  'intrusion-protection': 'Intrusion Protection',
  popalert: 'PopAlert',
}

export function getServiceLabel(serviceType: QuoteFormData['serviceType']) {
  if (!serviceType) {
    return 'General Enquiry'
  }

  return SERVICE_LABELS[serviceType]
}

export function getTotalUploadSize(files: File[]) {
  return files.reduce((total, file) => total + file.size, 0)
}

export function validateQuoteEnquiry(formData: QuoteFormData) {
  if (getTotalUploadSize(formData.photos) > MAX_TOTAL_UPLOAD_SIZE) {
    return 'Uploaded files must total less than 10MB.'
  }

  return ''
}

export function buildFormSubmitNextUrl(pathname: string, origin: string = BRAND.siteUrl) {
  return new URL(pathname, origin).toString()
}

export function buildFormSubmitSubject(serviceType: QuoteFormData['serviceType'], formName: string) {
  return `New ${getServiceLabel(serviceType)} enquiry from ${formName}`
}

export function buildFormSubmitAutoresponse(serviceType: QuoteFormData['serviceType']) {
  const serviceLabel = getServiceLabel(serviceType)

  return [
    'Subject: Thank you for your enquiry',
    '',
    'Dear Customer,',
    '',
    `Thank you for contacting ${BRAND.name}.`,
    '',
    `This email confirms that we have received your enquiry regarding ${serviceLabel}.`,
    'A member of our team will review your request and get back to you shortly.',
    '',
    'If your enquiry is urgent, please call us using the number below.',
    '',
    `${BRAND.phone}`,
    '',
    'Kind regards,',
    `${BRAND.name}`,
  ].join('\n')
}

// ─── Spam controls ────────────────────────────────────────────────────────────

/**
 * FormSubmit discards submissions where this field is filled. We also check it
 * ourselves, so a form is protected regardless of how the provider behaves.
 */
export const HONEYPOT_FIELD = '_honey'

/**
 * Submissions faster than this are automated. Kept deliberately low: silently
 * dropping a real enquiry costs more than letting some spam through, and
 * browser autofill can make a genuine submission quick.
 */
export const MIN_SUBMIT_MS = 1500

/**
 * True when a submission looks automated. Callers should discard it silently
 * rather than showing an error, so a bot cannot learn what tripped the check.
 */
export function isLikelyBotSubmission(data: FormData, renderedAt: number): boolean {
  const honeypot = data.get(HONEYPOT_FIELD)
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    return true
  }

  return Date.now() - renderedAt < MIN_SUBMIT_MS
}
