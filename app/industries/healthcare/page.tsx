import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'
import { CTASection } from '@/components/sections/CTASection'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'
import { ButtonLink } from '@/components/ui/ButtonLink'

const WP = '/a-squaredalarms/images'

export const metadata: Metadata = buildMetadata({
  title: 'Healthcare Safety Systems | GP Surgery, Clinic & Healthcare Site Protection',
  description:
    'Healthcare safety systems for GP surgeries, clinics, treatment centres, and healthcare estates including lockdown alarms, PopAlert digital alerts, access control, intrusion protection, and temporary fire alarm solutions.',
  canonical: 'https://a-squaredalarms.com/industries/healthcare',
  keywords: [
    'healthcare lockdown alarm system',
    'GP surgery staff attack alarm',
    'clinic access control installation',
    'healthcare PopAlert digital alerts',
    'healthcare intrusion protection',
    'temporary fire alarm for healthcare refurbishment',
  ],
})

const HEALTHCARE_PRIORITIES = [
  {
    title: 'Calm under pressure',
    description:
      'Healthcare teams need systems that support a fast response without adding noise, confusion, or disruption for patients and vulnerable visitors.',
  },
  {
    title: 'Controlled movement',
    description:
      'Entry points, staff-only rooms, treatment areas, admin spaces, and restricted zones all need the right level of access control and oversight.',
  },
  {
    title: 'Continuity of care',
    description:
      'Protection has to work around appointments, treatment flow, reception pressure, and occupied buildings that cannot simply stop operating.',
  },
]

