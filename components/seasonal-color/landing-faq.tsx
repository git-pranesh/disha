import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQS = [
  {
    question: 'Why do I really need this? Can’t I just wear whatever colours I like?',
    answer:
      'You can always wear what you like, but colours that fight your natural undertone make you look tired, amplify dark circles, and wash out your facial contours. When you wear your true seasonal palette, your skin appears brighter, your jawline sharper, and you look poised and authoritative without effort.',
  },
  {
    question: 'Will my 12-season colour palette change if I tan or as I grow older?',
    answer:
      'No. Your seasonal colour palette is determined by your deep genetic undertone and natural contrast, not surface tanning or aging. While your surface tone might change with sun exposure, your core palette remains constant. This is a one-time investment that guides your wardrobe for life.',
  },
  {
    question: 'As a man, is seasonal colour analysis really relevant for me?',
    answer:
      'Completely. In fact, over 40% of Disha’s private clients are male executives, founders, and professionals. Knowing your palette immediately sharpens your suits, shirt collars, blazers, and ties, ensuring you project natural gravitas and executive presence rather than blending into the background.',
  },
  {
    question: 'Is this only in India, or can I consult with Disha from another country?',
    answer:
      'Disha consults with clients globally across 12+ countries. In addition to in-person consultations in Chennai, Dubai, and Singapore, Disha conducts high-precision virtual colour consultations for international clients across the US, UK, Europe, and Australia.',
  },
  {
    question: 'What other services does Disha offer after my colour analysis?',
    answer:
      'Seasonal colour analysis is the ideal foundation. Once your palette is unlocked, Disha offers full Personal Styling, Wardrobe Audits & Revamping, Executive Presence & Body Language Coaching, Personal Shopping curation, and Corporate Team Grooming.',
  },
]

export function LandingFaq() {
  return (
    <section className="bg-background py-10 sm:py-16 border-b border-border/60">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Got Questions?
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-balance text-foreground font-normal">
            Frequently Asked Questions
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">
            Clear answers to help you decide if a personal colour analysis is right for you.
          </p>
        </div>

        <Accordion className="mt-6 sm:mt-8 w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.question} value={i}>
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:text-primary transition-colors py-3 sm:py-3.5 no-underline hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm leading-relaxed text-muted-foreground pb-3">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}


