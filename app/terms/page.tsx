import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { BRAND } from '@/lib/data'

export const metadata: Metadata = buildMetadata({
  title: 'Terms & Conditions',
  description:
    'Read the A-Squared Alarms terms and conditions covering quotations, installation, maintenance, customer responsibilities, website use, and legal terms for our safety systems services.',
  canonical: 'https://a-squaredalarms.com/terms',
  keywords: [
    'terms and conditions A-Squared Alarms',
    'alarm installation terms UK',
    'safety systems terms and conditions',
    'website terms A-Squared Alarms',
  ],
})

const EFFECTIVE_DATE = '21 May 2026'
const COMPANY_NAME = 'A-Squared (A2) Ltd'
const COMPANY_NUMBER = '16482580'

const SECTION_LINKS = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'company-information', label: 'Company information' },
  { id: 'services-and-quotes', label: 'Services and quotations' },
  { id: 'customer-responsibilities', label: 'Customer responsibilities' },
  { id: 'system-notices', label: 'Important system notices' },
  { id: 'maintenance-and-support', label: 'Maintenance and support' },
  { id: 'payment-and-cancellation', label: 'Payment and cancellation' },
  { id: 'liability', label: 'Liability' },
  { id: 'website-use', label: 'Website use and IP' },
  { id: 'privacy-and-law', label: 'Privacy and governing law' },
] as const

