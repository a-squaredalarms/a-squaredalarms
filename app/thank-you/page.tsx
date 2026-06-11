import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your enquiry has been received by A-Squared Alarms.',
}

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 text-white md:py-32">
      <div
        className="absolute inset-0 bg-[url('/images/hero-grid.svg')] bg-cover bg-center opacity-15"
        aria-hidden="true"
      />
      <div
        className="absolute right-[-12rem] top-[-10rem] h-[26rem] w-[26rem] rounded-full bg-sky-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/8 p-8 shadow-[0_24px_80px_rgba(2,12,27,0.35)] backdrop-blur md:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-400/18 text-sky-300">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>

          <div className="mt-8 space-y-5">
            <span className="inline-flex rounded-full border border-sky-300/30 bg-sky-400/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-sky-200">
              Enquiry Received
            </span>
            <h1 className="font-display text-display-xl font-bold leading-[1.02] text-white">
              Thanks, your request is on its way to our team.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-200">
              We&apos;ve received your enquiry and sent a confirmation email to the address you provided.
              A specialist will review your request and usually reply the same day during working hours.
            </p>
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-navy-950/35 p-5 text-sm text-slate-200 md:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Need a faster response?</p>
              <p className="mt-1">
                Call us on <a href={`tel:${BRAND.phone.replace(/\s+/g, '')}`} className="text-sky-300 underline">{BRAND.phone}</a>.
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Check your inbox</p>
              <p className="mt-1">
                If you don&apos;t see the confirmation email, check your junk or spam folder.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-navy-950 transition-colors hover:bg-sky-300"
            >
              Back to Home
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-sky-300 hover:text-sky-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
