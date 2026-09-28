const MILESTONES = [
  {
    year: '2016',
    event: 'Enrolled in Image Consulting while at Infosys, Bangalore',
  },
  {
    year: '2017',
    event: 'Left IT. Launched Disha Caroline Image Consulting.',
  },
  {
    year: '2019',
    event: 'First high-profile client transformations in Chennai and Dubai',
  },
  {
    year: '2021\u201322',
    event: 'Pageant Groomer, FEMA Mr./Miss/Mrs. India',
  },
  {
    year: '2022',
    event: 'TV Technical Consultant, Stylu Stylu Thaan, Vijay TV',
  },
  {
    year: '2023',
    event: 'Trained in Japan for the CIC Exam (AICICI)',
  },
  {
    year: '2024',
    event: 'Colour Mastery Certification, Academy of Image Mastery, Singapore (under Christina Ong, AICI CIM)',
  },
  {
    year: '2024',
    event: '3 Certifications from Korea, Medi Aesthetics and Semi-Permanent Makeup',
  },
  {
    year: '2025',
    event: 'Power Women of India, World Book of Records',
  },
  {
    year: '2025',
    event: 'Certified Image Consultant (CIC), AICICI',
  },
]

export function CredentialsTimeline() {
  return (
    <section className="bg-card py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          A Career Built Across Borders
        </h2>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute inset-y-0 left-4 w-px bg-border md:left-1/2"
          />

          <ol className="flex flex-col gap-10">
            {MILESTONES.map((milestone, index) => {
              const alignRight = index % 2 === 0
              return (
                <li key={`${milestone.year}-${milestone.event}`} className="relative">
                  <div
                    aria-hidden
                    className="absolute top-1.5 left-4 size-2.5 -translate-x-1/2 rounded-full bg-gold md:left-1/2"
                  />

                  <div
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      alignRight ? 'md:mr-auto md:pr-0 md:text-right' : 'md:ml-auto md:pl-0'
                    }`}
                  >
                    <div
                      className={`flex flex-col gap-1.5 ${
                        milestone.upcoming
                          ? 'rounded-2xl border-2 border-gold bg-secondary p-5'
                          : ''
                      }`}
                    >
                      <span
                        className={`text-xs font-medium tracking-[0.15em] uppercase ${
                          milestone.upcoming
                            ? 'flex items-center gap-2 text-primary md:justify-end'
                            : 'text-gold'
                        } ${alignRight ? 'md:justify-end' : ''}`}
                      >
                        {milestone.year}
                        {milestone.upcoming && (
                          <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] tracking-normal text-white normal-case">
                            In Progress
                          </span>
                        )}
                      </span>
                      <p className="font-serif text-lg leading-snug text-foreground">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
