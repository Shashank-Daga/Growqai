import Image from "next/image"
import Link from "next/link"
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

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
        Latest Insights
      </h1>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <Link
            key={blog.id}
            href={`/insights/${blog.id}`}
            className={`flex flex-col group ${index === 0 ? "md:col-span-2 lg:col-span-3" : ""}`}
          >
            {/* Image */}
            <div className="relative w-full aspect-4/3 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-900 leading-snug mb-2 group-hover:text-gray-600 transition-colors text-center">
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
