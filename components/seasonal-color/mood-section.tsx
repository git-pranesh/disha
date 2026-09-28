const EFFECTS = [
  {
    title: 'Mood',
    description:
      'Colour can influence mood, self-perception and how others experience your presence.',
  },
  {
    title: 'Confidence',
    description:
      'Wearing colours that suit you removes the hesitation from getting dressed.',
  },
  {
    title: 'Visibility',
    description:
      'Some colours make you glow. Others quietly fade you into the background.',
  },
  {
    title: 'Presence',
    description:
      'The right palette makes you memorable in every room you walk into.',
  },
]

export function MoodSection() {
  return (
    <section className="bg-secondary py-10 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Colour Changes How You&apos;re Seen
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
            People register your colours before they read your résumé or hear
            you speak, and it shapes what they assume.
          </p>
        </div>

        <div className="-mx-6 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mt-12 sm:gap-5 sm:px-10 [&::-webkit-scrollbar]:hidden">
          {EFFECTS.map((effect) => (
            <div
              key={effect.title}
              className="flex w-[78%] shrink-0 snap-start flex-col gap-2 rounded-2xl bg-background px-6 py-6 sm:w-[38%] sm:px-7 sm:py-7"
            >
              <span className="font-serif text-lg text-gold sm:text-xl">{effect.title}</span>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {effect.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
          Swipe to see more
        </p>
      </div>
    </section>
  )
}
