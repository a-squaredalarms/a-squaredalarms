import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, buildFAQSchema } from '@/lib/seo'
import { CTASection } from '@/components/sections/CTASection'
import { HomeQuoteSection } from '@/components/sections/HomeQuoteSection'
import { ButtonLink } from '@/components/ui/ButtonLink'

const WP = '/images'

export const metadata: Metadata = buildMetadata({
  title: 'Schools & Colleges Safety Systems | Lockdown, Fire, Vape & Site Security',
  description:
    'Safety systems for schools and colleges including lockdown alarms, PopAlert digital alerts, temporary fire alarms, vape detection, access control, and intrusion protection. School-focused planning and installation across the UK.',
  canonical: 'https://a-squaredalarms.com/industries/schools',
  keywords: [
    'school lockdown alarm system UK',
    'college vape detection system',
    'school access control installation',
    'PopAlert schools',
    'school intrusion protection',
    'education temporary fire alarm installation',
  ],
})

const SCHOOL_PRIORITIES = [
  {
    title: 'Clear staff response',
    description:
      'Systems need to reduce confusion under pressure and make the right action obvious to teachers, reception staff, and leadership teams.',
  },
  {
    title: 'Safeguarding-led planning',
    description:
      'Every recommendation should reflect how students move through the site, where supervision is limited, and how visitors are controlled.',
  },
  {
    title: 'Low disruption to learning',
    description:
      'Protection matters, but it also has to fit around timetables, lesson changeovers, exams, assemblies, and everyday site operation.',
  },
]

