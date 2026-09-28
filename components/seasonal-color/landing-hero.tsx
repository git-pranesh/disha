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
    <section className="relative overflow-hidden bg-[#faf8f5] border-b border-border/60 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6 order-2 lg:order-1">
            
            {/* Elegant Kicker / Credential Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
                Disha Caroline
              </span>
              <span className="size-1 rounded-full bg-gold/40" />
              <span className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
                Image &amp; Colour Expert
              </span>
            </div>

            {/* High-Impact Editorial Serif Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-normal leading-[1.12] text-foreground tracking-tight text-balance">
              Wearing the Wrong Colours Silently Drains Your Presence
            </h1>

            {/* Concise Editorial Narrative */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-normal">
              Your clothes should illuminate your natural complexion, not compete with it. A bespoke 12-season colour analysis uncovers the exact contrast and undertones that make you look rested, radiant, and authoritative.
            </p>

            {/* Primary Action Button */}
            <div className="w-full sm:w-auto pt-2 flex flex-col items-start gap-2.5">
              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-center text-sm sm:text-base font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-all"
              >
                Discover Your 12 Season Colour Palette &rarr;
              </a>
              <span className="text-xs text-muted-foreground">
                1-on-1 Consultations in Chennai, Dubai or virtually worldwide.
              </span>
            </div>

            {/* Seamless Trust & Authority Bar - Integrated, No Floating Box */}
            <div className="w-full pt-4 mt-2 border-t border-border/80 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              
              {/* AICI Member Badge */}
              <div className="flex items-center gap-3 shrink-0">
                <Image
                  src="/aici-member-logo.png"
                  alt="AICI Member - Association of Image Consultants International"
                  width={160}
                  height={140}
                  className="h-12 w-auto object-contain"
                  priority
                />
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider">
                    AICI Member
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    Internationally Certified
                  </span>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-border" />

              {/* Global Reach */}
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Active Clients Across
                </span>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  {COUNTRIES.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1 text-xs font-medium text-foreground/90"
                    >
                      <span>{c.flag}</span>
                      <span className="text-[11px] text-muted-foreground">{c.name}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Large Editorial Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none aspect-[3/4] overflow-hidden rounded-3xl shadow-xl ring-1 ring-border/80 bg-muted">
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
    </section>
  )
}