const HEALTHCARE_SYSTEMS = [
  {
    id: 'lockdown',
    eyebrow: 'Lockdown Alarm Systems',
    title: 'Healthcare lockdown alarm systems that help staff respond quickly during threatening or aggressive incidents.',
    intro:
      'Healthcare lockdown alarm systems need to support calm, clear action across receptions, treatment rooms, waiting areas, corridors, and back-office spaces. In GP surgeries, clinics, and healthcare centres, the right system helps staff move quickly without uncertainty when an incident escalates.',
    detail:
      'We design lockdown alarm systems for healthcare environments around how patients, visitors, clinicians, and support staff actually move through the building, so the response is practical for occupied sites rather than theoretical on paper.',
    bullets: [
      'Clear lockdown activation points for reception, management, or agreed clinical staff',
      'Distinct alerting that supports staff action without relying on verbal relays',
      'Useful for GP surgeries, health centres, outpatient spaces, and multi-room clinics',
    ],
    accent: 'sky',
    href: '/lockdown-alarms',
    cta: 'Explore Lockdown Systems',
    fitTitle: 'Where it performs best',
    fitItems: [
      'GP surgeries needing a fast protective response across reception and consulting rooms',
      'Clinics with multiple staff zones, waiting areas, and restricted back-of-house spaces',
      'Healthcare buildings where staff need one clear signal during a hostile or escalating incident',
    ],
    note:
      'The goal is not just a louder alarm. It is a clearer staff response in a building where patient safety, calm, and speed all matter at once.',
    searchTitle: 'What healthcare teams search for',
    searchItems: ['healthcare lockdown alarm system', 'GP surgery panic lockdown', 'clinic emergency alert system'],
    atAGlance: [
      { label: 'Response focus', value: 'Staff protection and controlled building response' },
      { label: 'Best trigger points', value: 'Reception, management, agreed treatment rooms' },
      { label: 'Typical zones', value: 'Waiting areas, clinics, admin, restricted corridors' },
    ],
    scenarioTitle: 'Illustrative healthcare use',
    scenarioLead:
      'A reception-led activation can push one clear instruction across the site, helping clinicians and support staff follow the same agreed response without delay.',
    scenarioSteps: [
      'An agreed staff member activates the lockdown response',
      'The alert reaches the key healthcare spaces that need immediate action',
      'Staff move into the site’s pre-planned protective response while patient areas remain manageable',
    ],
  },
  {
    id: 'popalert',
    eyebrow: 'PopAlert Digital Alerts',
    title: 'PopAlert digital alerts for healthcare sites that need instant visual instruction across front-desk and admin teams.',
    intro:
      'PopAlert digital alerts help healthcare organisations push clear on-screen emergency messages to connected staff computers and display points. That matters in environments where reception, admin, safeguarding, and management teams may all need the same instruction immediately.',
    detail:
      'For healthcare settings, PopAlert works especially well alongside a lockdown alarm or emergency procedure because it reinforces the audible signal with a plain-language visual message that staff can act on straight away.',
    bullets: [
      'Visual emergency messaging for reception, admin, management, and support teams',
      'Supports lockdown, evacuation, invacuation, and all-clear communication',
      'Useful where staff may be spread between desks, consulting spaces, and support offices',
    ],
    accent: 'emerald',
    href: '/lockdown-alarms#popalert',
    cta: 'Explore PopAlert',
    fitTitle: 'Where healthcare uses it most',
    fitItems: [
      'Reception desks, call-handling teams, and visitor-facing administration points',
      'Practice management, admin, safeguarding, and support offices',
      'Larger clinical sites where visual clarity helps staff act without waiting for verbal confirmation',
    ],
    note:
      'PopAlert is strongest when it removes uncertainty from those first few seconds and gives office-based teams the same wording at the same time.',
    searchTitle: 'What healthcare teams search for',
    searchItems: ['PopAlert healthcare', 'digital emergency alerts for clinics', 'GP surgery screen alert system'],
    atAGlance: [
      { label: 'Display method', value: 'Connected PCs and office-facing displays' },
      { label: 'Main users', value: 'Reception, admin, support, and management teams' },
      { label: 'Typical messages', value: 'Lockdown, evacuation, invacuation, all clear' },
    ],
    scenarioTitle: 'Illustrative healthcare alert flow',
    scenarioLead:
      'Instead of relying on word of mouth, a healthcare site can push one unified message to the desks and teams that need immediate visual guidance.',
    scenarioSteps: [
      'The emergency procedure triggers a digital alert alongside site alerting',
      'Reception and admin teams receive the same plain-language instruction instantly',
      'Staff coordination improves because the message is clear, visible, and consistent',
    ],
  },
  {
    id: 'access-control',
    eyebrow: 'Access Control',
    title: 'Healthcare access control that improves staff-only protection, visitor handling, and restricted-area management.',
    intro:
      'Access control is often one of the most important day-to-day upgrades for GP surgeries, clinics, and healthcare premises. It helps manage who enters the building, which areas stay staff-only, and how patients, visitors, contractors, and delivery teams move through the site.',
    detail:
      'For healthcare environments, effective access control usually means combining controlled front-door entry with permission-based internal access for treatment rooms, medicine stores, admin spaces, records areas, staff rooms, and restricted corridors.',
    bullets: [
      'Reception-led entry control and staff-managed visitor access',
      'Restricted access for treatment, admin, welfare, and storage areas',
      'Cards, fobs, keypads, and timed permissions for different staff groups',
    ],
    accent: 'violet',
    href: '/access-control',
    cta: 'Explore Access Control',
    fitTitle: 'Where it helps most',
    fitItems: [
      'Front entrances and receptions where access needs to stay controlled but welcoming',
      'Treatment spaces, admin rooms, medicine stores, and staff-only corridors',
      'Healthcare sites needing better control over staff permissions and internal movement',
    ],
    note:
      'Strong healthcare access control should feel simple in daily use while quietly improving safety, privacy, and control behind the scenes.',
    searchTitle: 'What healthcare teams search for',
    searchItems: ['clinic access control installation', 'GP surgery door access system', 'Paxton healthcare access control'],
    atAGlance: [
      { label: 'Main purpose', value: 'Controlled entry and restricted internal access' },
      { label: 'Typical points', value: 'Front doors, treatment spaces, stores, admin zones' },
      { label: 'Best outcome', value: 'Safer movement without disrupting patient flow' },
    ],
    scenarioTitle: 'Illustrative healthcare access flow',
    scenarioLead:
      'A well-planned system helps reception stay in control while clinical and support teams move through the site using permissions that match their role.',
    scenarioSteps: [
      'Visitors arrive through a managed entry point',
      'Staff-only zones stay protected without over-reliance on physical keys',
      'Leadership gains better control over permissions, timings, and sensitive areas',
    ],
  },
  {
    id: 'intrusion',
    eyebrow: 'Intrusion Protection',
    title: 'Intrusion protection for healthcare buildings that need better awareness of out-of-hours access and estate risk.',
    intro:
      'Intrusion protection helps healthcare sites secure receptions, admin areas, stores, outbuildings, and vulnerable access points when staff presence is low. That matters during evenings, weekends, temporary closures, and quieter occupancy periods.',
    detail:
      'For GP surgeries, clinics, and healthcare estates, the main priority is often protecting records, medicines, equipment, and staff spaces while making sure approved contacts know quickly when something is wrong out of hours.',
    bullets: [
      'Coverage for entrances, offices, stores, and sensitive support spaces',
      'Useful for evenings, weekends, and lower-occupancy periods',
      'Faster alerts to approved staff, estates teams, or keyholders',
    ],
    accent: 'rose',
    href: '/intrusion-protection',
    cta: 'Explore Intrusion Protection',
    fitTitle: 'Typical healthcare fit',
    fitItems: [
      'Reception areas, admin rooms, medicine or equipment stores, and back-office spaces',
      'Detached units, support buildings, and lower-supervision access points',
      'Healthcare properties with increased out-of-hours or closure-period risk',
    ],
    note:
      'Intrusion protection is particularly valuable where the building holds sensitive assets, controlled spaces, or important operational equipment outside normal hours.',
    searchTitle: 'What healthcare teams search for',
    searchItems: ['healthcare intrusion protection', 'GP surgery intruder alarm', 'clinic out of hours alarm system'],
    atAGlance: [
      { label: 'Main risk window', value: 'Evenings, weekends, closures, low occupancy' },
      { label: 'Best coverage', value: 'Entrances, admin, stores, detached units' },
      { label: 'Main benefit', value: 'Earlier awareness of unauthorised access' },
    ],
    scenarioTitle: 'Illustrative out-of-hours protection',
    scenarioLead:
      'Instead of discovering a problem later, approved contacts know earlier that a protected building, room, or access point has been triggered.',
    scenarioSteps: [
      'A protected point activates outside working hours',
      'Approved contacts receive an alert for faster follow-up',
      'The site gains better protection for sensitive spaces and valuable assets',
    ],
  },
  {
    id: 'temporary-fire',
    eyebrow: 'Temporary Fire Alarm Systems',
    title: 'Temporary fire alarm systems for healthcare refurbishments, decant spaces, and occupied works areas.',
    intro:
      'Temporary fire alarm systems are often essential when healthcare sites are being refurbished, extended, decanted, or partially reconfigured. During those periods, occupied areas still need dependable fire detection and clear alerting even when the permanent arrangement is changing.',
    detail:
      'We help healthcare organisations plan temporary fire alarm coverage for live refurbishments, temporary clinical accommodation, back-of-house works, and phased building projects where continuity of care and occupied safety both matter.',
    bullets: [
      'Useful for refurbishments, decant areas, temporary clinics, and phased works',
      'Supports occupied buildings while permanent systems are changing',
      'Helps maintain clear fire alerting during live healthcare projects',
    ],
    accent: 'amber',
    href: '/fire-alarms',
    cta: 'Explore Temporary Fire Alarm',
    fitTitle: 'Where it fits best',
    fitItems: [
      'Live refurbishments in surgeries, health centres, and treatment buildings',
      'Temporary clinical spaces, decant arrangements, and changing support areas',
      'Phased healthcare works where occupied areas still need dependable coverage',
    ],
    note:
      'In healthcare environments, temporary fire alarm planning is as much about operational continuity as it is about compliance and life safety.',
    searchTitle: 'What healthcare teams search for',
    searchItems: ['temporary fire alarm healthcare refurbishment', 'fire alarm for temporary clinic', 'occupied works healthcare alarm'],
    atAGlance: [
      { label: 'Main purpose', value: 'Fire detection during live works or temporary occupancy' },
      { label: 'Best locations', value: 'Refurbishments, decants, temporary clinics' },
      { label: 'Operational benefit', value: 'Coverage without waiting for final systems' },
    ],
    scenarioTitle: 'Illustrative healthcare works use',
    scenarioLead:
      'A temporary setup can protect occupied areas while a healthcare building is being refurbished, reconfigured, or partially handed over in stages.',
    scenarioSteps: [
      'Temporary coverage is installed around the live or decanted area',
      'The system supports clear fire alerting during the project phase',
      'Protection remains practical while the permanent arrangement evolves',
    ],
  },
] as const

