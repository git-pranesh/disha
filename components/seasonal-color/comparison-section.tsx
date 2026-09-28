export function ComparisonSection() {
  return (
    <section className="bg-background py-10 sm:py-16 border-b border-border/60">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Real Transformations
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-4xl text-balance text-foreground">
            One Wardrobe. Two Very Different Impressions.
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
            The same face. The same lighting. Only the colours change. Witness how the right palette illuminates skin, softens shadows, and commands attention.
          </p>
        </div>

        {/* Ready container for Disha's client before/after photos */}
        <div className="mt-8 rounded-2xl border-2 border-dashed border-border bg-card/60 p-6 sm:p-10 text-center">
          <div className="mx-auto flex max-w-md flex-col items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </span>
            <h3 className="font-serif text-lg font-medium text-foreground">
              Client Transformations by Disha Caroline
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Real client before-and-after analysis showcases the immediate impact of accurate seasonal draping.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

