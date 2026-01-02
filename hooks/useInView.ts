"use client";

import { useEffect, useRef, useState } from "react";
interface UseInViewOptions {
  threshold?: number;
  once?: boolean;           // <— mode support
  rootMargin?: string;      // optional viewport offset
}
export default function useInView({
  threshold = 0.3,
  once = false,
  rootMargin = "0px",
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (entry.isIntersecting && once) {
          observer.disconnect(); // animation only once mode
        }
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
