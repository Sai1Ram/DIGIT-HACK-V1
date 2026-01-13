"use client";

import useInView from "@/hooks/useInView";
import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function RevealText({
  text,
  speed = 0.03,
  delay = 0,
  className = "text-8xl font-semibold",
}: RevealTextProps) {
  const words = text.split(" ");
  const { ref, isVisible } = useInView({ threshold: 0.2, once: true });

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: speed,
            delayChildren: delay,
          },
        },
      }}
      className={`${className} flex flex-wrap gap-[0.8ch]`}
    >
      {words.map((word, wIndex) => (
        <span key={wIndex} className="flex">
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: "0.25em" },
                visible: { opacity: 1, y: "0em" },
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
