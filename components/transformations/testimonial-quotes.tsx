const QUOTES = [
  {
    quote:
      'I walked in unsure of how to carry myself. I walked out understanding that image was never about vanity \u2014 it was about respect.',
    attribution: 'Business Owner, Tiruppur',
  },
  {
    quote:
      'Disha didn\u2019t just change how I dressed. She changed how I saw myself, and eventually, how everyone else did too.',
    attribution: 'Finance Executive, Chennai',
  },
  {
    quote:
      'For the first time in years, I felt like I was starting a chapter that actually belonged to me.',
    attribution: 'Client, Florida, USA',
  },
]

export function TestimonialQuotes() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {QUOTES.map((item) => (
            <div
              key={item.attribution}
              className="flex min-w-[280px] flex-1 flex-col gap-4 rounded-2xl border border-border bg-background px-7 py-9 sm:min-w-0"
            >
              <span className="font-serif text-5xl leading-none text-gold">&ldquo;</span>
              <p className="font-serif text-lg leading-relaxed text-balance text-foreground italic">
                {item.quote}
              </p>
              <span className="text-sm text-muted-foreground">{item.attribution}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
