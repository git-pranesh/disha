import type { Metadata } from 'next'
import { ClientTypesSection } from '@/components/corporate/client-types-section'
import { HeroSection } from '@/components/corporate/hero-section'
import { InquiryProcessSection } from '@/components/corporate/inquiry-process-section'
import { ProgrammesSection } from '@/components/corporate/programmes-section'
import { WhyDishaSection } from '@/components/corporate/why-disha-section'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Corporate Training | Disha Caroline Image Consulting',
  description:
    'Corporate image consulting and soft skills training programmes for teams who represent your brand \u2014 executive presence, personal branding, and etiquette, scoped to your industry.',
}

export default function CorporateTrainingPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ProgrammesSection />
      <WhyDishaSection />
      <ClientTypesSection />
      <InquiryProcessSection />
      <CtaBanner
        heading="Your brand lives in how your team shows up."
        subtext="Tell us your team size, industry, and objective to get started."
        buttonLabel="Request a Programme Brief"
      />
      <SiteFooter />
    </main>
  )
}
