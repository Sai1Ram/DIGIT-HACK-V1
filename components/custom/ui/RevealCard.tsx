"use client";
import { motion } from "motion/react";

export function RevealCard({
  children,
  delay = 0,
  duration = 0.5,
  threshold = 0.3,
  distance = 30,
  angle = -30,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
  angle?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: distance, rotateY: angle }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
      viewport={{ once: true, amount: threshold }}
    >
      {children}
    </motion.div>
  );
}
