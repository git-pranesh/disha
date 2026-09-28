const STATS = [
  { value: '200+', label: 'Transformations' },
  { value: '12+', label: 'Countries' },
  { value: '8', label: 'Service Types' },
  { value: '2019\u2013Present', label: 'Case Studies Active' },
]

export function StatStrip() {
  return (
    <section className="bg-muted py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-10 px-8 sm:grid-cols-4 sm:divide-x sm:divide-border">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 px-4 text-center">
            <span className="font-serif text-4xl text-primary">{stat.value}</span>
            <span className="text-[13px] tracking-widest text-muted-foreground uppercase">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
