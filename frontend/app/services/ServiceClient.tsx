"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/site/footer";
import { useSearchParams } from "next/navigation";

interface Bullet {
  icon: string;
  text: string;
}

interface ServiceSection {
  heading: string;
  intro?: string;
  bullets1?: string[]; // for simple text bullets
  bullets2?: Bullet[];
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
    image: "/Service/CAPITAL.png",
    subtitle: "Capital fuels your growth journey",
    description: `Capital is a crucial lever for any growing company, providing the necessary resources to invest in talent, technology, and market expansion. With the right funding, businesses can accelerate innovation, scale their operations, and seize new opportunities more quickly. Effective capital management not only fuels immediate growth but also builds a strong foundation for sustainable success in a competitive landscape.`,
    sections: [
      {
        heading: "Why do you need to engage with an expert for your capital raise?",
        bullets1: [
          "Leveraging technology for faster due diligence and closure",
          "We help you to identify the right investor, sifting through investor databases and portfolios",
          "Standing out in a crowded capital market requires data-driven and customised pitches"
        ]
      },
      {
        heading: "How do we make it happen?",
        intro: "We strive to deliver value to our clients.",
        bullets2: [
          {
            icon: "/Service/1/Discovery.png",
            text: "<strong>Investor Discovery:</strong> We automate the investor discovery and matching to identify the right investors."
          },
          {
            icon: "/Service/2/Engagement.png",
            text: "<strong>Multichannel Engagement:</strong> Our engagement tools ensure multichannel reach-outs and engagement with investors."
          },
          {
            icon: "/Service/1/Closure.png",
            text: "<strong>Faster Deal Closure:</strong> We ensure due diligence time is reduced, resulting in faster investment closure."
          }
        ]
      }
    ]
  },
  {
    id: "attract-clients",
    t1: "Clients",
    title: "Attract Clients",
    image: "/Service/CLIENTS.png",
    subtitle: "Expand your client base through AI-powered lead generation & targeted customer conversions.",
    description: "",
    sections: [
      {
        heading: "Targeted Client Acquisition: Maximizing ROI",
        intro: "Attracting the right clients is crucial for B2B businesses to achieve sustainable growth and maximize ROI. By focusing on your ideal client profile, we help target organizations that truly benefit from your solutions—leading to better lead quality, faster conversions, and stronger long-term partnerships."
      },
      {
        heading: "Why do you need an expert's help with client acquisition?",
        bullets1: [
          "Navigating client acquisition in today's competitive B2B landscape requires advanced strategies",
          "We bring data-driven insights and advanced tools to consistently reach and engage your ideal clients",
          "We believe in the power of technology to scale smartly"
        ]
      },
      {
        heading: "How do we make it happen?",
        intro: "Expand your client base, enabled by AI.",
        bullets2: [
          {
            icon: "/Service/2/Leads.png",
            text: "<strong>Get more leads:</strong> Our tools boost qualified lead pipeline with lead sourcing & scoring.",
          },
          {
            icon: "/Service/2/Engagement.png",
            text: "<strong>Effective Engagement:</strong> We help you to consistently reach and engage with your clients.",
          },
          {
            icon: "/Service/2/Core.png",
            text: "<strong>AI at Core:</strong> We collaborate with you to convert potential clients with targeted closures."
          }
        ]
      }
    ]
  },

  {
    id: "accelerate-talent",
    t1: "Talent",
    title: "Accelerate Talent",
    image: "/Service/TALENT.png",
    subtitle: "Attract, engage, and hire top-tier talent with AI-assisted sourcing, hiring, and retention.",
    description: "",
    sections: [
      {
        heading: "Talent - Catalyst of Business Growth",
        intro: "At Growqai, we believe talent is the engine that drives lasting business success. In today's fast-moving, tech-driven marketplace, companies with the right people don't just adapt—they set the pace. Investing in talent is the smartest move any growth company can make to unlock breakthrough growth and create a true competitive edge."
      },
      {
        heading: "What makes talent a critical growth driver?",
        bullets1: [
          "Effective hiring and development help companies out-innovate and out-execute the competition",
          "The ability to attract, develop, and retain top talent isn't just an operational necessity but acts as a critical growth driver",
          "Organizations that prioritize talent acquisition and development experience 68% higher profit increases"
        ]
      },
      {
        heading: "How do we make it happen?",
        intro: "Attracting and Hiring the best talent.",
        bullets2: [
          {
            icon: "/Service/3/Source.png",
            text: "<strong>Source:</strong> Automate talent outreach & sourcing",
          },
          {
            icon: "/Service/2/Engagement.png",
            text: "<strong>Engage:</strong> Expedite screening & ensure engagement with top talent",
          },
          {
            icon: "/Service/3/Hire.png",
            text: "<strong>Hire:</strong> Reduce hiring time by deploying AI-enabled hiring"
          }
        ]
      }
    ]
  }
];

