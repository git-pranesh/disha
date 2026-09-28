import Image from 'next/image'

const PILLARS = [
  {
    title: 'Complexion Glow',
    description: 'Correct undertones eliminate sallow tints and soften dark shadows naturally.',
    image: '/images/placeholder-flattering-colour-portrait-woman.png',
    alt: 'Natural skin glow with matching colour',
  },
  {
    title: 'Authority & Gravitas',
    description: 'Harmonious depth commands respect in boardrooms without looking severe.',
    image: '/images/service-executive-presence.png',
    alt: 'Executive presence and authority',
  },
  {
    title: 'Feature Harmony',
    description: 'Your clothes frame your face seamlessly instead of competing with your eyes.',
    image: '/images/seasonal-landing-colorwheel.png',
    alt: '12-season colour harmony',
  },
  {
    title: 'Lasting Presence',
    description: 'People remember your vibrant energy and warmth long after you leave the room.',
    image: '/images/service-personal-branding.png',
    alt: 'Memorable presence',
  },
]

export function MoodSection() {
  return (
    <section className="bg-secondary/40 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            The Psychology of Colour
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-4xl text-balance text-foreground">
            Colour Changes How You&apos;re Seen
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
            Before someone reads your resume or listens to your pitch, their brain registers visual harmony within 3 seconds. The right seasonal palette doesn&apos;t just change your wardrobe&mdash;it recalibrates how others perceive your competence, energy, and poise.
          </p>
        </div>

        {/* Compact cards with small thumbnail images - minimal mobile scrolling */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col rounded-2xl border border-border/80 bg-background p-3.5 sm:p-4 shadow-xs"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="relative size-10 sm:size-11 shrink-0 overflow-hidden rounded-xl ring-1 ring-border/80">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-serif text-xs sm:text-sm font-semibold text-foreground leading-snug">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary CTA */}
        <div className="mt-8 flex flex-col items-center">
          <a
            href="#enquiry"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            Discover Your 12 Season Colour Palette &rarr;
          </a>
          <span className="mt-1.5 text-xs text-muted-foreground">
            A single 1-on-1 session unlocks your lifelong palette.
          </span>
        </div>
      </div>
    </section>
  )
}

