import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'
import { CTASection } from '@/components/sections/CTASection'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'
import { ButtonLink } from '@/components/ui/ButtonLink'

const WP = '/images'

export const metadata: Metadata = buildMetadata({
  title: 'Commercial Safety Systems | Office Lockdown, Access Control & Site Security',
  description:
    'Commercial safety systems for offices, business parks, multi-tenant buildings, and public-facing workplaces including lockdown alarms, PopAlert digital alerts, access control, intrusion protection, and temporary fire alarm solutions.',
  canonical: 'https://a-squaredalarms.com/industries/commercial',
  keywords: [
    'office lockdown alarm system',
    'commercial PopAlert alerts',
    'office access control installation',
    'commercial intrusion protection',
    'temporary fire alarm for office refurbishment',
    'business premises security systems UK',
  ],
})

const COMMERCIAL_PRIORITIES = [
  {
    title: 'Clear staff instruction',
    description:
      'Commercial teams need fast, unambiguous alerting that works across reception, offices, meeting rooms, shared areas, and multi-floor layouts.',
  },
  {
    title: 'Controlled access',
    description:
      'Visitors, contractors, staff, and deliveries all need to move through the building in a way that feels professional while still protecting key spaces.',
  },
  {
    title: 'Business continuity',
    description:
      'Protection matters most when it reduces disruption, protects people, and helps the organisation maintain control during incidents and out-of-hours periods.',
  },
]

