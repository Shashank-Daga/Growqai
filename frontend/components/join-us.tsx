"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export default function JoinUsSection() {
    const challenges = [
        {
            id: 1,
            text: "Skilled teams stuck in repetitive work instead of creating value.",
            position: "top-0 left-0 translate-x-12 translate-y-8",
        },
        {
            id: 2,
            text: "Processes that slow decisions and frustrate customers.",
            position: "top-0 right-0 -translate-x-12 translate-y-8",
        },
        {
            id: 3,
            text: "Scaling that requires more people instead of smarter systems.",
            position: "bottom-0 left-0 translate-x-12 -translate-y-8",
        },
        {
            id: 4,
            text: "Technology investments that add cost instead of driving growth.",
            position: "bottom-0 right-0 -translate-x-12 -translate-y-8",
        },
    ]

    const sectionRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // Delay start by using "start end" + small offset
        offset: ["start 80%", "end start"], 
    })

    return (
        <section
            ref={sectionRef}
            id="joinUs"
            className="relative py-32 bg-white overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative min-h-[60vh] flex flex-col items-center justify-center">

                {/* Floating Cards with scroll-based animation */}
                <div className="absolute inset-0">
                    {challenges.map((item, index) => {
                        // Slightly stagger each card
                        const start = 0.1 + index * 0.1 // add initial delay 0.1
                        const end = start + 0.3

                        const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
                        const y = useTransform(scrollYProgress, [start, end], [50, 0])
                        const scale = useTransform(scrollYProgress, [start, end], [0.95, 1])

                        return (
                            <motion.div
                                key={item.id}
                                style={{ opacity, y, scale }}
                                className={`absolute ${item.position} bg-gray-50 border border-gray-200 shadow-sm px-5 py-3 rounded-sm flex items-start gap-2 max-w-xs`}
                            >
                                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                                <p className="text-sm text-gray-800 text-left leading-snug">
                                    {item.text}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Center Text */}
                <h2
                    className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug max-w-3xl mx-auto"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
                >
                    We recognize the challenges you face. That is why your path to impact
                    with AI starts here.
                </h2>
            </div>
        </section>
    )
}
