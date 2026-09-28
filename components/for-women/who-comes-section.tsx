const REASONS = [
  {
    phrase: "You've been overlooked for a promotion",
    detail: "and you know it's not about your work.",
  },
  {
    phrase: "You're getting married",
    detail: 'and you want to feel like yourself, not a version of someone else.',
  },
  {
    phrase: "You've just come out of a difficult chapter",
    detail: 'and you want a fresh start.',
  },
  {
    phrase: "You're a high-achiever on paper",
    detail: 'but you still feel invisible in a room.',
  },
]

export function WhoComesSection() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          You Might Be Here Because&hellip;
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6">
          {REASONS.map((reason) => (
            <div
              key={reason.phrase}
              className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <p className="font-serif text-lg text-balance text-foreground sm:text-[18px]">
                {reason.phrase}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
