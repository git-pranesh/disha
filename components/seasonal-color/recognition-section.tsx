import Image from 'next/image'

const SIGNS = [
  {
    image: '/images/seasonal-landing-colorwheel.png',
    alt: 'Munsell colour undertone system and temperature swatches',
    title: 'Told You Look Tired',
    colorDetail: 'Cool or mismatched undertones drain natural warmth from your skin, casting dull, sallow shadows.',
  },
  {
    image: '/images/service-color-analysis.png',
    alt: 'Professional fabric draping boards and seasonal neutral swatches',
    title: 'The Neutral Trap',
    colorDetail: 'Defaulting to safe black and grey when your complexion actually needs warmth, depth, or clarity.',
  },
  {
    image: '/images/placeholder-colour-wheel-and-colour-boards.png',
    alt: 'Lipstick, cosmetic, and foundation tone matching swatches',
    title: 'Shades Feel Off',
    colorDetail: 'Lipsticks, shirts, and ties clashing because their undertone temperature fights your natural pigments.',
  },
  {
    image: '/images/service-image-revamping.png',
    alt: '12-season personal colour palette and swatch cards',
    title: 'The Unworn Clothes',
    colorDetail: 'Striking colours bought on impulse that overpower your personal contrast level when worn.',
  },
]

export function RecognitionSection() {
  return (
    <section className="bg-background border-b border-border/60 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Wardrobe Reality Check
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl text-balance text-foreground font-normal">
            Does This Sound Familiar?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Using the Munsell colour system, Disha diagnoses the exact undertone and contrast disconnects that cause everyday wardrobe frustration.
          </p>
        </div>

        {/* 2 rows max on mobile (grid-cols-2), 4 columns on desktop - showing colors and writing a little about colors */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {SIGNS.map((sign) => (
            <div
              key={sign.title}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-border/80 shadow-xs bg-muted">
                <Image
                  src={sign.image}
                  alt={sign.alt}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 45vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-col gap-1 pt-1">
                <h3 className="font-serif text-xs sm:text-base font-semibold text-foreground leading-snug">
                  {sign.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                  {sign.colorDetail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}






