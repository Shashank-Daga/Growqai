"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const articles = [
  {
    id: 1,
    title: "The Growth Gap: Why Most Companies Fail to Scale (and How AI Can Fix It)",
    image: "/news/databricks-subduxion.png",
    large: true,
  },
  {
    id: 2,
    title: "Data Discipline Over AI: The Missing Link in Most Growth Strategies",
    image: "/news/ai-infra.png",
  },
  {
    id: 3,
    title: "Smart Growth for Smart Founders: Why Consulting with AI Is the New Competitive Edge",
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
              href="/insights"
              className="inline-flex items-center gap-2 border border-gray-300 text-sm font-medium px-6 py-2 rounded-md transition bg-black text-white"
            >
              Discover more
              <span className="bg-blue-100 text-black rounded-sm p-[3px]">
                <ArrowUpRight className="w-4 h-4" />
              </span>
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
          {articles.slice(0, 3).map((article) => (
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

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 leading-snug mb-2">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
