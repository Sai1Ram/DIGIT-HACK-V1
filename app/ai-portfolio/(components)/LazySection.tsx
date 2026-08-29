"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
  index?: number;
}

const STAGGER_MS = 60;
const MAX_STAGGER_MS = 300;

export function LazySection({
  children,
  minHeight = 640,
  rootMargin = "200px 0px",
  index = 0,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();
        const delay = Math.min(index * STAGGER_MS, MAX_STAGGER_MS);
        timeoutId = setTimeout(() => {
          if (!cancelled) setVisible(true);
        }, delay);
      },
      { rootMargin, threshold: 0 }
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [visible, rootMargin, index]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}