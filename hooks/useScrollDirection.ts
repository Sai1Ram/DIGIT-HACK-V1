"use client";

import { useEffect, useState } from "react";

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastY = window.scrollY;

    const update = () => {
      const currentY = window.scrollY;

      if (currentY > lastY && currentY > 50) setScrollDirection("down");
      else setScrollDirection("up");

      lastY = currentY;
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return scrollDirection;
}
