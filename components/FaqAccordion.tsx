"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I pay?",
    answer:
      'Click "Get the Playbook" to open the quick checkout form. Pay 650 PKR via Easypaisa, JazzCash, NayaPay, or SadaPay and upload your payment screenshot + TID.',
  },
  {
    question: "What format is it in and how fast do I get it?",
    answer:
      "You receive the Playbook PDF and the Companion FLP Toolkit via email within 12–24 hours of payment verification.",
  },
  {
    question: "Is this updated for NET-2027?",
    answer:
      "Yes, official NUST test format and eligibility references were checked for the NET-2027 cycle.",
  },
  {
    question: "Is this for Pre-Medical students?",
    answer:
      "It focuses on NET-Engineering (Mathematics, Physics, English), which applies to Engineering and Computing programmes.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-[#DDD6CB] bg-[#EFE9DF]/50 hover:bg-[#EFE9DF]/80 rounded-xl overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-[#1B1713] transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg pr-4 font-normal flex items-center gap-2.5">
                {isOpen && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1F4E3D] shrink-0" />
                )}
                <span>{faq.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#5C544B] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#1F4E3D]" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-[#5C544B] text-sm sm:text-base leading-relaxed border-t border-[#DDD6CB]/60 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
