import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { getAllBlogsMetadata } from "@/lib/blogs" // Adjust the path based on your project structure

export const metadata: Metadata = {
  title: "Insights | Growqai",
  description: "Stay updated with the latest insights, news, and articles from Growqai.",
}

export default function InsightsPage() {
  // Fetch blogs from MDX files
  const blogs = getAllBlogsMetadata()

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

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <Link
            key={blog.id}
            href={`/insights/${blog.id}`}
            className={`flex flex-col group ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}
          >
            {/* Image */}
            <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-sm">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Category */}
            {blog.category && (
              <span className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                {blog.category}
              </span>
            )}

            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-900 leading-snug mb-2 group-hover:text-gray-600 transition-colors">
              {blog.title}
            </h3>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {blogs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No Blogs found. Add MDX files to the content/blogs directory.</p>
        </div>
      )}
    </section>
  )
}
