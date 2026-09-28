import { BeforeAfterSlider } from '@/components/seasonal-color/before-after-slider'

// Each pair uses two real photographs of the same person, same pose, and same
// setting, styled with different colours. Because it's one person shot in one
// session, the face, framing, and proportions are genuinely identical between
// "before" and "after", only the colours worn change.
const TRANSFORMATIONS = [
  {
    name: 'Same woman, different colours',
    caption: 'The right blouse and lipstick shade bring warmth and light to her complexion.',
    beforeSrc: '/images/transformation-woman-before.jpg',
    afterSrc: '/images/transformation-woman-after.jpg',
    beforeAlt: 'A woman wearing a muted grey top that mutes her natural colouring',
    afterAlt: 'The same woman wearing a rich teal blouse that brightens her complexion',
  },
  {
    name: 'Same man, different colours',
    caption: 'A well-matched suit and shirt colour instantly sharpen his presence.',
    beforeSrc: '/images/transformation-man-before.jpg',
    afterSrc: '/images/transformation-man-after.jpg',
    beforeAlt: 'A man wearing a grey blazer that reads flat against his skin tone',
    afterAlt: 'The same man wearing a navy suit that sharpens and flatters his complexion',
  },
]

export function ComparisonSection() {
  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
          <h2 className="font-serif text-3xl text-balance text-foreground sm:text-4xl">
            One Wardrobe. Two Very Different Impressions.
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-lg">
            It goes beyond clothing. The same person can look tired or
            radiant, based only on the colours worn. Drag to compare.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-12 sm:gap-10 md:grid-cols-2">
          {TRANSFORMATIONS.map((item) => (
            <div key={item.name} className="flex flex-col gap-3 sm:gap-5">
              <BeforeAfterSlider
                beforeSrc={item.beforeSrc}
                afterSrc={item.afterSrc}
                beforeAlt={item.beforeAlt}
                afterAlt={item.afterAlt}
                beforeLabel="Before"
                afterLabel="After"
              />
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
