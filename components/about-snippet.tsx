import Image from 'next/image'
import Link from 'next/link'

const PRESS_MENTIONS = [
  'Power Women of India',
  'World Book of Records',
  'Vijay TV Judge',
  'Finforce Best Image Consultant',
]

export function AboutSnippet() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="flex flex-col items-start gap-6 md:order-1">
          <div className="flex flex-col items-start gap-5">
            <span className="text-xs tracking-[0.2em] text-gold uppercase">The Consultant</span>
            <h2 className="font-serif text-4xl leading-tight text-balance text-foreground sm:text-[42px]">
              From Engineer to Asia&apos;s Trusted Image Expert
            </h2>
          </div>

          <div className="grid w-full grid-cols-2 gap-3">
            {PRESS_MENTIONS.map((mention) => (
              <div
                key={mention}
                className="flex h-16 items-center justify-center rounded-xl border border-border px-3 text-center"
              >
                <span className="text-xs tracking-wide text-muted-foreground uppercase">
                  {mention}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="cursor-pointer rounded-full border border-primary px-6 py-2.5 text-sm text-primary transition-opacity hover:opacity-70"
          >
            Read Her Story &rarr;
          </Link>
        </div>

        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-muted md:order-2">
          <Image
            src="/images/about-certification.jpg"
            alt="Disha Caroline receiving her semi-permanent make-up artist certification in Korea"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
