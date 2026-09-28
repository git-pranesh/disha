import Image from 'next/image'

const SIGNS = [
  {
    image: '/images/placeholder-unflattering-colour-portrait-woman.png',
    alt: 'Tired reflection',
    title: 'Told You Look Tired',
  },
  {
    image: '/images/placeholder-mens-colour-shirt-tie-blazer.png',
    alt: 'Default safe neutrals',
    title: 'The Neutral Trap',
  },
  {
    image: '/images/placeholder-lipstick-shade-comparison-woman.png',
    alt: 'Mismatched shades',
    title: 'Shades Feel Off',
  },
  {
    image: '/images/placeholder-colour-wheel-and-colour-boards.png',
    alt: 'Unworn colourful clothes',
    title: 'The Unworn Wardrobe',
  },
]

export function RecognitionSection() {
  return (
    <section className="bg-background border-b border-border/60 py-10 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Wardrobe Reality Check
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-balance text-foreground font-normal">
            Does This Sound Familiar?
          </h2>
        </div>

        {/* 2 rows max on mobile (grid-cols-2), 4 columns on desktop - minimal scroll, no subtext, no numbers */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {SIGNS.map((sign) => (
            <div
              key={sign.title}
              className="flex flex-col items-center text-center gap-2.5 p-2 sm:p-3"
            >
              <div className="relative size-14 sm:size-20 overflow-hidden rounded-2xl ring-1 ring-border/80 shadow-xs bg-muted">
                <Image
                  src={sign.image}
                  alt={sign.alt}
                  fill
                  sizes="(min-width: 640px) 80px, 56px"
                  className="object-cover"
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




