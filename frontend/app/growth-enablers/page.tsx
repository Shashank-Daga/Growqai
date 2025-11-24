"use client";

import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/site/footer";
import { motion } from "framer-motion";
import {
  FileText,
  Workflow,
  Users,
  ShieldCheck,
  Puzzle,
  Repeat2,
} from "lucide-react";

/**
 * GrowthEnablers (updated)
 * - places each step on its own full-width horizontal "row" (thin rule).
 * - the card sits ON that row and is aligned left / center / right to match the screenshot.
 * - vertical accent line on right edge of card, subtle borders and spacing tuned.
 * - fade-in animation whileInView.
 *
 * Content is kept exactly as you provided.
 */

const STEPS = [
  {
    icon: <FileText className="w-6 h-6 text-[#2B6CB0]" />,
    title: "Funding Readiness",
    description:
      "Strengthens business models, financial structures, and growth narratives to make companies investment-ready. Aligns strategy and performance with investor expectations.",
    pos: "left",
  },
  {
    icon: <Workflow className="w-6 h-6 text-[#2B6CB0]" />,
    title: "Investor Matching",
    description:
      "Connects high-potential businesses with curated investors aligned by industry, stage, and vision. Bridges the gap between opportunity and capital.",
    pos: "center",
  },
  {
    icon: <Users className="w-6 h-6 text-[#2B6CB0]" />,
    title: "Capital Infusion",
    description:
      "Facilitates strategic fundraising and partnership-driven investments. Fuels scalability and sustains long-term financial growth.",
    pos: "right",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#2B6CB0]" />,
    title: "Boost client's pipeline",
    description:
      "Accelerates demand generation through data-led outreach, partnerships, and performance-driven acquisition strategies. Expands the client base with precision.",
    pos: "left",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-[#2B6CB0]" />,
    title: "Effective Engagement",
    description:
      "Builds meaningful client relationships through personalized touchpoints and structured engagement models. Enhances retention and long-term value.",
    pos: "center",
  },
  {
    icon: <Repeat2 className="w-6 h-6 text-[#2B6CB0]" />,
    title: "Target Conversions",
    description:
      "Transforms marketing and sales operations into conversion-focused ecosystems. Drives measurable results across every stage of the funnel.",
    pos: "right",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#2B6CB0]" />,
    title: "Automated talent sourcing",
    description:
      "Implements intelligent sourcing systems that identify and attract top talent efficiently. Reduces hiring effort while improving candidate quality.",
    pos: "left",
  },
  {
    icon: <Puzzle className="w-6 h-6 text-[#2B6CB0]" />,
    title: "Expedite hiring",
    description:
      "Streamlines recruitment processes with technology-led assessments and workflow automation. Enables faster team expansion without compromising quality.",
    pos: "center",
  },
  {
    icon: <Repeat2 className="w-6 h-6 text-[#2B6CB0]" />,
    title: "Leverage the power of AI",
    description:
      "Infuses AI across growth, capital, and talent functions to unlock real-time insights and operational efficiency. Powers data-driven, scalable business decisions.",
    pos: "right",
  },
];

export default function GrowthEnablers() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#050659] mb-3">Use Cases</h2>
          <p className="text-[#313447]">
            Here's how we ensure every project delivers exceptional results
            across motion graphics, short-form videos, and graphic creatives.
          </p>
        </div>

        {/* timeline-like rows */}
        <div className="relative max-w-4xl mx-auto">
          {STEPS.map((s, idx) => {
            // choose alignment classes
            const alignment =
              s.pos === "left"
                ? "justify-start pl-0 md:pl-0"
                : s.pos === "center"
                  ? "justify-center"
                  : "justify-end pr-0 md:pr-0";

            // card width: slightly narrower on center to mimic screenshot
            const cardWidth =
              s.pos === "center" ? "w-full md:w-3/5" : "w-full md:w-2/3";

            return (
              <div key={idx} className="relative w-full">
                {/* the card positioned left/center/right */}
                <motion.div
                  initial={
                    s.pos === "left"
                      ? { opacity: 0, x: -80 }
                      : s.pos === "right"
                        ? { opacity: 0, x: 80 }
                        : { opacity: 0, y: 40 }
                  }
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex ${alignment}`}
                >
                  <div
                    className={`${cardWidth} bg-white border border-gray-200 rounded-xl p-8 relative shadow-sm`}
                  >

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#f0fbff] rounded-full">
                        {s.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#2b6cb0]">
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-[#313447] text-sm leading-relaxed">
                      {s.description}
                    </p>

                    {/* vertical accent line on right side (subtle bluish) */}
                    <div className="absolute top-6 right-0 h-[calc(100%-1.5rem)] w-0.5 bg-linear-to-b from-[#bfe8fb] to-transparent" />
                  </div>

                  {/* horizontal accent line at bottom (subtle bluish) */}
                  <div className="absolute bottom-0 left-6 right-0 w-[calc(100%-1.5rem)] h-1 bg-linear-to-r from-[#bfe8fb] to-transparent" />
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="mb-28"></div>

        <ContactSection />
        <Footer />

      </div>
    </section>
  );
}
