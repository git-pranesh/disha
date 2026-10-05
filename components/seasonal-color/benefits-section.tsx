const DELIVERABLES = [
  {
    title: '12-Type Seasonal Analysis',
    desc: 'Pinpoint your exact season and subtype (e.g., Summer Soft, Autumn Warm, Winter Vivid, Spring Light).',
  },
  {
    title: 'Precision Fabric Draping',
    desc: 'Testing across undertone (warm vs cool), value (light vs deep), and chroma (muted vs clear).',
  },
  {
    title: 'Jewellery & Metal Advice',
    desc: 'Identify whether yellow gold, rose gold, silver, or platinum best enhances your skin.',
  },
  {
    title: 'Contrast & Pattern Sizing',
    desc: 'Learn your personal contrast level for suits, blazers, collars, and print patterns.',
  },
  {
    title: 'Makeup & Hair Tone Matching',
    desc: 'Foundation undertone check, lip shades, and flattering hair colour recommendations.',
  },
  {
    title: 'Personal Color Swatch Card',
    desc: 'A portable swatch card to carry in your wallet or phone for stress-free shopping anywhere.',
  },
  {
    title: 'Comprehensive Consultation Report',
    desc: 'A detailed personal dossier in English documenting your palette, styling rules, and guidelines.',
  },
  {
    title: 'Wardrobe & Formal Wear Guidance',
    desc: 'Practical advice on building an effortless capsule wardrobe tailored to your lifestyle.',
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-secondary/40 py-12 sm:py-20 border-b border-border/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Consultation Deliverables
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl text-balance text-foreground font-normal">
            What Your Consultation Includes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            A comprehensive, one-on-one session grounded in the Munsell colour framework:
          </p>
        </div>

        {/* Deliverables Grid based on Disha's reference packages */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {DELIVERABLES.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-2xl border border-border/80 bg-background/90 p-4 sm:p-5 shadow-xs"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-serif text-sm sm:text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


