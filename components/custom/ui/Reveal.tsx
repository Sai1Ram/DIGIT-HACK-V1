"use client";

import { motion } from "framer-motion";
import useInView from "@/hooks/useInView";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  distance?: number;
  opacity?: number;
  once?:boolean
}

export default function Reveal({
  children,
  direction = "up",
  duration = 0.6,
  delay = 0,
  distance = 60,
  opacity = 0,
  once = false
}: RevealProps) {
  const { ref, isVisible } = useInView({threshold: 0.2, once });

  const dir = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
    none:  {},
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity, ...dir }}
      animate={isVisible ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
