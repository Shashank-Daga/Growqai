"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <section className="w-full min-h-screen bg-gray-50 p-6 md:p-12 flex justify-center">
      <div className="w-full max-w-6xl space-y-10">

        {/* Section Header */}
        <div>
          <div className="h-px bg-gray-300 w-full"></div>
          <div className="h-[3px] w-40 bg-gray-700 -mt-0.5"></div>
          <p className="text-sm text-gray-600 mt-2 tracking-widest">
            / OUR SERVICES
          </p>
        </div>

        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ------- CARD COMPONENT ------- */}
          <ServiceCard
            title="Arrange Capital"
            icon="/Service/Icon Capital.png"
            points={[
              "Leveraging technology for faster due diligence and closure",
              "Helping you identify the right investor by analyzing portfolios & investor databases",
              "Creating data-driven, customised pitches to stand out in a crowded capital market",
            ]}
            link="/services?id=arrange-capital"
          />

          <ServiceCard
            title="Attract Clients"
            icon="/Service/Icon Client.png"
            points={[
              "AI-powered lead generation & conversion framework to expand your client pipeline",
              "Data-driven insights to identify and engage your ideal B2B clients",
              "Advanced strategies to compete & grow in today’s digital-first market",
            ]}
            link="/services?id=attract-clients"
          />
        </div>

        {/* FULL WIDTH CARD */}
        <ServiceCard
          title="Accelerate Talent"
          full
          icon="/Service/Icon Talent.png"
          points={[
            "AI-powered talent identification & hiring to help you build winning teams",
            "Strong hiring & talent development creates up to 68% higher profit increases for organizations",
            "Attracting & retaining top talent is a critical growth driver in competitive markets",
          ]}
          link="/services?id=accelerate-talent"
        />
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  icon?: string;
  points: string[];
  link: string;
  full?: boolean;
}

/* ----------------- REUSABLE CARD COMPONENT ----------------- */
function ServiceCard({ title, icon, points, link, full }: CardProps) {
  return (
    <div
      className={`border bg-white p-8 shadow-sm hover:shadow-md transition flex 
      ${full ? "md:flex-row flex-col md:items-start" : "flex-col"}
      h-auto ${full ? "col-span-1 md:col-span-2 md:h-80" : "md:h-[420px]"}`}
    >
      {/* LEFT SECTION (Title + Points) */}
      <div className={`flex-1 ${full ? "md:pr-10" : ""}`}>
        
        {/* Title + Icon */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-semibold text-[#050659]">{title}</h2>

          {/* Icon only for first two cards */}
          {!full && icon && (
            <img
              src={icon}
              alt="icon"
              className="w-12 h-12 object-contain"
            />
          )}
        </div>

        {/* Points List */}
        <ul className="space-y-4 text-gray-700">
          {points.map((point, idx) => (
            <li key={idx} className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#2527D9] mt-1" />
              <span className="leading-relaxed text-lg">{point}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="mt-6">
          <Link href={link}>
            <button className="bg-[#2527D9] hover:bg-[#4B4DFF] transition px-6 py-3 text-white text-lg">
              Know More ↗
            </button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE ICON (Only for full-width card) */}
      {full && icon && (
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={icon}
            alt="icon"
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
          />
        </div>
      )}
    </div>
  );
}
