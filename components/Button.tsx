import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  showArrow = true,
  ...props
}: ButtonProps) {
  const baseClasses =
    "group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-medium rounded-xl transition-all duration-200 cursor-pointer text-center select-none";

  const variantClasses =
    variant === "primary"
      ? "bg-[#1B1713] text-[#F7F3EC] hover:bg-[#2C2621] active:scale-[0.99] border border-[#1B1713]"
      : "bg-transparent text-[#1B1713] border border-[#DDD6CB] hover:bg-[#EFE9DF] hover:border-[#D0C7BA] active:scale-[0.99]";

  return (
    <a
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1" />
      )}
    </a>
  );
}
