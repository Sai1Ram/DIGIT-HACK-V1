"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { BRANDS } from "@/lib/DB/ui/mapper";
import Image from "next/image";
import { useEffect, useRef } from "react";
import useMeasure from "@/hooks/useMeasure";
import Link from "next/link";

const GAP = 32; // px (matches gap-8)

export default function BrandSlider() {
  const xTranslation = useMotionValue(0);
  const { ref, width } = useMeasure();
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  // Duplicate array to create seamless infinite loop
  const logos = [...BRANDS, ...BRANDS];

  useEffect(() => {
    if (width <= 0) return;

    // (width + GAP) / 2 is the exact offset of one full set of brands
    const finalPosition = -(width + GAP) / 2;

    controlsRef.current = animate(xTranslation, [0, finalPosition], {
      duration: 50,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return () => {
      controlsRef.current?.stop();
    };
  }, [width, xTranslation]);

  return (
    <div
      className="relative w-full overflow-x-hidden overflow-y-hidden no-scrollbar h-52 sm:h-64 py-6"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
      onMouseEnter={() => controlsRef.current?.pause()}
      onMouseLeave={() => controlsRef.current?.play()}
    >
      {/* Infinite Scrolling Slider */}
      <motion.div
        className="flex gap-8 absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer"
        style={{
          x: xTranslation,
        }}
        ref={ref}
      >
        {logos.map((brand, i) => (
          <Link
            key={`${brand.id}-${i}`}
            href={brand.link}
            target="_blank"
            rel="noopener noreferrer"
            title={brand.name || "Brand Partner"}
            aria-label={brand.name || "Brand Partner"}
            className="block group shrink-0"
          >
            <div
              className="w-56 sm:w-64 h-28 sm:h-32 flex items-center justify-center p-5
              bg-white/95 rounded-2xl border border-gray-100 shadow-sm
              hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5
              transition-all duration-300"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={brand.src}
                  alt={brand.name || "Brand logo"}
                  className="max-h-16 sm:max-h-20 max-w-[140px] sm:max-w-[160px] w-auto h-auto object-contain
                  grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105
                  transition-all duration-300 pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

