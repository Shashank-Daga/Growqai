"use client"

import { motion } from "framer-motion"
import { animationConfig, staggerContainer, fadeInUp } from "@/lib/animations"

const services = [
  {
    icon: (
      <svg viewBox="0 0 120 120" className="w-32 h-32">
        <path
          d="M30 30 L60 20 L90 30 L90 60 L60 90 L30 60 Z"
          fill="#d1d5db"
          stroke="#9ca3af"
          strokeWidth="2"
        />
        <path
          d="M60 20 L90 30 L90 60 L60 50 Z"
          fill="#9ca3af"
        />
      </svg>
    ),
    title: "AI Strategy & Consulting",
    description: "Turn ambition into action with a clear AI roadmap. We align AI opportunities with your business priorities, define use cases with ROI, and guide you through adoption with confidence.",
  },
  {
    icon: (
      <svg viewBox="0 0 120 120" className="w-32 h-32">
        <ellipse cx="60" cy="35" rx="35" ry="8" fill="#d1d5db" />
        <ellipse cx="60" cy="50" rx="35" ry="8" fill="#d1d5db" />
        <ellipse cx="60" cy="65" rx="35" ry="8" fill="#d1d5db" />
        <ellipse cx="60" cy="80" rx="35" ry="8" fill="#d1d5db" />
      </svg>
    ),
    title: "Data Enablement",
    description: "Lay the foundation for AI success. From data strategy and architecture to governance and integration, we ensure your data is ready to power scalable, intelligent solutions.",
  },
  {
    icon: (
      <svg viewBox="0 0 120 120" className="w-32 h-32">
        <path
          d="M30 60 Q30 30 60 30 Q90 30 90 60 Q90 90 60 90 Q30 90 30 60"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M45 75 L60 60 L75 45"
          fill="none"
          stroke="#d1d5db"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Managed AI Solutions",
    description: "We architect, design, build, and manage AI agentic solutions tailored to your business, so you can focus on outcomes without the technological hassle.",
  },
  {
    icon: (
      <svg viewBox="0 0 120 120" className="w-32 h-32">
        <rect x="30" y="30" width="60" height="60" rx="5" fill="#f3f4f6" stroke="#d1d5db" strokeWidth="2" />
        <line x1="40" y1="45" x2="80" y2="45" stroke="#9ca3af" strokeWidth="2" />
        <line x1="40" y1="55" x2="80" y2="55" stroke="#9ca3af" strokeWidth="2" />
        <line x1="40" y1="65" x2="80" y2="65" stroke="#9ca3af" strokeWidth="2" />
        <line x1="40" y1="75" x2="65" y2="75" stroke="#9ca3af" strokeWidth="2" />
      </svg>
    ),
    title: "AI Proof of Concept",
    description: "We co-create and test high-impact AI use cases, proving value in days or weeks. So you know what to invest in and how to expand with confidence.",
  },
  {
    icon: (
      <svg viewBox="0 0 120 120" className="w-32 h-32">
        <path
          d="M60 30 L80 50 L80 80 Q80 85 75 85 L45 85 Q40 85 40 80 L40 50 Z"
          fill="#d1d5db"
        />
        <path
          d="M60 30 L80 50 L60 50 Z"
          fill="#9ca3af"
        />
        <circle cx="60" cy="60" r="8" fill="#f3f4f6" />
      </svg>
    ),
    title: "AI Training & Learning",
    description: "Make AI part of your DNA. We upskill teams, educate, and embed adoption practices so your people and technology grow stronger together.",
  },
]

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          {/* Decorative top line */}
          <div className="relative mb-2">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>
          <p className="text-sm text-gray-600 mb-6 tracking-wide">/OUR SERVICES</p>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <h2 className="text-5xl md:text-6xl font-bold">Capabilities</h2>
            <p className="text-gray-700 max-w-md text-lg leading-relaxed">
              We design and deliver AI solutions that solve real business challenges, create measurable impact, and build capabilities that will last inside your organization.
            </p>
          </div>
        </div>

        {/* Services Layout */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* First Row - 2 Cards */}
          <div className="flex flex-col md:flex-row gap-4">
            {services.slice(0, 2).map((service, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex-1 p-12 bg-gray-50 group hover:bg-gray-100 transition-colors"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="flex flex-col md:flex-row gap-4">
            {services.slice(2, 5).map((service, i) => (
              <motion.div
                key={i + 2}
                variants={fadeInUp}
                className="flex-1 p-12 bg-gray-50 group hover:bg-gray-100 transition-colors"
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
