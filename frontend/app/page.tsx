"use client"

import { useState } from "react"

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
      {!introDone && <IntroSection onComplete={() => setIntroDone(true)} />}

      <main
        className={`min-h-screen bg-linear-to-b from-background to-secondary/20 transition-opacity duration-700 ${
          introDone ? "opacity-100" : "opacity-0"
        }`}
      >
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
    </>
  )
}
