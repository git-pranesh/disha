const FORMATS = [
  {
    name: 'Corporate Workshops',
    description: 'Half-day and full-day programmes for teams.',
    topics: [
      'Executive Presence',
      'Personal Branding',
      'Communication Skills',
      'Dining Etiquette',
      'Impactful Impressions for Sales Staff',
    ],
  },
  {
    name: 'Kids Etiquette Workshops',
    description: 'Quarterly group workshops for children ages 7 to 17.',
    topics: ['Manners', 'Dining Etiquette', 'Greetings', 'Public Speaking Basics'],
    note: 'Popular with high-profile families. Next batch announced on Instagram.',
  },
  {
    name: 'Guest Lectures & Panel Appearances',
    description: 'Universities, corporates, and events.',
    topics: ['Image Consulting as a Profession', 'Personal Branding', 'Colour Theory'],
  },
]

export function FormatsSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          Formats
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FORMATS.map((format) => (
            <div
              key={format.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-serif text-xl text-foreground">{format.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {format.description}
              </p>
              <ul className="flex flex-col gap-2 border-t border-border pt-4">
                {format.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {topic}
                  </li>
                ))}
              </ul>
              {format.note && (
                <p className="mt-1 text-xs leading-relaxed text-gold">{format.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
