import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "cobalt";
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
  let variantClass = "btn-brutal-primary";
  if (variant === "secondary") variantClass = "btn-brutal-secondary";
  if (variant === "cobalt") variantClass = "btn-brutal-cobalt";

  return (
    <a className={`btn-brutal ${variantClass} ${className}`} {...props}>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 shrink-0 btn-arrow" />
      )}
    </a>
  );
}
