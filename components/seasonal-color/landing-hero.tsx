import Image from 'next/image'

export function LandingHero() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-10 md:flex-row md:gap-14 md:px-10 md:py-20">
        <div className="flex w-full flex-col items-start gap-4 md:w-1/2 md:gap-5">
          <span className="text-xs tracking-[0.2em] text-gold uppercase">
            Personal Seasonal Colour Analysis
          </span>
          <h1 className="font-serif text-3xl leading-[1.15] text-balance text-foreground sm:text-5xl">
            Are Your Colours Washing You Out?
          </h1>

          <div className="relative aspect-[11/6] w-full overflow-hidden rounded-2xl shadow-lg md:hidden">
            <Image
              src="/images/seasonal-landing-before-after.jpg"
              alt="Split before and after portrait: the same woman looking dulled in a muted lavender-grey top on the left, and radiant and confident in a rich teal wrap top on the right"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-lg">
            The colours you wear can help you look vibrant, confident and
            present, or quietly make you disappear.
          </p>
          <div className="mt-1 flex flex-col gap-2 md:mt-2">
            <a
              href="#enquiry"
              className="cursor-pointer rounded-full bg-primary px-7 py-3.5 text-center text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request a Discovery Call &rarr;
            </a>
            <span className="text-xs text-muted-foreground">
              A short, no-obligation call to see if this is right for you.
            </span>
          </div>
        </div>

        <div className="relative hidden aspect-[11/6] w-full overflow-hidden rounded-2xl shadow-lg md:block md:w-1/2">
          <Image
            src="/images/seasonal-landing-before-after.jpg"
            alt="Split before and after portrait: the same woman looking dulled in a muted lavender-grey top on the left, and radiant and confident in a rich teal wrap top on the right"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
