import Image from 'next/image'

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-3 py-1.5 sm:px-10 sm:py-2">
        <Image
          src="/logo-full-mark.png"
          alt="Disha Caroline Image Consulting"
          width={950}
          height={780}
          className="h-16 w-auto object-contain sm:h-24"
          priority
        />

        <a
          href="#enquiry"
          className="hidden cursor-pointer rounded-full bg-primary px-6 py-2.5 text-sm font-medium whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block sm:justify-self-end"
        >
          Request a Discovery Call
        </a>

        <a
          href="#enquiry"
          className="cursor-pointer rounded-full bg-primary px-3 py-2 text-[10px] font-medium whitespace-nowrap text-primary-foreground transition-opacity hover:opacity-90 sm:hidden"
        >
          Request a Discovery Call
        </a>
      </div>
    </header>
  )
}
