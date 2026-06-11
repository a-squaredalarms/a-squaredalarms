import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata, buildServiceSchema, buildFAQSchema } from '@/lib/seo'

const GOV_GUIDANCE_URL =
  'https://www.gov.uk/government/publications/the-terrorism-protection-of-premises-act-2025'
const SIA_GUIDANCE_URL =
  'https://www.gov.uk/government/publications/martyns-law-the-sias-new-regulatory-role/martyns-law-the-sias-new-regulatory-role'
const WP = '/a-squaredalarms/images'

export const metadata: Metadata = buildMetadata({
  title: "Martyn's Law Compliance | Security Support & Site Reviews",
  description:
    "Practical Martyn's Law compliance support for UK premises, venues, schools, public spaces, and events. Site security reviews, CCTV, access control, alarms, and maintenance services.",
  canonical: 'https://a-squaredalarms.com/compliance',
  keywords: [
    "Martyn's Law compliance",
    'Terrorism Protection of Premises Act',
    'Protect Duty',
    'venue security compliance',
    'public premises security',
    'security risk assessment',
  ],
})

const WHY_IT_MATTERS = [
  {
    title: 'Public safety',
    description:
      'Clear protective security planning helps reduce confusion, support safer decisions, and keep people moving away from danger when time matters.',
    icon: 'shield',
  },
  {
    title: 'Staff awareness',
    description:
      'Teams need to understand site-specific procedures, communication routes, and what practical actions are expected during an incident.',
    icon: 'users',
  },
  {
    title: 'Emergency preparedness',
    description:
      'Prepared premises are better placed to respond calmly, lock down or evacuate where appropriate, and coordinate with emergency services.',
    icon: 'alert',
  },
  {
    title: 'Risk reduction',
    description:
      'A measured security risk assessment can highlight vulnerable areas, unmanaged access points, and gaps in current procedures or equipment.',
    icon: 'search',
  },
  {
    title: 'Clear procedures',
    description:
      'Documented and practised procedures help reduce hesitation, improve consistency, and make responsibilities easier to understand.',
    icon: 'clipboard',
  },
  {
    title: 'Better incident response',
    description:
      'The right mix of communication, access management, monitoring, and training can support faster and more coordinated responses.',
    icon: 'message',
  },
  {
    title: 'Greater confidence',
    description:
      'Visible planning and reliable systems can improve confidence for visitors, staff, governors, trustees, and other stakeholders.',
    icon: 'check-circle',
  },
]

const AFFECTED_PREMISES = [
  { title: 'Retail premises', icon: 'store' },
  { title: 'Hospitality venues', icon: 'hospitality' },
  { title: 'Schools and education sites', icon: 'school' },
  { title: 'Healthcare and care facilities', icon: 'health' },
  { title: 'Places of worship', icon: 'worship' },
  { title: 'Entertainment venues', icon: 'entertainment' },
  { title: 'Sports facilities', icon: 'sports' },
  { title: 'Community buildings', icon: 'community' },
  { title: 'Offices open to the public', icon: 'office' },
  { title: 'Event spaces and temporary events', icon: 'event' },
]

const SUPPORT_SERVICES = [
  {
    title: 'Site security surveys',
    description:
      'Walk-through reviews of entrances, public areas, circulation routes, and current controls to support practical venue security compliance planning.',
    icon: 'map',
    href: '/contact?service=compliance',
    linkLabel: 'Arrange a site survey',
  },
  {
    title: 'CCTV systems',
    description:
      'Coverage planning, recording quality checks, deterrence, and incident review support for public premises security.',
    icon: 'camera',
    href: '/contact?service=compliance',
    linkLabel: 'Discuss CCTV coverage',
  },
  {
    title: 'Intruder alarms',
    description:
      'Detection and alerting measures that can support unauthorised entry response, out-of-hours protection, and linked site procedures.',
    icon: 'bell',
    href: '/contact?service=compliance',
    linkLabel: 'Talk through alarm options',
  },
  {
    title: 'Access control',
    description:
      'Door permissions, restricted areas, audit trails, and visitor management through professionally installed access control systems.',
    icon: 'key',
    href: '/access-control',
    linkLabel: 'View access control systems',
  },
  {
    title: 'Door entry systems',
    description:
      'Visitor access screening and reception-led entry management that can support safer movement into publicly accessible premises.',
    icon: 'door',
    href: '/access-control',
    linkLabel: 'Explore door entry support',
  },
  {
    title: 'Emergency communication systems',
    description:
      'Site-wide alerts, messaging, and response communication that help staff understand what to do and where to go.',
    icon: 'message',
    href: '/lockdown-alarms',
    linkLabel: 'See lockdown alert systems',
  },
  {
    title: 'Lockdown support measures',
    description:
      'Lockdown alarm systems and supporting procedures designed to help organisations respond clearly when sheltering in place is appropriate.',
    icon: 'shield',
    href: '/lockdown-alarms',
    linkLabel: 'Review lockdown systems',
  },
  {
    title: 'Staff awareness support',
    description:
      'Practical handover guidance so teams understand daily security routines, escalation routes, and response expectations.',
    icon: 'users',
    href: '/contact?service=compliance',
    linkLabel: 'Talk through staff support',
  },
  {
    title: 'Maintenance and system checks',
    description:
      'Routine inspections, testing, and servicing to help systems remain dependable, documented, and ready when needed.',
    icon: 'wrench',
    href: '/contact?service=compliance',
    linkLabel: 'Ask about maintenance support',
  },
]

