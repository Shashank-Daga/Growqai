"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { animationConfig } from "@/lib/animations"

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    category: "Web Design",
    description: "A premium web experience with immersive animations",
  },
  {
    id: 2,
    title: "Project Beta",
    category: "Mobile App",
    description: "Responsive mobile application with smooth interactions",
  },
  {
    id: 3,
    title: "Project Gamma",
    category: "E-Commerce",
    description: "Dynamic shopping experience with engaging UI",
  },
  {
    id: 4,
    title: "Project Delta",
    category: "Dashboard",
    description: "Real-time analytics with beautiful visualizations",
  },
]

export function ShowcaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((i) => (i + 1) % projects.length)
  const prev = () => setCurrentIndex((i) => (i - 1 + projects.length) % projects.length)

  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: animationConfig.duration.normal }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground">Explore our latest projects and case studies</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: animationConfig.duration.normal }}
            className="bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-border min-h-96 flex flex-col justify-center"
          >
            <div className="inline-block w-fit mb-4">
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                {projects[currentIndex].category}
              </span>
            </div>
            <h3 className="text-4xl font-bold mb-4">{projects[currentIndex].title}</h3>
            <p className="text-muted-foreground text-lg">{projects[currentIndex].description}</p>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? "bg-primary" : "bg-border"}`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
