"use client";

import { Star } from "lucide-react";
import ParallaxCard from "../ui/ParallaxCard";
import Section from "../ui/Section";
import TestimonialSlider from "../ui/TestimonialSlider";
import Reveal from "../ui/Reveal";
export default function Testimonial() {
  return (
    <Section>
      <div className="flex gap-10 w-full items-stretch">
        <div className="left w-1/2">
          <ParallaxCard img={"./images/person.webp"} strength={20} direction="down">
            <div
              className="size-56 bg-primary rounded-xl absolute bottom-0 right-0
                  border-white border-t-[1rem] border-l-[1rem]
                  pointer-events-none"
            >
              {/* top-left */}
              <span
                className="absolute top-0 left-0 size-6 rounded-full
                     bg-transparent shadow-[-8px_-8px_0_0_#fff]"
              />

              {/* top-right */}
              <span
                className="absolute top-0 right-0 size-6 rounded-full
                     bg-transparent shadow-[8px_-8px_0_0_#fff]"
              />
              <span
                className="absolute -top-10 right-0 size-6 rounded-full
                     bg-transparent shadow-[8px_8px_0_0_#fff]"
              />

              {/* bottom-left */}
              <span
                className="absolute bottom-0 left-0 size-6 rounded-full
                     bg-transparent shadow-[-8px_8px_0_0_#fff]"
              />
              <span
                className="absolute bottom-0 -left-10 size-6 rounded-full
                     bg-transparent shadow-[8px_8px_0_0_#fff]"
              />

              {/* bottom-right */}
              <span
                className="absolute bottom-0 right-0 size-6 rounded-full
                     bg-transparent shadow-[8px_8px_0_0_#fff]"
              />
              <div className="flex w-full h-full justify-between flex-col p-4">
                <h2 className="text-6xl text-white font-semibold">4.9</h2>
                <div className="">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Reveal key={index} delay={index * 0.1} direction="right">
                      <Star
                        className="text-white"
                        fill="currentColor"
                      />
                      </Reveal>
                    ))}
                  </div>
                  <h2 className="text-sm text-white">(80+ client review)</h2>
                </div>
              </div>
            </div>
          </ParallaxCard>
        </div>
        <div className="right w-1/2">
          <TestimonialSlider />
        </div>
      </div>
    </Section>
  );
}
