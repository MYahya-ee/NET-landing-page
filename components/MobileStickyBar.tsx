"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

interface MobileStickyBarProps {
  tallyUrl: string;
}

export default function MobileStickyBar({ tallyUrl }: MobileStickyBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear when scrolled past the hero section (~350px)
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside
      aria-label="Quick Action"
      className={`sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-[#FFFAEF] border-t-2 border-[#161310] z-50 flex items-center justify-between gap-3 shadow-[0_-4px_12px_rgba(22,19,16,0.08)] transition-all duration-300 ease-out transform ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col">
        <span className="font-pixel text-[10px] text-[#6b6459] uppercase">
          NET-2027
        </span>
        <span className="text-base font-medium text-[#161310] leading-none">
          650 PKR
        </span>
      </div>
      <Button
        href={tallyUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="cobalt"
        className="py-2.5 px-5 text-sm"
      >
        Get Playbook
      </Button>
    </aside>
  );
}
