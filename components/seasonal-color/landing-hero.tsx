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
    <section className="bg-secondary/70 border-b border-border/60 py-8 sm:py-14">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Disha Profile & Credentials Bar at Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-2xl bg-background/90 p-4 sm:p-5 shadow-sm border border-border/80">
          <div className="relative size-20 sm:size-24 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/40 shadow-sm">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Disha Caroline - Image and Color Expert"
              fill
              sizes="(min-width: 640px) 96px, 80px"
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="flex flex-1 flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              <span className="font-serif text-lg sm:text-xl font-medium text-foreground">
                Disha Caroline
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-primary">
                Image and Color Expert
              </span>
              <div className="relative h-6 w-7 shrink-0" title="AICI Member">
                <Image
                  src="/aici-member-logo.png"
                  alt="AICI Member Logo"
                  fill
                  sizes="28px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Country flags */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 pt-0.5">
              <span className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider mr-1">
                Clients across:
              </span>
              {COUNTRIES.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-1 rounded-md bg-secondary/80 px-1.5 py-0.5 text-xs text-foreground/90 font-medium"
                >
                  <span>{c.flag}</span>
                  <span className="text-[11px]">{c.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Pain Point Narrative & Hook */}
        <div className="mt-8 sm:mt-12 flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            The Wardrobe Paradox
          </span>

          <h1 className="mt-3 font-serif text-2xl sm:text-4xl md:text-5xl leading-[1.2] text-balance text-foreground max-w-3xl">
            You Spent Good Money on Your Clothes. Why Do You Still Look Tired and Washed Out?
          </h1>

          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            You buy what looks magnificent on the hanger. You get 8 full hours of rest. Yet the mirror still catches dull skin, dark under-eye shadows, and an outfit that completely overpowers you. Why does getting dressed feel like a battle against your own reflection?
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2.5">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm sm:text-base font-medium text-primary-foreground shadow-md transition-all hover:opacity-90 hover:shadow-lg"
            >
              Discover Your 12 Season Colour Palette &rarr;
            </a>
            <span className="text-xs text-muted-foreground">
              Personalized 1-on-1 Consultation · Available in-person &amp; virtually
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

