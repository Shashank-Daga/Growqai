"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const slides = [
  { id: 1, text: "Scale Smartly" },
  { id: 2, text: "Leveraging the power of AI" },
  { id: 3, type: "logo" },
]

export default function IntroSection({ onComplete }: { onComplete: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (currentSlide < slides.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSlide(prev => prev + 1)
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      const endTimer = setTimeout(() => {
        onComplete()
      }, 2000)
      return () => clearTimeout(endTimer)
    }
  }, [currentSlide, onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/intro.jpg"
        alt="Intro background"
        fill
        className="object-cover"
        priority
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center text-2xl md:text-4xl font-medium px-6"
        >
          {slides[currentSlide].type === "logo" ? (
            <Image
              src="/GROWQAI1.2.png"
              alt="GrowQai Logo"
              width={300}
              height={60}
              className="object-contain mx-auto"
            />
          ) : (
            slides[currentSlide].text
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
