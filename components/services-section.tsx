import Image from 'next/image'

const SERVICES = [
  {
    name: 'Personal Color Analysis',
    description: 'Discover the palette that makes you look effortlessly radiant.',
    href: '/services/seasonal-color-analysis',
    image: '/images/service-color-analysis.png',
    focal: 'object-top',
  },
  {
    name: 'Image Revamping',
    description: 'A complete visual reset, from wardrobe to grooming.',
    href: '/contact',
    image: '/images/service-image-revamping.png',
    focal: 'object-center',
  },
  {
    name: 'Personal Styling & Lookbook',
    description: 'Curated looks for every room you need to command.',
    href: '/contact',
    image: '/images/service-personal-styling.png',
    focal: 'object-top',
  },
  {
    name: 'Personal Branding',
    description: 'An image that communicates your value before you speak.',
    href: '/contact',
    image: '/images/service-personal-branding.png',
    focal: 'object-top',
  },
  {
    name: 'Executive Presence',
    description: 'Command boardrooms with posture, poise, and polish.',
    href: '/contact',
    image: '/images/service-executive-presence.png',
    focal: 'object-top',
  },
  {
    name: 'Etiquette Training',
    description: 'The unspoken rules of rooms that decide careers.',
    href: '/contact',
    image: '/images/service-etiquette-training.png',
    focal: 'object-center',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-4xl text-balance text-foreground sm:text-[42px]">
          What We Do
        </h2>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="flex w-72 shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-background sm:w-auto"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 288px"
                  className={`object-cover ${service.focal}`}
                />
              </div>
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
