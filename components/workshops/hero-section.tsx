import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center bg-[#a89bb3] pt-20">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,10,46,0.75)_0%,rgba(26,10,46,0.35)_60%,rgba(26,10,46,0.15)_100%)]"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-20 md:px-10">
        <span className="text-xs tracking-[0.2em] text-gold uppercase">
          Workshops &amp; Guest Lectures
        </span>
        <h1 className="max-w-2xl font-serif text-4xl leading-[1.15] text-balance text-white sm:text-5xl lg:text-[56px]">
          Expertise, Delivered to Your Audience.
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Disha speaks at corporate events, school programmes, and private gatherings,
          covering image, etiquette, and personal presence.
        </p>
        <Link
          href="/contact"
          className="mt-2 w-fit cursor-pointer rounded-full bg-white px-7 py-3.5 text-sm text-primary transition-opacity hover:opacity-90"
        >
          Invite Disha to Speak
        </Link>
      </div>
    </section>
  )
}
