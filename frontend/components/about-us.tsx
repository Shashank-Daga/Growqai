import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section id="about-us" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Label */}
        <div className="mb-12">
          {/* Decorative top line */}
          <div className="relative mb-2">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>
          <p className="text-sm tracking-wide text-gray-800 font-medium">/ABOUT US</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
              We are obsessed with growth
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
              Growth is never by mere chance but by the choices you make, and we help you make the
              right choices to unlock your growth potential.
            </p>

            {/* About Us Button */}
            <Link href="/about-us" className="group flex w-fit items-center gap-0 bg-blue-100 hover:bg-blue-200 transition-colors">
              <span className="px-8 text-lg font-medium text-gray-900">
                About Us
              </span>
              <span className="bg-black px-4 py-4 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </span>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative flex items-start justify-end">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
              alt="Business professionals handshake"
              className="w-full h-[400px] object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
