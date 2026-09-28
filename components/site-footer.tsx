import Image from 'next/image'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Trainings & Courses', href: '/services' },
  { label: 'Workshops & Lectures', href: '/workshops' },
  { label: 'Transformations', href: '/transformations' },
  { label: 'Contact', href: '/contact' },
]

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11 16.5v-6M11 12c0-.9.9-1.5 2-1.5s2 .6 2 1.5v4.5" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://instagram.com/dishacaroline', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dishacaroline', Icon: LinkedinIcon },
]

export function SiteFooter() {
  return (
    <footer className="bg-deep">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-20 sm:grid-cols-[1.3fr_1fr_1fr] md:px-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-crown-icon-gold.png"
              alt=""
              width={139}
              height={121}
              className="h-11 w-auto object-contain"
            />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[26px] tracking-wide whitespace-nowrap text-white">
                Disha Caroline
              </span>
              <span className="text-[11px] tracking-[0.3em] whitespace-nowrap text-gold uppercase">
                Image Consulting
              </span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Internationally Certified Image &amp; Branding Consultant
          </p>
          <div className="mt-1 flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs tracking-[0.2em] text-gold uppercase">Navigate</span>
          <nav className="flex flex-col gap-3.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="cursor-pointer text-sm text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs tracking-[0.2em] text-gold uppercase">Connect</span>
          <div className="flex flex-col gap-3.5 text-sm text-white/65">
            <Link
              href="mailto:hello@dishacaroline.com"
              className="cursor-pointer transition-colors hover:text-white"
            >
              hello@dishacaroline.com
            </Link>
            <span>Chennai &middot; Dubai &middot; Singapore</span>
            <span>Mon to Sat, 11 AM onwards</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 border-t border-white/10 px-6 py-6 text-center text-xs text-white/40 sm:flex-row sm:justify-between md:px-10">
        <span>&copy; 2025 Disha Caroline Image Consulting. All rights reserved.</span>
        <Link href="#" className="cursor-pointer transition-colors hover:text-white/70">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
