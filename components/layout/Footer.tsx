import Link from 'next/link'
import Image from 'next/image'
import { BRAND, SERVICES, INDUSTRIES } from '@/lib/data'

const FOOTER_LINKS = {
  services: SERVICES
    .filter((s) => s.id !== 'popalert')
    .sort((a, b) => {
      if (a.id === 'fire') return 1
      if (b.id === 'fire') return -1
      return 0
    })
    .map((s) => ({ label: s.title, href: s.href })),
  industries: INDUSTRIES.slice(0, 4).map((i) => ({ label: i.title, href: i.href })),
  company: [
    { label: 'Compliance & Martyn\'s Law', href: '/compliance' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

const CERTIFICATIONS = [
  { label: 'Martyn\'s Law Aligned', abbr: "M'LAW" },
  { label: 'PopAlert', abbr: 'POPALERT' },
  { label: 'Alertex', abbr: 'ALERTEX' },
  { label: 'Ajax', abbr: 'AJAX' },
  { label: 'Paxton', abbr: 'PAXTON' },
  { label: 'VapeSense', abbr: 'VAPESENSE' },
]

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300" aria-label="Site footer">

      {/* CTA band */}
      <div className="bg-navy-800 border-b border-navy-700">
        <div className="container-site py-10 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-white leading-tight">
                Ready to protect your site?
              </h2>
              <p className="mt-1 text-sky-300 text-sm">
                Speak to a specialist today. Free site survey, no obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                className="btn btn-outline btn-md border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-navy-900 hover:border-sky-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 10a19.79 19.79 0 01-3.07-8.67A2 2 0 013.4 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.09 6.09l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                {BRAND.phone}
              </a>
              <Link href="/contact" className="btn btn-accent btn-md">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center" aria-label="A-Squared Alarms">
              <Image
                src="/a-squaredalarms/logo-white.webp"
                alt="A-Squared Alarms"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Experts in lockdown alarm systems, fire detection, vape sensing, and smart building safety. Protecting UK organisations since 2018.
            </p>

            <address className="not-italic space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{BRAND.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 10a19.79 19.79 0 01-3.07-8.67A2 2 0 013.4 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.09 6.09l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href={`tel:${BRAND.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{BRAND.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">{BRAND.email}</a>
              </div>
            </address>

            {/* Certification badges */}
            <div className="flex flex-wrap gap-2">
              {CERTIFICATIONS.map((cert) => (
                <span
                  key={cert.abbr}
                  className="inline-flex items-center px-2.5 py-1 rounded-lg bg-navy-700 border border-navy-600 text-xs font-bold text-sky-300"
                  title={cert.label}
                >
                  {cert.abbr}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Industries</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} A-Squared Alarms. Trading name of A-Squared (A2) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
