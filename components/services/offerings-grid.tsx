import Image from 'next/image'
import Link from 'next/link'

const OFFERINGS = [
  {
    name: 'Seasonal Colour Analysis',
    description: '12-season colour mapping to your undertone, hair, and eyes.',
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

const AUDIENCES = [
  { name: 'For Women', href: '/for-women' },
  { name: 'For Men', href: '/for-men' },
  { name: 'Corporate', href: '/corporate-training' },
]

export function OfferingsGrid() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
          Individual Programmes
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((offering) => (
            <div
              key={offering.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={offering.image}
                  alt={offering.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover ${offering.focal}`}
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-6">
                <h3 className="font-serif text-xl text-foreground">{offering.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {offering.description}
                </p>
                <Link
                  href={offering.href}
                  className="mt-2 cursor-pointer text-sm text-primary transition-opacity hover:opacity-70"
                >
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Programmes by Audience
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            {AUDIENCES.map((audience) => (
              <Link
                key={audience.name}
                href={audience.href}
                className="cursor-pointer rounded-full border border-primary px-6 py-3 text-sm text-primary transition-opacity hover:opacity-70"
              >
                {audience.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
