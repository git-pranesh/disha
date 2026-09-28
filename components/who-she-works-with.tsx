import Image from 'next/image'
import Link from 'next/link'

const AUDIENCES = [
  {
    name: 'For Women',
    descriptor: 'Elegance that speaks before you do',
    href: '/for-women',
    image: '/images/audience-women.png',
  },
  {
    name: 'For Men',
    descriptor: 'Executive presence, tailored',
    href: '/for-men',
    image: '/images/audience-men.png',
  },
  {
    name: 'Corporate',
    descriptor: 'Teams who represent the brand',
    href: '/corporate-training',
    image: '/images/audience-corporate.png',
  },
]

export function WhoSheWorksWith() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-4xl text-balance text-foreground sm:text-[42px]">
          Transformation Is for Everyone
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {AUDIENCES.map((audience) => (
            <Link
              key={audience.name}
              href={audience.href}
              className="group relative aspect-[3/2] cursor-pointer overflow-hidden rounded-2xl bg-muted"
            >
              <Image
                src={audience.image}
                alt={audience.name}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(76,26,110,0)_35%,rgba(26,10,46,0.85)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                <span className="font-serif text-2xl text-white">{audience.name}</span>
                <span className="text-sm text-white/80">{audience.descriptor}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
