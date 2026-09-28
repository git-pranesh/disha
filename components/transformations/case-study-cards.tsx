const CASE_STUDIES = [
  {
    descriptor: 'IT Professional, Chennai, 2019',
    tint: 'bg-primary/10',
    challenge:
      'Struggling to find colours that complemented his dark skin. Limited wardrobe (black, white, grey, blue). Not meeting anyone. Goal: find a life partner.',
    outcome:
      'Rebuilt wardrobe around his colour season. Transformed hair and beard to suit his face shape. Worked on posture, expressions, and grooming. He is now married to a doctor \u2014 and still maintains the same look.',
  },
  {
    descriptor: 'Finance Executive, Chennai',
    tint: 'bg-[#c5a76b]/15',
    challenge:
      'Overlooked for promotions despite being among the highest performers. Low confidence in her appearance and social presence.',
    outcome:
      'Over multiple sessions, she rebuilt her wardrobe, changed her hair, received a skin treatment referral, and learned to carry herself differently. She is now considering a move to a higher-paying senior role at a different company.',
  },
  {
    descriptor: 'Client from Florida, USA',
    tint: 'bg-[#1a0a2e]/10',
    challenge: 'Exiting a 30-year abusive marriage. Wanted a total restart.',
    outcome:
      'A complete transformation \u2014 physical, emotional, and stylistic. Came to Disha as a first step in reclaiming her identity.',
  },
  {
    descriptor: 'Business Owner, Tiruppur',
    tint: 'bg-primary/10',
    challenge:
      'VIP industrialist \u2014 visible in his city but routinely stopped at hotels and events because his image didn\u2019t match his status.',
    outcome:
      'Focused on styling, posture, and etiquette. Within weeks of completing sessions, he got engaged.',
  },
]

export function CaseStudyCards() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          Stories From Our Clients
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CASE_STUDIES.map((story) => (
            <div
              key={story.descriptor}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className={`h-32 w-full ${story.tint}`} aria-hidden="true" />
              <div className="flex flex-1 flex-col gap-4 px-7 py-8">
                <span className="text-sm tracking-wide text-primary">{story.descriptor}</span>
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  {story.challenge}
                </p>
                <p className="text-sm leading-relaxed text-foreground">{story.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
