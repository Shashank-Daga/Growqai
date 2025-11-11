import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function AboutUsSection() {
  return (
    <section className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16">
      <div className="max-w-[1400px] mx-auto">
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
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-8 leading-tight">
              The partner you have been looking for
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-xl">
              We bring together a wealth of experience to make technology work. Partnering with organizations to design bespoke solutions that can meet their highest standards.
            </p>

            {/* About Us Button */}
            <button className="group flex items-center gap-0 bg-blue-100 hover:bg-blue-200 transition-colors">
              <span className="px-8 text-lg font-medium text-gray-900">
                About Us
              </span>
              <span className="bg-black px-4 py-4 flex items-center justify-center">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </span>
            </button>

            {/* Join Us Section */}
            <div className="bg-gray-50 p-12">
              <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                <div className="max-w-md">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Join us
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    We are shaping the future of work with AI and we need bold minds to make it happen.
                  </p>
                </div>

                <div className="relative md:-translate-y-10">
                  <button className="group flex items-center gap-0 border-2 border-gray-300 hover:border-gray-400 transition-colors bg-white">
                    <span className="px-8 text-lg font-medium text-gray-900">
                      Careers
                    </span>
                    <span className="border-l-2 border-gray-300 group-hover:border-gray-400 px-4 py-4 flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-gray-900" />
                    </span>
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex items-start justify-end py-12">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
              alt="Business professionals handshake"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>


      </div>
    </section>
  );
}
