'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

interface BeforeAfterSliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  beforeLabel: string
  afterLabel: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const ratio = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, ratio)))
  }, [])

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      draggingRef.current = true
      event.currentTarget.setPointerCapture(event.pointerId)
      updatePosition(event.clientX)
    },
    [updatePosition],
  )

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return
      updatePosition(event.clientX)
    },
    [updatePosition],
  )

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      draggingRef.current = false
      event.currentTarget.releasePointerCapture(event.pointerId)
    },
    [],
  )

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      setPosition((prev) => Math.max(0, prev - 5))
    } else if (event.key === 'ArrowRight') {
      setPosition((prev) => Math.min(100, prev + 5))
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] w-full touch-none overflow-hidden rounded-2xl select-none sm:aspect-[3/4]"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <span className="pointer-events-none absolute right-4 bottom-4 z-10 rounded-full bg-background/85 px-3 py-1 text-xs font-medium tracking-wide text-foreground uppercase">
        {afterLabel}
      </span>

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="pointer-events-none object-cover"
          draggable={false}
        />
        <span className="absolute bottom-4 left-4 z-10 rounded-full bg-background/85 px-3 py-1 text-xs font-medium tracking-wide text-foreground uppercase">
          {beforeLabel}
        </span>
      </div>

      <div
        className="absolute inset-y-0 z-20 w-0.5 bg-background"
        style={{ left: `${position}%` }}
      >
        <div
          role="slider"
          tabIndex={0}
          aria-label={`Reveal ${beforeLabel} vs ${afterLabel}`}
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={handleKeyDown}
          className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
            aria-hidden="true"
          >
            <path d="M8 8L4 12L8 16" />
            <path d="M16 8L20 12L16 16" />
          </svg>
        </div>
      </div>
    </div>
  )
}
