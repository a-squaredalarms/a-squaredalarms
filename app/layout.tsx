import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Bricolage_Grotesque } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { buildLocalBusinessSchema } from '@/lib/seo'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://a-squaredalarms.com'),
  title: {
    default: 'A-Squared Alarms — UK Lockdown & Safety Systems Specialists',
    template: '%s | A-Squared Alarms',
  },
  description:
    "UK specialists in Martyn's Law-aligned lockdown systems, temporary fire alarms, vape detection, and smart building safety. Protecting schools, construction sites, and commercial premises.",
  keywords:
    "lockdown alarm UK, Martyn's Law compliance, temporary fire alarm installation, vape detection school, safety alarm system, temporary fire alarm system, lockdown system school",
  authors: [{ name: 'A-Squared Alarms' }],
  creator: 'A-Squared Alarms',
  publisher: 'A-Squared Alarms',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://a-squaredalarms.com',
    siteName: 'A-Squared Alarms',
    title: 'A-Squared Alarms — UK Lockdown & Safety Systems Specialists',
    description:
      "UK specialists in Martyn's Law-aligned lockdown systems, temporary fire alarms, and vape detection.",
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'A-Squared Alarms — UK Safety Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@asquaredalarms',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_TOKEN',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const structuredData = buildLocalBusinessSchema()

  return (
    <html
      lang="en-GB"
      className={`${GeistSans.variable} ${GeistMono.variable} ${bricolage.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy-800 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
