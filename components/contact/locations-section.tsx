const LOCATIONS = [
  {
    city: 'Chennai',
    country: 'India',
    note: 'Primary base. In-person consultations available.',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    note: 'Available by schedule. Quarterly visits.',
  },
  {
    city: 'Global',
    country: 'Virtual',
    note: 'Virtual consultations available worldwide.',
  },
]

export function LocationsSection() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          Where We Operate
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {LOCATIONS.map((location) => (
            <div
              key={location.city}
              className="flex flex-col gap-2 rounded-2xl border border-border bg-background p-8 text-center"
            >
              <h3 className="font-serif text-2xl text-foreground">{location.city}</h3>
              <span className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                {location.country}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{location.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
