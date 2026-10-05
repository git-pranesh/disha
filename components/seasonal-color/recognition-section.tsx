import Image from 'next/image'

const SIGNS = [
  {
    image: '/images/seasonal-landing-colorwheel.png',
    alt: 'Munsell colour undertone system',
    title: 'Told You Look Tired',
  },
  {
    image: '/images/service-color-analysis.png',
    alt: 'Professional fabric draping boards',
    title: 'The Neutral Trap',
  },
  {
    image: '/images/placeholder-colour-wheel-and-colour-boards.png',
    alt: 'Lipstick and cosmetic shade swatches',
    title: 'Shades Feel Off',
  },
  {
    image: '/images/service-image-revamping.png',
    alt: '12-season personal colour palette',
    title: 'The Unworn Wardrobe',
  },
]

export function RecognitionSection() {
  return (
    <section className="bg-background border-b border-border/60 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        
        {/* Section Header with Munsell Color System methodology */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            The Munsell Colour System
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl text-balance text-foreground font-normal">
            Does This Sound Familiar?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Using the scientifically validated Munsell 12-season colour system, Disha diagnoses the exact hue, value, and chroma disconnects that cause common wardrobe frustrations.
          </p>
        </div>

        {/* 2 rows max on mobile (grid-cols-2), 4 columns on desktop - professional colour analysis tools instead of stock portraits */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {SIGNS.map((sign) => (
            <div
              key={sign.title}
              className="flex flex-col items-center text-center gap-2.5"
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

              <h3 className="font-serif text-xs sm:text-base font-medium text-foreground leading-snug">
                {sign.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}





