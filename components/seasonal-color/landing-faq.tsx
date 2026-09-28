import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQS = [
  {
    question: 'Who is this consultation for?',
    answer:
      "Anyone who feels unsure about the colours they wear\u2014whether you're building a professional wardrobe, want to feel more confident, or are simply tired of buying pieces you never wear.",
  },
  {
    question: 'Will this actually change how I shop?',
    answer:
      'Yes. Most clients say shopping becomes faster and far less stressful, because they instantly know what will and will not work for them.',
  },
  {
    question: 'Is this only for women?',
    answer:
      'No. Disha works with men and women, across ages and industries, including executives and professionals preparing for high-visibility roles.',
  },
  {
    question: "Can I do this if I'm not based in Chennai, Dubai or Singapore?",
    answer:
      'Yes, virtual consultations are available wherever you are based.',
  },
  {
    question: 'What happens after I submit an enquiry?',
    answer:
      "Disha's team reviews every enquiry personally and reaches out to schedule your discovery call.",
  },
]

export function LandingFaq() {
  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <Accordion className="mt-8 w-full sm:mt-12">
          {FAQS.map((faq, i) => (
            <AccordionItem key={faq.question} value={i}>
              <AccordionTrigger className="text-left font-serif text-lg text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
