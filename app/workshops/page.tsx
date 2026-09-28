import type { Metadata } from 'next'
import { FormatsSection } from '@/components/workshops/formats-section'
import { HeroSection } from '@/components/workshops/hero-section'
import { InviteSection } from '@/components/workshops/invite-section'
import { PastAssociations } from '@/components/workshops/past-associations'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Workshops & Guest Lectures | Disha Caroline',
  description:
    'Corporate workshops, kids etiquette programmes, and guest lectures on image, etiquette, and personal presence with Disha Caroline.',
}

export default function WorkshopsPage() {
  return (
    <main>
      <SiteHeader forceLight />
      <HeroSection />
      <FormatsSection />
      <PastAssociations />
      <InviteSection />
      <SiteFooter />
    </main>
  )
}
