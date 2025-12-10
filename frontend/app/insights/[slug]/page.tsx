import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getBlogById, getAllBlogs } from "@/lib/blogs"

export async function generateStaticParams() {
  const blogs = getAllBlogs()
  return blogs.map((blog) => ({
    slug: blog.id,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogById(slug)

  if (!post) {
    return {
      title: "Blog Not Found",
    }
  }

  return {
    title: `${post.title} | Growqai Insights`,
    description: post.title,
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const post = getBlogById(slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/insights" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      {/* Decorative top line */}
      <div className="relative mb-2">
        <div className="h-px bg-gray-400 w-full"></div>
        <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
      </div>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-15">/BLOGS /{post.title.toUpperCase()}</div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {post.title}
        </h1>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-hr:border-gray-300">
          <MDXRemote source={post.content} />
        </article>
      </div>
    </section>
  )
}
