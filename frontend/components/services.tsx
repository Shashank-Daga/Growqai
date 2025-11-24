"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    id: 1,
    title: "Arrange Capital",
    slug: "arrange-capital",
    description:
      "Identify & Engage with potential investors & expediting capital Infusion.",
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
    image: "/Service/1.jpg",
  },
  {
    id: 2,
    title: "Attract Client",
    slug: "attract-clients",
    description:
      "Expand your client base through AI-powered Lead Generation & Conversion.",
    icon: (
      <svg viewBox="0 0 120 120" className="w-20 h-20">
        <ellipse cx="60" cy="35" rx="35" ry="8" fill="#d1d5db" />
        <ellipse cx="60" cy="50" rx="35" ry="8" fill="#d1d5db" />
        <ellipse cx="60" cy="65" rx="35" ry="8" fill="#d1d5db" />
        <ellipse cx="60" cy="80" rx="35" ry="8" fill="#d1d5db" />
      </svg>
    ),
    image: "/Service/2.jpg",
  },
  {
    id: 3,
    title: "Accelerate Talent",
    slug: "accelerate-talent",
    description:
      "Identify and hire top-tier talent with AI-powered hiring.",
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
    image: "/Service/3.jpg",
  },
]

export default function Services() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h2 className="text-5xl font-bold text-[#050659] leading-tight mb-4">
          Building Brands with <br /> Standout Creative Services
        </h2>

        {/* Single Service Layout */}
        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {/* LEFT IMAGE */}
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT CARD */}
            <div className="rounded-3xl border border-[#d2f7c9] p-10 shadow-[0_0_25px_rgba(0,255,0,0.15)]">
              
              {/* Avatar + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-[#0f5e48] flex items-center justify-center text-3xl">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-semibold text-[#003d31]">
                  {service.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-700 text-lg leading-relaxed mb-10">
                {service.description}
              </p>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
