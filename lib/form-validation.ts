import type { QuoteFormData } from '@/types'

export const UK_AREA_OPTIONS = [
  'London',
  'Manchester',
  'Birmingham',
  'Leeds',
  'Bristol',
  'Liverpool',
  'Sheffield',
  'Newcastle upon Tyne',
  'Nottingham',
  'Leicester',
  'Coventry',
  'Southampton',
  'Portsmouth',
  'Reading',
  'Milton Keynes',
  'Oxford',
  'Cambridge',
  'Norwich',
  'Peterborough',
  'Chelmsford',
  'Luton',
  'Watford',
  'Brighton',
  'Plymouth',
  'Exeter',
  'Bournemouth',
  'Poole',
  'Cardiff',
  'Swansea',
  'Newport',
  'Wrexham',
  'Edinburgh',
  'Glasgow',
  'Aberdeen',
  'Dundee',
  'Inverness',
  'Perth',
  'Stirling',
  'Belfast',
  'Lisburn',
  'Newry',
  'Bangor',
  'Derry',
] as const

const UK_AREA_SET = new Set(UK_AREA_OPTIONS.map((area) => area.toLowerCase()))
const UK_POSTCODE_REGEX =
  /^([A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}|GIR\s?0AA)$/i
const FULL_NAME_REGEX = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ' -]+)+$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
const UK_PHONE_REGEX = /^(?:(?:\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}|(?:\+44\s?(?:1\d{3}|2\d{2})|\(?0(?:1\d{3}|2\d{2})\)?)\s?\d{3,4}\s?\d{3,4})$/

function normaliseLocation(value: string) {
  return value.trim().replace(/\s+/g, ' ').toLowerCase()
}

export function isValidUKLocation(value: string) {
  const trimmed = value.trim()

  if (!trimmed) {
    return false
  }

  return UK_POSTCODE_REGEX.test(trimmed) || UK_AREA_SET.has(normaliseLocation(trimmed))
}

export function isValidFullName(value: string) {
  return FULL_NAME_REGEX.test(value.trim())
}

export function isValidEmail(value: string) {
  return EMAIL_REGEX.test(value.trim())
}

export function isValidUKPhone(value: string) {
  const compact = value.trim().replace(/[().-]/g, ' ')
  return UK_PHONE_REGEX.test(compact.replace(/\s+/g, ' '))
}

export function validateContactDetails(formData: Pick<QuoteFormData, 'name' | 'email' | 'phone'>) {
  if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
    return 'Complete the contact fields before moving on.'
  }

  if (!isValidFullName(formData.name)) {
    return 'Enter a full name with first and last name.'
  }

  if (!isValidUKPhone(formData.phone)) {
    return 'Enter a valid UK phone number.'
  }

  if (!isValidEmail(formData.email)) {
    return 'Enter a valid email address.'
  }

  return ''
}
