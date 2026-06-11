import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { BRAND } from '@/lib/data'

export const metadata: Metadata = buildMetadata({
  title: 'Cookie Policy',
  description:
    'Read the A-Squared Alarms cookie policy, including how cookies and similar technologies may be used on this website and how to manage them.',
  canonical: 'https://a-squaredalarms.com/cookies',
  keywords: [
    'cookie policy A-Squared Alarms',
    'website cookies A-Squared Alarms',
    'cookie policy UK website',
    'A-Squared Alarms cookies',
  ],
})

const EFFECTIVE_DATE = '21 May 2026'

const COOKIE_LINKS = [
  { id: 'what-are-cookies', label: 'What cookies are' },
  { id: 'how-we-use-cookies', label: 'How we use them' },
  { id: 'cookie-types', label: 'Types of cookies' },
  { id: 'third-party-content', label: 'Third-party content' },
  { id: 'manage-cookies', label: 'Managing cookies' },
  { id: 'updates-contact', label: 'Updates and contact' },
] as const

function CookieSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card md:p-8">
      <h2 className="font-display text-display-sm font-bold text-navy-900">{title}</h2>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">{children}</div>
    </section>
  )
}

export default function CookiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900" aria-label="Cookie policy hero">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-y-0 right-0 w-1/2 opacity-20"
          style={{
            background: 'radial-gradient(ellipse at 80% 50%, #6EC1E4 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 right-0 h-1 bg-sky-400" aria-hidden="true" />

        <div className="container-site relative z-10 py-14 md:py-20">
          <div className="max-w-4xl space-y-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-slate-400">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-white">Cookie Policy</li>
              </ol>
            </nav>

            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">Legal</span>

            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              Cookie Policy
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              This page explains how cookies and similar technologies may be used when you visit the
              A-Squared Alarms website, and how you can control them.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">
                  Effective Date
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{EFFECTIVE_DATE}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">
                  Website
                </p>
                <p className="mt-2 text-sm font-semibold text-white">a-squaredalarms.com</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">
                  Main Use
                </p>
                <p className="mt-2 text-sm font-semibold text-white">Essential website functions and embedded content</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">
                  Contact
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{BRAND.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950/30 to-transparent"
          aria-hidden="true"
        />
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="cookies-overview-heading">
        <div className="container-site">
          <div className="mb-10 max-w-3xl">
            <span className="badge-sky">Cookie Overview</span>
            <h2
              id="cookies-overview-heading"
              className="mt-4 font-display text-display-lg font-bold text-navy-900"
            >
              A simple explanation of what may run in your browser when you use this website.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              We aim to keep website technologies proportionate and practical. At the time of this
              policy, this website appears to rely mainly on essential platform behaviour and limited
              embedded third-party content rather than broad advertising or behavioural tracking.
            </p>
          </div>

          <div className="grid gap-10 xl:grid-cols-[18rem_minmax(0,1fr)]">
            <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  On This Page
                </p>
                <nav className="mt-4" aria-label="Cookie policy sections">
                  <ul className="space-y-2">
                    {COOKIE_LINKS.map((link) => (
                      <li key={link.id}>
                        <a
                          href={`#${link.id}`}
                          className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-navy-900"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Related Pages
                </p>
                <div className="mt-4 space-y-3 text-sm">
                  <Link href="/privacy-policy" className="block font-medium text-navy-900 hover:text-sky-700">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="block font-medium text-navy-900 hover:text-sky-700">
                    Terms &amp; Conditions
                  </Link>
                  <Link href="/contact" className="block font-medium text-navy-900 hover:text-sky-700">
                    Contact Us
                  </Link>
                </div>
              </div>
            </aside>

            <div className="space-y-6">
              <CookieSection id="what-are-cookies" title="1. What cookies are">
                <p>
                  Cookies are small text files placed on your device by websites and online services.
                  They can help a website function properly, remember preferences, improve security,
                  or support analytics and embedded content.
                </p>
                <p>
                  Similar technologies may include browser storage, pixels, scripts, or device-level
                  identifiers that perform comparable functions.
                </p>
              </CookieSection>

              <CookieSection id="how-we-use-cookies" title="2. How we use cookies and similar technologies">
                <p>
                  We may use cookies or comparable browser technologies to keep the website operating,
                  support essential functionality, protect the site against misuse, and enable certain
                  embedded features.
                </p>
                <p>
                  Based on the current public website implementation, we do not appear to be using a
                  dedicated analytics or advertising package directly in the site code at this time.
                  If that changes, this policy should be updated accordingly.
                </p>
              </CookieSection>

              <CookieSection id="cookie-types" title="3. Types of cookies that may apply">
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-navy-900">Strictly necessary cookies</p>
                    <p className="mt-2 text-sm text-slate-700">
                      These may be used to help core website functions work, such as page delivery,
                      technical security, load balancing, or essential session behaviour. Without
                      these, some parts of the site may not function properly.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-navy-900">Functional technologies</p>
                    <p className="mt-2 text-sm text-slate-700">
                      Where applicable, these may support convenience features, browser-side form
                      behaviour, or embedded tools. They are not currently a major feature of this
                      site, but platform behaviour may still rely on limited browser storage.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-navy-900">Performance or analytics cookies</p>
                    <p className="mt-2 text-sm text-slate-700">
                      We do not currently identify a dedicated analytics package actively deployed in
                      the site code. If analytics are added in future, this section should be updated
                      to explain what is used and why.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-navy-900">Advertising or marketing cookies</p>
                    <p className="mt-2 text-sm text-slate-700">
                      We do not currently identify advertising or remarketing tools intentionally
                      deployed in the public site code. If those tools are introduced later, this page
                      should be revised before or at the time of implementation.
                    </p>
                  </div>
                </div>
              </CookieSection>

              <CookieSection id="third-party-content" title="4. Third-party content and external providers">
                <p>
                  Some features may rely on third-party providers. The most visible example in the
                  current site is the embedded Google Maps frame used on the contact page.
                </p>
                <p>
                  When you interact with embedded Google Maps content, Google may set cookies or
                  collect technical data directly in line with its own policies and controls. Those
                  third-party technologies are not controlled by A-Squared Alarms.
                </p>
                <p>
                  The website may also link to external websites. If you follow those links, the
                  external site may use its own cookies and technologies under its own policies.
                </p>
              </CookieSection>

              <CookieSection id="manage-cookies" title="5. How to manage or disable cookies">
                <p>
                  Most browsers allow you to review, block, or delete cookies through browser
                  settings. You can usually:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>delete cookies already stored on your device;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>block all cookies or only certain categories;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>set browser rules for specific websites;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>clear browser storage and related site data.</span>
                  </li>
                </ul>
                <p>
                  Please note that blocking essential cookies or related storage may affect how the
                  website performs.
                </p>
              </CookieSection>

              <CookieSection id="updates-contact" title="6. Updates, privacy links, and contact details">
                <p>
                  We may update this Cookie Policy if website technologies change, if new third-party
                  tools are added, or if legal requirements change.
                </p>
                <p>
                  For broader information about how we handle personal data, please see our{' '}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-navy-900 underline underline-offset-2 hover:text-sky-700"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-navy-900">Contact A-Squared Alarms</p>
                  <p className="mt-2 text-sm text-slate-700">{BRAND.address.full}</p>
                  <p className="mt-1 text-sm text-slate-700">
                    Email:{' '}
                    <a href={`mailto:${BRAND.email}`} className="font-semibold text-navy-900 hover:text-sky-700">
                      {BRAND.email}
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-slate-700">
                    Phone:{' '}
                    <a
                      href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                      className="font-semibold text-navy-900 hover:text-sky-700"
                    >
                      {BRAND.phone}
                    </a>
                  </p>
                </div>
              </CookieSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
