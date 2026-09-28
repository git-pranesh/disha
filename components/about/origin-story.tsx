const PARAGRAPHS = [
  'Even as a child, she advised schoolmates on skincare, haircare, and style \u2014 long before she knew it would become her profession.',
  'At engineering college, she taught spoken English to rural-area classmates. After graduating, she worked at Infosys \u2014 but something felt misaligned. She enrolled in an image consulting course while still at her job.',
  'Once certified and experienced enough, she left Infosys to launch Disha Caroline Image Consulting \u2014 a decision that defined her.',
  'Today, she is one of the most credentialed image consultants in Asia: trained in Singapore under Certified Image Master Christina Ong, certified in Japan, and holding three certifications from Korea.',
]

export function OriginStory() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-[1.3fr_1fr] md:px-10">
        <div className="flex flex-col gap-6">
          {PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex items-start md:items-center md:justify-center">
          <blockquote className="border-l-2 border-gold pl-6 font-serif text-[28px] leading-snug text-balance text-primary">
            &ldquo;I didn&apos;t change careers. I found myself.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
