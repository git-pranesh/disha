const SERVICES = [
  {
    name: 'Image Revamping',
    description: 'A complete visual reset, from wardrobe to grooming.',
    href: '/contact',
  },
  {
    name: 'Personal Styling',
    description: 'Curated looks for every room you need to command.',
    href: '/contact',
  },
  {
    name: 'Color Analysis',
    description: 'The palette that makes you look sharp, always.',
    href: '/services/seasonal-color-analysis',
  },
  {
    name: 'Personality Development',
    description: 'Presence, poise, and the confidence to hold a room.',
    href: '/contact',
  },
  {
    name: 'Executive Presence',
    description: 'Command boardrooms with posture, poise, and polish.',
    href: '/contact',
  },
  {
    name: 'Personal Branding',
    description: 'An image that communicates your value before you speak.',
    href: '/contact',
  },
]

export function ServicesForMen() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-4xl text-balance text-foreground sm:text-[42px]">
          Your Journey, Your Pace
        </h2>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-background sm:w-auto"
            >
              <div className="aspect-[2/1] w-full bg-card" />
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="font-serif text-xl text-foreground">{service.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="mt-2 cursor-pointer text-sm text-primary transition-opacity hover:opacity-70"
                >
                  Learn More &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
