export function RealProblemSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center md:gap-14 md:px-10">
        <div className="flex flex-col gap-5">
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-[28px]">
            It&apos;s Not About the Clothes.
          </h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Most women who come to Disha aren&apos;t struggling with their
              wardrobe. They&apos;re dealing with something much deeper: how
              they see themselves. Body image. Self image. The quiet belief
              that they don&apos;t deserve to take up space.
            </p>
            <p>
              Some are in the wrong job. Some are in the wrong relationship.
              Some are simply ready, for the first time in years, to invest
              in themselves.
            </p>
            <p>
              What Disha does is not cosmetic. It&apos;s corrective. And the
              results go much further than a new outfit.
            </p>
          </div>
        </div>
        <div className="aspect-[4/5] w-full rounded-2xl bg-card" />
      </div>
    </section>
  )
}
