import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { BRAND } from '@/lib/data'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Read the A-Squared Alarms privacy policy, including how we collect, use, store, and protect personal data when you use our website, request a quote, or contact us.',
  canonical: 'https://a-squaredalarms.com/privacy-policy',
  keywords: [
    'privacy policy A-Squared Alarms',
    'data protection A-Squared Alarms',
    'website privacy policy UK',
    'alarm company privacy policy',
  ],
})

const EFFECTIVE_DATE = '21 May 2026'
const COMPANY_NAME = 'A-Squared (A2) Ltd'
const COMPANY_NUMBER = '16482580'

const POLICY_LINKS = [
  { id: 'who-we-are', label: 'Who we are' },
  { id: 'what-we-collect', label: 'What we collect' },
  { id: 'how-we-use-it', label: 'How we use it' },
  { id: 'lawful-bases', label: 'Lawful bases' },
  { id: 'sharing', label: 'Sharing data' },
  { id: 'retention', label: 'Retention' },
  { id: 'cookies', label: 'Cookies and website tools' },
  { id: 'rights', label: 'Your rights' },
  { id: 'contact-us', label: 'Contact and complaints' },
] as const

function PolicySection({
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900" aria-label="Privacy policy hero">
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
                <li className="font-medium text-white">Privacy Policy</li>
              </ol>
            </nav>

            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">Legal</span>

            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              Privacy Policy
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              This page explains how A-Squared Alarms collects, uses, stores, and protects personal
              data when you use this website, request a quote, contact us, or engage us for services.
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
                  Data Controller
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{COMPANY_NAME}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">
                  Registered Office
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{BRAND.address.full}</p>
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

      <section className="section-spacing bg-slate-50" aria-labelledby="privacy-overview-heading">
        <div className="container-site">
          <div className="mb-10 max-w-3xl">
            <span className="badge-sky">Privacy Overview</span>
            <h2
              id="privacy-overview-heading"
              className="mt-4 font-display text-display-lg font-bold text-navy-900"
            >
              Clear, practical information about how your data is handled.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              We only use personal data where we need it to respond to enquiries, arrange site
              surveys, deliver services, maintain records, protect the website, and meet our legal
              obligations. We do not sell personal information.
            </p>
          </div>

          <div className="grid gap-10 xl:grid-cols-[18rem_minmax(0,1fr)]">
            <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  On This Page
                </p>
                <nav className="mt-4" aria-label="Privacy policy sections">
                  <ul className="space-y-2">
                    {POLICY_LINKS.map((link) => (
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
                  Quick Contact
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  <p>
                    Email:{' '}
                    <a href={`mailto:${BRAND.email}`} className="font-semibold text-navy-900 hover:text-sky-700">
                      {BRAND.email}
                    </a>
                  </p>
                  <p>
                    Phone:{' '}
                    <a
                      href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                      className="font-semibold text-navy-900 hover:text-sky-700"
                    >
                      {BRAND.phone}
                    </a>
                  </p>
                  <p>{BRAND.address.full}</p>
                </div>
              </div>
            </aside>

            <div className="space-y-6">
              <PolicySection id="who-we-are" title="1. Who we are">
                <p>
                  This website is operated by {COMPANY_NAME}, trading as A-Squared Alarms. We are
                  the data controller for the personal data covered by this policy.
                </p>
                <p>
                  Registered office: {BRAND.address.full}. Company number: {COMPANY_NUMBER}.
                </p>
                <p>
                  This policy applies to personal data collected through our website, quote and
                  contact forms, telephone calls, emails, attachments you send to us, and any other
                  direct correspondence relating to our services.
                </p>
              </PolicySection>

              <PolicySection id="what-we-collect" title="2. What personal data we collect">
                <p>Depending on how you interact with us, we may collect:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>
                      Contact details such as your name, email address, telephone number, job title,
                      organisation name, and site location details.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>
                      Enquiry information, including the service you are interested in, project
                      requirements, notes you submit in forms, and any follow-up correspondence.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>
                      Files and images you choose to send to us, such as photos of entrances,
                      existing systems, or relevant site areas.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>
                      Technical information such as IP address, browser type, approximate device
                      information, and basic website security or server log data.
                    </span>
                  </li>
                </ul>
                <p>
                  We do not knowingly collect personal data directly from children through this
                  website. Our services are offered to organisations, decision-makers, and responsible
                  adults.
                </p>
              </PolicySection>

              <PolicySection id="how-we-use-it" title="3. How we use your personal data">
                <p>We use personal data to:</p>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    'Respond to enquiries and provide requested information',
                    'Prepare quotations, surveys, and system recommendations',
                    'Arrange appointments, site visits, and follow-up discussions',
                    'Deliver services and maintain customer records',
                    'Protect the website, prevent misuse, and monitor basic performance',
                    'Comply with legal, regulatory, tax, and accounting requirements',
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  We will only send marketing communications where you have asked for them, where you
                  have otherwise consented, or where we are permitted to do so under applicable law.
                  You can opt out at any time.
                </p>
              </PolicySection>

              <PolicySection id="lawful-bases" title="4. Our lawful bases for processing">
                <p>Under UK data protection law, we rely on one or more of the following bases:</p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-navy-900">Contract:</strong> where processing is needed to
                    provide a quotation, arrange a survey, or deliver services you have asked for.
                  </li>
                  <li>
                    <strong className="text-navy-900">Legitimate interests:</strong> where processing
                    is necessary for responding to enquiries, running our business, maintaining
                    records, improving the website, or protecting our systems and staff.
                  </li>
                  <li>
                    <strong className="text-navy-900">Legal obligation:</strong> where we must keep or
                    disclose information to comply with legal, regulatory, tax, or accounting duties.
                  </li>
                  <li>
                    <strong className="text-navy-900">Consent:</strong> where you have given us
                    permission, for example if you choose to receive optional marketing updates.
                  </li>
                </ul>
              </PolicySection>

              <PolicySection id="sharing" title="5. How we share personal data">
                <p>
                  We do not sell or rent your personal data. We may share it only where necessary,
                  including with:
                </p>
                <ul className="space-y-3">
                  <li>
                    trusted service providers who help us operate the website, host systems, manage
                    email, or support business operations;
                  </li>
                  <li>professional advisers such as accountants, insurers, or legal advisers;</li>
                  <li>
                    authorities, regulators, or law enforcement where disclosure is required or
                    permitted by law.
                  </li>
                </ul>
                <p>
                  Where third parties process data for us, we expect them to handle it securely and
                  only for the relevant purpose.
                </p>
              </PolicySection>

              <PolicySection id="retention" title="6. How long we keep your data">
                <p>
                  We keep personal data only for as long as reasonably necessary for the purpose for
                  which it was collected, including to satisfy legal, regulatory, accounting, and
                  record-keeping requirements.
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      General Enquiries
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      Usually kept for up to 24 months where there is no ongoing project.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Customer Records
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      May be kept longer where needed for contracts, support, warranties, or tax and
                      accounting records.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      Legal Requirements
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      Some information may be retained longer where law, regulation, or dispute
                      management requires it.
                    </p>
                  </div>
                </div>
              </PolicySection>

              <PolicySection id="cookies" title="7. Cookies, website technologies, and third-party content">
                <p>
                  Our website may use standard technical tools such as server logs, security controls,
                  and basic website technologies to keep the site working properly and help protect it
                  from abuse.
                </p>
                <p>
                  The contact page includes an embedded Google Maps frame. If you use that map, Google
                  may collect technical information directly in line with its own privacy practices and
                  cookie controls.
                </p>
                <p>
                  Our website may also contain links to third-party websites. Those sites operate under
                  their own privacy policies, and we are not responsible for their content or data
                  practices.
                </p>
                <p>
                  If we materially change the cookies or tracking technologies used on this website, we
                  will update this policy and any related notices.
                </p>
              </PolicySection>

              <PolicySection id="rights" title="8. Your privacy rights">
                <p>Subject to applicable law, you may have the right to:</p>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    'request access to the personal data we hold about you',
                    'ask for inaccurate information to be corrected',
                    'request deletion of personal data in certain circumstances',
                    'object to or restrict certain processing',
                    'withdraw consent where processing relies on consent',
                    'request a portable copy of data where applicable',
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the details below. We may
                  need to verify your identity before responding.
                </p>
              </PolicySection>

              <PolicySection id="contact-us" title="9. Contact us and complaints">
                <p>
                  If you have questions about this policy or how we handle personal data, please
                  contact us:
                </p>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-navy-900">{COMPANY_NAME}</p>
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
                <p>
                  You also have the right to complain to the Information Commissioner&apos;s Office
                  if you believe your data has been handled unlawfully. Further information is
                  available at{' '}
                  <a
                    href="https://www.ico.org.uk"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-navy-900 underline underline-offset-2 hover:text-sky-700"
                  >
                    ico.org.uk
                  </a>
                  .
                </p>
                <p>
                  We may update this policy from time to time. The latest version will always be
                  published on this page together with the current effective date.
                </p>
              </PolicySection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
