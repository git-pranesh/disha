export function RealProblemSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-2 md:items-center md:gap-14 md:px-10">
        <div className="order-2 aspect-[4/5] w-full rounded-2xl bg-card md:order-1" />
        <div className="order-1 flex flex-col gap-5 md:order-2">
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-[28px]">
            Most Men Have Never Been Taught This.
          </h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Your father dressed a certain way. Your grandfather had a look.
              You inherited something, but it was never yours.
            </p>
            <p>
              The men who come to Disha aren&apos;t struggling with fashion.
              They&apos;re struggling with how to walk into a room and feel
              like they belong. How to speak to someone they want to
              impress. How to carry themselves in a way that says
              &ldquo;I&apos;m here,&rdquo; without saying a word.
            </p>
            <p>The process is straightforward. The transformation is not.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
