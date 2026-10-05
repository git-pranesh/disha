const TOOLS_PLACEHOLDERS = [
  {
    title: 'Seasonal Palette Boards',
    category: 'Spring, Summer, Autumn, Winter',
    desc: 'Diagnostic display boards showcasing the 4 primary seasonal colour families.',
  },
  {
    title: 'Munsell Tone Map',
    category: 'Hue, Value & Chroma Analysis',
    desc: 'Scientifically mapping biological undertone temperature, depth, and saturation.',
  },
  {
    title: 'Foundation & Skin Match',
    category: 'Undertone & Complexion Testing',
    desc: 'Identifying precise base tones to ensure foundation and clothing never wash you out.',
  },
  {
    title: 'Lipstick & Cosmetic Guide',
    category: 'Shade Temperature Selection',
    desc: 'Curating flattering lip and makeup shades harmonized with your natural pigments.',
  },
]

export function RecognitionSection() {
  return (
    <section className="bg-background border-b border-border/60 py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        
        {/* Section Header - Adapted directly from Disha's reference */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Personal Colour Analysis &amp; Image Service
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-4xl text-balance text-foreground font-normal">
            Unveil Your True Radiance
          </h2>
          <div className="mt-3.5 flex flex-col gap-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              At Disha Caroline Image Consulting, we specialize in Personal Colour Consultation using the scientifically validated Munsell 12-Season Colour System. Through structured and professional analysis of your skin tone, facial features, and personal style, we help you identify the colours and image elements that enhance your natural appearance.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/90">
              Each consultation includes a personalized report with practical recommendations for makeup, wardrobe, hairstyle, and accessories, designed to support long-term confidence and informed styling decisions.
            </p>
          </div>
        </div>

        {/* 2 rows max on mobile (grid-cols-2), 4 columns on desktop - Clean placeholders awaiting Disha's photos */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {TOOLS_PLACEHOLDERS.map((tool) => (
            <div
              key={tool.title}
              className="flex flex-col items-center text-center gap-2.5"
            >
              {/* Image Placeholder Box */}
              <div className="relative aspect-[4/3] w-full rounded-2xl border-2 border-dashed border-border bg-card/60 flex flex-col items-center justify-center p-3 text-center">
                <span className="flex size-9 sm:size-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-1">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className="size-4 sm:size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Photo Placeholder
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-1 pt-0.5">
                <h3 className="font-serif text-xs sm:text-base font-semibold text-foreground leading-snug">
                  {tool.title}
                </h3>
                <span className="text-[10px] sm:text-[11px] font-medium text-gold uppercase tracking-wider">
                  {tool.category}
                </span>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed hidden sm:block">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}









