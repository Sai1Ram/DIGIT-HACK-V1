"use client";

import { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

/* ---------------- TYPES ---------------- */
interface Products {
  title: string;
  image: StaticImageData;
}
export default function ImageSlider({ slides }: { slides: Products[] }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  /* ---------- PREV ---------- */
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  /* ---------- NEXT ---------- */
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  /* ---------- AUTO PLAY ---------- */
  useEffect(() => {
    const id = setInterval(nextSlide, 3000);
    return () => clearInterval(id);
  }, [nextSlide]);

  return (
    <div className="h-full w-full relative group">
      {/* Image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image.src})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 overflow-hidden"
      >
        <h2 className="bg-gray-200 lg:text-xl font-bold p-2 text-center rounded-tl-2xl rounded-tr-2xl">
          {slides[currentIndex].title}
        </h2>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5
        text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer"
      >
        <BsChevronCompactLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5
        text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </button>
    </div>
  );
}
