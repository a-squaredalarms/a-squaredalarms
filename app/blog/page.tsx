import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { BLOG_POSTS, getFeaturedBlogPost } from '@/lib/blog'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = buildMetadata({
  title: 'Blog | Safety Systems Insights & Guidance',
  description:
    'Read the A-Squared Alarms blog for practical guidance on lockdown systems, PopAlert, temporary fire alarms, vape detection, access control, and intrusion protection.',
  canonical: 'https://a-squaredalarms.com/blog',
  keywords: [
    'A-Squared Alarms blog',
    'lockdown alarm guidance',
    'temporary fire alarm blog UK',
    'access control advice',
    'vape detection insights',
  ],
})

const TOPIC_AREAS = [
  {
    title: 'Lockdown Systems',
    description: 'Response planning, trigger points, drills, and site-wide alert clarity.',
    href: '/lockdown-alarms',
  },
  {
    title: 'PopAlert',
    description: 'How visual messaging supports faster understanding during incidents.',
    href: '/lockdown-alarms#popalert',
  },
  {
    title: 'Temporary Fire Alarms',
    description: 'Practical planning for schools, commercial buildings, and changing sites.',
    href: '/fire-alarms',
  },
  {
    title: 'Vape Detection',
    description: 'Safeguarding-led deployment strategies for education environments.',
    href: '/vape-detection',
  },
  {
    title: 'Access Control',
    description: 'Reception, staff permissions, restricted areas, and daily site control.',
    href: '/access-control',
  },
  {
    title: 'Intrusion Protection',
    description: 'Out-of-hours security planning for buildings, offices, and vulnerable zones.',
    href: '/intrusion-protection',
  },
] as const

function ArticleCard({
  title,
  excerpt,
  category,
  displayDate,
  readTime,
  slug,
}: {
  title: string
  excerpt: string
  category: string
  displayDate: string
  readTime: string
  slug: string
}) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group card-hover flex h-full flex-col overflow-hidden p-6"
      aria-label={`Read article: ${title}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="badge-sky">{category}</span>
        <span className="text-xs font-medium text-slate-400">{readTime}</span>
      </div>
      <h2 className="mt-5 font-display text-display-sm font-bold text-navy-900">{title}</h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{excerpt}</p>
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="text-xs uppercase tracking-[0.16em] text-slate-400">{displayDate}</span>
        <span className="text-sm font-semibold text-navy-800 transition-colors group-hover:text-sky-700">
          Read article →
        </span>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  const featuredPost = getFeaturedBlogPost()
  const latestPosts = BLOG_POSTS.filter((post) => post.slug !== featuredPost.slug)
  const featuredPreviewParagraphs = featuredPost.sections[0]?.paragraphs ?? [featuredPost.excerpt]

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900" aria-label="Blog hero">
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

        <div className="container-site relative z-10 py-16 md:py-20">
          <div className="max-w-4xl space-y-6">
            <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
              Insights &amp; Guidance
            </span>
            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              The A-Squared Alarms Blog
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              Practical articles on lockdown systems, PopAlert, temporary fire alarms, vape detection, access
              control, and intrusion protection. Built for organisations that want clearer decisions,
              not vague jargon.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-accent btn-lg">
                Ask Us About Your Site
              </Link>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="btn btn-lg border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900"
              >
                Read Featured Article
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy-950/30 to-transparent"
          aria-hidden="true"
        />
      </section>

      <section className="section-spacing-sm bg-white" aria-labelledby="blog-topics-heading">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <span className="badge-navy">Topics We Cover</span>
            <h2 id="blog-topics-heading" className="mt-4 font-display text-display-lg font-bold text-navy-900">
              Guidance that stays close to real site decisions.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              We focus on the questions clients usually ask before they buy, expand, or review a
              system. That means practical planning, clear trade-offs, and site-specific advice.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {TOPIC_AREAS.map((topic) => (
              <Link key={topic.title} href={topic.href} className="card-hover p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">Focus Area</p>
                <h3 className="mt-4 font-display text-display-sm font-bold text-navy-900">{topic.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{topic.description}</p>
                <p className="mt-5 text-sm font-semibold text-navy-800">Explore topic →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="featured-article-heading">
        <div className="container-site">
          <div className="grid items-stretch gap-8 xl:grid-cols-[minmax(0,1.18fr)_minmax(20rem,0.82fr)]">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
              <div className="border-b border-slate-200 bg-navy-900 px-6 py-6 md:px-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
                    Editor&apos;s Pick
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-300">
                    {featuredPost.displayDate} · {featuredPost.readTime}
                  </span>
                </div>
                <h2
                  id="featured-article-heading"
                  className="mt-5 font-display text-display-lg font-bold text-white"
                >
                  {featuredPost.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="grid gap-8 px-6 py-6 md:px-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Why this article matters
                  </p>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    {featuredPreviewParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link href={`/blog/${featuredPost.slug}`} className="btn btn-primary btn-md">
                      Read the Full Article
                    </Link>
                    <Link href={featuredPost.serviceHref} className="btn btn-outline btn-md">
                      {featuredPost.serviceLabel}
                    </Link>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Key Takeaways
                  </p>
                  <div className="mt-4 space-y-4">
                    {featuredPost.keyTakeaways.map((takeaway) => (
                      <div key={takeaway} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                        <p className="text-sm leading-relaxed text-slate-700">{takeaway}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Latest Articles
                </p>
                <div className="mt-4 space-y-4">
                  {latestPosts.slice(0, 4).map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block rounded-2xl border border-slate-200 px-4 py-4 transition-colors hover:border-sky-300 hover:bg-sky-50/40"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                        {post.category}
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-navy-900">{post.title}</h3>
                      <p className="mt-2 text-sm text-slate-500">
                        {post.displayDate} · {post.readTime}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="latest-articles-heading">
        <div className="container-site">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="badge-sky">Latest Articles</span>
              <h2 id="latest-articles-heading" className="mt-4 font-display text-display-lg font-bold text-navy-900">
                Read across the full safety systems mix.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
                The blog is designed to help you compare systems, understand practical use cases,
                and make more confident decisions before a survey or upgrade.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        headline="Need help turning guidance into a site plan?"
        subheading="If you have read enough and want practical advice for your building, we can help you prioritise the right next step."
        primaryCTA={{ label: 'Book a Free Site Survey', href: '/contact' }}
        secondaryCTA={{ label: 'Call Us', phone: true }}
        note="Advice is tailored to your site, procedures, and operational priorities."
      />
    </>
  )
}
