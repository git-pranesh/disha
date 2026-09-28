import Image from 'next/image'
import Link from 'next/link'
import { LocationTicker } from '@/components/location-ticker'

export function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col pt-20 md:pt-24">
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="relative h-[55vh] w-full md:h-auto md:w-[55%]">
          <Image
            src="/images/hero-portrait.jpg"
            alt="Portrait photograph of Disha Caroline"
            fill
            priority
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="flex w-full flex-1 flex-col items-start justify-center gap-6 bg-background px-8 py-16 md:w-[45%] md:px-14">
          <span className="text-xs tracking-[0.2em] text-gold uppercase">
            AICIC Certified Image Consultant
          </span>
          <h1 className="font-serif text-5xl leading-[1.1] text-balance text-foreground sm:text-6xl lg:text-[64px]">
            Your Image. Your Power.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Asia&apos;s premier image consultant, transforming executives, professionals,
            and individuals across 12 countries.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Link
              href="/contact"
              className="cursor-pointer rounded-full bg-primary px-7 py-3 text-center text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Apply for a Consultation
            </Link>
            <Link
              href="#services"
              className="cursor-pointer rounded-full border border-primary px-7 py-3 text-center text-sm text-primary transition-opacity hover:opacity-90"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <LocationTicker />
    </section>
  )
}
