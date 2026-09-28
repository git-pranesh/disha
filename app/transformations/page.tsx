import type { Metadata } from 'next'
import { CaseStudyCards } from '@/components/transformations/case-study-cards'
import { IntroSection } from '@/components/transformations/intro-section'
import { StatStrip } from '@/components/transformations/stat-strip'
import { TestimonialQuotes } from '@/components/transformations/testimonial-quotes'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Transformations | Disha Caroline',
  description:
    'Two hundred transformations and counting \u2014 real case studies and client stories from Disha Caroline\u2019s image consulting practice, told without before/after photos to protect client confidentiality.',
}

export default function TransformationsPage() {
  return (
    <main>
      <SiteHeader forceLight />
      <IntroSection />
      <StatStrip />
      <CaseStudyCards />
      <TestimonialQuotes />
      <CtaBanner
        heading="Your Transformation Is Waiting."
        buttonLabel="Apply for a Consultation"
      />
      <SiteFooter />
    </main>
  )
}
