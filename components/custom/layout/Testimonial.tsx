"use client";

import { Star } from "lucide-react";
import ParallaxCard from "../ui/ParallaxCard";
import Section from "../ui/Section";
import TestimonialSlider from "../ui/TestimonialSlider";
import Reveal from "../ui/Reveal";
export default function Testimonial() {
  return (
    <Section>
      <div
        className="
      flex flex-col lg:flex-row
      gap-8 lg:gap-10
      w-full
      items-stretch
    "
      >
        {/* LEFT */}
        <div className="w-full lg:w-1/2">
          <ParallaxCard
            img={"./images/person.webp"}
            strength={20}
            direction="down"
          >
            <div
              className="
            absolute bottom-0 right-0
            size-40 sm:size-48 lg:size-56
            bg-primary rounded-xl
            border-[#FAF8FF]
            border-t-[0.75rem] sm:border-t-[1rem]
            border-l-[0.75rem] sm:border-l-[1rem]
            pointer-events-none
          "
            >
              {/* top-left */}
              <span
                className="
              absolute top-0 left-0
              size-4 sm:size-6 rounded-full
              bg-transparent
              sm:shadow-[-8px_-8px_0_0_#FAF8FF]
              shadow-[-6px_-6px_0_0_#FAF8FF]
            "
              />

              {/* top-right */}
              <span
                className="
              absolute top-0 right-0
              size-4 sm:size-6 rounded-full
              bg-transparent
              sm:shadow-[8px_-8px_0_0_#FAF8FF]
              shadow-[6px_-6px_0_0_#FAF8FF]
            "
              />
              <span
                className="
              absolute -top-7 sm:-top-10 right-0
              size-4 sm:size-6 rounded-full
              bg-transparent
              sm:shadow-[8px_8px_0_0_#FAF8FF]
              shadow-[6px_6px_0_0_#FAF8FF]
            "
              />

              {/* bottom-left */}
              <span
                className="
              absolute bottom-0 left-0
              size-4 sm:size-6 rounded-full
              bg-transparent
              sm:shadow-[-8px_8px_0_0_#FAF8FF]
              shadow-[-6px_6px_0_0_#FAF8FF]
            "
              />
              <span
                className="
              absolute bottom-0 -left-7 sm:-left-10
              size-4 sm:size-6 rounded-full
              bg-transparent
              sm:shadow-[8px_8px_0_0_#FAF8FF]
              shadow-[6px_6px_0_0_#FAF8FF]
            "
              />

              {/* bottom-right */}
              <span
                className="
              absolute bottom-0 right-0
              size-4 sm:size-6 rounded-full
              bg-transparent
              sm:shadow-[8px_8px_0_0_#FAF8FF]
              shadow-[6px_6px_0_0_#FAF8FF]
            "
              />

              <div className="flex w-full h-full justify-between flex-col p-3 sm:p-4">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl text-white font-semibold">
                  4.9
                </h2>

                <div>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Reveal key={index} delay={index * 0.1} direction="right">
                        <Star
                          className="text-white size-4 sm:size-5"
                          fill="currentColor"
                        />
                      </Reveal>
                    ))}
                  </div>

                  <h2 className="text-xs sm:text-sm text-white">
                    (80+ client review)
                  </h2>
                </div>
              </div>
            </div>
          </ParallaxCard>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2">
          <TestimonialSlider />
        </div>
      </div>
    </Section>
  );
}
