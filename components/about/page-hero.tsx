import Image from 'next/image'

export function PageHero() {
  return (
    <section className="flex min-h-[70vh] flex-col bg-card pt-24 md:min-h-[60vh] md:flex-row">
      <div className="flex w-full flex-1 flex-col items-start justify-center gap-6 px-8 py-12 md:w-1/2 md:px-14 md:py-16">
        <span className="text-xs tracking-[0.2em] text-gold uppercase">About Disha</span>
        <h1 className="font-serif text-4xl leading-[1.15] text-balance text-foreground sm:text-5xl lg:text-[56px]">
          The Woman Behind the Transformation
        </h1>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          From a curious child advising friends on style, to Asia&apos;s most
          credentialed image consultant, this is the story of a career built
          on instinct, discipline, and reinvention.
        </p>
      </div>

      <div className="relative h-[45vh] w-full md:h-auto md:w-1/2">
        <Image
          src="/images/about-hero-group.jpg"
          alt="Disha Caroline with fellow image consulting professionals at a training session"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
