'use client'

import { Geography, Geographies, Marker, ComposableMap } from 'react-simple-maps'

const GEO_URL = 'https://unpkg.com/world-atlas@2/land-110m.json'

const CLIENT_LOCATIONS = [
  { name: 'Chennai', coordinates: [80.2707, 13.0827] },
  { name: 'Dubai', coordinates: [55.2708, 25.2048] },
  { name: 'Singapore', coordinates: [103.8198, 1.3521] },
  { name: 'Kuala Lumpur', coordinates: [101.6869, 3.139] },
  { name: 'Sydney', coordinates: [151.2093, -33.8688] },
  { name: 'Toronto', coordinates: [-79.3832, 43.6532] },
  { name: 'Florida', coordinates: [-81.5158, 27.6648] },
  { name: 'London', coordinates: [-0.1276, 51.5072] },
  { name: 'Zurich', coordinates: [8.5417, 47.3769] },
  { name: 'Madrid', coordinates: [-3.7038, 40.4168] },
  { name: 'Manila', coordinates: [120.9842, 14.5995] },
] satisfies { name: string; coordinates: [number, number] }[]

export function WorldMapSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="text-center font-serif text-3xl text-balance text-foreground sm:text-4xl">
          Where Disha Works
        </h2>

        <div className="mt-12 w-full">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 105, center: [15, 15] }}
            className="h-auto w-full"
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#e8e3ed"
                    stroke="#ffffff"
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>

            {CLIENT_LOCATIONS.map(({ name, coordinates }) => (
              <Marker key={name} coordinates={coordinates}>
                <circle r={4} fill="#4c1a6e" stroke="#ffffff" strokeWidth={1} />
              </Marker>
            ))}
          </ComposableMap>
        </div>

        <p className="mt-8 text-center text-sm tracking-[0.1em] text-muted-foreground uppercase">
          Active clients across 3 continents
        </p>
      </div>
    </section>
  )
}
