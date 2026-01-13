"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface ParallaxCardProps {
  img: string;
  children?: React.ReactNode;
  direction?: "up" | "down";
  strength?: number; // percentage
}

export default function ParallaxCard({
  img,
  children,
  direction = "down",
  strength = 20,
}: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔑 overshoot both sides
  const from = direction === "down"
    ? `-${strength}%`
    : `${strength}%`;

  const to = direction === "down"
    ? `${strength}%`
    : `-${strength}%`;

  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden w-full aspect-square rounded-t-xl rounded-bl-xl"
    >
      {/* Parallax Image */}
      <motion.img
        src={img}
        alt=""
        style={{ y }}
        className="
          absolute inset-0
          w-full
          object-cover
          rounded-xl
        "
      />

      {/* Content */}
      {children}
    </div>
  );
}
