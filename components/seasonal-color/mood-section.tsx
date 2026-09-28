import Image from 'next/image'

const PILLARS = [
  {
    title: 'Complexion Glow',
    image: '/images/placeholder-flattering-colour-portrait-woman.png',
    alt: 'Natural skin glow with matching colour',
  },
  {
    title: 'Authority & Gravitas',
    image: '/images/service-executive-presence.png',
    alt: 'Executive presence and authority',
  },
  {
    title: 'Feature Harmony',
    image: '/images/seasonal-landing-colorwheel.png',
    alt: '12-season colour harmony',
  },
  {
    title: 'Lasting Presence',
    image: '/images/service-personal-styling.png',
    alt: 'Memorable presence and personal styling',
  },
]

export function MoodSection() {
  return (
    <section className="bg-secondary/40 py-10 sm:py-16 border-b border-border/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            The Psychology of Colour
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl text-balance text-foreground font-normal">
            Colour Changes How You&apos;re Seen
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Your colours shape perceptions within seconds. The right palette projects instant vitality, clarity, and quiet authority.
          </p>
        </div>

        {/* Seamless Editorial Layout - No Clunky Boxes, No Subtext */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center text-center gap-2.5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-border/80 shadow-xs bg-muted">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 45vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-xs sm:text-base font-medium text-foreground leading-snug">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-center text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity whitespace-normal leading-snug"
          >
            Discover Your 12 Season Colour Palette &rarr;
          </a>
          <span className="mt-2 text-xs text-muted-foreground text-center">
            A single 1-on-1 session unlocks your lifelong palette.
          </span>
        </div>
      </div>
    </section>
  )
}



