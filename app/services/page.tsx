import { ListingHero } from '@/components/services/listing-hero'
import { OfferingsGrid } from '@/components/services/offerings-grid'
import { CtaBanner } from '@/components/cta-banner'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <ListingHero />
      <OfferingsGrid />
      <CtaBanner />
      <SiteFooter />
    </main>
  )
}
