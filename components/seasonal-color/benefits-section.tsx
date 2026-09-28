const BENEFITS = [
  {
    title: 'Shop with Clarity',
    description:
      'Walk into any store and know exactly what will work for you, in minutes.',
  },
  {
    title: 'Fewer Regretted Purchases',
    description: 'Stop buying items you never end up wearing.',
  },
  {
    title: 'Confident, Instant Choices',
    description: 'Get dressed without doubt or second-guessing.',
  },
  {
    title: 'A Wardrobe That Works Together',
    description:
      'Every piece complements the next, so mixing and matching becomes effortless.',
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-secondary py-12 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          What Changes Once You Know Your Colours
        </h2>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col gap-3 rounded-2xl bg-background px-6 py-6 sm:px-7 sm:py-7"
            >
              <span
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary"
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" fill="none" className="size-4">
                  <path
                    d="M16.5 5.5 8 14 3.5 9.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-serif text-base text-foreground sm:text-lg">
                {benefit.title}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
