export function DishaQuoteSection() {
  return (
    <section className="bg-secondary/40 border-b border-border/60 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        
        {/* Subtle Gold Quote Icon */}
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold mb-6 sm:mb-8">
          <svg
            className="size-6 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Editorial Quote */}
        <blockquote className="font-serif italic text-xl sm:text-3xl lg:text-[34px] leading-relaxed sm:leading-snug text-foreground font-normal text-balance">
          &ldquo;When you wear colours genetically aligned with your skin, you don&rsquo;t need louder clothes or heavier makeup. You simply arrive. Your natural radiance and authority take over before you say a single word.&rdquo;
        </blockquote>

        {/* Attribution */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-1.5">
          <span className="font-serif text-base sm:text-lg font-semibold text-foreground tracking-wide">
            Disha Caroline
          </span>
          <span className="text-xs tracking-[0.18em] text-gold uppercase font-medium">
            AICI Member | Image &amp; Colour Consultant
          </span>
          <a
            href="https://academyofimagemastery.com/portfolio-items/christina-ong/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-xs text-muted-foreground/80 hover:text-foreground underline underline-offset-2 transition-colors"
          >
            Trained under Christina Ong | AICI Certified Image Master
          </a>
        </div>

      </div>
    </section>
  )
}
