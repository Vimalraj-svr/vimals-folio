"use client"

import { useEffect } from "react"

export function BrutalistAnimations() {
  useEffect(() => {
    async function init() {
      const { default: gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      const elements = document.querySelectorAll("[data-slam]")

      elements.forEach((el, i) => {
        const delay = Number((el as HTMLElement).dataset.slamDelay ?? 0)
        gsap.fromTo(
          el,
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.42,
            delay,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        )
      })

      return () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }

    const cleanup = init()
    return () => { cleanup.then((fn) => fn?.()) }
  }, [])

  return null
}
