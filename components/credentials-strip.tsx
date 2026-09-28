import Image from 'next/image'

const STATS = [
  { value: '200+', label: 'Clients Transformed' },
  { value: '12+', label: 'Countries Served' },
  { value: '8+', label: 'Years of Expertise' },
]

export function CredentialsStrip() {
  return (
    <section className="border-y border-border bg-muted py-12 sm:py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:gap-10 md:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid grid-cols-3 gap-3 sm:gap-10">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 text-center sm:gap-2 lg:items-start lg:text-left"
            >
              <span className="font-serif text-3xl text-primary sm:text-4xl">{stat.value}</span>
              <span className="text-[10px] leading-snug tracking-wide text-muted-foreground uppercase sm:text-[13px] sm:tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-border pt-8 sm:flex-row sm:gap-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
          <Image
            src="/aici-member-logo.png"
            alt="AICI - Association of Image Consultants International, Member"
            width={128}
            height={128}
            className="h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28"
          />
          <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
            <span className="text-xs tracking-[0.2em] text-foreground uppercase">
              AICI Certified Image Consultant
            </span>
            <span className="text-xs text-muted-foreground">
              Trained in Singapore &middot; Korea &middot; Japan
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
