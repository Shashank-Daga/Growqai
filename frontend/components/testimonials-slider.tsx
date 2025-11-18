"use client"

import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Chintaman Sanap",
    company: "Kosoku",
    text: "Growqai's collaborative approach, attention to detail, and commitment to delivering results set them apart from other consulting firms. I wouldn't hesitate to recommend.",
    img: "/testimonials/chintaman.jpg", // add correct image later
  },
  {
    id: 2,
    name: "Abhi Karn",
    company: "Merito",
    text: "Their team's depth of knowledge, strategic thinking, and commitment to excellence have been instrumental in helping us innovate talent acquisition at scale.",
    img: "/testimonials/abhi.jpg",
  },
  {
    id: 3,
    name: "Manoj Baraskar",
    company: "RAMS",
    text: "The team at Growqai exceeded our expectations in every way. We are grateful for their partnership and the positive impact they've had on our business.",
    img: "/testimonials/manoj.jpg",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-[#E7E9F1]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          {/* Decorative top line */}
          <div className="relative mb-2">
            <div className="h-px bg-gray-400 w-full"></div>
            <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
          </div>
          <p className="text-sm tracking-wide text-gray-800 font-medium">/TESTIMONIALS</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-10 rounded-2xl shadow-sm border border-[#E7E9F1]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-8">
                {item.text}
              </p>

              {/* Profile */}
              <div className="flex items-center gap-3">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="rounded-full border"
                />

                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
