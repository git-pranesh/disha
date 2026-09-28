const CHECKLIST_ITEMS = [
  'Walk into any store and spot your winning colours in minutes',
  'Stop wasting money on beautiful clothes you never end up wearing',
  'Get dressed every morning with total confidence and zero doubt',
  'Build an effortless wardrobe where every single piece coordinates',
  'Look rested, vibrant, and commanding on camera and in person',
  'Own a customized 12-season digital swatch to take shopping anywhere',
]

export function BenefitsSection() {
  return (
    <section className="bg-secondary/40 py-10 sm:py-16 border-b border-border/60">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            The Transformation
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-balance text-foreground">
            What Changes Once You Know Your Colours
          </h2>
        </div>

        {/* Compact Bullet Checklist (No heavy cards or subtext) */}
        <div className="mt-8 rounded-2xl border border-border/80 bg-background p-5 sm:p-8 shadow-xs">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            {CHECKLIST_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
                    <path
                      fillRule="evenodd"
                      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

