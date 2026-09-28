import Image from 'next/image'

export function LandingFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-10 text-center md:px-10">
        <Image
          src="/logo-full-mark.png"
          alt="Disha Caroline Image Consulting"
          width={950}
          height={780}
          className="h-20 w-auto object-contain sm:h-28"
        />
        <p className="text-xs text-muted-foreground">
          &copy; 2026 Disha Caroline Image Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
