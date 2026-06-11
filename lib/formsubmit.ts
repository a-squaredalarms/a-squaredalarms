import { BRAND } from '@/lib/data'
import type { QuoteFormData } from '@/types'

export const FORM_SUBMIT_ACTION = `https://formsubmit.co/${BRAND.email}`
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
