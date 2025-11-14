"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { animationConfig } from "@/lib/animations"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creative Director",
    text: "The animations are absolutely stunning. They bring our vision to life in ways we never imagined.",
    avatar: "👩‍💼",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    text: "Performance and beauty combined. This is exactly what we were looking for in a modern web experience.",
    avatar: "👨‍💼",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "UX Designer",
    text: "Every interaction feels intentional and delightful. The attention to detail is remarkable.",
    avatar: "👩‍🎨",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          {/* Decorative top line */}
          <div className="relative mb-2">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>
          <p className="text-sm text-gray-600 mb-6 tracking-wide">/TESTIMONIALS</p>
        </div>

        {/* Testimonial Card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: animationConfig.duration.normal }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-12 max-w-4xl mx-auto border border-border text-center"
        >
          <div className="text-5xl mb-6">{testimonials[activeIndex].avatar}</div>
          <p className="text-xl font-semibold mb-4">{testimonials[activeIndex].text}</p>
          <div>
            <p className="font-semibold">{testimonials[activeIndex].name}</p>
            <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-3 rounded-full transition-all ${i === activeIndex ? "bg-primary w-8" : "bg-border w-3"}`}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
