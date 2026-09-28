const CLIENT_TYPES = [
  'FMCG',
  'Banking & Finance',
  'Legal',
  'Real Estate',
  'Healthcare',
  'Retail',
  'Hospitality',
]

export function ClientTypesSection() {
  return (
    <section className="bg-muted py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:px-10">
        <span className="text-xs tracking-[0.2em] text-gold uppercase">Who We Work With</span>
        <div className="flex flex-wrap justify-center gap-3">
          {CLIENT_TYPES.map((type) => (
            <span
              key={type}
              className="cursor-default rounded-full border border-primary/30 bg-background px-5 py-2.5 text-sm text-foreground"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
