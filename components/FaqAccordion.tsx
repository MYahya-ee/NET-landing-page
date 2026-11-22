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
      'Tap "Get the Playbook" to open the form. Send 650 PKR through Easypaisa, JazzCash, NayaPay, or SadaPay. Then upload your payment screenshot.',
  },
  {
    question: "What do I get, and how fast does it arrive?",
    answer:
      "You receive the Playbook PDF and the Companion FLP Toolkit via email within 4-6 hours of payment verification.",
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
            className={`card-hard-flat overflow-hidden transition-colors duration-150 ${
              isOpen ? "bg-white" : "bg-white hover:bg-[#FFFAEF]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-[#161310] transition-colors focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="text-base sm:text-lg pr-4 font-normal flex items-center gap-3">
                <span className="font-pixel-num text-xs text-[#6b6459] shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{faq.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#6b6459] shrink-0 transition-transform duration-200 ease-out ${
                  isOpen ? "rotate-180 text-[#2E5DD6]" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-[#6b6459] text-sm sm:text-base leading-relaxed border-t border-dashed border-[#e8dfca] pt-3">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