const CHECKLIST_ITEMS = [
  'Understand whether your premises may fall within the scope of Martyn’s Law',
  'Review current security risks',
  'Identify vulnerable entrances, exits, and public areas',
  'Check CCTV coverage and recording quality',
  'Review access control and unauthorised entry risks',
  'Assess emergency procedures',
  'Ensure staff know what to do in an incident',
  'Keep security systems maintained',
  'Document actions, reviews, and improvements',
  'Follow official government guidance',
]

const SYSTEM_CARDS = [
  {
    title: 'CCTV',
    description:
      'Supports monitoring, recording, deterrence, and post-incident review. CCTV can help identify blind spots, confirm activity, and support procedural reviews.',
    icon: 'camera',
    href: '/contact?service=compliance',
    linkLabel: 'Ask about CCTV planning',
  },
  {
    title: 'Access Control',
    description:
      'Helps restrict unauthorised access, manage staff and visitor movement, and create a clearer audit trail for sensitive or public-facing areas.',
    icon: 'key',
    href: '/access-control',
    linkLabel: 'View access control',
  },
  {
    title: 'Intruder Alarms',
    description:
      'Supports rapid awareness of unauthorised entry, especially outside operating hours or in restricted parts of a site where early warning matters.',
    icon: 'bell',
    href: '/contact?service=compliance',
    linkLabel: 'Talk through intruder alarm support',
  },
  {
    title: 'Door Entry',
    description:
      'Gives staff more control over visitor access and can help reduce uncontrolled movement into reception, office, education, and community spaces.',
    icon: 'door',
    href: '/access-control',
    linkLabel: 'Explore door entry systems',
  },
  {
    title: 'Lockdown Alarm',
    description:
      'Supports faster site-wide instruction and clearer shelter-in-place procedures when organisations need an immediate, unmistakable response during a hostile or fast-moving incident.',
    icon: 'shield',
    href: '/lockdown-alarms',
    linkLabel: 'See lockdown alarm systems',
  },
  {
    title: 'Maintenance',
    description:
      'Helps ensure systems remain reliable, operational, and properly checked so procedures are supported by equipment that is ready to perform.',
    icon: 'wrench',
    href: '/contact?service=compliance',
    linkLabel: 'Ask about maintenance planning',
  },
]

