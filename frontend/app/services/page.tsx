// app/(or components)/ServicesCarousel.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/site/footer";
import { useSearchParams } from "next/navigation";

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
  subtitle?: string;
  description?: string;
  sections?: ServiceSection[];
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

const AUTO_PLAY = 5000; // ms

export default function ServicesPage() {
  const [active, setActive] = useState<number>(0); // index of center card
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoplayRef = useRef<number | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const serviceIndex = services.findIndex(s => s.id === id);
      if (serviceIndex !== -1) {
        setActive(serviceIndex);
        setSelectedService(services[serviceIndex]);
      }
    }
  }, [searchParams]);

  const n = services.length;

  useEffect(() => {
    // autoplay
    autoplayRef.current = window.setInterval(() => {
      // advance by 1
      setActive((prev) => (prev + 1) % n);
    }, AUTO_PLAY);

    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [n]);

  // When user clicks a card, stop autoplay briefly and open details
  function handleCardClick(index: number) {
    // make clicked index the active center first
    setActive(index);
    setSelectedService(services[index]);

    // pause autoplay briefly
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
    // resume autoplay after short delay
    window.setTimeout(() => {
      autoplayRef.current = window.setInterval(() => {
        setActive((prev) => (prev + 1) % n);
      }, AUTO_PLAY);
    }, 6000);
  }

  // compute indices for left/center/right
  const prevIndex = (active - 1 + n) % n;
  const nextIndex = (active + 1) % n;

  // helper to render a card (positioned left/center/right)
  function Card({
    service,
    position,
    index,
  }: {
    service: Service;
    position: "left" | "center" | "right" | "hidden";
    index: number;
  }) {
    // style differences
    const baseCardClasses =
      "rounded-3xl overflow-hidden shadow-lg cursor-pointer select-none relative";
    const commonImageClasses = "object-cover w-full h-full";

    let widthClass = "w-[300px] h-[420px]"; // left/right
    let scale = 0.92;
    let z = 10;
    let translateX = 0;
    let opacity = 1;

    if (position === "center") {
      widthClass = "w-[420px] h-[520px]";
      scale = 1;
      z = 20;
      translateX = 0;
      opacity = 1;
    } else if (position === "left") {
      widthClass = "w-[300px] h-[420px]";
      scale = 0.92;
      z = 15;
      translateX = -100;
      opacity = 0.95;
    } else if (position === "right") {
      widthClass = "w-[300px] h-[420px]";
      scale = 0.92;
      z = 15;
      translateX = 100;
      opacity = 0.95;
    } else {
      widthClass = "w-[240px] h-[340px]";
      scale = 0.9;
      translateX = 0;
      opacity = 0;
      z = 5;
    }

    return (
      <motion.div
        onClick={() => handleCardClick(index)}
        layout
        initial={false}
        animate={{
          x: translateX,
          scale,
          opacity,
          // a subtle elevation on center
          boxShadow:
            position === "center"
              ? "0 25px 40px rgba(4, 10, 25, 0.12)"
              : "0 12px 24px rgba(4,10,25,0.06)",
        }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        style={{ zIndex: z }}
        className={`${baseCardClasses} ${widthClass} bg-white`}
      >
        {/* Image layer */}
        <div className="w-full h-full relative">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 420px, 50vw"
            className={commonImageClasses}
          />
        </div>

        {/* overlay label bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/40 to-transparent text-white">
          <div className="text-lg font-semibold">{service.t1}</div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-12">
            <button className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* CAROUSEL */}
          <div className="w-full overflow-hidden mb-28">
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-7xl h-[560px] md:h-[560px] flex items-center justify-center">
                {/* container for three cards (we position absolutely for precise control) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  {/* left */}
                  <Card
                    service={services[prevIndex]}
                    position="left"
                    index={prevIndex}
                    key={`left-${services[prevIndex].id}`}
                  />
                  {/* center */}
                  <Card
                    service={services[active]}
                    position="center"
                    index={active}
                    key={`center-${services[active].id}`}
                  />
                  {/* right */}
                  <Card
                    service={services[nextIndex]}
                    position="right"
                    index={nextIndex}
                    key={`right-${services[nextIndex].id}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Details panel (appears below carousel) */}
          <AnimatePresence>
            {selectedService ? (
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35 }}
                className="mb-12 rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow"
              >
                <div className="w-full">

                  <div>
                    <h3 className="text-3xl font-bold text-[#050659] mb-4">
                      {selectedService.title}
                    </h3>
                    {selectedService.subtitle && (
                      <h4 className="text-xl text-[#2527D9] font-semibold mb-4">
                        {selectedService.subtitle}
                      </h4>
                    )}
                    {selectedService.description && (
                      <p className="text-gray-700 mb-6">{selectedService.description}</p>
                    )}

                    {selectedService.sections &&
                      selectedService.sections.map((s, i) => (
                        <div key={i} className="mb-4">
                          <h5 className="text-lg font-semibold text-[#2527D9] mb-2">
                            {s.heading}
                          </h5>
                          {s.intro && <p className="mb-2 text-gray-700">{s.intro}</p>}
                          {s.bullets && (
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                              {s.bullets.map((b, bi) => (
                                <li key={bi} dangerouslySetInnerHTML={{ __html: b }} />
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}

                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => setSelectedService(null)}
                        className="px-5 py-2 rounded-full bg-black text-white text-sm"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Stats + contact + footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-black text-white rounded-3xl p-10 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4">Growqai:</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A growth-driven consulting firm helping founders, startups, and companies scale through <strong>Capital Advisory, Client Acquisition, and Talent Solutions</strong>.<br />
                Our purpose is simple to empower businesses with <strong>strategic capital, high-value clients</strong>, and <strong>top-tier talent</strong> to accelerate their growth journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">3+</div>
                <div className="text-sm text-gray-500 mb-2">Industries we operate in</div>
                <p className="text-xs text-gray-600">
                  • Capital • Client Acquisition • Talent Solutions
                </p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">4+</div>
                <div className="text-sm text-gray-500 mb-2">Business Partnerships built</div>
                <p className="text-xs text-gray-600">
                  Driven with strategy & execution within 4 months
                </p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">200+</div>
                <div className="text-sm text-gray-500 mb-2">Successful placements</div>
                <p className="text-xs text-gray-600">
                  From entry to leadership roles
                </p>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8">
                <div className="text-5xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-sm text-gray-500 mb-2">Client Success Rate</div>
                <p className="text-xs text-gray-600">
                  Delivering measurable growth consistently
                </p>
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
