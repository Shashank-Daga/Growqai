"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const articles = [
  {
    id: 1,
    category: "INSIGHTS",
    date: "NOV 4, 2025",
    title: "Subduxion and Databricks join forces to make applied AI solutions possible",
    excerpt:
      "Together, Subduxion and Databricks make AI work in reality: connecting data, compliance, and operations into one trusted backbone.",
    image: "/news/databricks-subduxion.png",
    large: true,
  },
  {
    id: 2,
    category: "TIPS",
    date: "NOV 3, 2025",
    title: "Closing the Gap Between AI’s Promise and Reality: Private AI Infrastructure",
    excerpt:
      "Bridge the gap between AI’s promise and reality. In this blog we explain how we ...",
    image: "/news/ai-infra.png",
  },
  {
    id: 3,
    category: "INSIGHTS",
    date: "OCT 12, 2025",
    title: "Subduxion Running Team Participated in the ASML Marathon 2025",
    excerpt:
      "On Sunday, October 12, the Subduxion team laced up their running shoes for a ...",
    image: "/news/marathon.png",
  },
]

export default function NewsSection() {
  return (
    <section className="py-24 px-6 bg-white" id="latest-insights">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="relative mb-2">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>

          <p className="text-xs uppercase tracking-widest text-gray-500 mb-8">/NEWS</p>

          {/* FIXED: Heading + Button aligned horizontally */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest insights
            </h2>

            <Link
              href="#"
              className="inline-flex items-center gap-2 border border-gray-300 text-sm font-medium px-6 py-2 rounded-md hover:bg-gray-50 transition"
            >
              Discover more
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Articles Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {articles.map((article) => (
            <motion.div
              key={article.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`flex flex-col ${article.large ? "md:col-span-1 md:row-span-2 md:aspect-4/3" : ""
                }`}
            >
              {/* Image */}
              <div className="relative w-full aspect-4/3 mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>▪ {article.category}</span>
                <span>/{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 leading-snug mb-2">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-gray-600 line-clamp-2">{article.excerpt}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
