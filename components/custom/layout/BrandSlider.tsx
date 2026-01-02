"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import samosa from "@/public/images/brandLogo/samosa-logo.png";
import indulge from "@/public/images/brandLogo/indulge-logo.png";
import kfc from "@/public/images/brandLogo/KFC-Logo.wine.png";
import pizzaHut from "@/public/images/brandLogo/pizza-hut-logo.png";
import arsalan from "@/public/images/brandLogo/Arsalan-gold-logo.png";
import baskinRobbins from "@/public/images/brandLogo/Baskin-Robbins-Logo.wine.png";
import khadiIndia from "@/public/images/brandLogo/khadi-india-logo.png";
import Image from "next/image";
import { useEffect } from "react";
import useWidthMeasure from "@/hooks/useWidthMeasure";
export default function BrandSlider() {
  const brands = [
    samosa,
    indulge,
    kfc,
    pizzaHut,
    arsalan,
    baskinRobbins,
    khadiIndia,
  ];

  // Duplicate array to create seamless infinite loop
  const logos = [...brands, ...brands];
  const xTranslation = useMotionValue(0);
  const { ref, width } = useWidthMeasure();

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 10; // Halfway point
    controls = animate(xTranslation, [0, finalPosition], {
      duration: 18,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => controls.stop();
  }, [width, xTranslation]);
  return (
    <div className="relative w-full overflow-x-auto overflow-y-hidden no-scrollbar h-64 ">
      {/* Infinite Scrolling Slider */}
      <motion.div
        className="flex gap-10 absolute left-0 top-1/2 -translate-y-1/2"
        style={{
          x: xTranslation,
        }}
        ref={ref}
      >
        {logos.map((src, i) => (
          <div
            key={i}
            className="w-80 h-32 flex items-center justify-center  grayscale
              bg-white rounded-xl shadow-sm hover:scale-[1.02] transition"
          >
            <Image
              src={src}
              alt="logo"
              className="w-28 opacity-80 hover:opacity-100"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