const COMMERCIAL_SYSTEMS = [
  {
    id: 'lockdown',
    eyebrow: 'Lockdown Alarm Systems',
    title: 'Commercial lockdown alarm systems that give offices and workplaces a clearer emergency response.',
    intro:
      'Commercial lockdown alarm systems help offices, public-facing workplaces, and multi-tenant environments respond quickly when a serious incident demands a protective in-building response. The system needs to be easy for staff to recognise and practical across reception, meeting rooms, open-plan space, corridors, and support areas.',
    detail:
      'We design lockdown alarm systems for commercial properties around how the workplace is actually used, so front-desk teams, managers, occupiers, and staff can follow the same response without confusion.',
    bullets: [
      'Clear activation points for reception, management, or agreed workplace responders',
      'Distinct alerting for staff across open-plan and compartmented office environments',
      'Suitable for offices, business parks, commercial receptions, and shared buildings',
    ],
    accent: 'sky',
    href: '/lockdown-alarms',
    cta: 'Explore Lockdown Systems',
    fitTitle: 'Where it performs best',
    fitItems: [
      'Office receptions and visitor-facing front-of-house spaces',
      'Commercial sites with multiple floors, meeting rooms, and separate occupier zones',
      'Workplaces needing one clear instruction during a serious building incident',
    ],
    note:
      'A strong commercial lockdown system improves staff confidence by making the right first action obvious under pressure.',
    searchTitle: 'What commercial teams search for',
    searchItems: ['office lockdown alarm system', 'commercial emergency alert system', 'workplace lockdown alarm UK'],
    atAGlance: [
      { label: 'Response focus', value: 'Fast staff instruction across the workplace' },
      { label: 'Best trigger points', value: 'Reception, security desk, management points' },
      { label: 'Typical zones', value: 'Open-plan offices, meeting rooms, common areas' },
    ],
    scenarioTitle: 'Illustrative workplace use',
    scenarioLead:
      'A front-desk or management-led activation can push one clear building response while staff follow the agreed workplace plan without delay.',
    scenarioSteps: [
      'An agreed responder activates the lockdown signal',
      'The alert reaches the teams and zones that need immediate action',
      'Staff move into the building’s pre-planned protective response',
    ],
  },
  {
    id: 'popalert',
    eyebrow: 'PopAlert Digital Alerts',
    title: 'PopAlert digital alerts for offices that need instant visual messaging across desks, screens, and support teams.',
    intro:
      'PopAlert digital alerts help offices and commercial buildings push a clear emergency message to connected computers and display points at the same moment. That matters in environments where desk-based teams, reception staff, support functions, and management may all need the same instruction immediately.',
    detail:
      'For commercial sites, PopAlert works especially well alongside a lockdown alarm or emergency plan because it reinforces the audible signal with a visual instruction such as lockdown, evacuation, invacuation, or all clear.',
    bullets: [
      'Full-screen emergency messaging across connected workplace devices',
      'Useful for receptions, admin teams, HR, operations, and office support functions',
      'Supports lockdown, evacuation, invacuation, and all-clear communication',
    ],
    accent: 'emerald',
    href: '/lockdown-alarms#popalert',
    cta: 'Explore PopAlert',
    fitTitle: 'Where businesses use it most',
    fitItems: [
      'Reception desks, helpdesks, and front-of-house positions',
      'Desk-based admin, finance, HR, operations, and management teams',
      'Larger commercial sites where clear visual instruction improves coordination',
    ],
    note:
      'PopAlert is most valuable when it removes guesswork and gives office-based teams the same message in the same wording at the same time.',
    searchTitle: 'What commercial teams search for',
    searchItems: ['PopAlert offices', 'commercial digital emergency alerts', 'office screen takeover alerts'],
    atAGlance: [
      { label: 'Display method', value: 'Connected PCs and office-facing displays' },
      { label: 'Main users', value: 'Reception, admin, support, management' },
      { label: 'Typical messages', value: 'Lockdown, evacuation, invacuation, all clear' },
    ],
    scenarioTitle: 'Illustrative office alert flow',
    scenarioLead:
      'Instead of relying on separate calls or inconsistent verbal messages, the business can push one unified instruction to the teams that need it.',
    scenarioSteps: [
      'The emergency procedure triggers a digital alert across connected devices',
      'Reception and office teams receive the same plain-language instruction immediately',
      'Internal coordination improves because the message is visible and consistent',
    ],
  },
  {
    id: 'access-control',
    eyebrow: 'Access Control',
    title: 'Commercial access control that improves visitor management, staff permissions, and restricted-area security.',
    intro:
      'Access control is one of the most effective daily security improvements for offices and commercial buildings. It helps manage who enters the premises, which spaces stay staff-only, and how visitors, contractors, and employees move through the site.',
    detail:
      'For commercial environments, effective access control usually means combining reception-led entry management with permission-based access for offices, meeting spaces, secure rooms, stores, shared facilities, and back-of-house areas.',
    bullets: [
      'Reception-led visitor entry and controlled front-door access',
      'Permission-based access for staff-only rooms and secure internal areas',
      'Cards, fobs, keypads, and timed permissions for different teams or occupiers',
    ],
    accent: 'violet',
    href: '/access-control',
    cta: 'Explore Access Control',
    fitTitle: 'Where it helps most',
    fitItems: [
      'Main entrances, reception spaces, and visitor routes',
      'Meeting areas, stores, IT rooms, admin spaces, and secure internal zones',
      'Multi-tenant or multi-floor commercial properties needing clearer control',
    ],
    note:
      'The strongest commercial access control systems feel smooth for staff and visitors while quietly improving building control in the background.',
    searchTitle: 'What commercial teams search for',
    searchItems: ['office access control installation', 'commercial door access system', 'Paxton access control office'],
    atAGlance: [
      { label: 'Main purpose', value: 'Visitor control and restricted internal access' },
      { label: 'Typical points', value: 'Entrances, secure rooms, stores, offices' },
      { label: 'Best outcome', value: 'Safer access without slowing operations' },
    ],
    scenarioTitle: 'Illustrative commercial access flow',
    scenarioLead:
      'A well-planned system helps front-of-house teams stay in control while staff move through the building using permissions that match their role and workspace.',
    scenarioSteps: [
      'Visitors arrive through a managed front-door process',
      'Secure internal spaces stay restricted without relying only on keys',
      'Building managers gain better oversight of permissions, access times, and credentials',
    ],
  },
  {
    id: 'intrusion',
    eyebrow: 'Intrusion Protection',
    title: 'Commercial intrusion protection that improves out-of-hours security for offices, shared buildings, and business premises.',
    intro:
      'Intrusion protection helps offices and commercial properties secure receptions, stores, server rooms, stock areas, outbuildings, and vulnerable access points outside working hours. That matters during evenings, weekends, shutdown periods, and low-occupancy times.',
    detail:
      'For commercial sites, the priority is often reducing unauthorised access, protecting valuable equipment or stock, and making sure approved contacts know quickly when something is wrong after hours.',
    bullets: [
      'Coverage for entrances, offices, stores, and vulnerable business areas',
      'Useful for nights, weekends, holidays, and quiet occupancy periods',
      'Faster alerts to approved managers, security teams, or keyholders',
    ],
    accent: 'rose',
    href: '/intrusion-protection',
    cta: 'Explore Intrusion Protection',
    fitTitle: 'Typical commercial fit',
    fitItems: [
      'Offices, reception spaces, IT rooms, stores, and support areas',
      'Shared buildings, multi-tenant suites, detached units, and back entrances',
      'Commercial sites with increased out-of-hours access risk',
    ],
    note:
      'Intrusion protection is especially useful where the building contains sensitive equipment, stock, records, or quiet access points after hours.',
    searchTitle: 'What commercial teams search for',
    searchItems: ['commercial intrusion protection', 'office intruder alarm system', 'business premises wireless alarm'],
    atAGlance: [
      { label: 'Main risk window', value: 'Evenings, weekends, shutdowns, low occupancy' },
      { label: 'Best coverage', value: 'Entrances, stores, offices, server or support rooms' },
      { label: 'Main benefit', value: 'Earlier awareness of unauthorised access' },
    ],
    scenarioTitle: 'Illustrative out-of-hours protection',
    scenarioLead:
      'Instead of discovering a security problem the next day, approved contacts know earlier that a protected area or access point has been triggered.',
    scenarioSteps: [
      'A protected point activates outside normal working hours',
      'Approved contacts receive an alert for faster follow-up',
      'The organisation gains better protection for its building, assets, and key spaces',
    ],
  },
  {
    id: 'temporary-fire',
    eyebrow: 'Temporary Fire Alarm Systems',
    title: 'Temporary fire alarm systems for commercial refurbishments, fit-outs, and occupied works.',
    intro:
      'Temporary fire alarm systems are often the right answer when offices, business units, or commercial buildings are being refurbished, extended, fit out, or reconfigured in phases. During those periods, occupied areas still need dependable fire detection and clear alerting.',
    detail:
      'We help commercial clients plan temporary fire alarm cover for live office refurbishments, temporary accommodation, fit-outs, and phased projects where staff remain in occupation while the permanent fire alarm arrangement changes.',
    bullets: [
      'Useful for occupied refurbishments, fit-outs, temporary offices, and phased works',
      'Supports staff safety while permanent fire alarm arrangements are changing',
      'Helps maintain clear alerting during live commercial projects',
    ],
    accent: 'amber',
    href: '/fire-alarms',
    cta: 'Explore Temporary Fire Alarm',
    fitTitle: 'Where it fits best',
    fitItems: [
      'Live office refurbishments, commercial fit-outs, and staged handovers',
      'Temporary workspaces, decants, and reconfigured occupied areas',
      'Projects where staff remain on site while permanent arrangements evolve',
    ],
    note:
      'For commercial sites, temporary fire alarm planning is often the missing link between business continuity and dependable life safety during works.',
    searchTitle: 'What commercial teams search for',
    searchItems: ['temporary fire alarm office refurbishment', 'commercial fit out fire alarm', 'occupied works temporary fire alarm'],
    atAGlance: [
      { label: 'Main purpose', value: 'Fire detection during live works or temporary occupancy' },
      { label: 'Best locations', value: 'Refurbishments, fit-outs, decants, temporary offices' },
      { label: 'Operational benefit', value: 'Coverage without waiting for final systems' },
    ],
    scenarioTitle: 'Illustrative commercial works use',
    scenarioLead:
      'A temporary setup can protect occupied commercial space while the building is being reconfigured, fitted out, or handed over in stages.',
    scenarioSteps: [
      'Temporary coverage is installed around the occupied or changing area',
      'The system supports clear fire alerting during the project phase',
      'Protection remains practical while the permanent arrangement evolves',
    ],
  },
] as const

