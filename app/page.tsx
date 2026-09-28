import { AboutSnippet } from '@/components/about-snippet'
import { CredentialsStrip } from '@/components/credentials-strip'
import { CtaBanner } from '@/components/cta-banner'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhoSheWorksWith } from '@/components/who-she-works-with'

export default function Page() {
  return (
    <main>
      <SiteHeader forceLight />
      <HeroSection />
      <CredentialsStrip />
      <WhoSheWorksWith />
      <AboutSnippet />
      <ServicesSection />
      <CtaBanner />
      <SiteFooter />
    </main>
  )
}
