import type { Metadata } from 'next'
import { ClientJourneySection } from '@/components/for-men/client-journey-section'
import { HeroSection } from '@/components/for-men/hero-section'
import { RealProblemSection } from '@/components/for-men/real-problem-section'
import { ServicesForMen } from '@/components/for-men/services-for-men'
import { WhoComesSection } from '@/components/for-men/who-comes-section'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'For Men | Disha Caroline',
  description:
    'A direct, no-nonsense path for men ready to change how they present themselves and move through the world.',
}

export default function ForMenPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <RealProblemSection />
      <WhoComesSection />
      <ClientJourneySection />
      <ServicesForMen />
      <CtaBanner
        heading="Your Image Is Your First Impression. Make It Count."
        buttonLabel="Apply for a Consultation"
      />
      <SiteFooter />
    </main>
  )
}
