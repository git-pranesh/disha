import { EnquiryForm } from '@/components/seasonal-color/enquiry-form'

export function EnquirySection() {
  return (
    <section id="enquiry" className="bg-secondary/50 py-12 sm:py-20 border-b border-border/60">
      <div className="mx-auto max-w-2xl px-4 sm:px-8">
        <div className="flex flex-col items-center gap-2 text-center sm:gap-3">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Request a Discovery Call
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-balance text-foreground">
            Let&apos;s Find the Colours That Belong to You
          </h2>
          <p className="max-w-lg text-sm sm:text-base text-muted-foreground">
            Share a few details below and Disha&apos;s team will reach out to
            schedule your personal discovery session.
          </p>
        </div>

        <div className="mt-8">
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}

