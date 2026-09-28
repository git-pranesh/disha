import Image from 'next/image'

const COUNTRIES = [
  { flag: '🇮🇳', name: 'India' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇲🇾', name: 'Malaysia' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇺🇸', name: 'USA' },
]

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-[#faf8f5] border-b border-border/60">
      
      {/* Main Hero Grid */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Copy & Call to Action */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6 order-2 lg:order-1">
            
            {/* Editorial Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
                Disha Caroline
              </span>
              <span className="size-1 rounded-full bg-gold/40" />
              <span className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
                Image &amp; Colour Expert
              </span>
            </div>

            {/* High-Impact Serif Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-normal leading-[1.12] text-foreground tracking-tight text-balance">
              Wearing the Wrong Colours Silently Drains Your Presence
            </h1>

            {/* Concise Editorial Narrative */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal">
              Your clothes should illuminate your natural complexion, not compete with it. A bespoke 12-season colour analysis uncovers the exact contrast and undertones that make you look rested, radiant, and authoritative.
            </p>

            {/* Primary Action Button */}
            <div className="w-full sm:w-auto pt-2 flex flex-col items-start gap-2">
              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-center text-sm sm:text-base font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-all whitespace-normal leading-snug"
              >
                Discover Your 12 Season Colour Palette &rarr;
              </a>
              <span className="text-xs text-muted-foreground">
                1-on-1 Consultations in Chennai, Dubai or virtually worldwide.
              </span>
            </div>

          </div>

          {/* Right Column: Large Editorial Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-none aspect-[3/4] overflow-hidden rounded-3xl shadow-xl ring-1 ring-border/80 bg-muted">
              <Image
                src="/images/disha-hero.jpg"
                alt="Disha Caroline - Best Image Consultant and Colour Expert"
                fill
                sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 90vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

        </div>
      </div>

      {/* Dedicated Credibility & Global Reach Ribbon - Zero Awkward Gaps */}
      <div className="border-t border-border/80 bg-background/80 py-4 sm:py-5">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-6 text-center sm:text-left">
            
            {/* AICI Member Credential */}
            <div className="flex items-center gap-3">
              <Image
                src="/aici-member-logo.png"
                alt="AICI Member Logo"
                width={140}
                height={120}
                className="h-9 sm:h-11 w-auto object-contain"
                priority
              />
              <div className="flex flex-col text-left">
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  AICI Member
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Association of Image Consultants International
                </span>
              </div>
            </div>

            <div className="hidden sm:block h-6 w-px bg-border/80" />

            {/* Active Clients Countries */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1.5 sm:gap-2">
              <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mr-1">
                Active Clients in:
              </span>
              {COUNTRIES.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs font-medium text-foreground"
                >
                  <span>{c.flag}</span>
                  <span className="text-[11px]">{c.name}</span>
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  )
}




