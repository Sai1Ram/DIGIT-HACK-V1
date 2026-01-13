"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { brands } from "@/lib/data";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "@/hooks/useMeasure";
import Link from "next/link";
export default function BrandSlider() {

  // Duplicate array to create seamless infinite loop
  const logos = [...brands, ...brands];
  const xTranslation = useMotionValue(0);
  const { ref, width } = useMeasure();

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
    <div
      className="relative w-full overflow-x-auto overflow-y-hidden no-scrollbar h-64  border-black"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
      }}
    >
      {/* Infinite Scrolling Slider */}
      <motion.div
        className="flex gap-10 absolute left-0 top-1/2 -translate-y-1/2"
        style={{
          x: xTranslation,
        }}
        ref={ref}
      >
        {logos.map((brand, i) => (
          <Link key={i} href={brand.link} target="_blank" rel="noopener noreferrer">
            <div
              className="w-80 h-32 flex items-center justify-center  grayscale
              bg-white rounded-xl shadow-sm hover:scale-[1.02] transition"
            >
              <Image
                src={brand.src}
                alt="logo"
                className="w-28 opacity-80 hover:opacity-100"
              />
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
