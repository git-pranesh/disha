import { InquiryForm } from '@/components/contact/inquiry-form'

const NOTES = [
  'Available Mon\u2013Sat, 11 AM onwards (3 slots per day). Sunday 11 AM only.',
  'Consultations available in-person (Chennai, Dubai) and virtually (global).',
  'No walk-ins. No cold inquiries via social media.',
]

export function InquirySection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div>
          <span className="text-sm font-medium tracking-[0.15em] text-gold uppercase">
            Serious Inquiries Only
          </span>
          <h1 className="mt-4 font-serif text-4xl text-balance text-foreground sm:text-5xl">
            Apply to Work With Disha
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Every inquiry is reviewed personally by Disha before a consultation is offered.
            There are no open bookings. Availability is limited.
          </p>

          <div className="mt-8 flex max-w-md flex-col gap-4">
            {NOTES.map((note) => (
              <p key={note} className="text-sm leading-relaxed text-muted-foreground">
                {note}
              </p>
            ))}
          </div>
        </div>

        <InquiryForm />
      </div>
    </section>
  )
}
