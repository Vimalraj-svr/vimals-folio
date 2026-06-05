"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  to,
  suffix = "",
  duration = 1800,
  className,
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * to))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(to)
    }
    requestAnimationFrame(step)
  }, [isInView, to, duration])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}
