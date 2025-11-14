"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

// Reusable fade-in-from-direction animation
const fadeInDirection = (direction: "left" | "right" | "up"): Variants => {
  const distance = 100
  return {
    initial: {
      opacity: 0,
      x: direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? distance : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }
}

const services = [
  {
    id: 1,
    title: "AI Strategy & Consulting",
    description:
      "Turn ambition into action with a clear AI roadmap. We align AI opportunities with your business priorities, define use cases with ROI, and guide you through adoption with confidence.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-20 h-20">
        <path
          d="M30 30 L60 20 L90 30 L90 60 L60 90 L30 60 Z"
          fill="#d1d5db"
          stroke="#9ca3af"
          strokeWidth="2"
        />
        <path d="M60 20 L90 30 L90 60 L60 50 Z" fill="#9ca3af" />
      </svg>
    ),
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    title: "Data Enablement",
    description:
      "Lay the foundation for AI success. From data strategy and architecture to governance and integration, we ensure your data is ready to power scalable, intelligent solutions.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-20 h-20">
        <ellipse cx="60" cy="35" rx="35" ry="8" fill="#d1d5db" />
        <ellipse cx="60" cy="50" rx="35" ry="8" fill="#d1d5db" />
        <ellipse cx="60" cy="65" rx="35" ry="8" fill="#d1d5db" />
        <ellipse cx="60" cy="80" rx="35" ry="8" fill="#d1d5db" />
      </svg>
    ),
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    title: "Managed AI Solutions",
    description:
      "We architect, design, build, and manage AI agentic solutions tailored to your business, so you can focus on outcomes without the technological hassle.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-20 h-20">
        <path
          d="M30 60 Q30 30 60 30 Q90 30 90 60 Q90 90 60 90 Q30 90 30 60"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M45 75 L60 60 L75 45"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    ),
    image: "/placeholder.jpg",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-20">
          <div className="relative mb-2">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>
          <p className="text-sm text-gray-600 mb-6 tracking-wide">/OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Capabilities
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            We design and deliver AI solutions that solve real business challenges,
            create measurable impact, and build capabilities that last inside your
            organization.
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-24">
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0
            return (
              <motion.div
                key={service.id}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }} // 👈 triggers when this row enters view
              >
                {/* Text Card */}
                <motion.div
                  variants={fadeInDirection(isReversed ? "right" : "left")}
                  className="flex-1"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div
                  variants={fadeInDirection("up")}
                  className="flex-1 w-full relative aspect-4/3 overflow-hidden rounded-xl"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
        
      </div>
    </section>
  )
}
