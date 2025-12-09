"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Sparkles } from "lucide-react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

const approachSteps = [
  {
    number: "1",
    title: "A-Assess",
    description:
      "Analyzes the business landscape, identifies growth gaps, and benchmarks performance across capital, client, and talent verticals. Establishes a clear foundation for scalable growth.",
    image: "/Appr/ASSESS.png",
  },
  {
    number: "2",
    title: "C- Create",
    description:
      "Designs tailored strategies, systems, and processes that align with business objectives. Builds actionable roadmaps that convert insights into measurable outcomes.",
    image: "/Appr/CREATE.png",
  },
  {
    number: "3",
    title: "E- Enable",
    description:
      "Implements the right tools, networks, and expertise to execute and sustain growth. Empowers businesses to accelerate performance and maintain long-term impact.",
    image: "/Appr/ENABLE.png",
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

              {/* Image */}
              <div className="w-[380px] h-[340px] shrink-0 relative overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title + Description */}
              <div className="max-w-xl text-left space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold text-[#2527D9]">
                  {step.title}
                </h3>
                <p className="text-xl text-[#313447] leading-relaxed">
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
