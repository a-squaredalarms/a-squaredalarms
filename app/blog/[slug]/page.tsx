import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BASE_URL, buildMetadata, buildFAQSchema, buildBreadcrumbSchema, clampDescription } from '@/lib/seo'
import { BLOG_POSTS, getBlogPostBySlug, getRelatedBlogPosts } from '@/lib/blog'
import { CTASection } from '@/components/sections/CTASection'
import { SoundLibrary } from '@/components/sections/SoundLibrary'
import type { BlogPost } from '@/types'

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}

  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: clampDescription(post.seoDescription ?? post.excerpt),
    canonical: `https://a-squaredalarms.com/blog/${post.slug}`,
    ogImage: post.image?.src ?? `${BASE_URL}/images/blog/${post.slug}.jpg`,
    keywords: [
      post.category,
      `${post.category} guidance`,
      'A-Squared Alarms blog',
      post.title,
    ],
  })
}

function getPost(slug: string): BlogPost {
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()
  return post
}

function RelatedArticleCard({
  post,
}: {
  post: BlogPost
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="card-hover h-full p-6">
      <span className="badge-sky">{post.category}</span>
      <h3 className="mt-5 font-display text-display-sm font-bold text-navy-900">{post.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="text-xs uppercase tracking-[0.16em] text-slate-400">{post.displayDate}</span>
        <span className="text-sm font-semibold text-navy-800">Read article →</span>
      </div>
    </Link>
  )
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  const relatedPosts = getRelatedBlogPosts(post.slug, 3)
  const articleSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: `https://a-squaredalarms.com/blog/${post.slug}`,
    image: [post.image?.src ?? `${BASE_URL}/images/blog/${post.slug}.jpg`],
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'A-Squared Alarms',
      url: 'https://a-squaredalarms.com',
    },
  })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema }} />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: buildFAQSchema(post.faqs) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: buildBreadcrumbSchema([
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        }}
      />


      <section className="relative overflow-hidden bg-navy-900" aria-label="Blog article hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(110,193,228,0.18),transparent_48%)]" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: '44px 44px',
          }}
          aria-hidden="true"
        />

        <div className="container-site py-16 md:py-20">
          <div className="max-w-4xl space-y-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-slate-400">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/blog" className="transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-white">{post.title}</li>
              </ol>
            </nav>

            <div className="flex flex-wrap gap-3">
              <span className="badge border border-sky-400/30 bg-sky-400/15 text-sky-300">
                {post.category}
              </span>
              <span className="badge border border-white/15 bg-white/10 text-slate-300">
                {post.displayDate}
              </span>
              <span className="badge border border-white/15 bg-white/10 text-slate-300">
                {post.readTime}
              </span>
            </div>

            <h1 className="font-display text-display-2xl font-extrabold leading-[1.03] text-white">
              {post.title}
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white" aria-labelledby="article-content-heading">
        <div className="container-site">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_20rem]">
            <article className="space-y-6">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 md:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Article Overview
                </p>
                <h2 id="article-content-heading" className="mt-4 font-display text-display-sm font-bold text-navy-900">
                  Practical guidance for real-world site decisions.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                  {post.excerpt}
                </p>
              </div>

              {post.atAGlance && post.atAGlance.length > 0 && (
                <div className="rounded-[2rem] border-2 border-sky-200 bg-sky-50/50 p-6 md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sky-700">
                    At a Glance
                  </p>
                  <ul className="mt-4 space-y-3">
                    {post.atAGlance.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm leading-relaxed text-navy-900 md:text-base">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link href="/contact" className="btn btn-primary btn-md">
                      Get a Free Quote
                    </Link>
                    <Link href={post.serviceHref} className="btn btn-outline btn-md">
                      {post.serviceLabel}
                    </Link>
                  </div>
                </div>
              )}

              {post.image && (
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-card">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    width={1024}
                    height={403}
                    className="h-auto w-full"
                  />
                </div>
              )}

              {post.sections.map((section, index) => (
                <section key={section.heading} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Section 0{index + 1}
                  </p>
                  <h2 className="mt-4 font-display text-display-sm font-bold text-navy-900">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-5 space-y-3 rounded-2xl bg-slate-50 p-5">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500"
                            aria-hidden="true"
                          />
                          <span className="text-sm leading-relaxed text-slate-700 md:text-base">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {post.soundLibrary && <SoundLibrary />}

              {post.comparison && (
                <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card md:p-8">
                  <h2 className="font-display text-display-sm font-bold text-navy-900">
                    {post.comparison.title}
                  </h2>
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                      <thead>
                        <tr className="border-b-2 border-navy-900">
                          <th scope="col" className="py-3 pr-4 font-bold text-navy-900">
                            Option
                          </th>
                          {post.comparison.columns.map((column) => (
                            <th key={column} scope="col" className="px-4 py-3 font-bold text-navy-900">
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {post.comparison.rows.map((row) => (
                          <tr key={row.label} className="border-b border-slate-200">
                            <th scope="row" className="py-3 pr-4 font-semibold text-navy-900">
                              {row.label}
                            </th>
                            {row.cells.map((cell, cellIndex) => (
                              <td
                                key={`${row.label}-${post.comparison?.columns[cellIndex] ?? cellIndex}`}
                                className="px-4 py-3 text-slate-600"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {post.faqs && post.faqs.length > 0 && (
                <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Frequently Asked
                  </p>
                  <h2 className="mt-4 font-display text-display-sm font-bold text-navy-900">
                    Questions we get asked about this
                  </h2>
                  <div className="mt-5 divide-y divide-slate-200">
                    {post.faqs.map((faq) => (
                      <details key={faq.question} className="group py-4">
                        <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-navy-900 marker:hidden">
                          {faq.question}
                          <span
                            className="mt-1 flex-shrink-0 text-sky-600 transition-transform group-open:rotate-45"
                            aria-hidden="true"
                          >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </span>
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              <div className="rounded-[2rem] border border-slate-200 bg-navy-900 p-6 md:p-8">
                <h2 className="font-display text-display-sm font-bold text-white">
                  Need help applying this to your site?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  We can turn the principles in this article into a practical recommendation based on
                  your building, procedures, and response priorities.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href={post.serviceHref} className="btn btn-accent btn-md">
                    {post.serviceLabel}
                  </Link>
                  <Link
                    href="/contact"
                    className="btn btn-md border-2 border-white/30 text-white hover:border-white hover:bg-white hover:text-navy-900"
                  >
                    Book a Free Site Survey
                  </Link>
                </div>
              </div>
            </article>

            <aside className="space-y-5 xl:sticky xl:top-24 xl:self-start">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Key Takeaways
                </p>
                <div className="mt-4 space-y-4">
                  {post.keyTakeaways.map((takeaway) => (
                    <div key={takeaway} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden="true" />
                      <p className="text-sm leading-relaxed text-slate-700">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-card">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Related Service
                </p>
                <h2 className="mt-4 font-display text-display-sm font-bold text-navy-900">
                  {post.category}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  If this article reflects the kind of issue you are working through, the related
                  service page is the best next step.
                </p>
                <Link href={post.serviceHref} className="mt-5 inline-flex text-sm font-semibold text-navy-800 hover:text-sky-700">
                  {post.serviceLabel} →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-slate-50" aria-labelledby="related-articles-heading">
        <div className="container-site">
          <div className="mb-8 max-w-3xl">
            <span className="badge-sky">Related Articles</span>
            <h2 id="related-articles-heading" className="mt-4 font-display text-display-lg font-bold text-navy-900">
              Keep reading across the wider system mix.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Most sites do not make decisions in isolation. These related articles help connect one
              system choice to the wider planning picture.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <RelatedArticleCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="navy"
        headline="Want advice specific to your building and team?"
        subheading="We can help you move from general guidance to a clear, site-specific recommendation."
        primaryCTA={{ label: 'Get a Free Site Survey', href: '/contact' }}
        secondaryCTA={{ label: 'Call Us', phone: true }}
      />
    </>
  )
}
