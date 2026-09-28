import {
  Handshake,
  Palette,
  Presentation,
  ShieldCheck,
  Shirt,
  Sparkles,
  UtensilsCrossed,
  Users,
} from 'lucide-react'

const PROGRAMMES = [
  {
    icon: Presentation,
    name: 'Executive Presence for CEOs & Corporate Leaders',
    description: 'Command boardrooms with posture, poise, and authority.',
  },
  {
    icon: Sparkles,
    name: 'Personal Branding for Corporate Employees',
    description: 'An image that communicates value before a word is spoken.',
  },
  {
    icon: Palette,
    name: 'Colour Analysis for Teams',
    description: 'A shared palette language that elevates every employee.',
  },
  {
    icon: Shirt,
    name: 'Personal Styling & Grooming Standards',
    description: 'Consistent, polished standards across your workforce.',
  },
  {
    icon: ShieldCheck,
    name: 'International Style & Etiquette for Leaders',
    description: 'Navigate global rooms with confidence and cultural fluency.',
  },
  {
    icon: Users,
    name: 'Communication Skills & Body Language',
    description: 'Read the room, and be read the way you intend.',
  },
  {
    icon: Handshake,
    name: 'Impactful First Impressions for Sales Staff',
    description: 'Win trust in the first seven seconds of every meeting.',
  },
  {
    icon: UtensilsCrossed,
    name: 'Business & Dining Etiquette',
    description: 'The unspoken rules that decide deals and careers.',
  },
]

export function ProgrammesSection() {
  return (
    <section id="programmes" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center font-serif text-4xl text-balance text-foreground sm:text-[42px]">
          Training Modules
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMMES.map((programme) => {
            const Icon = programme.icon
            return (
              <div
                key={programme.name}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-8"
              >
                <Icon className="size-6 text-primary" aria-hidden />
                <h3 className="font-serif text-lg leading-snug text-foreground">
                  {programme.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {programme.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
