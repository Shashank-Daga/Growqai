import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Footer } from "@/components/site/footer"
import { Metadata } from "next"
import Image from "next/image"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "About Us | Growqai",
  description: "Learn about Growqai - our mission, values, approach, and leadership team.",
}

export default function AboutUsPage() {
  return (
    <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

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
      <div className="text-sm text-gray-500 mb-10">/ABOUT US</div>

      {/* ---------------------- HERO SECTION ---------------------- */}
      <div className="text-center py-24 border-b border-[#E7E9F1]">
        <h1 className="text-4xl md:text-5xl font-bold text-[#050659] mb-6">
          We are obsessed with growth
        </h1>
        <p className="text-lg text-[#2527D9] max-w-3xl mx-auto">
          Growth is never by mere chance but by the choices you make, and we help you make the right choices to unlock your growth potential.
        </p>
      </div>

      {/* ---------------------- OUR VALUES ---------------------- */}
      <div className="py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#050659] mb-6">
              Our Values
            </h2>
            <p className="text-lg text-[#313447] leading-relaxed">
              At the core of Growqai are our guiding values: integrity, excellence, collaboration, and innovation. These principles guide every decision we make and shape how we work with clients, partners, and one another. They inspire us to build lasting relationships, deliver outstanding results, and constantly push the boundaries of what’s possible for your business growth.
            </p>
          </div>

          {/* Images Grid (3 blocks like your reference) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 h-40" />
            <div className="bg-gray-100 h-40" />
            <div className="bg-gray-100 h-40 col-span-2" />
          </div>
        </div>
      </div>

      {/* ---------------------- OUR LEADER ---------------------- */}
      <div className="py-24 bg-gray-50 border-y border-[#E7E9F1]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#050659] text-center mb-6">
            Our Leader
          </h2>
          <p className="text-[#2527D9] max-w-2xl mx-auto text-center mb-16">
            Meet the vision behind Growqai.
          </p>

          {/* Image Left + Text Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Left - Image */}
            <div className="flex justify-center md:justify-start flex-col items-center">
              <Image
                src="/AboutUs/Rush.png"
                alt="Rushikesh Humbe"
                width={240}
                height={240}
                className="rounded-xl object-cover"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">
                Rushikesh Humbe
              </h3>
            </div>

            {/* Right - Text */}
            <div>

              <p className="text-[#313447] leading-relaxed">
                Rushikesh Humbe is a seasoned business leader and growth strategist
                with over 20 years of cross-functional experience in consulting,
                entrepreneurship, and tech transformation.
                <br /><br />
                An alumnus of COEP and IIM Ahmedabad, he has a proven track record
                of scaling startups and accelerating growth in roles spanning
                strategy consulting, talent leadership, and entrepreneurship.
                <br /><br />
                At Growqai, Rushikesh&apos;s vision is to empower growth companies to
                “Scale Smarter” by enabling competitive advantage
                through strategic and practical deployment of Artificial Intelligence.
                <br /><br />
                <span className="font-semibold"> Deloitte Consulting | Denstu | Merito</span>
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ---------------------- OUR APPROACH ---------------------- */}
      <div className="py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#050659] mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-[#313447] leading-relaxed">
              Our approach at Growqai blends the cutting-edge capabilities of Artificial Intelligence (AI) with the practical wisdom of Acquired Intelligence (AI)—the deep industry insights and experience our team brings. By combining these strengths, we deliver solutions that are not only data-driven and innovative but also grounded in a real-world understanding of business challenges. This synergy allows us to create sustainable growth for our clients.
            </p>
          </div>

          {/* Images Grid (3 blocks like your reference) */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 h-40" />
            <div className="bg-gray-100 h-40" />
            <div className="bg-gray-100 h-40 col-span-2" />
          </div>
        </div>
      </div>

      <ContactSection />

      <Footer />

    </section>
  )
}
