"use client";
import useInView from "@/hooks/useInView";
import { motion } from "motion/react";
interface RevealTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;

  /** optional per-word class */
  getWordClassName?: (word: string, index: number) => string;
}
// text-8xl font-semibold
export default function RevealText({
  text,
  speed = 0.02,
  delay = 0,
  className = "text-3xl sm:text-4xl lg:text-5xl font-semibold leading-6",
  getWordClassName,
}: RevealTextProps) {
  const { ref, isVisible } = useInView({ threshold: 0.2, once: true });
  const words = text.split(" ");

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
      className={`flex flex-wrap gap-[0.8ch] ${className}`}
    >
      {words.map((word, wIndex) => (
        <span
          key={wIndex}
          className={`flex ${getWordClassName?.(word, wIndex) ?? ""}`}
        >
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
