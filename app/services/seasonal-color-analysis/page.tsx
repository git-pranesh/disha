import type { Metadata } from 'next'
import { BenefitsSection } from '@/components/seasonal-color/benefits-section'
import { ComparisonSection } from '@/components/seasonal-color/comparison-section'
import { DishaQuoteSection } from '@/components/seasonal-color/disha-quote-section'
import { EnquirySection } from '@/components/seasonal-color/enquiry-section'
import { LandingFaq } from '@/components/seasonal-color/landing-faq'
import { LandingFooter } from '@/components/seasonal-color/landing-footer'
import { LandingHeader } from '@/components/seasonal-color/landing-header'
import { LandingHero } from '@/components/seasonal-color/landing-hero'
// Note: MoodSection preserved so it can be brought back anytime
// import { MoodSection } from '@/components/seasonal-color/mood-section'
import { RecognitionSection } from '@/components/seasonal-color/recognition-section'

export const metadata: Metadata = {
  title: 'Personal 12-Season Colour Analysis | Disha Caroline',
  description:
    'Discover your true 12-season colour palette with Disha Caroline, Image & Colour Expert. Unlock wardrobe clarity, natural skin radiance, and executive presence.',
}

export default function SeasonalColorAnalysisPage() {
  return (
    <main>
      <LandingHeader />
      <LandingHero />
      <RecognitionSection />
      <DishaQuoteSection />
      <ComparisonSection />
      <BenefitsSection />
      <LandingFaq />
      <EnquirySection />
      <LandingFooter />
    </main>
  )
}