function TermsSection({
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

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900" aria-label="Terms and conditions hero">
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
                <li className="font-medium text-white">Terms &amp; Conditions</li>
              </ol>
            </nav>

            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">Legal</span>

            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              Terms &amp; Conditions
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              These terms explain the basis on which A-Squared Alarms provides quotations, surveys,
              installations, maintenance, and related services across our safety systems offering.
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
                  Trading Entity
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{COMPANY_NAME}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">
                  Main Scope
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Supply, installation, support, and maintenance
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-300">
                  Jurisdiction
                </p>
                <p className="mt-2 text-sm font-semibold text-white">England &amp; Wales</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950/30 to-transparent"
          aria-hidden="true"
        />
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="terms-overview-heading">
        <div className="container-site">
          <div className="mb-10 max-w-3xl">
            <span className="badge-sky">Terms Overview</span>
            <h2
              id="terms-overview-heading"
              className="mt-4 font-display text-display-lg font-bold text-navy-900"
            >
              Clear service terms for websites, surveys, installations, and ongoing support.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              These terms apply to your use of this website and to services we provide, including
              lockdown alarm systems, PopAlert digital alerts, temporary fire alarm systems, vape detection,
              access control, intrusion protection, and related surveys, support, and maintenance.
            </p>
          </div>

          <div className="grid gap-10 xl:grid-cols-[18rem_minmax(0,1fr)]">
            <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  On This Page
                </p>
                <nav className="mt-4" aria-label="Terms and conditions sections">
                  <ul className="space-y-2">
                    {SECTION_LINKS.map((link) => (
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
                  Need Clarification?
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
              <TermsSection id="introduction" title="1. Introduction">
                <p>
                  These Terms &amp; Conditions govern your use of this website and the services
                  supplied by {COMPANY_NAME}, trading as A-Squared Alarms.
                </p>
                <p>
                  By using our website, requesting a quotation, instructing us to carry out work, or
                  otherwise engaging our services, you agree to these terms unless we expressly agree
                  separate written terms with you.
                </p>
                <p>
                  If you do not agree with these terms, you should not use the website or instruct us
                  to provide services.
                </p>
              </TermsSection>

              <TermsSection id="company-information" title="2. Company information">
                <p>Our business details are:</p>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-navy-900">A-Squared Alarms</p>
                  <p className="mt-1 text-sm text-slate-700">
                    Trading name of {COMPANY_NAME}
                  </p>
                  <p className="mt-1 text-sm text-slate-700">Company number: {COMPANY_NUMBER}</p>
                  <p className="mt-1 text-sm text-slate-700">{BRAND.address.full}</p>
                  <p className="mt-1 text-sm text-slate-700">Email: {BRAND.email}</p>
                  <p className="mt-1 text-sm text-slate-700">Phone: {BRAND.phone}</p>
                </div>
              </TermsSection>

              <TermsSection id="services-and-quotes" title="3. Services, quotations, and scope">
                <p>
                  We provide site surveys, recommendations, supply, installation, configuration,
                  commissioning, maintenance, and related support for selected safety and security
                  systems.
                </p>
                <p>
                  Quotations, proposals, and recommendations are based on the information available
                  to us at the time. If site conditions, access requirements, technical constraints,
                  third-party hardware availability, or customer requirements change, the scope and
                  price may also need to change.
                </p>
                <p>
                  Any drawings, coverage suggestions, battery expectations, or performance estimates
                  are provided on a reasonable basis but remain subject to real-world site conditions,
                  interference, and manufacturer limitations.
                </p>
                <div className="grid gap-3 md:grid-cols-2">
                  {[
                    'Quoted works may depend on suitable power, access, and signal conditions.',
                    'Any extra works outside the agreed scope may be charged separately.',
                    'Manufacturer products remain subject to supplier specifications and availability.',
                    'We may recommend phased works where that is more appropriate for the site.',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </TermsSection>

              <TermsSection id="customer-responsibilities" title="4. Customer responsibilities">
                <p>You agree to:</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>provide accurate information about the site, project, and relevant risks;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>provide safe and reasonable access for survey, installation, testing, maintenance, and collection where required;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>ensure your staff, contractors, residents, pupils, or visitors are appropriately informed before planned testing or activation activities;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>follow training, operational guidance, and any handover instructions we provide;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>avoid unauthorised changes, tampering, relocation, or interference with installed equipment.</span>
                  </li>
                </ul>
                <p>
                  Where customer-side actions or omissions affect performance, access, safety,
                  compliance, or timescales, we may pause works, revise the scope, or apply
                  additional charges where reasonable.
                </p>
              </TermsSection>

              <TermsSection id="system-notices" title="5. Important system notices">
                <p>
                  Different products and services have different technical limits. The following
                  points are especially important:
                </p>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-navy-900">Radio and wireless performance</p>
                    <p className="mt-2 text-sm text-slate-700">
                      Some systems rely on radio or wireless communication. Performance may be affected
                      by site layout, interference, building materials, environmental conditions, and
                      third-party equipment beyond our control.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-navy-900">Battery-powered equipment</p>
                    <p className="mt-2 text-sm text-slate-700">
                      Battery life expectations are based on manufacturer guidance and normal use.
                      Actual performance may vary depending on testing frequency, activations,
                      temperature, signal conditions, and how the system is used on site.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-navy-900">Temporary fire alarm systems</p>
                    <p className="mt-2 text-sm text-slate-700">
                      Where we provide temporary fire alarm systems, they are intended for temporary
                      site use only and should not be treated as permanent building fire alarm
                      compliance unless expressly stated otherwise in writing.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-navy-900">Training and user operation</p>
                    <p className="mt-2 text-sm text-slate-700">
                      We may train designated contacts, but you remain responsible for internal
                      rollout, day-to-day operation, periodic testing where applicable, and making
                      sure appropriate staff understand the system.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="font-semibold text-navy-900">Loss, damage, theft, or misuse</p>
                    <p className="mt-2 text-sm text-slate-700">
                      Replacement of lost, stolen, damaged, or misused equipment may be chargeable,
                      including parts, labour, batteries, call-out, and reconfiguration where needed.
                    </p>
                  </div>
                </div>
              </TermsSection>

              <TermsSection id="maintenance-and-support" title="6. Maintenance and support">
                <p>
                  Ongoing maintenance, monitoring, support visits, and service packages may be
                  offered under separate written terms, a proposal, or a maintenance agreement.
                </p>
                <p>
                  If a maintenance visit cannot proceed because access is refused, the site is unsafe,
                  or the relevant contact is unavailable, we may need to reschedule and charge a
                  reasonable aborted visit or call-out fee where that has been agreed.
                </p>
                <p>
                  Manufacturer warranties remain subject to the relevant manufacturer&apos;s own terms.
                  Our role as installer or integrator does not extend those manufacturer warranties
                  beyond what is expressly provided.
                </p>
              </TermsSection>

              <TermsSection id="payment-and-cancellation" title="7. Payment, changes, and cancellation">
                <p>
                  Prices are stated in pounds sterling unless stated otherwise. Payment terms,
                  deposits, stage payments, rental charges, and due dates will normally be set out in
                  the quotation, proposal, or invoice.
                </p>
                <p>
                  Late payment may result in suspension of works, delayed support, interest, recovery
                  costs where law permits, or cancellation of future attendance until the account is
                  brought up to date.
                </p>
                <p>
                  If you cancel or postpone agreed works after equipment, labour, or access planning
                  has been committed, we may charge for reasonable costs already incurred.
                </p>
                <p>
                  If you are contracting as a consumer rather than a business, any statutory
                  cancellation rights available to you under applicable consumer law will continue to
                  apply.
                </p>
              </TermsSection>

              <TermsSection id="liability" title="8. Liability">
                <p>
                  We will carry out our services with reasonable skill and care. However, to the
                  fullest extent permitted by law, we are not liable for:
                </p>
                <ul className="space-y-3">
                  <li>indirect, incidental, special, or consequential loss;</li>
                  <li>loss caused by third-party interference, signal issues, power issues, environmental conditions, or customer misuse;</li>
                  <li>loss caused by unauthorised changes, lack of maintenance, or failure to follow guidance provided at handover;</li>
                  <li>loss caused by events outside our reasonable control.</li>
                </ul>
                <p>
                  Where the law allows us to limit liability, our aggregate liability in relation to a
                  specific service claim will not exceed the amount paid to us for the affected
                  service.
                </p>
                <p>
                  Nothing in these terms excludes or limits liability for death or personal injury
                  caused by negligence, fraud, fraudulent misrepresentation, or any other liability
                  that cannot legally be excluded.
                </p>
              </TermsSection>

              <TermsSection id="website-use" title="9. Website use and intellectual property">
                <p>
                  You may use this website only for lawful purposes. You must not misuse the website,
                  attempt unauthorised access, introduce malicious code, interfere with site
                  operation, or use content in a misleading way.
                </p>
                <p>
                  Unless otherwise stated, all text, branding, graphics, layouts, and original
                  website content are owned by or licensed to A-Squared Alarms and may not be copied,
                  republished, or commercially exploited without permission.
                </p>
                <p>
                  Product names, logos, and third-party brand references remain the property of their
                  respective owners.
                </p>
              </TermsSection>

              <TermsSection id="privacy-and-law" title="10. Privacy, force majeure, and governing law">
                <p>
                  We handle personal data in line with our{' '}
                  <Link href="/privacy-policy" className="font-semibold text-navy-900 underline underline-offset-2 hover:text-sky-700">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <p>
                  We are not responsible for delay or failure caused by events outside our reasonable
                  control, including severe weather, strikes, supplier disruption, site shutdowns,
                  utility failure, government action, or similar force majeure events.
                </p>
                <p>
                  We may update these terms from time to time by publishing a revised version on this
                  website. The latest published version will apply from its effective date unless we
                  agree otherwise in writing.
                </p>
                <p>
                  These terms are governed by the laws of England and Wales. The courts of England and
                  Wales will have jurisdiction unless mandatory law requires otherwise.
                </p>
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="font-semibold text-navy-900">Contact us about these terms</p>
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
              </TermsSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
