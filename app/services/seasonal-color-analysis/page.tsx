import type { Metadata } from 'next'
import { BenefitsSection } from '@/components/seasonal-color/benefits-section'
import { ComparisonSection } from '@/components/seasonal-color/comparison-section'
import { CredibilitySection } from '@/components/seasonal-color/credibility-section'
import { EnquirySection } from '@/components/seasonal-color/enquiry-section'
import { LandingFaq } from '@/components/seasonal-color/landing-faq'
import { LandingFooter } from '@/components/seasonal-color/landing-footer'
import { LandingHeader } from '@/components/seasonal-color/landing-header'
import { LandingHero } from '@/components/seasonal-color/landing-hero'
import { MoodSection } from '@/components/seasonal-color/mood-section'
import { RecognitionSection } from '@/components/seasonal-color/recognition-section'

export const metadata: Metadata = {
  title: 'Seasonal Colour Analysis in Chennai | Disha Caroline',
  description:
    'Discover how professionally selected colours can improve your wardrobe, confidence and presence. Request a seasonal colour analysis with Disha Caroline.',
}

export default function SeasonalColorAnalysisPage() {
  return (
    <main>
      <LandingHeader />
      <LandingHero />
      <ComparisonSection />
      <RecognitionSection />
      <MoodSection />
      <BenefitsSection />
      <CredibilitySection />
      <LandingFaq />
      <EnquirySection />
      <LandingFooter />
    </main>
  )
}
