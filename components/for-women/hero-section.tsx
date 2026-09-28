import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center bg-[#8a7d94]">
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,10,46,0.45)_0%,rgba(26,10,46,0.75)_100%)]"
        role="img"
        aria-label="Editorial photograph of a confident woman"
      />
      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6 px-6 pt-16 text-center">
        <h1 className="font-serif text-4xl leading-[1.15] text-balance text-white sm:text-5xl lg:text-[56px]">
          You Know Something Has to Change.
        </h1>
        <p className="max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
          You just haven&apos;t found the right place to begin.
        </p>
        <Link
          href="/contact"
          className="mt-2 cursor-pointer rounded-full bg-white px-8 py-3.5 text-sm text-primary transition-opacity hover:opacity-90"
        >
          Begin Your Transformation
        </Link>
      </div>
    </section>
  )
}
