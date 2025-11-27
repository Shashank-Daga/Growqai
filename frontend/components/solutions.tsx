"use client"

import {
    FileText,
    Workflow,
    Users,
    ShieldCheck,
    Puzzle,
    Repeat2,
} from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/animations"

export default function SolutionsSection() {
    const useCases = [
        {
            icon: <FileText className="w-6 h-6 text-gray-900" />,
            title: "Funding Readiness",
            description:
                "Strengthens business models, financial structures, and growth narratives to make companies investment-ready. Aligns strategy and performance with investor expectations.",
        },
        {
            icon: <Workflow className="w-6 h-6 text-gray-900" />,
            title: "Investor Matching",
            description:
                "Connects high-potential businesses with curated investors aligned by industry, stage, and vision. Bridges the gap between opportunity and capital.",
        },
        {
            icon: <Users className="w-6 h-6 text-gray-900" />,
            title: "Capital Infusion",
            description:
                "Facilitates strategic fundraising and partnership-driven investments. Fuels scalability and sustains long-term financial growth.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-gray-900" />,
            title: "Boost client's pipeline",
            description:
                "Accelerates demand generation through data-led outreach, partnerships, and performance-driven acquisition strategies. Expands the client base with precision.",
        },
        {
            icon: <Puzzle className="w-6 h-6 text-gray-900" />,
            title: "Effective Engagement",
            description:
                "Builds meaningful client relationships through personalized touchpoints and structured engagement models. Enhances retention and long-term value.",
        },
        {
            icon: <Repeat2 className="w-6 h-6 text-gray-900" />,
            title: "Target Conversions",
            description:
                "Transforms marketing and sales operations into conversion-focused ecosystems. Drives measurable results across every stage of the funnel.",
        },
        {
            icon: <Puzzle className="w-6 h-6 text-gray-900" />,
            title: "Expedite hiring",
            description:
                "Streamlines recruitment processes with technology-led assessments and workflow automation. Enables faster team expansion without compromising quality.",
        },
        {
            icon: <Repeat2 className="w-6 h-6 text-gray-900" />,
            title: "Leverage the power of AI",
            description:
                "Infuses AI across growth, capital, and talent functions to unlock real-time insights and operational efficiency. Powers data-driven, scalable business decisions.",
        },
    ]

    return (
        <section id="use-cases" className="py-24 px-6 bg-[#E7E9F1]">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="mb-20">
                    {/* Decorative top line */}
                    <div className="relative mb-2">
                        <div className="h-px bg-gray-400 w-full"></div>
                        <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
                    </div>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start justify-between mb-16">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-gray-600 mb-8">
                                /SOLUTIONS
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#050659]">
                                Use cases
                            </h2>
                        </div>
                        <p className="text-lg text-[#313447] max-w-md mt-12 md:-translate-x-28">
                            We focus on domains where agents solve entrenched business problems
                            and unlock measurable value.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    className="grid md:grid-cols-2 gap-x-8 gap-y-12 translate-x-0 md:translate-x-12"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={{
                        initial: {},
                        animate: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.1,
                            },
                        },
                    }}
                >
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex items-start gap-4 p-4 bg-gray-50  shadow-sm max-w-lg"
                        >
                            <div className="shrink-0">{useCase.icon}</div><hr />
                            <div>
                                <h3 className="text-2xl font-semibold text-[#2527D9] mb-1">
                                    {useCase.title}
                                </h3>
                                <p className="text-[#313447] text-1xl leading-snug">
                                    {useCase.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}
