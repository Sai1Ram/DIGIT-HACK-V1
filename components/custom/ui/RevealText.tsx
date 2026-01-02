"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  speed?: number;     // letter reveal speed
  delay?: number;     // delay before start
  className?: string;
}

export default function RevealText({
  text,
  speed = 0.01,       // lower = faster reveal
  delay = 0,
  className = "text-3xl font-semibold"
}: RevealTextProps) {

  const words = text.split(" ");

  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: speed, delay } }
      }}
      className={`${className} leading-[0.7] flex flex-wrap gap-[0.8ch]`} 
      // gap ensures natural spacing but not shown as animated blank
    >
      {words.map((word, wIndex) => (
        <span key={wIndex} className="flex">
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, },
                visible: { opacity: 1, }
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
