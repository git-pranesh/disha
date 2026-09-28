import Image from 'next/image'

const SIGNS = [
  {
    image: '/images/placeholder-unflattering-colour-portrait-woman.png',
    alt: 'Tired reflection',
    title: 'Told You Look Tired',
    caption: 'Even after a full night of rest',
  },
  {
    image: '/images/placeholder-mens-colour-shirt-tie-blazer.png',
    alt: 'Default safe neutrals',
    title: 'The Neutral Trap',
    caption: 'Defaulting only to black, navy & grey',
  },
  {
    image: '/images/placeholder-lipstick-shade-comparison-woman.png',
    alt: 'Mismatched shades',
    title: 'Shades Feel "Off"',
    caption: 'Lipsticks and ties that clash with skin',
  },
  {
    image: '/images/placeholder-colour-wheel-and-colour-boards.png',
    alt: 'Unworn colourful clothes',
    title: 'The Unworn Clothes',
    caption: 'Gorgeous colours bought but never worn',
  },
]

export function RecognitionSection() {
  return (
    <section className="bg-card border-b border-border/60 py-8 sm:py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Wardrobe Reality Check
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-balance text-foreground">
            Does This Sound Familiar?
          </h2>
        </div>

        {/* Compact row with icon-sized visuals - minimal mobile scrolling */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SIGNS.map((sign) => (
            <div
              key={sign.title}
              className="flex items-center gap-3 rounded-xl border border-border/80 bg-background/90 p-2.5 sm:p-3 shadow-xs hover:border-gold/50 transition-colors"
            >
              <div className="relative size-11 sm:size-12 shrink-0 overflow-hidden rounded-lg ring-1 ring-border">
                <Image
                  src={sign.image}
                  alt={sign.alt}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="font-serif text-xs sm:text-sm font-medium text-foreground truncate">
                  {sign.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-tight line-clamp-2">
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

