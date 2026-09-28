import Image from 'next/image'

export function CredibilitySection() {
  return (
    <section className="bg-primary py-12 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 md:flex-row md:gap-12 md:px-10">
        <span className="text-xs tracking-[0.2em] text-gold-on-dark uppercase md:hidden">
          Meet Disha Caroline
        </span>

        <div className="flex w-full max-w-72 shrink-0 flex-col items-center gap-2 md:w-96 md:max-w-none">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/disha-with-christina-ong.jpg"
              alt="Disha Caroline with fellow image consultant Christina Ong"
              fill
              sizes="(min-width: 768px) 384px, 288px"
              className="object-cover"
            />
          </div>
          <a
            href="https://academyofimagemastery.com/portfolio-items/christina-ong"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/60 underline underline-offset-2 hover:text-white md:hidden"
          >
            Trained under Christina Ong : AICI Certified Image Master
          </a>
        </div>

        <div className="flex flex-col gap-3 text-center sm:gap-5 md:text-left">
          <span className="hidden text-xs tracking-[0.2em] text-gold-on-dark uppercase md:block">
            Meet Disha Caroline
          </span>
          <p className="font-serif text-xl leading-snug text-balance text-white sm:text-3xl">
            An internationally trained image consultant specialising in
            personal colour and presence.
          </p>
          <p className="text-sm leading-relaxed text-white/70">
            Disha has trained professionals and individuals across India,
            Dubai and Singapore in personal colour and presence.
          </p>
          <a
            href="https://academyofimagemastery.com/portfolio-items/christina-ong"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs text-white/60 underline underline-offset-2 hover:text-white md:block"
          >
            Trained under Christina Ong : AICI Certified Image Master
          </a>
        </div>
      </div>
    </section>
  )
}
