"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "arrange-capital",
    title: "Arrange Capital",
    description:
      "Identify & Engage with potential investors & expediting capital infusion.",
    image: "/Service/1.jpg",
    points: [
      "Leveraging technology for faster due diligence and closure",
      "We help you identify the right investor by sifting through investor databases and portfolios",
      "Standing out in a crowded capital market requires data-driven and customised pitches",
    ],
    cta: "Know More",
  },
  {
    id: "attract-clients",
    title: "Attract Clients",
    description:
      "Expand your client base through AI-powered Lead Generation & Conversion.",
    image: "/Service/2.jpg",
    points: [
      "We bring data-driven insights and advanced tools to consistently reach and engage your ideal clients.",
      "Navigating client acquisition in today’s competitive B2B landscape requires advanced strategies",
      "We believe in the power of technology to scale smartly",
    ],
    cta: "Know More",
  },
  {
    id: "accelerate-talent",
    title: "Accelerate Talent",
    description:
      "Identify and hire top-tier talent with AI-powered hiring strategies.",
    image: "/Service/3.jpg",
    points: [
      "Organizations that prioritize talent acquisition and development experience 68% higher profit increases",
      "Effective hiring and development help companies out-innovate and out-execute the competition",
      "The ability to attract, develop, and retain top talent isn't just an operational necessity but acts as a critical growth driver",
    ],
    cta: "Know More",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      gsap.set(imagesRef.current, { y: 100, autoAlpha: 0 });
      gsap.set(cardsRef.current, { autoAlpha: 0, y: 40 });

      if (imagesRef.current[0]) {
        gsap.set(imagesRef.current[0], { autoAlpha: 1, y: 0 });
      }
      if (cardsRef.current[0]) {
        gsap.set(cardsRef.current[0], { autoAlpha: 1, y: 0 });
      }

      for (let i = 0; i < services.length; i++) {
        const image = imagesRef.current[i];
        const nextImage = imagesRef.current[i + 1];
        const card = cardsRef.current[i];

        tl.to(
          image,
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          i * 1.2
        );

        tl.to(
          card,
          { autoAlpha: 1, y: 0, duration: 0.8 },
          i * 1.2
        );

        if (i !== services.length - 1) {
          tl.to(
            card,
            { autoAlpha: 0, y: -30, duration: 0.8 },
            i * 1.2 + 0.9
          );
        }

        if (nextImage) {
          tl.to(
            image,
            { autoAlpha: 0, duration: 0.8 },
            i * 1.2 + 0.9
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-2">
          <div className="h-px bg-gray-400 w-full"></div>
          <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
        </div>
        <p className="text-sm text-gray-600 tracking-wide">/OUR SERVICES</p>
      </div>

      <div className="h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-15">

          {/* LEFT IMAGES */}
          <div className="relative w-full h-[420px] overflow-hidden ">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                className="absolute inset-0  overflow-hidden pointer-events-none will-change-transform"
                style={{
                  zIndex: services.length - index,
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="100%"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* RIGHT CARDS */}
          <div className="relative min-h-[420px]">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="absolute w-full border bg-white p-10 shadow-[0_0_65px_rgba(5,6,89,0.15)]"
                style={{ opacity: 0 }}
              >
                <h3 className="text-3xl font-semibold text-[#050659] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#313447] leading-relaxed text-lg mb-6">
                  {service.description}
                </p>

                {/* POINTS LIST */}
                <ul className="space-y-4 mb-4">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#2527D9] shrink-0 mt-1" />
                      <span className="text-[#313447] text-[17px] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href={`/services?id=${service.id}`}>
                  <button className="bg-[#2527D9] hover:bg-[#4B4DFF] transition px-6 py-3 text-lg text-white font-medium flex items-center gap-2">
                    {service.cta ?? "Get Started"}
                    <span className="text-xl">↗</span>
                  </button>
                </Link>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
