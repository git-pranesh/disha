import Image from 'next/image'

const COLOR_DIMENSIONS = [
  {
    image: '/images/seasonal-landing-colorwheel.png',
    alt: 'Munsell colour undertone system - Warm vs Cool',
    title: 'Undertone & Temperature',
    desc: 'Identifying whether warm golden or cool blue undertones harmonize with your natural skin pigment.',
  },
  {
    image: '/images/service-color-analysis.png',
    alt: 'Seasonal fabric draping boards - Light vs Deep',
    title: 'Value & Depth',
    desc: 'Determining the exact lightness or depth in fabric shades that keeps your complexion from washing out.',
  },
  {
    image: '/images/placeholder-colour-wheel-and-colour-boards.png',
    alt: 'Cosmetic and lipstick undertone swatches - Muted vs Vivid',
    title: 'Chroma & Clarity',
    desc: 'Finding whether soft, muted shades or clear, vivid pigments awaken your natural radiance.',
  },
  {
    image: '/images/service-image-revamping.png',
    alt: 'Personal 12-season colour swatch card',
    title: 'The 12-Season Blueprint',
    desc: 'Your definitive seasonal palette for effortless wardrobe, makeup, and accessory coordination.',
  },
]

export function RecognitionSection() {
  return (
    <section className="bg-background border-b border-border/60 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        
        {/* Section Header - Adapted directly from Disha's Huecoe & Munsell references */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Personal Colour Analysis &amp; Image Service
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-4xl text-balance text-foreground font-normal">
            Unveil Your True Radiance
          </h2>
          <div className="mt-3.5 flex flex-col gap-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              At Disha Caroline Image Consulting, we specialize in Personal Colour Consultation using the scientifically validated Munsell 12-Season Colour System. Through structured analysis of your skin tone, facial features, and contrast, we identify the exact colours and image elements that enhance your natural appearance.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/90">
              Each consultation includes a personalized analysis with practical recommendations for wardrobe, makeup, hairstyle, and accessories, designed to support lifelong confidence.
            </p>
          </div>
        </div>

        {/* 2 rows max on mobile (grid-cols-2), 4 columns on desktop - showcasing the colours and Munsell dimensions */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {COLOR_DIMENSIONS.map((dim) => (
            <div
              key={dim.title}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-border/80 shadow-xs bg-muted">
                <Image
                  src={dim.image}
                  alt={dim.alt}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 640px) 200px, 45vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-col gap-1 pt-1">
                <h3 className="font-serif text-xs sm:text-base font-semibold text-foreground leading-snug">
                  {dim.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                  {dim.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}







