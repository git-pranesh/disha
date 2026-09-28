'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Trainings & Courses', href: '/services' },
  { label: 'Workshops & Lectures', href: '/workshops' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader({ forceLight = false }: { forceLight?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const headerRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function measure() {
      if (headerRowRef.current) {
        setHeaderHeight(headerRowRef.current.offsetHeight)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isLight = scrolled || menuOpen || forceLight

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isLight
          ? 'bg-background shadow-[0_1px_0_0_var(--border)]'
          : 'bg-gradient-to-b from-black/45 via-black/15 to-transparent'
      }`}
    >
      <div
        ref={headerRowRef}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10"
      >
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Disha Caroline home">
          <Image
            src="/logo-crown-icon-gold.png"
            alt=""
            width={139}
            height={121}
            className="h-11 w-auto object-contain sm:h-14"
            priority
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-2xl tracking-wide whitespace-nowrap transition-colors sm:text-[32px] ${
                isLight ? 'text-foreground' : 'text-white'
              }`}
            >
              Disha Caroline
            </span>
            <span
              className={`text-[10px] tracking-[0.3em] whitespace-nowrap uppercase transition-colors sm:text-xs ${
                isLight ? 'text-muted-foreground' : 'text-white/80'
              }`}
            >
              Image Consulting
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm whitespace-nowrap transition-opacity hover:opacity-70 ${
                isLight ? 'text-foreground' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="cursor-pointer rounded-full bg-primary px-4 py-2 text-sm whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-90"
          >
            Apply for a Consultation
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={`cursor-pointer p-1 lg:hidden ${isLight ? 'text-foreground' : 'text-white'}`}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{ top: headerHeight || undefined }}
          className="fixed inset-x-0 bottom-0 z-40 flex flex-col overflow-y-auto bg-primary px-8 py-10 lg:hidden"
        >
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-[28px] text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-10 cursor-pointer rounded-full bg-white px-6 py-3 text-center text-sm text-primary"
          >
            Apply for a Consultation
          </Link>
        </div>
      )}
    </header>
  )
}
