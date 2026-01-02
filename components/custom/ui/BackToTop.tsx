"use client";

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
        background: `conic-gradient(var(--custom-primary) ${scrollPercent * 3.6}deg, #e5e7eb 0deg)`
      }}
      className={`fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center
        text-sm font-semibold transition-all duration-300 shadow-lg
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}
      `}
    >
      <span className="absolute bg-white w-15 h-15 rounded-full flex items-center justify-center">
        {scrollPercent}%
      </span>
    </button>
  );
}
