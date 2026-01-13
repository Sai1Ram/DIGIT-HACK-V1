"use client";

import { ArrowUpRight } from "lucide-react"; // shadcn icons | install if not present
import Link from "next/link";

interface AnimatedButtonProps {
  label: string;
  href?: string;
  className?: string;
}

export default function AnimatedButton({
  label,
  href = "#",
  className = "bg-primary",
}: AnimatedButtonProps) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center overflow-hidden  rounded-full  font-medium group transition text-xl 
         text-white pl-6 pr-2 py-2 ${className}`}
    >
      {/* Text layer wrapper */}
      <span className="relative h-5 overflow-hidden flex items-center">
        {/* Default text */}
        <span className="block transition-transform duration-300 group-hover:-translate-y-[120%]">
          {label}
        </span>

        {/* Second text (revealed on hover) */}
        <span className="absolute block translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0">
          {label}
        </span>
      </span>

      {/* Arrow */}
      <span
        className="ml-3 inline-flex items-center justify-center size-9 rounded-full 
                       bg-black/40 group-hover:bg-black/60 transition-colors"
      >
        <ArrowUpRight className="size-6 transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </Link>
  );
}
