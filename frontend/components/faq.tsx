"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Why is Growqai different?",
    answer:
      "Unlike traditional consulting firms, Growqai combines <strong>strategic expertise with AI-backed precision.</strong> We don’t just advise — we enable execution with data, technology, and performance-driven systems.",
  },
  {
    question: "How does Growqai help with Capital, Client, and Talent?",
    answer: "We help ventures <strong>attract the right capital, acquire quality clients, and build capable teams</strong>, ensuring all three growth levers work together seamlessly for long-term success.",
  },
  {
    question: "How does Growqai use AI in its consulting approach?",
    answer: "AI helps us go beyond assumptions. We use intelligent data models to analyze performance, identify growth gaps, and design strategies that create measurable impact.",
  },
  {
    question: "What industries does Growqai work with?",
    answer: "We collaborate with businesses across <strong>tech, finance, real estate, and professional services</strong>, offering customized growth frameworks that fit each industry’s unique challenges.",
  },
  {
    question: "How does Growqai help businesses scale faster?",
    answer: "Growqai partners with ventures to unlock growth across <strong>Capital, Client, and Talent.</strong> Using <strong>AI-led insights</strong>, we design data-backed strategies that turn potential into predictable performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className=" bg-[#E7E9F1] px-8 md:px-16 lg:px-24 py-24">
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
          <h2 className="text-2xl font-bold text-[#050659]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right Column - FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-[#E7E9F1] shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full justify-between items-center text-left px-6 py-5 focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="text-xl font-light text-gray-800">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && faq.answer && (
                <div
                  className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed text-base"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
