"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search, Globe, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { animationConfig } from "@/lib/animations"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["Services", "Use Cases", "Company", "News", "Careers"]

  const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: animationConfig.duration.normal },
  }

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <motion.div {...fadeInDown} className="flex items-center gap-3">
              {/* <Image
                src="/growQai.avif"
                alt="GrowQai Logo"
                width={40}
                height={40}
                className="object-contain"
              /> */}
              <span className="font-semibold text-2xl tracking-tight text-gray-900">
                GrowQai
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.05,
                    duration: animationConfig.duration.fast,
                  }}
                  className="text-sm uppercase tracking-wide text-gray-800 hover:text-black transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Right Section */}
            <div className="hidden md:flex items-center gap-6">

              {/* Get in touch Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-all"
              >
                Get in touch
                <span className="bg-blue-100 text-black rounded-sm p-[3px]">
                  <ArrowUpRight size={14} />
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden flex flex-col gap-4 py-4 border-t border-gray-200"
              >
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 hover:text-black transition-colors text-sm uppercase tracking-wide"
                  >
                    {item}
                  </a>
                ))}

                <div className="flex items-center gap-3 pt-2">
                  <button className="flex items-center justify-center gap-2 w-full bg-black text-white px-4 py-2 rounded-md font-medium text-sm">
                    Get in touch
                    <span className="bg-blue-100 text-black rounded-sm p-[3px]">
                      <ArrowUpRight size={14} />
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20" />
    </>
  )
}
