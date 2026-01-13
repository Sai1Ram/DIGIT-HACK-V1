"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

const AUTO_DELAY = 2000; // ms

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const slides = [...testimonials, testimonials[0]];

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
      className="rounded-xl overflow-hidden h-full relative"
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
          // when we reach cloned slide
          if (index === testimonials.length) {
            stopAutoSlide(); // pause
            setIsTransitioning(false);
            setIndex(0); // jump back instantly

            // resume after jump
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
            className="min-w-full h-full flex flex-col justify-center gap-10 p-10 bg-white"
            style={{
              marginRight: i !== slides.length - 1 ? SLIDE_GAP : 0,
            }}
          >
            <Quote className="size-20 text-primary" />
            <p className="mt-6 text-gray-700 text-3xl">{t.quote}</p>
            <hr className="border-gray-400" />
            <div>
              <h4 className="font-semibold text-2xl">{t.name}</h4>
              <p className="text-lg text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Progress / Dots */}
      <div className="absolute bottom-6 right-10 flex gap-2 ">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-20 bg-primary" : "w-6 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
