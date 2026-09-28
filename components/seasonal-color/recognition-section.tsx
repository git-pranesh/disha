import Image from 'next/image'

const SIGNS = [
  {
    num: '01',
    image: '/images/placeholder-unflattering-colour-portrait-woman.png',
    alt: 'Tired reflection',
    title: 'Told You Look Tired',
    caption: 'Hearing you look fatigued even after a full night of deep, restful sleep.',
  },
  {
    num: '02',
    image: '/images/placeholder-mens-colour-shirt-tie-blazer.png',
    alt: 'Default safe neutrals',
    title: 'The Neutral Trap',
    caption: 'Defaulting exclusively to safe black, grey, and navy out of colour uncertainty.',
  },
  {
    num: '03',
    image: '/images/placeholder-lipstick-shade-comparison-woman.png',
    alt: 'Mismatched shades',
    title: 'Shades That Feel Off',
    caption: 'Lipsticks, shirts, and ties that clash with your natural skin undertone.',
  },
  {
    num: '04',
    image: '/images/placeholder-colour-wheel-and-colour-boards.png',
    alt: 'Unworn colourful clothes',
    title: 'The Unworn Wardrobe',
    caption: 'Striking pieces bought on impulse that remain hanging with tags on.',
  },
]

export function RecognitionSection() {
  return (
    <section className="bg-background border-b border-border/60 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Wardrobe Reality Check
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-4xl text-balance text-foreground font-normal">
            Does This Sound Familiar?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Subtle signs the colours you wear are silently fighting your natural contrast:
          </p>
        </div>

        {/* Seamless Editorial Layout - No Clunky White Boxes or Awkward Gaps */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-border/80">
          {SIGNS.map((sign) => (
            <div
              key={sign.title}
              className="pt-6 sm:pt-0 lg:px-6 first:pt-0 first:lg:pl-0 last:lg:pr-0 flex flex-col items-start gap-4"
            >
              <div className="flex items-center justify-between w-full">
                <div className="relative size-14 sm:size-16 overflow-hidden rounded-2xl ring-1 ring-border shadow-xs bg-muted">
                  <Image
                    src={sign.image}
                    alt={sign.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <span className="font-serif text-2xl sm:text-3xl text-gold/30 font-light select-none">
                  {sign.num}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-base sm:text-lg font-medium text-foreground">
                  {sign.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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