const FAQS = [
  {
    question: "What is Martyn's Law?",
    answer:
      "Martyn's Law is the common name for the Terrorism (Protection of Premises) Act 2025. It is intended to improve preparedness and protective security at certain publicly accessible premises and events.",
  },
  {
    question: "Who does Martyn's Law apply to?",
    answer:
      'It may apply to qualifying premises and events depending on factors such as use, public accessibility, and the number of people it is reasonable to expect may be present. Organisations should check the latest official guidance to confirm whether they are in scope.',
  },
  {
    question: 'Is Martyn’s Law the same as Protect Duty?',
    answer:
      'The term Protect Duty was widely used during policy development. The law itself is now the Terrorism (Protection of Premises) Act 2025, commonly known as Martyn’s Law.',
  },
  {
    question: 'Do I need CCTV for Martyn’s Law compliance?',
    answer:
      'Not automatically. Some organisations may need stronger procedures and staff preparedness, while others may decide CCTV forms part of a wider protective security plan. What is suitable will depend on the premises, its use, and the relevant guidance.',
  },
  {
    question: 'Can access control help with compliance?',
    answer:
      'Yes. Access control can support visitor management, reduce unauthorised access, and help organisations manage movement through entrances, staff areas, and other sensitive spaces.',
  },
  {
    question: 'Do you provide Martyn’s Law risk assessments?',
    answer:
      'We provide practical site security reviews and security risk assessment support to help organisations understand current arrangements, vulnerable areas, and possible improvements. We do not provide legal advice.',
  },
  {
    question: 'Is this legal advice?',
    answer:
      'No. This page provides general security and compliance guidance only. For legal obligations, organisations should refer to official government guidance or seek qualified legal advice.',
  },
  {
    question: 'How can we start preparing?',
    answer:
      'Start by checking whether your premises may be in scope, reviewing current risks and procedures, checking entrances and public areas, and making sure staff understand what to do in an incident. A site survey or compliance review can help you prioritise next steps.',
  },
]

const RELATED_LINKS = [
  {
    title: 'Access Control',
    description: 'Door permissions, visitor management, and controlled entry for public-facing premises.',
    href: '/access-control',
  },
  {
    title: 'Lockdown Alarm Systems',
    description: 'Emergency communication and lockdown support measures for schools, offices, and venues.',
    href: '/lockdown-alarms',
  },
  {
    title: 'Temporary Fire Alarm Systems',
    description: 'Fire and life safety integration that supports safe evacuation and response planning.',
    href: '/fire-alarms',
  },
  {
    title: 'Security Systems',
    description: 'Browse the wider A-Squared Alarms service range and compliance-focused support.',
    href: '/',
  },
  {
    title: 'Contact Us',
    description: 'Discuss CCTV, intruder alarms, maintenance support, or a wider compliance review.',
    href: '/contact?service=compliance',
  },
]

