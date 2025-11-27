"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export function HeroSection() {
  return (
    <section className="relative w-full bg-white text-[#050659] overflow-hidden pt-28 pb-24">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-7xl mx-auto px-6"
      >
        {/* === TOP HERO AREA === */}
        <div className="bg-white border border-[#E7E9F1]  p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* LEFT SIDE: TEXT */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Scale your business faster, smartly.
              </h1>

              <p className="text-[#2527D9 ] text-lg max-w-md">
                Unlock Extraordinary Growth Across Capital, Client, and Talent - Powered by AI, to Elevate Your Business to New Heights.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-6 py-3  bg-[#2527D9] hover:bg-[#8B6CFF] transition-all duration-300 font-medium flex items-center gap-2 text-white"
                >
                  Free Discovery Call ↗
                </a>
                <a
                  href="/services"
                  className="px-6 py-3  border border-gray-500 text-[#2527D9] hover:bg-white/10 transition-all duration-300 font-medium flex items-center gap-2"
                >
                  Explore Our Services ↗
                </a>
              </div>
            </motion.div>

            {/* RIGHT SIDE: MAIN IMAGE */}
            <motion.div
              variants={fadeInUp}
              className="relative w-full h-80 sm:h-96 lg:h-[460px]  overflow-hidden"
            >
              <Image
                src="/Banner.jpg"
                alt="Developer at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* === LOGOS SECTION (PERFECT LOOP) === */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 opacity-80 relative z-10"
        >
          {/* Decorative Line */}
          <div className="relative mb-6">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>

          <p className="text-sm uppercase tracking-widest mb-6 text-gray-400">
            /Trusted By
          </p>

          {/* === INFINITE LOOP === */}
          <div className="overflow-hidden relative w-full">
            <motion.div
              className="flex items-center gap-16 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,   // adjust speed
                ease: "linear"
              }}
            >
              {/* FIRST ROW */}
              <Image src="/T.C. Logo/Kosoku.jpeg" alt="Kosoku" width={110} height={40} />
              <Image src="/T.C. Logo/Merito.jpeg" alt="Merito" width={110} height={40} />
              <Image src="/T.C. Logo/RAMS.jpeg" alt="RAMS" width={110} height={40} />

              {/* SECOND ROW (NEEDED FOR SMOOTH ENTRY) */}
              <Image src="/T.C. Logo/Kosoku.jpeg" alt="Kosoku" width={110} height={40} />
              <Image src="/T.C. Logo/Merito.jpeg" alt="Merito" width={110} height={40} />
              <Image src="/T.C. Logo/RAMS.jpeg" alt="RAMS" width={110} height={40} />
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
