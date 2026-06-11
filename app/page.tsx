import type { Metadata } from 'next'
import { buildMetadata, buildLocalBusinessSchema, buildServiceSchema } from '@/lib/seo'
import { SERVICES, INDUSTRIES } from '@/lib/data'
import { Hero } from '@/components/sections/Hero'
import { HomeMovingBanner } from '@/components/sections/HomeMovingBanner'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { CTASection } from '@/components/sections/CTASection'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = buildMetadata({
  title: "UK Lockdown & Safety Alarm Systems Specialists",
  description:
    "A-Squared Alarms installs Martyn's Law-aligned lockdown systems, temporary fire alarms, and vape detection across the UK. Free site survey. Call 07778 387 989.",
  canonical: 'https://a-squaredalarms.com',
  keywords: [
    'lockdown alarm system UK',
    "Martyn's Law compliance UK",
    'temporary fire alarm installation school',
    'vape detection system',
    'safety alarm London',
  ],
})

// ─── Compliance Section ───────────────────────────────────────────────────────

function ComplianceSection() {
  const items = [
    {
      law: "Martyn's Law",
      subtitle: 'Terrorism (Protection of Premises) Act',
      description:
        'The Act uses a tiered approach for qualifying premises and events. Current guidance encourages organisations to review procedures, staff awareness, and reasonably practicable protective measures ahead of commencement.',
      urgency: 'Prepare Now',
      urgencyColor: 'text-red-600 bg-red-50 border-red-200',
    },
    {
      law: 'CCTV & Security Cameras',
      subtitle: 'UK GDPR / Data Protection Act 2018',
      description:
        'If your system captures identifiable people, it must be used lawfully and proportionately. Clear signage, secure storage of footage, privacy considerations, and ICO registration may all be required.',
      urgency: 'Data Protection',
      urgencyColor: 'text-amber-700 bg-amber-50 border-amber-200',
    },
    {
      law: 'Construction Site Fire Safety',
      subtitle: 'CDM 2015 / Fire Safety Order',
      description:
        'Principal contractors must manage fire risks on site, carry out suitable fire risk assessments, and provide appropriate warning and evacuation measures. Temporary fire alarm systems are often used to help meet these duties.',
      urgency: 'Site Safety',
      urgencyColor: 'text-sky-700 bg-sky-50 border-sky-200',
    },
  ]

  return (
    <section className="section-spacing bg-white" aria-labelledby="compliance-heading">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-alert mb-4">Compliance Obligations</span>
          <h2
            id="compliance-heading"
            className="font-display text-display-xl font-bold text-navy-900 mt-2"
          >
            Non-Compliance Isn't an Option.
            <br />
            <span className="text-sky-600">Neither is Delay.</span>
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            UK legislation requires specific safety systems for schools, public venues, and construction sites. The organisations that act now avoid the organisations that face enforcement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.law}
              className="card p-6 space-y-4"
              aria-label={`${item.law} compliance information`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-900">{item.law}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
                </div>
                <span
                  className={`badge border !text-[10px] font-semibold whitespace-nowrap ${item.urgencyColor}`}
                >
                  {item.urgency}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="/compliance"
                  className="text-sm font-semibold text-navy-800 hover:text-sky-600 transition-colors inline-flex items-center gap-1"
                >
                  Read our compliance guide →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Quote Section ────────────────────────────────────────────────────────────

function QuoteSection() {
  return <HomeQuoteSection />
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const homeServices = [
    SERVICES.find((service) => service.id === 'lockdown'),
    SERVICES.find((service) => service.id === 'popalert'),
    SERVICES.find((service) => service.id === 'vape'),
    SERVICES.find((service) => service.id === 'automation'),
    SERVICES.find((service) => service.id === 'intrusion-protection'),
    SERVICES.find((service) => service.id === 'fire'),
  ].filter(Boolean) as typeof SERVICES

  const serviceSchemas = homeServices.slice(0, 2).map((service) =>
    buildServiceSchema({
      name: service.title,
      description: service.description,
      provider: 'A-Squared Alarms',
      areaServed: 'United Kingdom',
      serviceType: service.title,
      url: `https://a-squaredalarms.com/${service.slug}`,
    })
  )

  return (
    <>
      {/* Structured data for services */}
      {serviceSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schema }}
        />
      ))}

      <Hero
        badge="Martyn's Law Specialists"
        headline="Your Organisation Has a Legal Duty to Protect the People Inside It."
        subheading="A-Squared Alarms designs and installs Martyn's Law-aligned lockdown systems, temporary fire alarms, and vape detection for UK schools, construction sites, and commercial premises. We make compliance achievable — not bureaucratic."
        primaryCTA={{ label: 'Get a Free Site Survey', href: '/contact' }}
        secondaryCTA={{ label: 'Call Us Now', href: 'tel:07778387989' }}
      />

      <HomeMovingBanner />

      <ComplianceSection />

      <ServicesSection services={homeServices} />

      <IndustriesSection industries={INDUSTRIES} />

      <QuoteSection />

      <CTASection
        variant="urgent"
        headline="Every Day Without a Compliant System Is a Day of Liability."
        subheading="If your venue may qualify under Martyn's Law, now is the time to review procedures, risks, and practical protective measures. Let us survey your site — for free, with no obligation."
        primaryCTA={{ label: 'Book a Free Site Survey', href: '/contact' }}
        secondaryCTA={{ label: 'Call Us', phone: true }}
        note="Most installations completed within 5 working days of survey."
      />
    </>
  )
}
