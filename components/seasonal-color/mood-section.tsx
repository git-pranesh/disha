import Image from 'next/image'

const PILLARS = [
  {
    title: 'Complexion Glow',
    description: 'Eliminates sallow undertones and softens dark circles naturally.',
    image: '/images/placeholder-flattering-colour-portrait-woman.png',
    alt: 'Natural skin glow with matching colour',
  },
  {
    title: 'Authority & Gravitas',
    description: 'Harmonious contrast commands respect without looking harsh.',
    image: '/images/service-executive-presence.png',
    alt: 'Executive presence and authority',
  },
  {
    title: 'Feature Harmony',
    description: 'Frames your eyes and facial structure rather than fighting them.',
    image: '/images/seasonal-landing-colorwheel.png',
    alt: '12-season colour harmony',
  },
  {
    title: 'Lasting Presence',
    description: 'Ensures you remain memorable and poised in any professional room.',
    image: '/images/service-personal-styling.png',
    alt: 'Memorable presence and personal styling',
  },
]

export function MoodSection() {
  return (
    <section className="bg-secondary/40 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            The Psychology of Colour
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl text-balance text-foreground">
            Colour Changes How You&apos;re Seen
          </h2>
          {/* Short concise subtext without long paragraphs */}
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Your colours shape perceptions within seconds. The right palette projects instant vitality, clarity, and quiet authority.
          </p>
        </div>

        {/* Compact cards with properly covered images */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-2xl border border-border/80 bg-background p-3 sm:p-4 shadow-xs"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted/40 mb-3 ring-1 ring-border/60">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 45vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-sm sm:text-base font-semibold text-foreground leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href="#enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-center text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            Discover Your 12 Season Colour Palette &rarr;
          </a>
          <span className="mt-1.5 text-xs text-muted-foreground text-center">
            A single 1-on-1 session unlocks your lifelong palette.
          </span>
        </div>
      </div>
    </section>
  )
}


