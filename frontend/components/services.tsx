"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Arrange Capital",
    description:
      "Identify & Engage with potential investors & expediting capital infusion.",
    image: "/Service/1.jpg",
  },
  {
    id: 2,
    title: "Attract Clients",
    description:
      "Expand your client base through AI-powered Lead Generation & Conversion.",
    image: "/Service/2.jpg",
  },
  {
    id: 3,
    title: "Accelerate Talent",
    description:
      "Identify and hire top-tier talent with AI-powered hiring strategies.",
    image: "/Service/3.jpg",
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

      /** INITIAL STATE */
      gsap.set(imagesRef.current, { y: 100, autoAlpha: 0 });
      gsap.set(cardsRef.current, { autoAlpha: 0, y: 40 });

      /** First image + first card visible */
      if (imagesRef.current[0]) {
        gsap.set(imagesRef.current[0], { autoAlpha: 1, y: 0 });
      }
      if (cardsRef.current[0]) {
        gsap.set(cardsRef.current[0], { autoAlpha: 1, y: 0 });
      }

      /** MAIN LOOP */
      for (let i = 0; i < services.length; i++) {
        const image = imagesRef.current[i];
        const nextImage = imagesRef.current[i + 1];
        const card = cardsRef.current[i];

        // Current image slides in from bottom
        tl.to(
          image,
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          i * 1.2
        );

        // Current card appears
        tl.to(
          card,
          { autoAlpha: 1, y: 0, duration: 0.8 },
          i * 1.2
        );

        // Hide card before next appears
        if (i !== services.length - 1) {
          tl.to(
            card,
            { autoAlpha: 0, y: -30, duration: 0.8 },
            i * 1.2 + 0.9
          );
        }

        // Hide current image before next appears
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
      <div className="max-w-7xl mx-auto mb-10">
        <div className="relative mb-2">
          <div className="h-px bg-gray-400 w-full"></div>
          <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
        </div>
        <p className="text-sm text-gray-600 tracking-wide">/OUR SERVICES</p>
      </div>

      <div className="h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl mx-auto gap-10">

          {/* LEFT STACKED IMAGES */}
          <div className="relative w-full h-[420px] overflow-hidden rounded-3xl">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none will-change-transform"
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

          {/* RIGHT STACKED CARDS */}
          <div className="relative min-h-[420px]">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="absolute w-full border border-[#d2f7c9] bg-white p-10 rounded-3xl shadow-[0_0_25px_rgba(0,255,0,0.15)]"
                style={{ opacity: 0 }}
              >
                <h3 className="text-3xl font-semibold text-[#003d31] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
