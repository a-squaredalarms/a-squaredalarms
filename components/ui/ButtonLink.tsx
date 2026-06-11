import Link from 'next/link'

interface ButtonLinkProps {
  href: string
  className?: string
  ariaLabel?: string
  children: React.ReactNode
}

function isPlainAnchor(href: string) {
  return href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')
}

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://')
}

export function ButtonLink({ href, className, ariaLabel, children }: ButtonLinkProps) {
  if (isPlainAnchor(href) || isExternalHref(href)) {
    return (
      <a
        href={href}
        className={className}
        aria-label={ariaLabel}
        {...(isExternalHref(href) ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}
