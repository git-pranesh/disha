import { EnquiryForm } from '@/components/seasonal-color/enquiry-form'

export function EnquirySection() {
  return (
    <section id="enquiry" className="bg-secondary py-12 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <span className="text-xs tracking-[0.2em] text-gold uppercase">
            Request a Discovery Call
          </span>
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Let&apos;s Find the Colours That Belong to You
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-lg">
            Share a few details below and Disha&apos;s team will reach out to
            schedule a short discovery call.
          </p>
        </div>

        <div className="mt-6 sm:mt-10">
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
