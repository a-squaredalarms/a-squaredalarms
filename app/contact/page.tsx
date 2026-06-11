import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { BRAND } from '@/lib/data'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us — Get a Free Site Survey',
  description:
    "Contact A-Squared Alarms for a free site survey or safety systems consultation. Call 07778 387 989 or complete our form. UK-based engineers. Response within 2 hours.",
  canonical: 'https://a-squaredalarms.com/contact',
  keywords: [
    'contact A-Squared Alarms',
    'alarm system survey London',
    'book site survey UK',
    'safety alarm consultation',
  ],
})

// ─── Contact Method Card ──────────────────────────────────────────────────────

interface ContactMethodProps {
  icon: React.ReactNode
  label: string
  value: string
  sublabel?: string
  href?: string
}

function ContactMethod({ icon, label, value, sublabel, href }: ContactMethodProps) {
  const content = (
    <div className="card p-5 flex items-start gap-4 group hover:shadow-card-hover transition-all">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800 group-hover:bg-navy-800 group-hover:text-sky-400 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">{label}</p>
        <p className="font-semibold text-navy-900 mt-0.5">{value}</p>
        {sublabel && <p className="text-xs text-slate-500 mt-0.5">{sublabel}</p>}
      </div>
    </div>
  )

  if (href) {
    return <a href={href} className="block">{content}</a>
  }
  return content
}

export default function ContactPage() {
  const mapQuery = encodeURIComponent(BRAND.address.full)

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-900 relative overflow-hidden" aria-label="Contact hero">
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
          <div className="max-w-2xl space-y-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-slate-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white font-medium">Contact</li>
              </ol>
            </nav>
            <h1 className="font-display text-display-xl font-extrabold text-white leading-tight">
              Let's Talk About Your Site
            </h1>
            <p className="text-slate-300 leading-relaxed">
              Whether you need a lockdown system, temporary fire alarm, or a full compliance audit — we're ready to help. UK-based engineers, no call centres.
            </p>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950/30 to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* Main content */}
      <section className="section-spacing bg-slate-50" aria-labelledby="contact-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:items-stretch">

            {/* Left: map */}
            <div className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
                <div className="border-b border-slate-200 px-6 py-6 md:px-8">
                  <span className="badge-sky">Our Location</span>
                  <h2 className="mt-5 font-display text-display-sm font-bold text-navy-900">
                    Visit our London office
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {BRAND.address.full}
                  </p>
                </div>

                <div className="min-h-[22rem] flex-1 md:min-h-[26rem]">
                  <iframe
                    title="A-Squared Alarms office location map"
                    src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="grid gap-3 border-t border-slate-200 px-6 py-5 sm:grid-cols-2 md:px-8">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-sky-400 hover:text-sky-700"
                  >
                    Open in Maps
                  </a>
                  <a
                    href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center justify-center rounded-xl bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                  >
                    Call {BRAND.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: contact details */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
                <div className="border-b border-slate-200 px-6 py-6 md:px-8">
                  <span className="badge-navy">Get in Touch</span>
                  <h2 id="contact-heading" className="mt-5 font-display text-display-md font-bold text-navy-900">
                    Talk to us about your site.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                    Whether you need a lockdown system, temporary fire alarm, access control, or compliance guidance,
                    we&apos;ll help you work out the right next step. We respond to all enquiries within 2 business hours.
                  </p>
                </div>

                <div className="grid gap-4 px-6 py-6 md:px-8 lg:grid-cols-2">
                  <ContactMethod
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 10a19.79 19.79 0 01-3.07-8.67A2 2 0 013.4 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.09 6.09l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    }
                    label="Phone"
                    value={BRAND.phone}
                    sublabel="Mon–Fri 8am–6pm, Sat 9am–1pm"
                    href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                  />

                  <ContactMethod
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    }
                    label="Email"
                    value={BRAND.email}
                    sublabel="Response within 2 business hours"
                    href={`mailto:${BRAND.email}`}
                  />

                  <div className="lg:col-span-2">
                    <ContactMethod
                      icon={
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      }
                      label="Office Address"
                      value="Suite RA01, 195–197 Wood Street"
                      sublabel="London, E17 3NU"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
                <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                    <p className="text-sm font-bold text-amber-800">Martyn&apos;s Law preparation guidance is available</p>
                  </div>
                  <p className="text-xs leading-relaxed text-amber-700">
                    If your venue may fall within scope of the Terrorism (Protection of Premises) Act 2025, now is a good time to review procedures, people, and systems. Our compliance consultation is free and takes under an hour.
                  </p>
                  <Link href="/compliance" className="inline-flex text-xs font-semibold text-amber-800 underline underline-offset-2">
                    Check your obligations →
                  </Link>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm space-y-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-700">
                    Our Credentials
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Martyn's Law Ready",
                      'Expert Installation',
                      'Tailored to Your Site',
                      'On-Site Testing & Training',
                      'UK-Based Engineers',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <svg className="h-4 w-4 flex-shrink-0 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeQuoteSection sectionId="contact-quote" />

      {/* Locations strip */}
      <section className="py-10 bg-white border-t border-slate-100" aria-label="Service locations">
        <div className="container-site">
          <p className="text-center text-sm font-medium text-slate-500 mb-6">
            Serving organisations across the UK, including:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol', 'Sheffield', 'Liverpool', 'Edinburgh', 'Cardiff'].map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase()}`}
                className="badge-navy hover:bg-navy-200 transition-colors cursor-pointer"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
