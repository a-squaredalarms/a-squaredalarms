/** Google Analytics 4 measurement ID. Leave empty to disable analytics and the consent banner entirely. */
export const GA_MEASUREMENT_ID = 'G-ECNLGLPGCQ'

export const CONSENT_KEY = 'asq-cookie-consent'
export type ConsentChoice = 'granted' | 'denied'

/** Event the footer "Cookie settings" link dispatches to reopen the banner. */
export const OPEN_CONSENT_EVENT = 'asq:open-cookie-settings'

/** Send a GA4 event. No-op until the visitor has accepted analytics (gtag is only defined after consent). */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined') window.gtag?.('event', name, params)
}