function ComplianceIcon({
  name,
  className = 'h-5 w-5',
}: {
  name: string
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className={className}
      aria-hidden="true"
    >
      {name === 'shield' && (
        <>
          <path d="M12 2 4.5 5.5V12c0 4.6 3.1 8.8 7.5 10 4.4-1.2 7.5-5.4 7.5-10V5.5L12 2Z" />
          <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {name === 'users' && (
        <>
          <path d="M16 21v-1.5A3.5 3.5 0 0 0 12.5 16H7.5A3.5 3.5 0 0 0 4 19.5V21" />
          <circle cx="10" cy="9" r="3" />
          <path d="M20 21v-1.5a3 3 0 0 0-2.2-2.9" />
          <path d="M15.5 6.3a3 3 0 1 1 0 5.4" />
        </>
      )}
      {name === 'alert' && (
        <>
          <path d="M12 3 2.8 19a1 1 0 0 0 .9 1.5h16.6a1 1 0 0 0 .9-1.5L12 3Z" />
          <path d="M12 9v4" strokeLinecap="round" />
          <circle cx="12" cy="16.5" r=".8" fill="currentColor" stroke="none" />
        </>
      )}
      {name === 'search' && (
        <>
          <circle cx="11" cy="11" r="6" />
          <path d="m20 20-4.2-4.2" strokeLinecap="round" />
        </>
      )}
      {name === 'clipboard' && (
        <>
          <rect x="6" y="4.5" width="12" height="16.5" rx="2" />
          <path d="M9 4.5h6v2.2H9z" />
          <path d="m9.5 11 1.4 1.4 2.6-2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.8 11H16" strokeLinecap="round" />
          <path d="m9.5 15 1.4 1.4 2.6-2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.8 15H16" strokeLinecap="round" />
        </>
      )}
      {name === 'message' && (
        <>
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H9l-4 3v-3H6.5A2.5 2.5 0 0 1 4 13.5v-7Z" />
          <path d="M8 8.5h8M8 11.5h5" strokeLinecap="round" />
        </>
      )}
      {name === 'check-circle' && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12 2.2 2.2L15.5 9.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {name === 'store' && (
        <>
          <path d="M4 9.5 5.5 5h13L20 9.5" />
          <path d="M5 9.5V19h14V9.5" />
          <path d="M9 19v-4h6v4" />
        </>
      )}
      {name === 'hospitality' && (
        <>
          <path d="M7 4v8a2 2 0 0 0 2 2v6" />
          <path d="M5 4v3M7 4v3M9 4v3" strokeLinecap="round" />
          <path d="M15 4v16" />
          <path d="M15 4c2 0 4 1.8 4 4v2h-4" />
        </>
      )}
      {name === 'school' && (
        <>
          <path d="M3 9.5 12 5l9 4.5L12 14 3 9.5Z" />
          <path d="M6.5 11.2V16c0 1.3 2.5 2.5 5.5 2.5s5.5-1.2 5.5-2.5v-4.8" />
        </>
      )}
      {name === 'health' && (
        <>
          <path d="M12 21s-6.5-4.1-8.5-8.8A5.2 5.2 0 0 1 12 6.7a5.2 5.2 0 0 1 8.5 5.5C18.5 16.9 12 21 12 21Z" />
          <path d="M12 9v5M9.5 11.5h5" strokeLinecap="round" />
        </>
      )}
      {name === 'worship' && (
        <>
          <path d="M12 3v18M8 7h8M6 21h12" />
          <path d="M7 21V11h10v10" />
        </>
      )}
      {name === 'entertainment' && (
        <>
          <path d="M7 4h10l3 5-8 5-8-5 3-5Z" />
          <path d="M8 14h8v6H8z" />
        </>
      )}
      {name === 'sports' && (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 3.5c2.2 1.5 3.5 4 3.5 6.5S14.2 15 12 16.5 8.5 19 8.5 21" />
          <path d="M3.8 9.5h16.4" />
        </>
      )}
      {name === 'community' && (
        <>
          <path d="M4 10.5 12 4l8 6.5V20H4v-9.5Z" />
          <path d="M9 20v-5h6v5" />
        </>
      )}
      {name === 'office' && (
        <>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" strokeLinecap="round" />
        </>
      )}
      {name === 'event' && (
        <>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" strokeLinecap="round" />
          <path d="M8 14h3M13 14h3M8 17h3" strokeLinecap="round" />
        </>
      )}
      {name === 'map' && (
        <>
          <path d="M3 6.5 8.5 4l7 2 5.5-2v13.5l-5.5 2-7-2-5.5 2V6.5Z" />
          <path d="M8.5 4v13.5M15.5 6v13.5" />
        </>
      )}
      {name === 'camera' && (
        <>
          <path d="m4 9 5-2.5L20 9l-5 2.5L4 9Z" />
          <path d="M9 6.5V4h6v5" />
          <path d="M15 11.5v5.5l-3 2-3-2v-5.5" />
          <circle cx="12" cy="13.5" r="1.3" />
        </>
      )}
      {name === 'bell' && (
        <>
          <path d="M12 4a4 4 0 0 1 4 4v2.7c0 .7.2 1.4.6 2l1.4 2.3H6l1.4-2.3c.4-.6.6-1.3.6-2V8a4 4 0 0 1 4-4Z" />
          <path d="M9.5 18a2.5 2.5 0 0 0 5 0" />
        </>
      )}
      {name === 'key' && (
        <>
          <circle cx="8" cy="12" r="3.5" />
          <path d="M11.5 12H20" strokeLinecap="round" />
          <path d="M16 12v-2M18.5 12v-2" strokeLinecap="round" />
        </>
      )}
      {name === 'door' && (
        <>
          <path d="M7 4h9a1 1 0 0 1 1 1v14H7V4Z" />
          <path d="M7 4 4 5v14l3-1" />
          <circle cx="13.5" cy="12" r=".8" fill="currentColor" stroke="none" />
        </>
      )}
      {name === 'flame' && (
        <>
          <path d="M12.2 3.5c.2 2-.5 3.3-1.6 4.8-1.4 1.8-2.3 3-2.3 4.9a4.7 4.7 0 0 0 9.4 0c0-3.5-2-5-5.5-9.7Z" />
          <path d="M10.7 14.5c0 1 .7 1.8 1.7 1.8s1.7-.8 1.7-1.8c0-1.1-.6-1.8-1.7-3.3-1.1 1.5-1.7 2.2-1.7 3.3Z" />
        </>
      )}
      {name === 'wrench' && (
        <>
          <path d="M14.5 5.5a4 4 0 0 0-5.2 4.8L4 15.6a1.7 1.7 0 0 0 2.4 2.4l5.3-5.3a4 4 0 0 0 4.8-5.2l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z" />
        </>
      )}
      {name === 'layers' && (
        <>
          <path d="M12 4 4 8l8 4 8-4-8-4Z" />
          <path d="M4 12l8 4 8-4" />
          <path d="M4 16l8 4 8-4" />
        </>
      )}
    </svg>
  )
}

export default function CompliancePage() {
  const serviceSchema = buildServiceSchema({
    name: "Martyn's Law Compliance Support",
    description:
      "Practical Martyn's Law compliance support, site security reviews, CCTV planning, access control, and emergency security systems for UK premises and events.",
    provider: 'A-Squared Alarms',
    areaServed: 'United Kingdom',
    serviceType: 'Security Compliance Support',
    url: 'https://a-squaredalarms.com/compliance',
  })

  const faqSchema = buildFAQSchema(FAQS)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serviceSchema }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} />

      <section className="relative overflow-hidden bg-navy-900" aria-label="Compliance hero">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 top-0 h-1 bg-sky-400" aria-hidden="true" />

        <div className="container-site relative z-10 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs text-slate-400">
                  <li>
                    <Link href="/" className="transition-colors hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="font-medium text-white">Compliance</li>
                </ol>
              </nav>

              <div className="flex flex-wrap gap-2">
                <span className="badge border border-sky-400/25 bg-sky-400/15 text-sky-300">
                  Compliance Guidance
                </span>
                <span className="badge border border-white/15 bg-white/10 text-slate-200">
                  Terrorism (Protection of Premises) Act 2025
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-display-2xl font-extrabold leading-[1.05] text-white">
                  Compliance &amp; Martyn&apos;s Law
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                  Helping organisations prepare for Martyn&apos;s Law with practical security
                  guidance, risk awareness, and protective security solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_16px_40px_rgba(7,30,56,0.25)]">
                <p className="text-sm leading-relaxed text-slate-300">
                  <span className="font-semibold text-white">Current position:</span> The Act
                  received Royal Assent on 3 April 2025. Home Office statutory guidance was
                  updated on 27 April 2026, and the Security Industry Authority has said the law
                  is expected to come into force in Spring 2027.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contact?service=compliance" className="btn btn-accent btn-lg">
                  Request a Compliance Review
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact?service=compliance"
                  className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900"
                >
                  Book a Site Survey
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 pt-1 text-sm text-slate-300">
                {['General guidance only', 'UK English', 'Practical protective security'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-400/20 text-sky-300"
                        aria-hidden="true"
                      >
                        <svg
                          className="h-3 w-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto max-w-xl">
                <Image
                  src="/a-squaredalarms/compliance-hero.svg"
                  alt="security compliance review for public premises"
                  width={1200}
                  height={960}
                  priority
                  sizes="(min-width: 1024px) 40rem, 100vw"
                  className="h-auto w-full"
                />
              </div>

              <div className="absolute -bottom-3 left-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:left-10">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                    <ComplianceIcon name="check-circle" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      Review Focus
                    </p>
                    <p className="text-sm font-semibold text-navy-900">
                      Procedures, access, coverage, response
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-1 top-8 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:right-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-navy-800">
                    <ComplianceIcon name="shield" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                      Scope
                    </p>
                    <p className="text-sm font-semibold text-navy-900">
                      Public premises and events
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="martyns-law-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <span className="badge-navy mb-4">What Is Martyn&apos;s Law?</span>
              <h2
                id="martyns-law-heading"
                className="mt-2 font-display text-display-xl font-bold text-navy-900"
              >
                A practical introduction for organisations that welcome the public
              </h2>
              <div className="mt-5 space-y-4 text-slate-600">
                <p>
                  Martyn&apos;s Law is intended to improve public safety and preparedness at
                  publicly accessible premises and events. It is the common name for the
                  Terrorism (Protection of Premises) Act 2025, and you may also hear it
                  discussed alongside the term <strong>Protect Duty</strong>.
                </p>
                <p>
                  In simple terms, the aim is to help responsible organisations consider
                  terrorism risk, improve preparedness, and put suitable protective measures in
                  place. That can include procedures, awareness, communication, access
                  management, monitoring, and other proportionate steps based on the premises or
                  event.
                </p>
                <p>
                  It may apply to qualifying venues, public premises, and events depending on
                  factors such as size, capacity, use, and public accessibility. Because scope
                  can vary, organisations should always check the latest official guidance before
                  deciding what is required.
                </p>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-5">
              <div className="card border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <ComplianceIcon name="alert" className="h-5 w-5" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-bold text-amber-900">
                      General guidance only
                    </h3>
                    <p className="text-sm leading-relaxed text-amber-900/80">
                      This page provides general guidance only and does not constitute legal
                      advice. For specific obligations, organisations should check official
                      government guidance or seek professional and legal advice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-700">
                  Official guidance
                </p>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href={GOV_GUIDANCE_URL}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 underline underline-offset-4 transition-colors hover:text-sky-600"
                    >
                      Home Office statutory guidance
                    </a>
                  </li>
                  <li>
                    <a
                      href={SIA_GUIDANCE_URL}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-navy-800 underline underline-offset-4 transition-colors hover:text-sky-600"
                    >
                      SIA regulatory updates
                    </a>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-slate-500">
                  For practical security support, we can help you review your site, current
                  systems, and response arrangements without overcomplicating the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="why-compliance-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="badge-sky mb-4">Why Compliance Matters</span>
            <h2
              id="why-compliance-heading"
              className="mt-2 font-display text-display-xl font-bold text-navy-900"
            >
              Clear planning supports safer, calmer, and more consistent responses
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Martyn&apos;s Law compliance is not only about meeting duties on paper. It is also
              about improving public premises security, strengthening procedures, and helping
              people respond with greater confidence if an incident ever occurs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {WHY_IT_MATTERS.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                  <ComplianceIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="affected-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="badge-navy mb-4">Who May Be Affected?</span>
            <h2
              id="affected-heading"
              className="mt-2 font-display text-display-xl font-bold text-navy-900"
            >
              Many different public-facing settings may need to assess their position
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The following examples are not exhaustive, but they illustrate the range of
              organisations that may need to review their responsibilities, security risk
              assessment process, and protective security arrangements.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {AFFECTED_PREMISES.map((item) => (
              <div key={item.title} className="card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-navy-800">
                  <ComplianceIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-navy-900">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-navy-900" aria-labelledby="help-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="badge border border-sky-400/25 bg-sky-400/15 text-sky-300">
              How We Can Help
            </span>
            <h2
              id="help-heading"
              className="mt-4 font-display text-display-xl font-bold text-white"
            >
              Practical support to help organisations prepare with confidence
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              We support organisations with practical security measures that may help them
              prepare for Martyn&apos;s Law requirements. Our approach is focused on risk
              awareness, public protection procedures, and professional systems that fit the way
              your premises actually operates.
            </p>
            <p className="mt-4 text-slate-400">
              That may include a site review, a venue security compliance discussion, or more
              detailed planning around <Link href="/access-control" className="font-semibold text-sky-300 underline underline-offset-4 hover:text-white">access control</Link>,{' '}
              <Link href="/lockdown-alarms" className="font-semibold text-sky-300 underline underline-offset-4 hover:text-white">emergency communication</Link>,{' '}
              <Link href="/lockdown-alarms" className="font-semibold text-sky-300 underline underline-offset-4 hover:text-white">lockdown alarm systems</Link>, and wider{' '}
              <Link href="/" className="font-semibold text-sky-300 underline underline-offset-4 hover:text-white">security systems</Link>.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SUPPORT_SERVICES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_14px_32px_rgba(7,30,56,0.18)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sky-300">
                  <ComplianceIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-white"
                >
                  {item.linkLabel}
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="checklist-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <span className="badge-alert mb-4">Preparation Checklist</span>
              <h2
                id="checklist-heading"
                className="mt-2 font-display text-display-xl font-bold text-navy-900"
              >
                A simple Martyn&apos;s Law preparation checklist
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                This checklist is designed to help organisations organise next steps in a calm,
                practical order. It is not a substitute for official guidance, but it can help
                you structure internal reviews and conversations.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold text-navy-900">
                  Useful next step:
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  If you are unsure where to begin, start with a site walkthrough and security
                  risk assessment review. That usually makes the biggest priorities much easier
                  to see.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="card p-6 md:p-8">
                <div className="space-y-4">
                  {CHECKLIST_ITEMS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
                    >
                      <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <p className="text-sm font-medium leading-relaxed text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="systems-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="badge-sky mb-4">Supporting Systems</span>
              <h2
                id="systems-heading"
                className="mt-2 font-display text-display-xl font-bold text-navy-900"
              >
                Security systems that can support compliance
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                The right system mix will depend on the premises, its layout, its public access
                arrangements, and the level of risk being managed. For many organisations, the
                priority is joining procedures and technology together in a simple, reliable way.
              </p>
              <div className="mt-8 max-w-md">
                <Image
                  src="/a-squaredalarms/compliance-systems.svg"
                  alt="CCTV and access control supporting Martyn’s Law preparation"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {SYSTEM_CARDS.map((item) => (
                <div key={item.title} className="card p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                    <ComplianceIcon name={item.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 transition-colors hover:text-sky-600"
                  >
                    {item.linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="tiers-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="badge-navy mb-4">Requirement Levels</span>
            <h2
              id="tiers-heading"
              className="mt-2 font-display text-display-xl font-bold text-navy-900"
            >
              A simple explanation of tiers
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Martyn&apos;s Law uses a tiered approach. In general terms, some premises may have
              standard requirements, while larger or higher-capacity premises and events may have
              enhanced requirements. Duties can depend on factors such as capacity, activity, and
              public accessibility.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-navy-800">
                  <ComplianceIcon name="clipboard" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">Standard requirements</h3>
                  <p className="text-sm text-slate-500">Preparedness and practical procedures</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Some qualifying premises may mainly need clear public protection procedures, staff
                awareness, communication planning, and proportionate response arrangements.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <ComplianceIcon name="layers" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">Enhanced requirements</h3>
                  <p className="text-sm text-slate-500">Larger or more complex premises and events</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">
                Larger or higher-capacity premises and qualifying events may need to do more,
                including considering wider vulnerabilities and reasonably practicable public
                protection measures.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-600">
              Broadly, current statutory guidance describes standard tier premises as those
              expecting 200 to 799 individuals from time to time, with enhanced requirements
              generally applying from 800 upwards, although some premises are treated differently.
              Organisations should always check the latest official guidance to confirm their
              obligations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="faq-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="badge-sky mb-4">FAQs</span>
              <h2
                id="faq-heading"
                className="mt-2 font-display text-display-lg font-bold text-navy-900"
              >
                Frequently asked questions
              </h2>

              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
                This page provides general security and compliance guidance only. For specific legal
                obligations, always refer to official government guidance or seek qualified legal
                advice.
              </div>

              <div className="mt-6 space-y-3">
                {FAQS.map((faq) => (
                  <details key={faq.question} className="card group p-5 open:shadow-card-hover">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-navy-900">
                      {faq.question}
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
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

      <section className="section-spacing-sm border-t border-slate-100 bg-slate-50" aria-labelledby="related-heading">
        <div className="container-site">
          <div className="max-w-3xl">
            <span className="badge-navy mb-4">Related Pages</span>
            <h2
              id="related-heading"
              className="mt-2 font-display text-display-md font-bold text-navy-900"
            >
              Related security support and next steps
            </h2>
            <p className="mt-4 text-slate-600">
              If you are building a wider compliance plan, these pages are often a helpful next
              step. For CCTV planning, intruder alarms, and maintenance support, you can also
              contact us directly for tailored advice on your site.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="card-hover p-5"
                aria-label={`${item.title} page`}
              >
                <h3 className="text-base font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900" aria-label="Final compliance call to action">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
          aria-hidden="true"
        />
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-400 opacity-10 blur-3xl" aria-hidden="true" />

        <div className="container-site relative py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-display-xl font-extrabold leading-tight text-white">
              Prepare your premises with practical security support for Martyn&apos;s Law.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
              We can help you review current arrangements, identify priorities, and plan
              proportionate improvements across procedures, systems, and site readiness.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact?service=compliance" className="btn btn-accent btn-lg">
                Request a Compliance Review
              </Link>
              <Link
                href="/contact?service=compliance"
                className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900"
              >
                Book a Site Survey
              </Link>
              <Link
                href="/contact"
                className="btn btn-lg border-2 border-sky-400 text-sky-300 hover:bg-sky-400 hover:text-navy-900"
              >
                Contact Us
              </Link>
            </div>

            <p className="mt-5 text-sm text-slate-400">
              General guidance only. Check the latest official government guidance for specific
              obligations.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
