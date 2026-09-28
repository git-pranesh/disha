import type { Metadata } from 'next'
import { CredentialsTimeline } from '@/components/about/credentials-timeline'
import { MediaRecognition } from '@/components/about/media-recognition'
import { OriginStory } from '@/components/about/origin-story'
import { PageHero } from '@/components/about/page-hero'
import { PhilosophySection } from '@/components/about/philosophy-section'
import { WorldMapSection } from '@/components/about/world-map-section'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'About Disha Caroline | AICIC Certified Image Consultant',
  description:
    "The story behind Disha Caroline \u2014 from a curious teenager to one of Asia's most credentialed image consultants, trained across Singapore, Japan, and Korea.",
}

export default function AboutPage() {
  return (
    <main>
      <SiteHeader forceLight />
      <PageHero />
      <OriginStory />
      <CredentialsTimeline />
      <PhilosophySection />
      <MediaRecognition />
      <WorldMapSection />
      <CtaBanner />
      <SiteFooter />
    </main>
  )
}
