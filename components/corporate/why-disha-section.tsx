const BULLETS = [
  'Not generic content. Every programme is scoped to your team\u2019s role and industry.',
  'Certified internationally. Disha\u2019s training is aligned with AICIC global standards.',
  'Measurable outcomes. Teams leave with frameworks they use the same week.',
]

const STATS = [
  { value: '3 continents', label: 'Teams trained across' },
  { value: '8+ years', label: 'Corporate programme experience' },
  { value: '1-day to 3-month', label: 'Flexible engagement models' },
]

export function WhyDishaSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Why Disha for Corporates
          </h2>
          <ul className="flex flex-col gap-6">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="font-serif text-lg leading-snug text-foreground">
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-8 rounded-2xl bg-card p-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-3xl text-primary sm:text-4xl">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
