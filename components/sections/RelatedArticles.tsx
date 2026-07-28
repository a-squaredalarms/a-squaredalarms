import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/blog'

/**
 * Renders a small set of blog posts on a service page. Passing explicit slugs
 * keeps the pairing editorial rather than automatic, so each service page links
 * to the articles a reader on that page would actually want next.
 */
export function RelatedArticles({
  slugs,
  heading = 'Read before you buy',
  subheading,
}: {
  slugs: string[]
  heading?: string
  subheading?: string
}) {
  const posts = slugs
    .map((slug) => BLOG_POSTS.find((post) => post.slug === slug))
    .filter((post): post is NonNullable<typeof post> => Boolean(post))

  if (posts.length === 0) return null

  return (
    <section className="section-spacing bg-slate-50" aria-labelledby="related-articles-heading">
      <div className="container-site">
        <div className="mb-8 max-w-3xl">
          <span className="badge-sky">Guides &amp; Advice</span>
          <h2
            id="related-articles-heading"
            className="mt-4 font-display text-display-lg font-bold text-navy-900"
          >
            {heading}
          </h2>
          {subheading && (
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">{subheading}</p>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group card-hover flex h-full flex-col p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="badge-navy shrink-0 whitespace-nowrap">{post.category}</span>
                <span className="text-xs font-medium text-slate-400">{post.readTime}</span>
              </div>
              <h3 className="mt-5 font-display text-display-sm font-bold text-navy-900">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
              <span className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold text-navy-800 transition-colors group-hover:text-sky-700">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/blog" className="btn btn-outline btn-md">
            View All Guides
          </Link>
        </div>
      </div>
    </section>
  )
}