const SCHOOL_SYSTEMS = [
  {
    id: 'lockdown',
    eyebrow: 'Lockdown Alarm Systems',
    title: 'School lockdown alarm systems that deliver clear instruction in seconds.',
    intro:
      'School lockdown alarm systems need to do more than sound urgent. They need to give staff a fast, recognisable signal and a response plan that works across classrooms, reception, corridors, shared spaces, and safeguarding-led zones.',
    detail:
      'We design lockdown alarm systems for schools and colleges around how the campus actually runs, so reception teams, senior leaders, and classroom staff can trigger the right response quickly without confusion.',
    bullets: [
      'Single-point activation for reception, SLT, or agreed control points',
      'School-specific lockdown tones and visual cues for staff clarity',
      'Planning around primary, secondary, SEN, and multi-building college layouts',
    ],
    accent: 'sky',
    href: '/lockdown-alarms',
    cta: 'Explore Lockdown Systems',
    fitTitle: 'Where it performs best',
    fitItems: [
      'Primary schools that need one simple, unmistakable lockdown trigger',
      'Secondary schools with teaching blocks, courtyards, and different supervision zones',
      'Further education campuses where different areas may need different staff instructions',
    ],
    note:
      'The real outcome is staff confidence: knowing exactly what to do when a serious incident demands immediate in-building protection.',
    searchTitle: 'What schools search for',
    searchItems: ['school lockdown alarm system', 'Martyn’s Law school alarm', 'lockdown alert for classrooms'],
    atAGlance: [
      { label: 'Response focus', value: 'Immediate in-building instruction' },
      { label: 'Best trigger points', value: 'Reception, SLT, welfare, gatehouse' },
      { label: 'Typical zones', value: 'Classrooms, halls, corridors, shared spaces' },
    ],
    scenarioTitle: 'Illustrative school use',
    scenarioLead: 'A reception-led activation can push a whole-site lockdown instruction in moments, while staff follow a plan already matched to each building type.',
    scenarioSteps: [
      'Trigger activated from reception or agreed leadership point',
      'Audible and visual alert reaches staff across the site',
      'Classrooms and support teams move into the school’s pre-planned protective response',
    ],
  },
  {
    id: 'popalert',
    eyebrow: 'PopAlert Digital Alerts',
    title: 'PopAlert digital alerts for schools that need visual clarity as well as sound.',
    intro:
      'PopAlert digital alerts help schools and colleges push a plain-language message to connected screens and staff computers at the same moment. That matters when office staff, admin teams, support workers, and reception points all need the same instruction immediately.',
    detail:
      'PopAlert for schools is especially effective when paired with a lockdown alarm, because it reinforces the audible trigger with a visual message such as lockdown, evacuation, invacuation, or all clear.',
    bullets: [
      'Full-screen emergency messaging across connected staff devices',
      'Clear visual support for reception, admin, attendance, and office teams',
      'Supports lockdown, evacuation, invacuation, and all-clear scenarios',
    ],
    accent: 'emerald',
    href: '/lockdown-alarms#popalert',
    cta: 'Explore PopAlert',
    fitTitle: 'Where schools use it most',
    fitItems: [
      'Reception desks and visitor-facing front-office teams',
      'Admin, safeguarding, attendance, and finance offices',
      'Staff workstations distributed across larger campuses or multi-building sites',
    ],
    note:
      'PopAlert works best when it removes guesswork from the first few seconds of an incident and gives staff the same instruction in the same wording.',
    searchTitle: 'What schools search for',
    searchItems: ['PopAlert schools', 'digital emergency alerts for schools', 'school screen takeover alerts'],
    atAGlance: [
      { label: 'Display method', value: 'Connected PCs and shared displays' },
      { label: 'Main users', value: 'Reception, admin, support staff' },
      { label: 'Typical messages', value: 'Lockdown, evacuation, invacuation, all clear' },
    ],
    scenarioTitle: 'Illustrative digital alert flow',
    scenarioLead: 'Instead of relying on verbal relays, a school can push one unified message to the exact teams who need immediate visual guidance.',
    scenarioSteps: [
      'Alert activates alongside your wider emergency procedure',
      'Office and support teams receive the same plain-language screen instruction',
      'Admin functions respond faster because the message is visible, not interpretive',
    ],
  },
  {
    id: 'vape',
    eyebrow: 'Vape Detection',
    title: 'Vape detection for schools that need faster safeguarding response in hard-to-monitor areas.',
    intro:
      'Vape detection systems help schools and colleges respond faster in toilets, washrooms, changing areas, sixth-form zones, and other spaces where direct supervision is limited. The goal is better safeguarding visibility, not blanket surveillance.',
    detail:
      'Good vape detection for schools gives pastoral, behaviour, and safeguarding staff quicker alerts, better evidence of repeated patterns, and a clearer picture of where intervention is actually needed.',
    bullets: [
      'Discreet sensors for toilets, changing rooms, and repeat-incident areas',
      'Instant alerts to agreed staff responders',
      'Supports behaviour, safeguarding, and hotspot analysis over time',
    ],
    accent: 'amber',
    href: '/vape-detection',
    cta: 'Explore Vape Detection',
    fitTitle: 'Where it is most useful',
    fitItems: [
      'Secondary schools with repeated incidents in student toilets',
      'Colleges needing visibility in sixth-form or communal welfare spaces',
      'Sites where leadership needs evidence of patterns rather than assumptions',
    ],
    note:
      'Used properly, vape detection supports staff judgement, strengthens safeguarding records, and helps target the right spaces for intervention.',
    searchTitle: 'What schools search for',
    searchItems: ['school vape detection system', 'college vape detector', 'toilet vape sensor for schools'],
    atAGlance: [
      { label: 'Main spaces', value: 'Toilets, changing rooms, sixth-form areas' },
      { label: 'Staff benefit', value: 'Faster response and better pattern tracking' },
      { label: 'Safeguarding role', value: 'Evidence-led follow-up' },
    ],
    scenarioTitle: 'Illustrative safeguarding use',
    scenarioLead: 'Instead of repeated suspicion without proof, staff get a clearer signal about where incidents are happening and when intervention is needed.',
    scenarioSteps: [
      'Sensor detects a vaping incident in a low-supervision area',
      'Approved staff receive a discreet alert and can respond quickly',
      'Repeat alerts help identify patterns, hotspots, and follow-up priorities',
    ],
  },
  {
    id: 'access-control',
    eyebrow: 'Access Control',
    title: 'School access control that improves visitor management and staff-only security.',
    intro:
      'Access control is one of the strongest day-to-day safeguarding improvements a school can make. It helps manage who enters the premises, which doors stay staff-only, and how visitors, contractors, and authorised personnel move through the site.',
    detail:
      'For schools and colleges, effective access control usually means pairing reception-led entry management with controlled internal permissions for admin offices, welfare rooms, safeguarding spaces, gates, and sensitive storage areas.',
    bullets: [
      'Reception-led visitor access and front-door control',
      'Permission-based entry for staff-only rooms and internal zones',
      'Cards, fobs, keypads, and timed access rules for school operations',
    ],
    accent: 'violet',
    href: '/access-control',
    cta: 'Explore Access Control',
    fitTitle: 'Where it helps most',
    fitItems: [
      'Main entrances and reception-controlled visitor routes',
      'Admin offices, safeguarding rooms, finance areas, and secure stores',
      'Larger schools where gates, blocks, and staff movement need clearer control',
    ],
    note:
      'The strongest school access control systems feel simple to staff while quietly tightening visitor handling, internal permissions, and safeguarding protection in the background.',
    searchTitle: 'What schools search for',
    searchItems: ['school access control installation', 'Paxton access control schools', 'visitor access control for schools'],
    atAGlance: [
      { label: 'Main purpose', value: 'Visitor and staff-only area control' },
      { label: 'Typical points', value: 'Gates, front doors, admin zones, welfare rooms' },
      { label: 'Best outcome', value: 'Safer entry without slowing school flow' },
    ],
    scenarioTitle: 'Illustrative school access flow',
    scenarioLead: 'A well-planned system helps reception stay in control while staff move through the site using permissions that make sense operationally.',
    scenarioSteps: [
      'Visitor reaches the site and is managed through a controlled entry point',
      'Staff-only rooms stay restricted without relying on physical keys alone',
      'Leadership gains better control over internal access, timings, and credentials',
    ],
  },
  {
    id: 'intrusion',
    eyebrow: 'Intrusion Protection',
    title: 'Intrusion protection for schools that need better after-hours awareness and deterrence.',
    intro:
      'Intrusion protection helps schools secure buildings, offices, stores, detached blocks, and vulnerable access points when students and staff have gone home. That is especially important during evenings, weekends, holiday periods, and lower-occupancy times.',
    detail:
      'For education sites, the priority is often reducing unauthorised access, protecting equipment, and making sure caretakers, estates teams, or keyholders know quickly when something is wrong out of hours.',
    bullets: [
      'Coverage for entrances, admin blocks, stores, and outbuildings',
      'Useful during holidays, weekends, and low-occupancy periods',
      'Faster alerts to approved school or estates contacts',
    ],
    accent: 'rose',
    href: '/intrusion-protection',
    cta: 'Explore Intrusion Protection',
    fitTitle: 'Typical school fit',
    fitItems: [
      'Admin buildings, reception spaces, and front access points',
      'ICT stores, plant areas, sports blocks, and detached buildings',
      'Campuses with higher out-of-hours or holiday access risk',
    ],
    note:
      'Intrusion protection is especially valuable for schools with larger estates, detached blocks, expensive equipment, or repeated concerns around out-of-hours access.',
    searchTitle: 'What schools search for',
    searchItems: ['school intrusion protection', 'school out of hours alarm', 'wireless intruder alarm for schools'],
    atAGlance: [
      { label: 'Main risk window', value: 'Evenings, weekends, holidays' },
      { label: 'Best coverage', value: 'Entrances, stores, offices, detached blocks' },
      { label: 'Main benefit', value: 'Faster awareness of unauthorised access' },
    ],
    scenarioTitle: 'Illustrative out-of-hours protection',
    scenarioLead: 'Instead of relying on someone discovering a problem later, approved contacts know earlier that a building, store, or access point has been compromised.',
    scenarioSteps: [
      'Detector or protected entry point triggers out of hours',
      'Approved contacts receive an alert for faster action',
      'School leadership gains better protection for buildings and valuable assets',
    ],
  },
] as const

