import { BeforeAfterSlider } from '@/components/seasonal-color/before-after-slider'

export function ComparisonSection() {
  return (
    <section className="bg-background py-10 sm:py-16 border-b border-border/60">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
            Live Draping Demonstration
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-4xl text-balance text-foreground">
            One Person. Two Very Different Impressions.
          </h2>
          <p className="mt-2 max-w-xl text-sm sm:text-base leading-normal text-muted-foreground">
            Same lighting, same camera, zero filter. Drag the slider to see how the wrong drape dulls skin, while the right drape awakens immediate radiance.
          </p>
        </div>

        {/* Disha Caroline Genuine Before/After Draping Slider */}
        <div className="mt-8 mx-auto max-w-xl">
          <div className="overflow-hidden rounded-3xl border border-border shadow-md">
            <BeforeAfterSlider
              beforeSrc="/images/disha-color-wrong-brown.jpg"
              afterSrc="/images/disha-color-right-yellow.jpg"
              beforeAlt="Disha Caroline with unflattering brown drape that dulls complexion"
              afterAlt="Disha Caroline with flattering yellow drape that illuminates complexion"
              beforeLabel="Wrong Colour (Brown)"
              afterLabel="Right Colour (Yellow)"
            />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-center sm:text-left">
            <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-2.5 sm:p-3">
              <span className="text-xs font-semibold text-destructive block">
                Wrong Colour (Brown)
              </span>
              <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                Casts muddy shadows and dulls facial warmth.
              </p>
            </div>
            <div className="rounded-xl bg-primary/10 border border-primary/20 p-2.5 sm:p-3">
              <span className="text-xs font-semibold text-primary block">
                Right Colour (Yellow)
              </span>
              <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                Awakens natural glow and sharpens facial contours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