const AUTO_PLAY = 5000; // ms

export default function ServicesPage() {
  const [active, setActive] = useState<number>(0); // index of center card
  const [selectedService, setSelectedService] = useState<Service | null>(null);
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
    position: "left" | "center" | "right";
    index: number;
  }) {
    const baseClass =
      "cursor-pointer shadow-lg overflow-hidden transition-all duration-500 absolute";

    let styles = "";

    const getPosition = (index: number) => {
      if (index === active) return "center";
      if (index === (active - 1 + services.length) % services.length) return "left";
      return "right";
    };

    const cardVariants: any = {
      center: {
        scale: 1.25,
        x: "-50%",
        zIndex: 30,
        boxShadow:
          "rgba(102, 232, 76, 0.25) 0px 50px 100px -20px, rgba(102, 232, 76, 0.3) 0px 30px 60px -30px",
        transition: { duration: 0.9, ease: "easeOut" },
      },
      left: {
        scale: 0.9,
        x: "-120%",
        zIndex: 20,
        opacity: 0.85,
        transition: { duration: 0.9, ease: "easeOut" },
      },
      right: {
        scale: 0.9,
        x: "20%",
        zIndex: 20,
        opacity: 0.85,
        transition: { duration: 0.9, ease: "easeOut" },
      },
    };

    return (
      <motion.div
        className={`${baseClass} ${styles}`}
        onClick={() => handleCardClick(index)}
        animate={position}
        variants={cardVariants}
      >
        <div className="relative w-full h-full">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4 bg-linear-to-t from-black/70 to-transparent text-white">
          <p className={`font-semibold ${position === 'center' ? 'text-2xl' : 'text-lg'}`}>
            {service.t1}
          </p>
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
          <div className="relative w-full max-w-6xl h-[430px] mt-8 mx-auto">

            {services.map((service, index) => {
              const position =
                index === active
                  ? "center"
                  : index === (active - 1 + n) % n
                    ? "left"
                    : "right";

              return (
                <motion.div
                  key={service.id}
                  animate={position}
                  variants={{
                    center: {
                      scale: 1.2,
                      x: "-50%",
                      opacity: 1,
                      zIndex: 30,
                      transition: { duration: 1.5 }
                    },
                    left: {
                      scale: 0.9,
                      x: "-175%",
                      opacity: 0.5,
                      zIndex: 20,
                      transition: { duration: 1.5 }
                    },
                    right: {
                      scale: 0.9,
                      x: "75%",
                      opacity: 0.5,
                      zIndex: 20,
                      transition: { duration: 1.5 }
                    }
                  }}
                  onClick={() => handleCardClick(index)}
                  className="
                    absolute top-1/2 left-1/2 
                    -translate-y-1/2 
                    cursor-pointer
                    overflow-hidden 
                    bg-white 
                    shadow-xl 
                    w-[280px] 
                    md:w-[340px] 
                    h-[380px]
                  "
                >
                  <div className="relative w-full h-85">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-1 text-center">
                    <h2 className="text-xl text-[#050659] font-semibold">{service.t1}</h2>
                  </div>

                </motion.div>
              );
            })}
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
                className="py-24"
              >
                <div className="w-full">
                  {/* Title and Description */}
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-[#050659] mb-4">
                      {selectedService.title}
                    </h3>
                    {selectedService.subtitle && (
                      <h4 className="text-xl text-[#2527D9] font-semibold mb-4">
                        {selectedService.subtitle}
                      </h4>
                    )}
                    {selectedService.description && (
                      <p className="text-gray-700 mb-6 leading-relaxed">{selectedService.description}</p>
                    )}
                  </div>

                  {/* Sections */}
                  {selectedService.sections &&
                    selectedService.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-12">
                        <h5 className="text-2xl font-bold text-[#2527D9] mb-6">
                          {section.heading}
                        </h5>

                        {/* Section 1 */}
                        {section.intro && (
                          <p className="mb-6 text-gray-700 text-left text-lg">
                            {section.intro}
                          </p>
                        )}

                        {/* Section 2 */}
                        {!section.bullets1?.some(b => b.includes('<strong>')) && section.bullets1 && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {section.bullets1.map((bullet, bulletIndex) => (
                              <div
                                key={bulletIndex}
                                className="flex flex-col items-center bg-blue-50 border border-blue-200 p-6 shadow-sm"
                              >
                                <p className="text-gray-800 text-center text-base leading-relaxed">
                                  {bullet}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Section 3 — bullets with icons + blue text box (screenshot style) */}
                        {section.bullets2?.some(b => b.text.includes("<strong>")) && (
                          <div className="space-y-10">
                            {section.bullets2.map((bullet, bulletIndex) => {
                              // Extract <strong>Title</strong> and rest of text
                              const match = bullet.text.match(/<strong>(.*?)<\/strong>[:\-]?\s*(.*)/i);
                              const title = match ? match[1] : "";
                              const text = match ? match[2] : bullet.text;

                              return (
                                <div
                                  key={bulletIndex}
                                  className="flex flex-col md:flex-row items-start gap-6"
                                >
                                  {/* Left illustration (use your own icons per bullet) */}
                                  <div className="w-32 h-32 shrink-0 flex items-center justify-center">
                                    <Image
                                      src={bullet.icon.startsWith('/') ? bullet.icon : '/' + bullet.icon}
                                      alt="icon"
                                      width={110}
                                      height={110}
                                      className="object-contain opacity-80"
                                    />
                                  </div>

                                  {/* Right blue box */}
                                  <div className="flex-1 bg-blue-50 border border-blue-200 p-6 shadow-sm mt-7">
                                    <p className="text-gray-900 text-lg">
                                      <span className="font-semibold">{title} </span>
                                      {text}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}

                      </div>
                    ))}

                  <div className="mt-8 flex gap-3">
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 bg-[#1718FF] text-white text-sm font-semibold hover:bg-[#0f10cc] transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

          {/* Stats + contact + footer */}
          <div className="py-24 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-[#2527D9] text-white p-10 relative overflow-hidden">
              <h3 className="text-2xl font-bold mb-4">Growqai</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A growth-driven consulting firm helping founders, startups, and companies scale through <strong>Capital Advisory, Client Acquisition, and Talent Solutions</strong>.<br />
                Our purpose is simple to empower businesses with <strong>strategic capital, high-value clients</strong>, and <strong>top-tier talent</strong> to accelerate their growth journey.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-8">
                <div className="text-5xl font-bold text-[#2527D9] mb-2">3+</div>
                <div className="text-sm text-gray-500 mb-2">Industries we operate in</div>
                <p className="text-xs text-gray-600">
                  • Capital • Client Acquisition • Talent Solutions
                </p>
              </div>
              <div className="bg-gray-50 p-8">
                <div className="text-5xl font-bold text-[#2527D9] mb-2">4+</div>
                <div className="text-sm text-gray-500 mb-2">Business Partnerships built</div>
                <p className="text-xs text-gray-600">
                  Driven with strategy & execution within 4 months
                </p>
              </div>
              <div className="bg-gray-50 p-8">
                <div className="text-5xl font-bold text-[#2527D9] mb-2">200+</div>
                <div className="text-sm text-gray-500 mb-2">Successful placements</div>
                <p className="text-xs text-gray-600">
                  From entry to leadership roles
                </p>
              </div>
              <div className="bg-gray-50 p-8">
                <div className="text-5xl font-bold text-[#2527D9] mb-2">95%</div>
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
