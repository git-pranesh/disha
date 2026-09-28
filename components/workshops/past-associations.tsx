const ASSOCIATIONS = [
  'Pageant Grooming (FEMA India)',
  'Tamil Ragam',
  'Corporate Leadership Workshops',
  'School Etiquette Programmes',
]

export function PastAssociations() {
  return (
    <section className="bg-muted py-14">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm tracking-wide text-muted-foreground">
          <span className="text-foreground">Trained participants from</span>
          {ASSOCIATIONS.map((item) => (
            <span key={item} className="flex items-center gap-3">
              <span aria-hidden="true">&middot;</span>
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
