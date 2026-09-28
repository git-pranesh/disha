const REASONS = [
  {
    phrase: "You're a high-earning professional",
    detail: 'who still feels invisible in social settings.',
  },
  {
    phrase: "You're looking for a partner",
    detail: 'and want to present the best version of yourself.',
  },
  {
    phrase: "You're stepping into a senior role",
    detail: 'and need your image to match your ambition.',
  },
  {
    phrase: "You've built something significant",
    detail: "it's time your presence reflected it.",
  },
]

export function WhoComesSection() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          Sound Familiar?
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
