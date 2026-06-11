import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Vape Detection Systems',
  description:
    'Vape detection systems page for A-Squared Alarms. Full service information is coming soon.',
  canonical: 'https://a-squaredalarms.com/vape-detection',
  keywords: [
    'vape detection system UK',
    'school vape detection',
    'commercial vape detection',
  ],
})

export default function VapeDetectionPage() {
  return (
    <section className="section-spacing bg-white" aria-labelledby="coming-soon-heading">
      <div className="container-site">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-slate-50 px-8 py-20 text-center shadow-card md:px-12">
          <span className="badge-sky">Vape Detection Systems</span>
          <h1
            id="coming-soon-heading"
            className="mt-6 font-display text-display-xl font-bold text-navy-900"
          >
            Coming Soon
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            This page is currently being updated.
          </p>
        </div>
      </div>
    </section>
  )
}
