"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { Services } from "@/components/services"
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
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {/* Intro Section - shows first, blocks everything else */}
      <AnimatePresence>
        {!introDone && <IntroSection onComplete={() => setIntroDone(true)} />}
      </AnimatePresence>

      {/* Main Content - only renders after intro is done */}
      {introDone && (
        <main className="min-h-screen bg-linear-to-b from-background to-secondary/20">
          <Navbar />
          <HeroSection />
          <ChallengeSection />
          <ApproachSection />
          <Services />
          <SolutionsSection />
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
