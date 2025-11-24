"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"

import { HeroSection } from "@/components/hero-section"
import Services  from "@/components/services"
import { Testimonials } from "@/components/testimonials-slider"
import { ContactSection } from "@/components/contact-section"
import AboutUsSection from "@/components/about-us"
import FAQ from "@/components/faq"
import ChallengeSection from "@/components/challenges-section"
import SolutionsSection from "@/components/solutions"
import NewsSection from "@/components/news-section"
import { ApproachSection } from "@/components/approach-section"
import IntroSection from "@/components/intro-section"
import { Footer } from "@/components/site/footer"

export default function Home() {
  const [introDone, setIntroDone] = useState(true)

  useEffect(() => {
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

    const isReload = nav?.type === "reload"
    const hasSeenIntro = sessionStorage.getItem("intro_shown")

    if (!hasSeenIntro || isReload) {
      // Show intro on:
      // - first ever visit
      // - browser refresh (F5, Cmd+R)
      setIntroDone(false)
      sessionStorage.setItem("intro_shown", "true")
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {!introDone && <IntroSection onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      {introDone && (
        <main className="min-h-screen bg-linear-to-b from-background to-secondary/20">
          <HeroSection />
          <ChallengeSection />
          <Services />
          <SolutionsSection />
          <ApproachSection />
          <Testimonials />
          <AboutUsSection />
          <FAQ />
          <NewsSection />
          <ContactSection />
          <Footer />
        </main>
      )}
    </>
  )
}
