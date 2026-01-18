"use client";
import Container from "../ui/Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedButton from "../ui/AnimatedBtn";
import { easeInOut, motion, useScroll, useTransform } from "motion/react";
import useScrollDirection from "@/hooks/useScrollDirection";
import useInView from "@/hooks/useInView";
import useScrollY from "@/hooks/useScrollY";
import CircularBtn from "../ui/CircularBtn";
import RevealText from "../ui/RevealText";
import Reveal from "../ui/Reveal";
import { useRef } from "react";
import { NAV_LINKS } from "@/lib/data";
import { ChevronDown } from "lucide-react";
export function HeroNavbar() {
  const pathname = usePathname();
  const scrollDir = useScrollDirection();
  const scrollY = useScrollY();
  const { ref, isVisible } = useInView({ threshold: 0.1, once: false });

  // Core behavior:
  const nearTop = scrollY <= 10; // Case 3 trigger area
  const initialLoad = scrollY < 50 && isVisible; // Case 1
  const showReturningUp = scrollDir === "up" && nearTop; // Case 3

  const showNavbar = initialLoad || showReturningUp;

const dropdownVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: easeInOut,
    },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};
  return (
    <>
      <div ref={ref} className="h-4 w-full" /> {/* viewport trigger */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{
          y: showNavbar ? 0 : -60,
          opacity: showNavbar ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-between items-center px-4"
      >
        <Link href="/">
          <h1 className="text-2xl font-bold">DigitHack</h1>
        </Link>

        <div className="flex gap-8 font-medium rounded-4xl px-8 py-3 bg-white">
           {NAV_LINKS.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          const hasDropdown = !!link.children;

          return (
            <motion.div
              key={link.id}
              className="relative group"
              initial="hidden"
              whileHover="visible"
              animate="hidden"
            >
              {/* Main link */}
              <Link
                href={link.href}
                className={`text-xl transition-colors duration-300
          hover:text-primary
          ${isActive ? "text-primary" : "text-foreground/80"}`}
              >
                {hasDropdown ? (
                  <span className="flex gap-1 items-center">
                    {link.label}
                    <ChevronDown
                      className="mt-1 transition-transform duration-300
                motion-safe:group-hover:rotate-180"
                    />
                  </span>
                ) : (
                  link.label
                )}
              </Link>

              {/* Dropdown */}
              {hasDropdown && (
                <motion.div
                  variants={dropdownVariants}
                  className="
            absolute top-full left-1/2 z-10 -translate-x-1/2
            mt-3 w-56 rounded-lg bg-white
            shadow-[0_10px_30px_rgba(0,0,0,0.12)]
            border border-black/5
            overflow-hidden
          "
                >
                  <div className="py-2">
                    {link.children!.map((child) => (
                      <Link
                        key={child.id}
                        href={child.link}
                        className="
                  px-5 py-3 text-sm text-gray-700
                  hover:bg-primary/10 hover:text-primary
                  transition-colors flex items-center gap-2 
                "
                      >
                        <child.icon className="w-4 h-4" />
                        <p>{child.title}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
        </div>

        <AnimatedButton label="Lets Talk" href="/contact" />
      </motion.div>
    </>
  );
}
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // adjust reveal sensitivity
  });

  // Scale from 0.6 → 1 based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1]);
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
        <div className="flex justify-center lg:p-24 px-6 lg:gap-24 gap-6 max-h-screen">
          <div className="left flex flex-col justify-between">
            <Reveal direction="up" delay={0.2} distance={10}>
              <div className="w-72 bg-gray-50 rounded-2xl h-1">
                <div className="h-1 w-10 bg-primary rounded-2xl"></div>
              </div>
              <p className="my-2">
                Recognized by industry award leaders, award winning team has be
                a proven record.
              </p>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <CircularBtn
                circularText="Award winning business - since 2021 - "
                middleText="W"
              />
            </Reveal>
          </div>
          <div className="right min-w-2/3">
            <RevealText
              text="Driving Innovation to Transform Business Futures"
              className="text-[5.4rem] font-semibold leading-[0.8] tracking-tighter"
            />
            <Reveal direction="up" distance={10} delay={0.2}>
              <div className="flex justify-start items-center mt-16 gap-6">
                <AnimatedButton label="Get Started" href="/contact" />

                <p className="">
                  Recognized by industry award leaders, <br />
                  award winning team has be a proven record.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div ref={ref} className="rounded-xl overflow-hidden w-full h-full">
          {/* VIDEO stays full width, but scales INSIDE → no layout shift */}
          <motion.div
            style={{ scale, transformOrigin: "top center" }}
            className="w-full h-full rounded-xl "
          >
            <video
              src="/videos/hero-banner.mp4"
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
