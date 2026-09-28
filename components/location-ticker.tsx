const LOCATIONS = [
  'Dubai',
  'Singapore',
  'Malaysia',
  'London',
  'Sydney',
  'Toronto',
  'Florida',
  'Philippines',
]

function TickerRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {LOCATIONS.map((city, i) => (
        <span key={i} className="flex items-center">
          <span className="px-4 text-xs tracking-[0.15em] text-white sm:px-6 sm:text-sm">
            {city}
          </span>
          <span className="h-3 w-px bg-white/30" aria-hidden="true" />
        </span>
      ))}
    </div>
  )
}

export function LocationTicker() {
  return (
    <div className="w-full overflow-hidden bg-primary py-3">
      <div className="flex w-max animate-[ticker_32s_linear_infinite]">
        <TickerRow />
        <TickerRow ariaHidden />
      </div>
    </div>
  )
}
