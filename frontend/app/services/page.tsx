"use client";

import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/site/footer";

interface ServiceSection {
  heading: string;
  intro?: string;
  bullets?: string[];
}

interface Service {
  id: string;
  t1: string;
  title: string;
  image: string;
  subtitle: string;
  description: string;
  sections: ServiceSection[];
}

const services: Service[] = [
  {
    id: "arrange-capital",
    t1: "Capital",
    title: "Arrange Capital",
    image: "/Service/1.jpg",
    subtitle: "Capital fuels your growth journey",
    description: `Capital is a crucial lever for any growing company, providing the necessary resources to invest in talent, technology, and market expansion. With the right funding, businesses can accelerate innovation, scale their operations, and seize new opportunities more quickly. Effective capital management not only fuels immediate growth but also builds a strong foundation for sustainable success in a competitive landscape.`,
    sections: [
      {
        heading: "Why do you need to engage with an expert for your capital raise?",
        bullets: [
          "We help you to identify the right investor, sifting through investor databases and portfolios",
          "Standing out in a crowded capital market requires data-driven and customised pitches",
          "Leveraging technology for faster due diligence and closure"
        ]
      },
      {
        heading: "How do we make it happen?",
        intro: "We strive to deliver value to our clients. Growqai helps you to identify & engage with potential investors, automating investor discovery, engagement & conversion.",
        bullets: [
          "<strong>Investor Discovery:</strong> We automate the investor discovery and matching to identify the right investors.",
          "<strong>Multichannel Engagement:</strong> Our engagement tools ensure multichannel reach-outs and engagement with investors.",
          "<strong>Faster Deal Closure:</strong> We ensure due diligence time is reduced, resulting in faster investment closure."
        ]
      }
    ]
  },
  {
    id: "attract-clients",
    t1: "Clients",
    title: "Attract Clients",
    image: "/Service/2.jpg",
    subtitle: "Expand your client base through AI-powered lead generation & targeted customer conversions.",
    description: "",
    sections: [
      {
        heading: "Targeted Client Acquisition: Maximizing ROI",
        intro: "Attracting the right clients is crucial for B2B businesses to achieve sustainable growth and maximize ROI. By focusing on your ideal client profile, we help target organizations that truly benefit from your solutions—leading to better lead quality, faster conversions, and stronger long-term partnerships."
      },
      {
        heading: "Why do you need an expert's help with client acquisition?",
        bullets: [
          "Navigating client acquisition in today's competitive B2B landscape requires advanced strategies",
          "We bring data-driven insights and advanced tools to consistently reach and engage your ideal clients",
          "We believe in the power of technology to scale smartly"
        ]
      },
      {
        heading: "How do we make it happen?",
        intro: "Expand your client base, enabled by AI. Expand your client base through AI-powered lead generation and targeted customer conversions.",
        bullets: [
          "<strong>Get more leads:</strong> Our tools boost qualified lead pipeline with lead sourcing & scoring.",
          "<strong>Effective Engagement:</strong> We help you to consistently reach and engage with your clients.",
          "<strong>AI at Core:</strong> We collaborate with you to convert potential clients with targeted closures."
        ]
      }
    ]
  },
  {
    id: "accelerate-talent",
    t1: "Talent",
    title: "Accelerate Talent",
    image: "/Service/3.jpg",
    subtitle: "Attract, engage, and hire top-tier talent with AI-assisted sourcing, hiring, and retention.",
    description: "",
    sections: [
      {
        heading: "Talent - Catalyst of Business Growth",
        intro: "At Growqai, we believe talent is the engine that drives lasting business success. In today's fast-moving, tech-driven marketplace, companies with the right people don't just adapt—they set the pace. Investing in talent is the smartest move any growth company can make to unlock breakthrough growth and create a true competitive edge."
      },
      {
        heading: "What makes talent a critical growth driver?",
        bullets: [
          "Effective hiring and development help companies out-innovate and out-execute the competition",
          "The ability to attract, develop, and retain top talent isn't just an operational necessity but acts as a critical growth driver",
          "Organizations that prioritize talent acquisition and development experience 68% higher profit increases"
        ]
      },
      {
        heading: "How do we make it happen?",
        intro: "Attracting and Hiring the best talent. Our talent strategies are aimed at helping you attract and hire the best talent, which drives your growth.",
        bullets: [
          "<strong>Source:</strong> Automate talent outreach & sourcing",
          "<strong>Engage:</strong> Expedite screening & ensure engagement with top talent",
          "<strong>Hire:</strong> Reduce hiring time by deploying AI-enabled hiring"
        ]
      }
    ]
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <section className="px-8 md:px-16 lg:px-24 py-8">
        <div className="max-w-7xl mx-auto">

          {/* Back Button */}
          <div className="mb-28">
            <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                style={{
                  height: index === 1 ? "500px" : "400px",
                  marginTop: index === 1 ? "-50px" : "0"
                }}
              >
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/70"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{service.t1}</h3>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Modal for Service Details */}
          {/* Service Details Below the Grid */}
          <AnimatePresence>
            {selectedService && (
              <div className="mt-20 border border-gray-200 rounded-3xl mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5 }}
                  className="p-10 rounded-3xl bg-gray-50 shadow-lg"
                >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                  {/* LEFT SIDE IMAGE */}
                  <div className="w-full">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="rounded-2xl shadow-lg object-cover w-full h-full"
                    />
                  </div>

                  {/* RIGHT SIDE CONTENT */}
                  <div>
                    <h2 className="text-3xl font-bold text-[#050659] mb-4">
                      {selectedService.title}
                    </h2>

                    {selectedService.subtitle && (
                      <h3 className="text-xl font-semibold text-[#2527D9] mb-4">
                        {selectedService.subtitle}
                      </h3>
                    )}

                    {selectedService.description && (
                      <p className="text-lg text-[#313447] leading-relaxed mb-6">
                        {selectedService.description}
                      </p>
                    )}

                    {selectedService.sections.map((section, idx) => (
                      <div key={idx} className="mb-6">
                        <h4 className="text-xl font-semibold text-[#2527D9] mb-2">
                          {section.heading}
                        </h4>

                        {section.intro && (
                          <p className="text-lg text-gray-700 mb-2">
                            {section.intro}
                          </p>
                        )}

                        {section.bullets && (
                          <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-gray-700">
                            {section.bullets.map((bullet, bidx) => (
                              <li key={bidx} dangerouslySetInnerHTML={{ __html: bullet }} />
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>

                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="mt-8 px-6 py-3 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition"
                >
                  Close
                </button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Left Card - Dark */}
            <div className="bg-black text-white rounded-3xl p-10 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4">I'm Gaurav Pant</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A passionate web designer and developer dedicated to crafting purposeful digital experiences. My goal is to design clean, user-friendly interfaces that empower businesses and individuals to make an impact online.
              </p>
              {/* <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="text-sm text-gray-400">About me</span>
              </div> */}
            </div>

            {/* Right Grid - Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">8+</div>
                <div className="text-sm text-gray-500 mb-2">years</div>
                <p className="text-xs text-gray-600">Creating meaningful digital experiences with expertise</p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">120+</div>
                <div className="text-sm text-gray-500 mb-2">projects</div>
                <p className="text-xs text-gray-600">Designed and delivered innovative solutions</p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">35+</div>
                <div className="text-sm text-gray-500 mb-2">happy clients</div>
                <p className="text-xs text-gray-600">Built lasting partnerships through quality work</p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">99%</div>
                <div className="text-sm text-gray-500 mb-2">satisfaction</div>
                <p className="text-xs text-gray-600">Exceeding expectations consistently</p>
              </div>
            </div>
          </div>

          <ContactSection />
          <Footer />

        </div>
      </section>
    </div>
  );
}
