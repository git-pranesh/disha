import type { Metadata } from 'next'
import { InquirySection } from '@/components/contact/inquiry-section'
import { LocationsSection } from '@/components/contact/locations-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Apply to Work With Disha | Disha Caroline',
  description:
    'Disha personally reviews every inquiry and speaks with each prospective client before accepting them. Submit your application to begin the process.',
}

export default function ContactPage() {
  return (
    <main>
      <SiteHeader forceLight />
      <InquirySection />
      <LocationsSection />
      <SiteFooter />
    </main>
  )
}
