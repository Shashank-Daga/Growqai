"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { scaleIn, staggerContainer, fadeInUp } from "@/lib/animations"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full bg-white text-foreground overflow-hidden pt-28 md:pt-20 pb-24"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        transition={{ delayChildren: 1.5}}
      >
        {/* Heading Row */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative"
          variants={fadeInUp}
        >
          {/* Left: Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight max-w-3xl"
          >
            Scale your business faster, smartly.
          </motion.h1>

          {/* Top-right small image */}
          <motion.div
            variants={scaleIn}
            className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 aspect-[4/2.5] rounded-md overflow-hidden shadow-md md:absolute md:top-0 md:right-0"
          >
            <Image
              src="/placeholder.jpg"
              alt="Team Discussion"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Content Row */}
        <motion.div
          className="mt-16 grid md:grid-cols-2 gap-10 md:gap-20 items-start"
          variants={fadeInUp}
        >
          {/* Left: Main Image */}
          <motion.div
            variants={scaleIn}
            className="relative w-full"
          >
            <div className="w-full aspect-[4/2.5] rounded-xl overflow-hidden border border-gray-200 shadow-xl">
              <Image
                src="/placeholder.jpg"
                alt="Developer at work"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Text and Buttons */}
          <motion.div
            variants={fadeInUp}
            className="space-y-7"
          >
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground max-w-md"
            >
              Unlock Extraordinary Growth Across Capital, Client, and Talent - Powered by AI, to Elevate Your Business to New Heights.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-15"
            >
              <a href="#contact" className="flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-md font-medium hover:scale-105 hover:shadow-lg transition-all duration-300">
                Free Discovery Call
                <span className="inline-block">↗</span>
              </a>
              <a href="/services" className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-400 text-gray-800 rounded-md font-medium hover:bg-gray-100 transition-all duration-300">
                Explore Our Services
                <span className="inline-block">↗</span>
              </a>
            </motion.div>

            {/* Trusted By Section */}
            <motion.div
              variants={fadeInUp}
              className="relative pt-5"
            >
              {/* Decorative top line */}
              <div className="relative mb-6">
                <div className="h-px bg-gray-400 w-full"></div>
                <div className="absolute top-0 left-0 w-24 h-[3px] bg-gray-600 -translate-y-0.5"></div>
              </div>

              {/* Trusted By Text */}
              <p className="text-sm uppercase tracking-widest text-gray-700 mb-4 font-medium">
                /Trusted By
              </p>

              {/* Logos Row */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-8 opacity-70"
              >
                <Image
                  src="/logos/marks-walters.svg"
                  alt="Marks Walters"
                  width={100}
                  height={30}
                />
                <Image
                  src="/logos/essentra.svg"
                  alt="Essentra"
                  width={100}
                  height={30}
                />
                <Image
                  src="/logos/flaneur.svg"
                  alt="Flaneur"
                  width={100}
                  height={30}
                />
                <Image
                  src="/logos/marmite.svg"
                  alt="Marmite"
                  width={100}
                  height={30}
                />
              </motion.div>
            </motion.div>

          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
