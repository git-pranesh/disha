import { BeforeAfterSlider } from '@/components/seasonal-color/before-after-slider'

export function ComparisonSection() {
  return (
    <section className="bg-background py-10 sm:py-16 border-b border-border/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-[0.22em] text-gold uppercase">
            Live Draping Demonstration
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl text-balance text-foreground font-normal">
            One Person. Two Very Different Impressions.
          </h2>
          <p className="mt-2 max-w-xl text-sm sm:text-base leading-normal text-muted-foreground">
            Same lighting, same camera, zero filter. Drag the slider to observe how undertone harmony transforms skin vitality in real time.
          </p>
        </div>

        {/* Disha Caroline Genuine Before/After Draping Slider */}
        <div className="mt-8 mx-auto max-w-lg">
          <div className="overflow-hidden rounded-3xl border border-border/80 shadow-md">
            <BeforeAfterSlider
              beforeSrc="/images/disha-color-wrong-brown.jpg"
              afterSrc="/images/disha-color-right-yellow.jpg"
              beforeAlt="Disha Caroline with cooler brown drape casting sallowness"
              afterAlt="Disha Caroline with warmer yellow drape creating even-toned glow"
              beforeLabel="Cooler Brown"
              afterLabel="Warmer Yellow"
            />
          </div>

          {/* Clinical Skin Observations - Exactly matching Disha's reference format */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
            
            {/* Cooler Brown Drape Observations */}
            <div className="rounded-2xl border border-border/80 bg-card/60 p-4 sm:p-5 flex flex-col gap-2.5">
              <span className="font-serif text-sm sm:text-base font-semibold text-foreground">
                Cooler Brown Drape
              </span>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span>Creates sallowness and uneven skin tone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span>Smile lines and dark eye circles become accentuated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold text-xs shrink-0 mt-0.5">✕</span>
                  <span>Overall complexion appears flat and lacking energy</span>
                </li>
              </ul>
            </div>

            {/* Warmer Yellow Drape Observations */}
            <div className="rounded-2xl border border-border/80 bg-card/60 p-4 sm:p-5 flex flex-col gap-2.5">
              <span className="font-serif text-sm sm:text-base font-semibold text-foreground">
                Warmer Yellow Drape
              </span>
              <ul className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>Skin appears smooth, polished, and even-toned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>Awakens natural golden warmth and healthy radiance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>Face looks naturally lifted with defined contours</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}