const FAQS = [
  {
    question: 'Does a school need every one of these systems?',
    answer:
      'Not always. Some schools begin with the most urgent risk area, such as lockdown alerting, access control, or vape detection, then phase additional systems over time. The right mix depends on your site layout, safeguarding priorities, staffing model, and compliance needs.',
  },
  {
    question: 'Can lockdown alarms and PopAlert work together?',
    answer:
      'Yes. They are often strongest when used together, with the lockdown system providing the trigger and PopAlert adding a clear on-screen instruction for office, admin, and support staff.',
  },
  {
    question: 'Where are vape detectors usually installed in schools?',
    answer:
      'Most commonly in toilets, washrooms, changing areas, and other lower-supervision spaces where repeated incidents tend to happen. The exact locations should be guided by safeguarding priorities and site experience.',
  },
  {
    question: 'Can access control and intrusion protection be phased?',
    answer:
      'Yes. Many education sites phase these upgrades, beginning with main entrances, admin zones, or the most vulnerable access points before extending coverage across the wider estate.',
  },
]

export default function SchoolsIndustryPage() {
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

      <section className="relative overflow-hidden bg-navy-900" aria-label="Schools and colleges hero">
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
                Schools &amp; Colleges
              </span>
              <span className="badge border border-white/20 bg-white/10 text-slate-300">
                Lockdown, Fire, Vape &amp; Site Security
              </span>
            </div>

            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              Safety Systems for Education Sites Need to Be Clear, Practical, and Built Around Safeguarding.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              We help schools and colleges plan the right mix of lockdown alerting, digital messaging,
              temporary fire alarms, vape detection, access control, and intrusion protection. Every system is
              specified around how the site works in real life, not around a generic template.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#survey" className="btn btn-accent btn-lg">
                Request a School Survey
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
            <span className="badge-navy mb-4">Education Priorities</span>
            <h2 id="priorities-heading" className="mt-2 font-display text-display-xl font-bold text-navy-900">
              The right system mix depends on how your staff and students use the site.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              A school or college rarely needs just one improvement in isolation. The real question is
              how different systems work together to improve response clarity, safeguarding, visitor
              control, and out-of-hours security without disrupting learning.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {SCHOOL_PRIORITIES.map((priority) => (
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
              {SCHOOL_SYSTEMS.map((system) => (
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

      {SCHOOL_SYSTEMS.map((system, index) => (
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
                  <h2
                    id={`${system.id}-heading`}
                    className="mt-2 font-display text-display-xl font-bold text-navy-900"
                  >
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
                        <span
                          key={item}
                          className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold ${accentStyles[system.accent].pill}`}
                        >
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
                    Request a School Quote
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
                        <span
                          className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-navy-900 ${accentStyles[system.accent].soft}`}
                        >
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
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">
                      {system.scenarioLead}
                    </p>
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
              We plan around how a school day actually works.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              The most effective education-site systems are the ones that staff can understand,
              leadership can manage, and safeguarding teams can rely on in both everyday and critical situations.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Site walk and risk review',
                detail: 'We review entrances, teaching areas, supervision gaps, and response priorities before recommending any hardware.',
              },
              {
                title: 'System selection by need',
                detail: 'We separate what is urgent now from what can be phased later, so decisions are practical rather than overwhelming.',
              },
              {
                title: 'Operational fit',
                detail: 'Recommendations are shaped around safeguarding, reception workflows, break times, assemblies, and out-of-hours site use.',
              },
              {
                title: 'Clear handover',
                detail: 'Your team receives a system they understand, not just a list of installed products.',
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
                Schools &amp; Colleges FAQs
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
                alt="A-Squared Alarms protecting what matters"
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
        headline="Need a clearer safety plan for your school or college?"
        subheading="We can help you work out which systems matter most now, what can be phased later, and how the whole plan should fit around safeguarding and site operation."
        primaryCTA={{ label: 'Book a School Survey', href: '#survey' }}
        secondaryCTA={{ label: 'Contact Us', href: '/contact' }}
      />
    </>
  )
}
