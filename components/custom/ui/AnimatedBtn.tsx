"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface AnimatedButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export default function AnimatedButton({
  label,
  href = "#",
  className = "bg-primary text-white",
}: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      className={`
        relative inline-flex items-center justify-center
        overflow-hidden rounded-full font-medium group transition
        text-sm sm:text-base lg:text-xl
        pl-4 sm:pl-5 lg:pl-6
        pr-2
        py-1.5 sm:py-2
        ${className}
      `}
    >
      {/* Text */}
      <span className="relative h-4 sm:h-5 overflow-hidden flex items-center">
        {/* Default text */}
        <span className="block transition-transform duration-300 group-hover:-translate-y-[120%]">
          {label}
        </span>

        {/* Hover text */}
        <span className="absolute block translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0">
          {label}
        </span>
      </span>

      {/* Arrow */}
      <span
        className="
          ml-2 sm:ml-3
          inline-flex items-center justify-center
          size-7 sm:size-8 lg:size-9
          rounded-full
          bg-black/40 group-hover:bg-black/60
          transition-colors
        "
      >
        <ArrowUpRight
          className="
            size-4 sm:size-5 lg:size-6
            transition-transform duration-300
            group-hover:rotate-45
          "
        />
      </span>
    </Link>
  );
}
