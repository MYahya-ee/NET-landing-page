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
            className="border border-slate-200 bg-white rounded-xl overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-medium text-slate-900 hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-blue-600" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
