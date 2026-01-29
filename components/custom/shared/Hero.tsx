"use client";
import AnimatedButton from "../ui/AnimatedBtn";
import { motion, useScroll, useTransform } from "motion/react";
import CircularBtn from "../ui/CircularBtn";
import RevealText from "../ui/RevealText";
import Reveal from "../ui/Reveal";
import { useEffect, useRef, useState } from "react";
import Section from "../ui/Section";
import { HeroNavbar } from "./HeroNav";

export default function Hero() {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // adjust reveal sensitivity
  });
  const isDesktopQuery = "(min-width: 1024px)";
  useEffect(() => {
    const media = window.matchMedia(isDesktopQuery);

    const update = () => setIsDesktop(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  // Scale from 0.6 → 1 based on scroll
  const animatedScale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1]);

  // Mobile = static scale
  const scale = isDesktop ? animatedScale : 1;
  return (
    <div className="relative w-full h-full">
      <div className="relative z-10">
        <HeroNavbar />
      </div>
      {/* BACKGROUND COLOR */}
      <div className="absolute inset-0 w-full h-full rounded-t-xl z-0 bg-linear-to-b from-[#EDE1FF] to-[#F6F0FF]" />
      {/* PATTERN STARTS */}
      <div className="min-h-screen w-full absolute inset-0 z-0">
        {/* Dashed Top Left Fade Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #a6a5a4 1px, transparent 1px),
              linear-gradient(to bottom, #a6a5a4 1px, transparent 1px)
              `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                  ),
                  radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
      `,
            WebkitMaskImage: `
  repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        {/* Your Content/Components */}
      </div>
      {/* PATTERN ENDS */}
      <div className="relative z-5">
        <Section>
          <div className="flex justify-center gap-8 sm:gap-10 lg:gap-20 xl:gap-24 flex-col lg:flex-row max-h-none lg:max-h-screen">
            <div className="left flex flex-col justify-between lg:order-1 order-2">
              <Reveal direction="up" delay={0.2} distance={10}>
                <div className="w-full sm:w-60 lg:w-72 bg-gray-50 rounded-2xl h-1">
                  <div className="h-1 w-10 bg-primary rounded-2xl"></div>
                </div>
                <p className="my-2 text-sm sm:text-base max-w-md">
                  Recognized by industry award leaders, award winning team has
                  be a proven record.
                </p>
              </Reveal>
              <Reveal direction="right" delay={0.2}>
                <CircularBtn
                  circularText="Award winning business - since 2021 - "
                  middleText="W"
                />
              </Reveal>
            </div>
            <div className="right lg:min-w-2/3 min-w-full lg:order-2 order-1">
              <RevealText
                text="Driving Innovation to Transform Business Futures"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] xl:text-[5.4rem] font-semibold leading-[0.8] tracking-tighter"
              />
              <Reveal direction="up" distance={10} delay={0.2}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-8 sm:mt-10 lg:mt-16">
                  <AnimatedButton label="Get Started" href="/contact" />

                  <p className="">
                    Recognized by industry award leaders, <br />
                    award winning team has be a proven record.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Section>
        <div
          ref={ref}
          className="rounded-xl overflow-hidden w-full h-full mt-10 sm:mt-12 lg:mt-0"
        >
          {/* VIDEO stays full width, but scales INSIDE → no layout shift */}
          <motion.div
            style={{ scale, transformOrigin: "top center" }}
            className="w-full h-full rounded-xl "
          >
            <video
              src="./videos/hero-banner.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
