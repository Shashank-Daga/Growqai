"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AlertTriangle } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ChallengeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  const challenges = [
    {
      id: 1,
      text: "Difficulty in sourcing capital to fuel growth.",
      position: "bottom-3/4 left-0 translate-x-8 -translate-y-4",
    },
    {
      id: 2,
      text: "Stagnant or unpredictable client pipelines.",
      position: "bottom-3/4 right-0 -translate-x-8 -translate-y-4",
    },
    {
      id: 3,
      text: "Scaling that requires more people instead of smarter systems.",
      position: "bottom-1/4 left-0 translate-x-8 translate-y-4",
    },
    {
      id: 4,
      text: "Leveraging Technology for bringing predictable outcomes.",
      position: "bottom-1/4 right-0 -translate-x-8 translate-y-4",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in title when section enters view
      gsap.fromTo(
        ".joinus-title",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      )

      // Scroll-triggered fade-ins for each card
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
        },
      })

      cardsRef.current.forEach((card, i) => {
        tl.fromTo(
          card,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          i * 0.5
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="joinUs"
      className="relative py-24 bg-[#E7E9F1] overflow-hidden min-h-screen"
    > 
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative flex flex-col items-center justify-center min-h-screen">
        {/* Title */}
        <h2
          className="joinus-title text-2xl md:text-3xl font-semibold text-[#050659] leading-snug max-w-3xl mx-auto opacity-0 mb-16">
          We understand the growth challenges you face.
        </h2>

        {/* Floating challenge cards */}
        <div className="absolute inset-0 pointer-events-none">
          {challenges.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className={`absolute ${item.position} bg-gray-50 border border-[#E7E9F1] shadow-sm px-4 py-2 flex items-start gap-3 max-w-xs opacity-0`}
            >
              <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1 shrink-0" />
              <p className="text-base text-[#2527D9] text-left leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
