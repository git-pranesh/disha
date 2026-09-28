export function TestimonialSection() {
  return (
    <section className="bg-deep py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div className="flex flex-col gap-6">
          <span className="font-serif text-7xl leading-none text-gold sm:text-8xl">&ldquo;</span>
          <p className="font-serif text-xl leading-relaxed text-balance text-white sm:text-2xl">
            I came to Disha struggling to be taken seriously at work. Six sessions
            later, I was offered a senior position I&apos;d been overlooked for
            twice. The change wasn&apos;t just what I wore, it was how I
            walked into a room.
          </p>
          <span className="text-sm text-white/60">Senior Finance Executive, Dubai</span>
        </div>

        <div
          className="aspect-[4/3] w-full rounded-2xl bg-white/10 md:aspect-square"
          role="img"
          aria-label="Editorial photograph representing a client transformation"
        />
      </div>
    </section>
  )
}
