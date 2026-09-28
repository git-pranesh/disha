const SERVICES = [
  {
    name: 'Image Revamping',
    description: 'A complete visual reset, from wardrobe to grooming.',
    href: '/contact',
  },
  {
    name: 'Personal Styling & Lookbook',
    description: 'Curated looks for every room you need to command.',
    href: '/contact',
  },
  {
    name: 'Personal Color Analysis',
    description: 'Discover the palette that makes you look effortlessly radiant.',
    href: '/services/seasonal-color-analysis',
  },
  {
    name: 'Personal Branding',
    description: 'An image that communicates your value before you speak.',
    href: '/contact',
  },
  {
    name: 'Wardrobe Declutter',
    description: 'Keep only what fits the woman you are becoming.',
    href: '/contact',
  },
  {
    name: 'Personality Development',
    description: 'Presence, poise, and the confidence to hold a room.',
    href: '/contact',
  },
  {
    name: 'Virtual Consulting',
    description: 'The same guidance, wherever you are in the world.',
    href: '/contact',
  },
]

export function ServicesForWomen() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-4xl text-balance text-foreground sm:text-[42px]">
          Your Journey, Your Pace
        </h2>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-muted sm:w-auto"
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
