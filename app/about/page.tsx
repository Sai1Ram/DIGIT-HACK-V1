"use client";
import AnimatedButton from "@/components/custom/ui/AnimatedBtn";
import AnimatedCard from "@/components/custom/ui/AnimatedCard";
import ParallaxCard from "@/components/custom/ui/ParallaxCard";
import RevealText from "@/components/custom/ui/RevealText";
import Section from "@/components/custom/ui/Section";
import { ABOUT_CARDS } from "@/lib/data";
import { Box } from "lucide-react";
import { motion } from "motion/react";
import BrandSlider from "@/components/custom/layout/BrandSlider";
import Container from "@/components/custom/ui/Container";
import Header from "@/components/custom/shared/Header";
export default function About() {
  return (
    <Container>
      <Header>About Us</Header>

      {/* ===== TOP SECTION ===== */}
      <Section>
        <div
          className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6 lg:gap-10 xl:gap-16">
          {/* Left */}
          <div className="w-full md:w-3/5 lg:w-2/3">
            <div className="flex gap-3 items-center mb-4 text-xs sm:text-sm px-2 w-fit border-gray-300 border border-dashed">
              <Box className="text-primary size-4" />
              <p className="font-semibold uppercase">choose the best</p>
            </div>

            <RevealText
              text="Empowering Business with Expertise."
              getWordClassName={(word) =>
                word === "Expertise." ? "text-primary" : ""
              }
            />
          </div>

          {/* Right */}
          <motion.div className="w-full md:w-auto">
            <AnimatedButton label="Request a Call" href="/contact" />
          </motion.div>
        </div>

        {/* ABOUT CARDS */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-14 md:mt-16 lg:mt-20">
          {ABOUT_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30, rotateY: -30 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 * idx }}
              viewport={{ once: true }}
            >
              <AnimatedCard
                icon={
                  <card.icon className="size-16 sm:size-18 lg:size-20 stroke-[0.5]" />
                }
              >
                <div className="title font-semibold text-base sm:text-lg">
                  {card.title}
                </div>
                <p className="text-sm sm:text-base">{card.description}</p>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== PARALLAX + CONTENT ===== */}
      <div className="relative mb-20">
        <div className="absolute inset-0 rounded-xl z-0 bg-linear-to-b from-[#EDE1FF] to-[#F6F0FF]" />

        <Section>
          <div
            className="relative z-5 flex flex-col md:flex-col lg:flex-row gap-8 md:gap-10 lg:gap-14 xl:gap-20 w-full">
            {/* Left */}
            <div className="w-full">
              <ParallaxCard img="/images/person.webp" direction="down" />
            </div>

            {/* Right */}
            <div className="w-full space-y-8 sm:space-y-10">
              <div className="flex gap-3 items-center text-xs sm:text-sm px-2 w-fit border-gray-400 border border-dashed">
                <Box className="text-primary size-4" />
                <p className="font-semibold uppercase">Get to know us</p>
              </div>

              <RevealText
                text="Driving Innovation and Excellence for Sustainable Corporate Success Worldwide."
                getWordClassName={(word) =>
                  word === "Worldwide." ? "text-primary" : ""
                }
              />

              {/* Mission / Vision */}
              <div
                className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6 lg:gap-8 text-gray-700">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-white p-4 space-y-4"
                >
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Our Mission
                  </h2>
                  <p className="text-sm sm:text-base">
                    Our mission is empower businesses through innovate best
                    solution, exceptional service.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-center">
                      <Box className="text-primary size-4" />
                      <p>Innovation & Excellence</p>
                    </li>
                    <li className="flex gap-3 items-center">
                      <Box className="text-primary size-4" />
                      <p>Exceptional Customer</p>
                    </li>
                    <li className="flex gap-3 items-center">
                      <Box className="text-primary size-4" />
                      <p>Business growth</p>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-xl bg-white p-4 space-y-4"
                >
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Our Vision
                  </h2>
                  <p className="text-sm sm:text-base">
                    Our vision is to become a global leader in providing
                    transformative business solutions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex gap-3 items-center">
                      <Box className="text-primary size-4" />
                      <p>Global Leadership</p>
                    </li>
                    <li className="flex gap-3 items-center">
                      <Box className="text-primary size-4" />
                      <p>Transformative Solutions</p>
                    </li>
                    <li className="flex gap-3 items-center">
                      <Box className="text-primary size-4" />
                      <p>Sustainable Impact</p>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className=""
              >
                <AnimatedButton
                  label="Learn More About Us"
                  href="/contact"
                  className="rounded-lg text-white bg-primary w-full flex justify-center"
                />
              </motion.div>
            </div>
          </div>
        </Section>
      </div>

      {/* ===== BRAND SECTION ===== */}
      <div className="my-16 sm:my-24 relative flex justify-center items-center">
        <div
          className="
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-56 h-56
    sm:w-64 sm:h-64
    md:w-72 md:h-72
    lg:w-80 lg:h-80
    xl:w-96 xl:h-96
    rounded-full
    pointer-events-none
    border border-gray-300/60
    bg-white/25
    backdrop-blur-md
    shadow-[0_0_40px_30px_rgba(255,255,255,0.4)]
    z-20
  "
        >
          <div className="flex flex-col items-center justify-center h-full text-center px-6 sm:px-10">
            <h3 className="text-xl sm:text-2xl font-semibold">
              Join Over{" "}
              <span className="px-2 bg-primary text-white rounded-full">
                1000+
              </span>
            </h3>
            <p className="text-base sm:text-xl font-medium mt-1">
              Companies with{" "}
              <span className="text-primary font-bold">Bexon</span> Here
            </p>
          </div>
        </div>

        <BrandSlider />
      </div>
    </Container>
  );
}