const FAQS = [
  {
    question: 'Do healthcare sites need both lockdown alerting and access control?',
    answer:
      'Often, yes. Lockdown alerting and access control solve different problems. One supports a rapid staff response during an incident, while the other improves who can enter and move through the building day to day.',
  },
  {
    question: 'Where is PopAlert most useful in a healthcare setting?',
    answer:
      'Most often in reception, admin, support, and management spaces where desk-based staff need the same instruction immediately and may not be close to clinical teams when an incident starts.',
  },
  {
    question: 'Can healthcare fire alarm arrangements be supported during refurbishment works?',
    answer:
      'Yes. Temporary fire alarm systems can be planned for refurbishments, decant spaces, temporary clinical areas, and phased projects so occupied zones remain protected while the permanent arrangement changes.',
  },
  {
    question: 'Can access control and intrusion protection be phased over time?',
    answer:
      'Yes. Many healthcare organisations start with the most sensitive entrances or internal zones first, then expand coverage as budgets, estate priorities, or project phases allow.',
  },
]

export default function HealthcareIndustryPage() {
  const faqSchema = buildFAQSchema(FAQS)
  const accentStyles = {
    sky: {
      badge: 'badge-sky',
      border: 'border-sky-200',
      soft: 'bg-sky-50',
      pill: 'border-sky-300 bg-sky-50 text-sky-800',
      dot: 'bg-sky-400',
      card: 'border-sky-200 bg-white',
      glow: 'from-sky-100 via-white to-white',
    },
    emerald: {
      badge: 'badge border border-emerald-300 bg-emerald-50 text-emerald-800',
      border: 'border-emerald-200',
      soft: 'bg-emerald-50',
      pill: 'border-emerald-300 bg-emerald-50 text-emerald-800',
      dot: 'bg-emerald-400',
      card: 'border-emerald-200 bg-white',
      glow: 'from-emerald-100 via-white to-white',
    },
    amber: {
      badge: 'badge border border-amber-300 bg-amber-50 text-amber-800',
      border: 'border-amber-200',
      soft: 'bg-amber-50',
      pill: 'border-amber-300 bg-amber-50 text-amber-900',
      dot: 'bg-amber-400',
      card: 'border-amber-200 bg-white',
      glow: 'from-amber-100 via-white to-white',
    },
    violet: {
      badge: 'badge border border-violet-300 bg-violet-50 text-violet-800',
      border: 'border-violet-200',
      soft: 'bg-violet-50',
      pill: 'border-violet-300 bg-violet-50 text-violet-800',
      dot: 'bg-violet-400',
      card: 'border-violet-200 bg-white',
      glow: 'from-violet-100 via-white to-white',
    },
    rose: {
      badge: 'badge border border-rose-300 bg-rose-50 text-rose-800',
      border: 'border-rose-200',
      soft: 'bg-rose-50',
      pill: 'border-rose-300 bg-rose-50 text-rose-800',
      dot: 'bg-rose-400',
      card: 'border-rose-200 bg-white',
      glow: 'from-rose-100 via-white to-white',
    },
  } as const

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <section className="relative overflow-hidden bg-navy-900" aria-label="Healthcare hero">
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
        <div className="absolute left-0 right-0 top-0 h-1 bg-sky-400" aria-hidden="true" />

        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="badge border border-sky-400/30 bg-sky-400/20 text-sky-300">
                Healthcare &amp; GP Surgeries
              </span>
              <span className="badge border border-white/20 bg-white/10 text-slate-300">
                Lockdown, Access Control &amp; Healthcare Security
              </span>
            </div>

            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              Healthcare Safety Systems Need to Protect Staff, Patients, and Clinical Continuity at the Same Time.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              We help GP surgeries, clinics, treatment centres, and healthcare sites plan the right mix of
              lockdown alerting, digital messaging, controlled access, intrusion protection, and temporary
              fire alarm systems around how the building actually operates.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#survey" className="btn btn-accent btn-lg">
                Request a Healthcare Survey
              </ButtonLink>
              <ButtonLink href="/contact?service=lockdown" className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900">
                Speak to a Specialist
              </ButtonLink>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950/30 to-transparent"
          aria-hidden="true"
        />
      </section>

      <section className="section-spacing bg-white" aria-labelledby="priorities-heading">
        <div className="container-site space-y-10">
          <div className="max-w-3xl">
            <span className="badge-navy mb-4">Healthcare Priorities</span>
            <h2 id="priorities-heading" className="mt-2 font-display text-display-xl font-bold text-navy-900">
              The right healthcare setup is the one staff can use confidently without disrupting patient care.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              In healthcare settings, the best systems support fast staff response, controlled access, and
              safer occupied buildings while still respecting reception pressure, patient movement, privacy,
              and day-to-day clinical operation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {HEALTHCARE_PRIORITIES.map((priority) => (
              <div key={priority.title} className="card p-6">
                <h3 className="font-display text-display-sm font-bold text-navy-900">{priority.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{priority.description}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">
              Jump to a system
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {HEALTHCARE_SYSTEMS.map((system) => (
                <a
                  key={system.id}
                  href={`#${system.id}`}
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-sky-400 hover:text-sky-700"
                >
                  {system.eyebrow}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {HEALTHCARE_SYSTEMS.map((system, index) => (
        <section
          key={system.id}
          id={system.id}
          className={index % 2 === 0 ? 'section-spacing bg-slate-50' : 'section-spacing bg-white'}
          aria-labelledby={`${system.id}-heading`}
        >
          <div className="container-site">
            <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)]">
              <div className="space-y-8">
                <div>
                  <span className={`${accentStyles[system.accent].badge} mb-4`}>
                    {system.eyebrow}
                  </span>
                  <h2 id={`${system.id}-heading`} className="mt-2 font-display text-display-xl font-bold text-navy-900">
                    {system.title}
                  </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
                  <div className="space-y-5">
                    <p className="text-lg leading-relaxed text-slate-600">{system.intro}</p>
                    <p className="text-base leading-relaxed text-slate-600">{system.detail}</p>
                  </div>
                  <div className={`rounded-3xl border p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] ${accentStyles[system.accent].card}`}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-400">
                      {system.searchTitle}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {system.searchItems.map((item) => (
                        <span key={item} className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold ${accentStyles[system.accent].pill}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {system.atAGlance.map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-3xl border bg-gradient-to-br p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)] ${accentStyles[system.accent].border} ${accentStyles[system.accent].glow}`}
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-3 text-base font-semibold leading-relaxed text-navy-900">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {system.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className={`group rounded-3xl border bg-white px-5 py-5 text-sm leading-relaxed text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(15,23,42,0.08)] ${accentStyles[system.accent].border}`}
                    >
                      <span className={`mb-4 block h-2.5 w-12 rounded-full ${accentStyles[system.accent].dot}`} aria-hidden="true" />
                      {bullet}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href={system.href} className="btn btn-primary btn-md">
                    {system.cta}
                  </Link>
                  <a href="#survey" className="btn btn-outline btn-md">
                    Request a Healthcare Quote
                  </a>
                </div>
              </div>

              <div className="space-y-5 xl:sticky xl:top-28">
                <div className={`rounded-[2rem] border p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${accentStyles[system.accent].card}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-400">
                    {system.fitTitle}
                  </p>
                  <div className="mt-5 space-y-4">
                    {system.fitItems.map((item, itemIndex) => (
                      <div key={item} className="flex items-start gap-4">
                        <span className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-navy-900 ${accentStyles[system.accent].soft}`}>
                          0{itemIndex + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card overflow-hidden">
                  <div className={`border-b px-6 py-5 ${accentStyles[system.accent].soft} ${accentStyles[system.accent].border}`}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-slate-500">
                      {system.scenarioTitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{system.scenarioLead}</p>
                  </div>
                  <div className="space-y-4 px-6 py-6">
                    {system.scenarioSteps.map((step, stepIndex) => (
                      <div key={step} className="flex items-start gap-4">
                        <span className={`mt-0.5 h-3 w-3 rounded-full ${accentStyles[system.accent].dot}`} aria-hidden="true" />
                        <div>
                          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                            Stage 0{stepIndex + 1}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`rounded-3xl border px-5 py-5 text-sm leading-relaxed shadow-[0_8px_24px_rgba(15,23,42,0.04)] ${accentStyles[system.accent].border} ${accentStyles[system.accent].soft}`}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-500">
                    Why this matters
                  </p>
                  <p className="mt-3 text-slate-700">{system.note}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section-spacing bg-navy-900" aria-labelledby="planning-heading">
        <div className="container-site">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
              Planning Approach
            </span>
            <h2 id="planning-heading" className="mt-4 font-display text-display-xl font-bold text-white">
              We plan around how healthcare buildings actually operate.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              The most effective healthcare systems are the ones that clinicians, reception teams, and site
              leads can rely on without compromising patient flow, controlled access, or day-to-day service delivery.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Site walk and risk review',
                detail: 'We review entrances, receptions, treatment areas, staff-only spaces, vulnerable points, and project constraints before recommending anything.',
              },
              {
                title: 'System choice by need',
                detail: 'We separate what is urgent now from what can be phased later, so the plan supports care delivery as well as protection.',
              },
              {
                title: 'Operational fit',
                detail: 'Recommendations are shaped around patient movement, waiting areas, privacy, restricted spaces, and occupied building realities.',
              },
              {
                title: 'Clear handover',
                detail: 'Your team receives a setup they can understand and use confidently, not just a list of installed devices.',
              },
            ].map((item, index) => (
              <div key={item.title} className="card-navy p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-sky-300">
                  Step 0{index + 1}
                </p>
                <h3 className="mt-4 font-display text-display-sm font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="badge-sky mb-4">FAQs</span>
              <h2 id="faq-heading" className="mb-8 font-display text-display-lg font-bold text-navy-900">
                Healthcare FAQs
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="card group p-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy-900">
                      <span>{faq.question}</span>
                      <span className="text-sky-600 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src={`${WP}/slide1-top@3x.png`}
                alt="A-Squared Alarms protecting healthcare environments"
                width={1408}
                height={1728}
                className="h-auto w-full max-w-xs drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <HomeQuoteSection sectionId="survey" />

      <CTASection
        variant="navy"
        headline="Need a clearer safety plan for your healthcare site?"
        subheading="We can help you work out which systems matter most now, what can be phased later, and how the overall plan should fit around staff response, controlled access, and patient-facing operation."
        primaryCTA={{ label: 'Book a Healthcare Survey', href: '#survey' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
