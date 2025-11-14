"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  { id: 1, text: "Scale Smartly" },
  { id: 2, text: "Leveraging the power of AI" },
  { id: 3, text: "Growqai." },
]

export default function IntroSection({ onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (currentSlide < slides.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => prev + 1)
      }, 1000) // duration per slide
      return () => clearTimeout(timer)
    } else {
      const endTimer = setTimeout(() => {
        onComplete?.()
      }, 2000)
      return () => clearTimeout(endTimer)
    }
  }, [currentSlide, onComplete])

  return (
    <motion.div 
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl md:text-4xl font-medium px-6"
        >
          {slides[currentSlide].text}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
