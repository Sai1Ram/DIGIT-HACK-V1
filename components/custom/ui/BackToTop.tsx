"use client";

import { MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.round((scrollTop / height) * 100);

      setScrollPercent(percent);
      setVisible(scrollTop > 200); // appears after some scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
   <button
  onClick={goTop}
  style={{
    background: `conic-gradient(var(--custom-primary) ${
      scrollPercent * 3.6
    }deg, #e5e7eb 0deg)`
  }}
  className={`
    fixed 
    bottom-4 right-4
    sm:bottom-5 sm:right-5
    lg:bottom-6 lg:right-6

    w-12 h-12
    sm:w-14 sm:h-14
    lg:w-16 lg:h-16

    rounded-full flex items-center justify-center z-50
    text-xs sm:text-sm font-semibold
    transition-all duration-300 shadow-lg cursor-pointer

    ${visible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-5 pointer-events-none"}
  `}
>
  <span
    className="
      absolute
      bg-white
      w-[85%] h-[85%]
      rounded-full
      flex items-center justify-center
    "
  >
    {scrollPercent === 100 ? (
      <MoveUp className="w-4 h-4 sm:w-5 sm:h-5" />
    ) : (
      `${scrollPercent}%`
    )}
  </span>
</button>
  );
}
