"use client"

import {
    FileText,
    Workflow,
    Users,
    ShieldCheck,
    Puzzle,
    Repeat2,
} from "lucide-react"

export default function SolutionsSection() {
    const useCases = [
        {
            icon: <FileText className="w-6 h-6 text-gray-900" />,
            title: "Knowledge & Retrieval",
            description:
                "Searches across documents and systems, extracts facts, links context, and returns reliable answers. Converts unstructured files into structured knowledge with memory for reuse.",
        },
        {
            icon: <Workflow className="w-6 h-6 text-gray-900" />,
            title: "Workflow Automation",
            description:
                "Digitizes manual data entry, reconciliations, and routine admin work in finance, HR, and operations. Cuts errors and cycle time with end-to-end automation.",
        },
        {
            icon: <Users className="w-6 h-6 text-gray-900" />,
            title: "Workforce Productivity",
            description:
                "Supports drafting, meeting capture, task routing, and team coordination inside existing tools. Raises throughput without adding headcount.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-gray-900" />,
            title: "Monitoring & Compliance",
            description:
                "Tracks KPIs, policies, and regulatory updates in real time. Builds audit trails, validates data against rules, and enforces governance.",
        },
        {
            icon: <Puzzle className="w-6 h-6 text-gray-900" />,
            title: "Decision & Planning",
            description:
                "Combines forecasting, scenario modeling, and optimization to guide plans, schedules, and pricing. Moves decisions from periodic to continuous and data driven.",
        },
        {
            icon: <Repeat2 className="w-6 h-6 text-gray-900" />,
            title: "Operations & Execution",
            description:
                "Runs service workflows, approvals, and case resolution across systems. Orchestrates handoffs between people and software to shorten cycle times.",
        },
    ]

    return (
        <section id="use-cases" className="py-24 px-6 bg-white">
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
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                Use cases
                            </h2>
                        </div>
                        <p className="text-lg text-gray-700 max-w-md mt-12 md:-translate-x-28">
                            We focus on domains where agents solve entrenched business problems
                            and unlock measurable value.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-12 translate-x-0 md:translate-x-12"> {/* smaller gaps */}
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg shadow-sm w-122"
                        >
                            <div className="shrink-0">{useCase.icon}</div><hr />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                    {useCase.title}
                                </h3>
                                <p className="text-gray-700 text-sm leading-snug">
                                    {useCase.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
