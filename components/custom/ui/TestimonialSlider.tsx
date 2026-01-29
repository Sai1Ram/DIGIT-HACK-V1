"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import TESTIMONIALS from "@/lib/DB/content/Testimonials.json";

const AUTO_DELAY = 2000; // ms

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [...TESTIMONIALS, TESTIMONIALS[0]];

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, AUTO_DELAY);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);
  const SLIDE_GAP = 24; // px

  return (
  <div
  className="
    rounded-xl overflow-hidden h-full relative
    w-full
  "
  onMouseEnter={stopAutoSlide}
  onMouseLeave={startAutoSlide}
>
  {/* Slider */}
  <motion.div
    className="flex h-full"
    animate={{ x: `calc(-${index * 100}% - ${index * SLIDE_GAP}px)` }}
    transition={
      isTransitioning
        ? { duration: 0.6, ease: "easeInOut" }
        : { duration: 0 }
    }
    onAnimationComplete={() => {
      if (index === TESTIMONIALS.length) {
        stopAutoSlide();
        setIsTransitioning(false);
        setIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            startAutoSlide();
          });
        });
      }
    }}
  >
    {slides.map((t, i) => (
      <div
        key={i}
        className="
          min-w-full h-full
          flex flex-col justify-center
          gap-6 sm:gap-8 lg:gap-10
          p-6 sm:p-8 lg:p-10
          bg-white
        "
        style={{
          marginRight: i !== slides.length - 1 ? SLIDE_GAP : 0,
        }}
      >
        <Quote className="size-10 sm:size-14 lg:size-20 text-primary" />

        <p
          className="
            mt-2 sm:mt-4 lg:mt-6
            text-gray-700
            text-base sm:text-xl lg:text-3xl
            leading-relaxed
          "
        >
          {t.quote}
        </p>

        <hr className="border-gray-300" />

        <div>
          <h4 className="font-semibold text-lg sm:text-xl lg:text-2xl">
            {t.name}
          </h4>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500">
            {t.role}
          </p>
        </div>
      </div>
    ))}
  </motion.div>

  {/* Progress / Dots */}
  <div
    className="
      absolute
      bottom-4 sm:bottom-6
      left-1/2 sm:left-auto
      right-auto sm:right-10
      -translate-x-1/2 sm:translate-x-0
      flex gap-2
    "
  >
    {TESTIMONIALS.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`
          h-2 rounded-full transition-all
          ${i === index
            ? "w-12 sm:w-16 lg:w-20 bg-primary"
            : "w-4 sm:w-5 lg:w-6 bg-gray-300"}
        `}
      />
    ))}
  </div>
</div>

  );
}
