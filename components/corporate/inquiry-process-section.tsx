const STEPS = [
  {
    number: '01',
    title: 'Submit an Enquiry',
    description: 'Share your team size, industry, and training objective.',
  },
  {
    number: '02',
    title: 'Discovery Call',
    description: 'A conversation to scope the right programme for your team.',
  },
  {
    number: '03',
    title: 'Programme Delivery',
    description: 'Delivered on-site or virtually, on your schedule.',
  },
]

export function InquiryProcessSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          How to Bring Disha to Your Team
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.title}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-8"
            >
              <span className="font-serif text-2xl text-gold">{step.number}</span>
              <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
