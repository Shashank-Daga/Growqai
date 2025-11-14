"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const approachSteps = [
  {
    number: "/01",
    title: "Envision",
    description:
      "It begins by understanding your goals and challenges to identify where AI can create the most value for your organization. This step clarifies priorities, exposes inefficiencies, and reveals new monetization opportunities.",
    icon: (
      <svg viewBox="0 0 300 400" className="w-full h-full">
        <defs>
          <linearGradient id="barGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
        </defs>
        <rect x="60" y="260" width="40" height="80" fill="url(#barGradient1)" opacity="0.7" />
        <rect x="110" y="220" width="40" height="120" fill="url(#barGradient1)" opacity="0.8" />
        <rect x="160" y="180" width="40" height="160" fill="url(#barGradient1)" opacity="0.9" />
        <rect x="210" y="140" width="40" height="200" fill="url(#barGradient1)" />
      </svg>
    ),
  },
  {
    number: "/02",
    title: "Blueprint",
    description:
      "From shaping a roadmap to addressing urgent challenges, we design and architect AI solutions by identifying both everyday inefficiencies and mission-critical pain points.",
    icon: (
      <svg viewBox="0 0 300 400" className="w-full h-full">
        <defs>
          <linearGradient id="layerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
        </defs>
        <path d="M 150 120 L 220 180 L 150 240 L 80 180 Z" fill="url(#layerGradient)" />
        <path
          d="M 150 200 L 240 270 L 150 340 L 60 270 Z"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="2"
          opacity="0.5"
        />
        <path
          d="M 150 240 L 260 320 L 150 400 L 40 320 Z"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    number: "/03",
    title: "Deploy",
    description:
      "We build and integrate AI solutions into new or existing workflows, ensuring secure data foundations, current IT system integration, and measurable results from day one.",
    icon: (
      <svg viewBox="0 0 300 400" className="w-full h-full relative">
        <defs>
          <linearGradient id="stackGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
        </defs>
        <path
          d="M 80 300 L 150 260 L 220 300 L 220 340 L 150 380 L 80 340 Z"
          fill="url(#stackGradient)"
          opacity="0.5"
        />
        <path
          d="M 80 240 L 150 200 L 220 240 L 220 280 L 150 320 L 80 280 Z"
          fill="url(#stackGradient)"
          opacity="0.7"
        />
        <path
          d="M 80 180 L 150 140 L 220 180 L 220 220 L 150 260 L 80 220 Z"
          fill="url(#stackGradient)"
        />
        <circle cx="150" cy="130" r="20" fill="#3b82f6" opacity="0.8" />
        <Sparkles className="absolute" style={{ left: "50%", top: "20%", transform: "translate(-50%, -50%)" }} />
      </svg>
    ),
  },
]

export function ApproachSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      })

      gsap.set(stepsRef.current, { opacity: 0, y: 50 })

      stepsRef.current.forEach((step, i) => {
        tl.to(step, { opacity: 1, y: 0, duration: 1 }, i * 2)
        if (i !== stepsRef.current.length - 1) {
          tl.to(step, { opacity: 0, y: -50, duration: 1 }, i * 2 + 1.5)
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <div className="relative mb-2">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>
          <p className="text-sm text-gray-600 tracking-wide">/OUR APPROACH</p>
        </div>

        {/* Steps (one visible at a time) */}
        <div className="relative w-full max-w-6xl h-[70vh] flex items-center justify-center">
          {approachSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) stepsRef.current[index] = el
              }}
              className="absolute inset-0 flex items-center justify-between gap-12 opacity-0 px-8"
            >
              {/* Number */}
              <p className="text-6xl md:text-7xl font-bold text-gray-300 shrink-0 w-32 text-center">
                {step.number}
              </p>

              {/* Icon */}
              <div className="w-[260px] h-[340px] shrink-0">{step.icon}</div>

              {/* Title + Description */}
              <div className="max-w-xl text-left space-y-4">
                <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
