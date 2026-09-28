import type { Metadata } from 'next'
import { CtaBanner } from '@/components/cta-banner'
import { HeroSection } from '@/components/for-women/hero-section'
import { RealProblemSection } from '@/components/for-women/real-problem-section'
import { ServicesForWomen } from '@/components/for-women/services-for-women'
import { WhoComesSection } from '@/components/for-women/who-comes-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'For Women | Disha Caroline',
  description:
    'A guided path for women ready to change how they see themselves, dress, and move through the world.',
}

export default function ForWomenPage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <RealProblemSection />
      <WhoComesSection />
      <ServicesForWomen />
      <CtaBanner
        heading="You're Ready. You Just Need the Right Guide."
        buttonLabel="Apply for a Consultation"
      />
      <SiteFooter />
    </main>
  )
}
