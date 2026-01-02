"use client";

import { useEffect, useState } from "react";

export default function useHeroInView(offset: number = 200) {
  const [inHero, setInHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setInHero(window.scrollY < offset); // detect top area
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return inHero;
}
