"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Why Subduxion?",
    answer:
      "Subduxion is dedicated to unlocking sustainable growth for your business, boosting long-term value, efficiency, and impact through managed AI solutions. Based at the High Tech Campus AI Innovation Center, we optimize every aspect of your AI strategy from assessment, design, development, and scalability, leveraging deep AI expertise and digital innovation. Our managed services consistently deliver measurable efficiency gains and revenue improvements tailored to each client’s context.",
  },
  {
    question: "What makes Subduxion different?",
    answer: "",
  },
  {
    question: "What industries benefit from your managed AI expertise?",
    answer: "",
  },
  {
    question: "Do we need an in-house AI team to partner with you?",
    answer: "",
  },
  {
    question: "What ongoing management and support do you provide?",
    answer: "",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-white px-8 md:px-16 lg:px-24 py-16">
      {/* Decorative top line */}
      <div className="relative mb-2">
        <div className="h-px bg-gray-400 w-full"></div>
        <div className="absolute top-0 left-0 w-48 h-[3px] bg-gray-600 -translate-y-0.5"></div>
      </div>
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-10">/FAQ</div>

      {/* FAQ Layout */}
      <div className="grid lg:grid-cols-2 items-start">
        {/* Left Column - Title */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right Column - FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-md border border-gray-200 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full justify-between items-center text-left px-6 py-5 focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="text-2xl font-light text-gray-800">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && faq.answer && (
                <div className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
