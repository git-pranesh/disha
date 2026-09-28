import { InviteForm } from '@/components/workshops/invite-form'

export function InviteSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div>
          <span className="text-xs tracking-[0.2em] text-gold uppercase">Bring Disha In</span>
          <h2 className="mt-4 font-serif text-3xl text-balance text-foreground sm:text-4xl">
            Invite Disha to Speak
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Share a few details about your event and Disha&apos;s team will follow up with
            availability and a proposed format.
          </p>
        </div>

        <InviteForm />
      </div>
    </section>
  )
}
