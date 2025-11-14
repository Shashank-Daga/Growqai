"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  { id: 1, text: "Empowering growth with intelligence." },
  { id: 2, text: "Transforming challenges into opportunities." },
  { id: 3, text: "Welcome to the future of work — GrowQai." },
]

export default function IntroSection({ onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    if (currentSlide < slides.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => prev + 1)
      }, 1800) // duration per slide
      return () => clearTimeout(timer)
    } else {
      const endTimer = setTimeout(() => {
        setShowIntro(false)
        onComplete?.()
      }, 2000)
      return () => clearTimeout(endTimer)
    }
  }, [currentSlide])

  if (!showIntro) return null

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-2xl md:text-4xl font-medium px-6"
        >
          {slides[currentSlide].text}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
