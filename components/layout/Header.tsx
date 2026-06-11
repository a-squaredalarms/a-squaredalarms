'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS, BRAND } from '@/lib/data'
import type { NavItem } from '@/types'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isActivePath(href: string, pathname: string): boolean {
  if (!href || href === '#') return false
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

// ─── Phone CTA ────────────────────────────────────────────────────────────────

function PhoneCTA() {
  return (
    <a
      href={`tel:${BRAND.phone.replace(/[\s()\-]/g, '')}`}
      className="hidden lg:flex items-center gap-2 text-sm font-semibold text-navy-800 hover:text-sky-600 transition-colors"
      aria-label={`Call us on ${BRAND.phone}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-600">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 10a19.79 19.79 0 01-3.07-8.67A2 2 0 013.4 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.09 6.09l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      </span>
      {BRAND.phone}
    </a>
  )
}

// ─── Desktop Dropdown ─────────────────────────────────────────────────────────

function NavDropdown({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const isChildActive = item.children?.some(c => isActivePath(c.href, pathname)) ?? false

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <div ref={ref} className="relative group h-full flex items-center">
      <button
        type="button"
        onClick={() => setIsOpen(v => !v)}
        className={`group/nav relative inline-flex items-center gap-1 self-stretch text-sm font-semibold transition-colors py-2 px-3 ${
          isChildActive || isOpen ? 'text-navy-800' : 'text-slate-700 hover:text-navy-800'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="relative inline-flex items-center gap-1">
          <span>{item.label}</span>
          <svg
            className={`h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
          <span
            className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-sky-400 transition-transform duration-200 ${
              isChildActive || isOpen ? 'scale-x-100' : 'scale-x-0 group-hover/nav:scale-x-100'
            }`}
            aria-hidden="true"
          />
        </span>
      </button>

      <div
        role="menu"
        className={`absolute top-full left-0 w-56 bg-white rounded-xl border border-slate-200 shadow-xl py-1.5 z-50 group-hover:block ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {item.children?.map((child) => {
          const active = isActivePath(child.href, pathname)
          return (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className={`group/item flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                active ? 'text-navy-800 font-semibold' : 'text-slate-700 hover:text-navy-800'
              }`}
            >
              <span className="relative inline-flex">
                <span>{child.label}</span>
                <span
                  className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-sky-400 transition-transform duration-200 group-hover/item:scale-x-100"
                  aria-hidden="true"
                />
              </span>
              {child.badge && <span className="badge-sky text-xs">{child.badge}</span>}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────

function MobileMenu({
  isOpen,
  menuRef,
  onToggle,
  onClose,
}: {
  isOpen: boolean
  menuRef: React.RefObject<HTMLDetailsElement | null>
  onToggle: (open: boolean) => void
  onClose: () => void
}) {
  const pathname = usePathname()

  return (
    <details
      ref={menuRef}
      className="group lg:hidden ml-auto"
      onToggle={(e) => onToggle(e.currentTarget.open)}
    >
      <summary
        className="relative z-[1000] flex cursor-pointer list-none items-center rounded-lg p-2 text-slate-900 transition-all duration-150 hover:bg-slate-100 group-open:pointer-events-none group-open:opacity-0 [&::-webkit-details-marker]:hidden"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation-panel"
        aria-expanded={isOpen}
      >
        <svg
          className="block h-[22px] w-[22px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </summary>

      <div
        className="pointer-events-none fixed inset-0 z-[998] bg-navy-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-open:pointer-events-auto group-open:opacity-100"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-navigation-panel"
        className="fixed inset-y-0 right-0 z-[999] flex w-full max-w-sm translate-x-full flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-in-out group-open:translate-x-0"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className="p-4 flex-1">
          <div className="mb-3 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <details key={item.label} className="group/detail">
                  <summary className="flex items-center justify-between px-3 py-3 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50 cursor-pointer list-none select-none">
                    {item.label}
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-open/detail:rotate-180"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-sky-200 pl-3">
                    {item.children.map((child) => {
                      const active = isActivePath(child.href, pathname)
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className={`flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors ${
                            active
                              ? 'bg-navy-50 text-navy-800 font-semibold'
                              : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                          }`}
                        >
                          {child.label}
                          {child.badge && <span className="badge-sky">{child.badge}</span>}
                        </Link>
                      )
                    })}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`block px-3 py-3 text-sm font-semibold rounded-lg transition-colors ${
                    isActivePath(item.href, pathname)
                      ? 'bg-navy-50 text-navy-800'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-navy-800'
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-200 space-y-3 shrink-0">
          <a
            href={`tel:${BRAND.phone.replace(/[\s()\-]/g, '')}`}
            className="btn btn-outline btn-md w-full"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 10a19.79 19.79 0 01-3.07-8.67A2 2 0 013.4 1.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006.09 6.09l1.09-1.09a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            {BRAND.phone}
          </a>
          <Link href="/contact" className="btn btn-primary btn-md w-full" onClick={onClose}>
            Get a Free Quote
          </Link>
        </div>
      </div>
    </details>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDetailsElement>(null)
  const scrollYRef = useRef(0)

  const closeMobileMenu = () => {
    const activeElement = document.activeElement

    if (activeElement instanceof HTMLElement && mobileMenuRef.current?.contains(activeElement)) {
      activeElement.blur()
    }

    if (mobileMenuRef.current?.open) {
      mobileMenuRef.current.open = false
    }
    setMobileOpen(false)
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(Boolean(mobileMenuRef.current?.open))
  }, [])

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth < 1024) return
      if (mobileMenuRef.current?.open) {
        mobileMenuRef.current.open = false
      }
      setMobileOpen(false)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  // Close mobile menu on navigation — safe here because Header is always mounted
  useEffect(() => {
    if (mobileMenuRef.current?.open) {
      mobileMenuRef.current.open = false
    }
    setMobileOpen(false)
  }, [pathname])

  // Lock page scroll without clipping the mobile drawer on smaller browsers.
  useEffect(() => {
    if (!mobileOpen) return

    const body = document.body

    scrollYRef.current = window.scrollY
    body.style.position = 'fixed'
    body.style.top = `-${scrollYRef.current}px`
    body.style.width = '100%'

    return () => {
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      window.scrollTo(0, scrollYRef.current)
    }
  }, [mobileOpen])

  return (
    <>
      {/* Compliance banner */}
      <div className="bg-[#e8642f] text-white text-sm font-semibold py-2.5">
        <div className="container-site flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <span>Martyn&#39;s Law guidance updated in April 2026 — is your organisation prepared?</span>
          <Link
            href="/compliance"
            className="font-bold underline underline-offset-4 decoration-white/80 hover:decoration-white transition-colors whitespace-nowrap"
          >
            Check your obligations →
          </Link>
        </div>
      </div>

      <header
        className={`sticky top-0 z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-md border-b border-slate-200'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="container-site">
          <div className="flex h-16 md:h-18 items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" aria-label="A-Squared Alarms — Home">
              <Image
                src="/logo-dark.webp"
                alt="A-Squared Alarms"
                width={160}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-stretch h-full gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <NavDropdown key={item.label} item={item} />
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group inline-flex items-center self-stretch px-3 text-sm font-semibold transition-colors ${
                      isActivePath(item.href, pathname) ? 'text-navy-800' : 'text-slate-700 hover:text-navy-800'
                    }`}
                  >
                    <span className="relative inline-flex">
                      <span>{item.label}</span>
                      <span
                        className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-sky-400 transition-transform duration-200 ${
                          isActivePath(item.href, pathname) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <PhoneCTA />
              <Link href="/contact" className="btn btn-primary btn-sm">
                Get a Free Quote
              </Link>
            </div>

            <MobileMenu
              isOpen={mobileOpen}
              menuRef={mobileMenuRef}
              onToggle={setMobileOpen}
              onClose={closeMobileMenu}
            />
          </div>
        </div>
      </header>
    </>
  )
}
