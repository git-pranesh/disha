import Link from 'next/link'

interface CtaBannerProps {
  heading?: string
  subtext?: string
  buttonLabel?: string
}

export function CtaBanner({
  heading = 'Ready to Transform?',
  subtext = 'Applications are reviewed personally. Serious inquiries only.',
  buttonLabel = 'Apply for a Consultation',
}: CtaBannerProps) {
  return (
    <section id="contact" className="bg-primary py-20 sm:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-6 text-center">
        <h2 className="font-serif text-4xl text-balance text-white sm:text-[42px]">{heading}</h2>
        <p className="text-base text-white/80 sm:text-lg">{subtext}</p>
        <Link
          href="mailto:hello@dishacaroline.com"
          className="mt-3 cursor-pointer rounded-full bg-white px-8 py-3.5 text-sm text-primary transition-opacity hover:opacity-90"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  )
}