const FAQS = [
  {
    question: 'Do offices benefit from both lockdown alerting and PopAlert?',
    answer:
      'Yes. They solve related but different problems. Lockdown alerting gives the building a clear emergency trigger, while PopAlert reinforces that with plain-language messaging to desk-based and front-of-house teams.',
  },
  {
    question: 'Where is access control most valuable in commercial buildings?',
    answer:
      'Most often at main entrances, reception points, secure internal zones, stores, IT rooms, and tenant or management-controlled areas where not everyone should have the same level of access.',
  },
  {
    question: 'Can temporary fire alarm systems support occupied office refurbishments?',
    answer:
      'Yes. They are commonly used during live fit-outs, phased handovers, temporary office arrangements, and occupied building works where clear fire alerting still needs to be maintained.',
  },
  {
    question: 'Can intrusion protection and access control be phased?',
    answer:
      'Yes. Many businesses begin with the most exposed entry points or highest-value areas first, then extend protection as priorities and budgets allow.',
  },
]

export default function CommercialIndustryPage() {
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

      <section className="relative overflow-hidden bg-navy-900" aria-label="Commercial hero">
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
                Offices &amp; Commercial
              </span>
              <span className="badge border border-white/20 bg-white/10 text-slate-300">
                Lockdown, Access Control &amp; Workplace Security
              </span>
            </div>

            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              Commercial Safety Systems Need to Protect People, Premises, and Business Continuity.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              We help offices, business parks, shared buildings, and public-facing workplaces plan the right
              mix of lockdown alerting, digital emergency messaging, access control, intrusion protection,
              and temporary fire alarm systems around real operational risk.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#survey" className="btn btn-accent btn-lg">
                Request a Commercial Survey
              </ButtonLink>
              <ButtonLink href="/contact?service=access-control" className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900">
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
            <span className="badge-navy mb-4">Commercial Priorities</span>
            <h2 id="priorities-heading" className="mt-2 font-display text-display-xl font-bold text-navy-900">
              The right commercial setup is the one staff can use confidently without slowing the workplace down.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The strongest commercial systems improve response clarity, visitor handling, restricted access,
              and out-of-hours protection while still keeping the building professional, practical, and easy to use.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {COMMERCIAL_PRIORITIES.map((priority) => (
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
              {COMMERCIAL_SYSTEMS.map((system) => (
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

      {COMMERCIAL_SYSTEMS.map((system, index) => (
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
                    Request a Commercial Quote
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
              We plan around how commercial buildings actually operate.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              The most effective commercial systems are the ones that front-of-house teams, occupiers, and
              managers can understand quickly without adding friction to the everyday running of the building.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Site walk and risk review',
                detail: 'We review entrances, receptions, restricted zones, support spaces, and vulnerable out-of-hours points before recommending anything.',
              },
              {
                title: 'System choice by need',
                detail: 'We separate what is urgent now from what can be phased later, so decisions support both protection and business continuity.',
              },
              {
                title: 'Operational fit',
                detail: 'Recommendations are shaped around visitor flow, staff movement, internal permissions, and the reality of occupied working environments.',
              },
              {
                title: 'Clear handover',
                detail: 'Your team receives a setup they can understand and manage with confidence, not just a box of hardware.',
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
                Commercial FAQs
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
                alt="A-Squared Alarms protecting commercial environments"
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
        headline="Need a clearer safety plan for your commercial site?"
        subheading="We can help you decide which systems matter most now, what can be phased later, and how the full plan should support staff safety, controlled access, and business continuity."
        primaryCTA={{ label: 'Book a Commercial Survey', href: '#survey' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
