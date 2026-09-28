import Image from 'next/image'

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2 sm:px-8 sm:py-2.5">
        <Image
          src="/logo-full-mark.png"
          alt="Disha Caroline Image Consulting"
          width={950}
          height={780}
          className="h-20 w-auto object-contain object-left sm:h-28"
          priority
        />

        <a
          href="#enquiry"
          className="shrink-0 rounded-full bg-primary px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm font-medium whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-90 shadow-xs"
        >
          Request a Discovery Call
        </a>
      </div>
    </header>
  )
}

