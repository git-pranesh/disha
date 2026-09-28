import Image from 'next/image'

const SIGNS = [
  {
    image: '/images/placeholder-unflattering-colour-portrait-woman.png',
    alt: 'Tired reflection',
    title: 'Told You Look Tired',
    caption: 'Even after a restful full night of sleep',
  },
  {
    image: '/images/placeholder-mens-colour-shirt-tie-blazer.png',
    alt: 'Default safe neutrals',
    title: 'The Neutral Trap',
    caption: 'Defaulting only to safe black, grey, and navy',
  },
  {
    image: '/images/placeholder-lipstick-shade-comparison-woman.png',
    alt: 'Mismatched shades',
    title: 'Shades Feel Off',
    caption: 'Lipsticks, shirts, and ties clashing with skin',
  },
  {
    image: '/images/placeholder-colour-wheel-and-colour-boards.png',
    alt: 'Unworn colourful clothes',
    title: 'The Unworn Clothes',
    caption: 'Gorgeous colours bought but never worn outside',
  },
]

export function RecognitionSection() {
  return (
    <section className="bg-card border-b border-border/60 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Wardrobe Reality Check
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-balance text-foreground">
            Does This Sound Familiar?
          </h2>
        </div>

        {/* Responsive grid: 1-col on mobile (no clipping), 2-col on tablet, 4-col on desktop */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {SIGNS.map((sign) => (
            <div
              key={sign.title}
              className="flex items-center sm:flex-col sm:items-start gap-3.5 sm:gap-4 rounded-2xl border border-border/80 bg-background p-3.5 sm:p-5 shadow-xs hover:border-gold/50 transition-colors"
            >
              <div className="relative size-12 sm:size-16 shrink-0 overflow-hidden rounded-xl ring-1 ring-border">
                <Image
                  src={sign.image}
                  alt={sign.alt}
                  fill
                  sizes="(min-width: 640px) 64px, 48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="font-serif text-sm sm:text-base font-semibold text-foreground">
                  {sign.title}
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground leading-snug">
                  {sign.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


