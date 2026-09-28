const SIGNS = [
  {
    hook: 'Your wardrobe is all black, grey and navy',
    detail: 'Safe, but never exciting, you reach for the same neutrals every time.',
  },
  {
    hook: "People say you look tired, even when you're not",
    detail: "The colours near your face may be working against you, not for you.",
  },
  {
    hook: 'Lipstick after lipstick, none of them feel right',
    detail: "It's rarely the shade itself, it's whether it's the right undertone for you.",
  },
  {
    hook: 'You default to the same safe shirts and ties',
    detail: "Without knowing what actually suits you, safe feels like the only option.",
  },
  {
    hook: 'You freeze in front of a colourful outfit',
    detail: "Unsure if it will work on you, so it stays on the rack.",
  },
  {
    hook: "You don't feel truly seen when you enter a room",
    detail: 'The right palette makes people notice you, not just your outfit.',
  },
]

export function RecognitionSection() {
  return (
    <section className="bg-primary py-10 sm:py-24">
      <div className="mx-auto max-w-2xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-primary-foreground sm:text-4xl">
          Does This Sound Familiar?
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
          {SIGNS.map((sign, index) => (
            <div
              key={sign.hook}
              className="flex gap-3 rounded-2xl bg-primary-foreground/10 px-4 py-4 sm:px-5 sm:py-5"
            >
              <span
                className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-xs text-primary"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-balance text-sm font-medium text-primary-foreground sm:text-base">
                  {sign.hook}
                </p>
                <p className="text-sm leading-relaxed text-primary-foreground/70">{sign.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
