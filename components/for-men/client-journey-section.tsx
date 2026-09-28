const STEPS = [
  {
    number: '01',
    title: 'Analysis',
    description: 'Face shape, body type, skin tone, colour season, lifestyle audit.',
  },
  {
    number: '02',
    title: 'Rebuilding',
    description: 'Wardrobe, grooming, posture, hair, beard, every detail.',
  },
  {
    number: '03',
    title: 'Presence',
    description: 'Body language, personality development, social confidence.',
  },
]

export function ClientJourneySection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          What Working with Disha Looks Like
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-8"
            >
              <span className="font-serif text-2xl text-gold">{step.number}</span>
              <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="font-serif text-6xl leading-none text-gold">&ldquo;</span>
          <p className="font-serif text-xl leading-relaxed text-balance text-foreground sm:text-2xl">
            He came to me looking for a bride. He left with a completely
            different relationship with himself, and found one within
            months.
          </p>
          <span className="text-sm text-muted-foreground">
            From Disha&apos;s files, 2019
          </span>
        </div>
      </div>
    </section>
  )
}
