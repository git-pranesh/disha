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
    <section className="bg-secondary/60 border-b border-border/60 py-8 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5 order-2 lg:order-1">
            
            {/* Credentials & AICI Logo Bar */}
            <div className="w-full flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-background/90 p-3.5 sm:p-4 border border-border/80 shadow-xs">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-serif text-base sm:text-lg font-semibold text-foreground">
                    Disha Caroline
                  </span>
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Image and Color Expert
                  </span>
                </div>
                
                {/* Small Country Flags */}
                <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                  <span className="text-[11px] text-muted-foreground uppercase tracking-wider">
                    Clients in:
                  </span>
                  {COUNTRIES.map((c) => (
                    <span
                      key={c.name}
                      className="inline-flex items-center gap-1 rounded bg-secondary px-1.5 py-0.5 text-xs font-medium text-foreground"
                    >
                      <span>{c.flag}</span>
                      <span className="text-[11px]">{c.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Large, clearly visible AICI Logo */}
              <div className="flex items-center gap-2 shrink-0 border-l border-border/80 pl-3">
                <Image
                  src="/aici-member-logo.png"
                  alt="AICI Member - Association of Image Consultants International"
                  width={140}
                  height={128}
                  className="h-12 sm:h-14 w-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* Concise Pain Point Headline (No long texts) */}
            <div className="flex flex-col gap-2 pt-1">
              <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                Personal Seasonal Colour Analysis
              </span>
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-[42px] leading-tight text-foreground text-balance">
                Wearing the Wrong Colours Silently Drains Your Presence
              </h1>
            </div>

            {/* Short Punchy Subtext */}
            <p className="text-sm sm:text-base leading-normal text-muted-foreground max-w-xl">
              The wrong shades accentuate tiredness and wash you out. Your true 12-season palette illuminates your skin, sharpens your features, and commands effortless respect.
            </p>

            {/* Mobile-Audited Responsive CTA */}
            <div className="w-full sm:w-auto flex flex-col gap-2 pt-1">
              <a
                href="#enquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-center text-sm sm:text-base font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
              >
                Discover Your 12 Season Colour Palette &rarr;
              </a>
              <span className="text-xs text-muted-foreground text-center sm:text-left">
                Personal 1-on-1 consultation in Chennai, Dubai or virtually worldwide.
              </span>
            </div>
          </div>

          {/* Right Column: Standard Large Hero Image of Disha */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none aspect-[3/4] overflow-hidden rounded-3xl border border-border/80 shadow-lg ring-1 ring-gold/20">
              <Image
                src="/images/disha-hero.jpg"
                alt="Disha Caroline - Best Image Consultant and Colour Expert"
                fill
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 400px, 90vw"
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


