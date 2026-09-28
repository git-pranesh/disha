const RECOGNITIONS = [
  { name: 'Power Women of India', year: '2025' },
  { name: 'Technical Consultant, Stylu Stylu Thaan, Vijay TV', year: '2022' },
  { name: 'Finforce Best Image Consultant', year: '2023' },
  { name: 'Pageant Groomer, FEMA India', year: '2021' },
  { name: 'World Book of Records', year: '2025' },
]

export function MediaRecognition() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          As Seen &amp; Recognised
        </h2>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {RECOGNITIONS.map((item) => (
            <div
              key={item.name}
              className="flex w-full flex-col items-center gap-4 rounded-2xl border border-border bg-background px-6 py-10 text-center sm:w-[calc(33.333%-1.1rem)]"
            >
              <span
                aria-hidden
                className="flex size-12 items-center justify-center rounded-full border border-gold/40 font-serif text-lg text-gold"
              >
                {item.name.charAt(0)}
              </span>
              <p className="font-serif text-base leading-snug text-foreground">{item.name}</p>
              <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
