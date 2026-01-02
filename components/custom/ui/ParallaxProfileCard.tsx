"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProfileProps {
  img: string;
  name: string;
  role: string;
}

export default function ParallaxProfileCard({ img, name, role }: ProfileProps) {
  const ref = useRef(null);

  // Scroll progress relative to card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
    // adjust speed feel
  });

  // Move image slower (parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);  
  // increase "-20%" for stronger parallax

  return (
    <div 
      ref={ref}
      className="relative rounded-xl overflow-hidden w-full aspect-square "
    >
      {/* Parallax Image */}
      <motion.img
        src={img}
        alt={name}
        style={{ y }}
        className="object-cover rounded-xl absolute w-full "  
        // h-[120%] → gives extra room to scroll without showing blank
      />

      {/* Bottom Tag */}
      <div className="absolute bottom-0 right-0 bg-[#F1E8FF] rounded-tl-xl px-4 py-2 shadow-md flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
        <div className="leading-tight">
          <h3 className="font-semibold ">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
