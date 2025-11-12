"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { ContactSection } from "@/components/contact-section"
import { motion } from "framer-motion"
import AboutUsSection from "@/components/about-us"
import FAQ from "@/components/faq"
import JoinUsSection from "@/components/join-us"
import SolutionsSection from "@/components/solutions"
import NewsSection from "@/components/news-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-background to-secondary/20">
      <Navbar />
      <HeroSection />
      <JoinUsSection />
      <ServicesGrid />
      <SolutionsSection />
      <TestimonialsSlider />
      <AboutUsSection />
      <FAQ />
      <NewsSection />
      <ContactSection />

      {/* Footer */}
      <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2025 GrowQai. All rights reserved.</p>
        </div>
      </motion.footer>
    </main>
  )
}
