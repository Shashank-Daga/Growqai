import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Insights | Growqai",
  description: "Stay updated with the latest insights, news, and articles from Growqai.",
}

const articles = [
  {
    id: 1,
    title: "Subduxion and Databricks join forces to make applied AI solutions possible",
    image: "/news/databricks-subduxion.png",
    large: true,
  },
  {
    id: 2,
    title: "Closing the Gap Between AI's Promise and Reality: Private AI Infrastructure",
    image: "/news/ai-infra.png",
  },
  {
    id: 3,
    title: "Subduxion Running Team Participated in the ASML Marathon 2025",
    image: "/news/marathon.png",
  },
  {
    id: 4,
    title: "From Capital to Capability: How Growth Consulting Firms Accelerate ROI",
    image: "/news/ai-infra.png",
  },
  {
    id: 5,
    title: "How AI-Enabled Growth Consulting Is Changing the Startup Ecosystem in India",
    image: "/news/marathon.png",
  },
  {
    id: 6,
    title: "Capital + Clients + Talent: The 3 Growth Levers Every Founder Should Master",
    image: "/news/ai-infra.png",
  },
  {
    id: 7,
    title: "The Talent Equation: Why AI-Driven Teams Outperform Traditional Organizations",
    image: "/news/marathon.png",
  },
  {
    id: 8,
    title: "From Leads to Loyalists: How Growth Consulting Firms Build Stronger Client Pipelines",
    image: "/news/ai-infra.png",
  },
  {
    id: 9,
    title: "Capital Intelligence: How Data-Driven Insights Are Transforming Investment Decisions",
    image: "/news/marathon.png",
  },
  {
    id: 10,
    title: "The Future of Growth Consulting: How AI Is Redefining Consulting Services.",
    image: "/news/ai-infra.png",
  },
]

export default function InsightsPage() {
  return (
    <section className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>
      
      {/* Decorative top line */}
      <div className="relative mb-2">
        <div className="h-px bg-gray-400 w-full"></div>
        <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-10">/INSIGHTS</div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
        Latest Insights
      </h1>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className={`flex flex-col ${article.large ? "md:col-span-2 lg:col-span-2" : ""}`}
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
          </div>
        ))}
      </div>
    </section>
  )
}
