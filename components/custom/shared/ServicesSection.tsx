"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Leaf,
  Users,
  type LucideIcon,
} from "lucide-react";
import AnimatedButton from "../ui/AnimatedBtn";
import { loadServices } from "@/lib/loadServices";
import { FEATURED_SERVICES_LIMIT } from "@/lib/DB/CONST";
import { trackConversion } from "@/lib/gtag";
import Link from "next/link";
import Image from "next/image";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}

/** How many viewport-heights of scroll distance are given to each card. */
const VH_PER_CARD = 100;

/** Section background — reused by the bg class and the top fade overlay so they match exactly. */
const SECTION_BG = "#0b1e1d";

// Avoids the "useLayoutEffect does nothing on the server" warning during SSR.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

interface ServicesScrollSectionProps {
  /**
   * Top padding (px) for the pinned content — should be >= your site's fixed
   * navbar height, so the step indicator and heading always sit clear of it
   * when the navbar slides back into view on scroll-up. This is just
   * internal padding: the section itself stays a solid, edge-to-edge
   * background at all times, nothing is ever left transparent.
   */
  topPadding?: number;
}

export default function ServicesScrollSection({
  topPadding = 112,
}: ServicesScrollSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const SERVICES = loadServices();
  const [maxTranslate, setMaxTranslate] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Measure how far the card stack needs to travel so the last card's
  // bottom edge lines up with the bottom of the visible (clipped) area.
  useIsomorphicLayoutEffect(() => {
    const measure = () => {
      if (!stackRef.current || !viewportRef.current) return;
      const total = stackRef.current.scrollHeight;
      const visible = viewportRef.current.clientHeight;
      setMaxTranslate(Math.max(total - visible, 0));
    };

    measure();

    const ro = new ResizeObserver(measure);
    if (stackRef.current) ro.observe(stackRef.current);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
  const topFadeOpacity = useTransform(y, [0, -32], [0, 1]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.min(Math.max(latest, 0), 1);
    const idx = Math.min(
      SERVICES.length - 1,
      Math.floor(clamped * SERVICES.length),
    );
    setActiveIndex(idx);
  });

  const scrollToIndex = (index: number) => {
    const section = sectionRef.current;
    if (!section || typeof window === "undefined") return;
    const scrollableDistance = section.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return;
    const targetProgress = (index + 0.05) / SERVICES.length;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop + targetProgress * scrollableDistance,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      style={{ height: `${SERVICES.length * VH_PER_CARD}vh` }}
      className="relative px-4"
    >
      <div
        className="sticky top-0 h-screen overflow-hidden px-5 sm:px-8 lg:px-16 rounded-xl bg-primary-dark"
        style={{ paddingTop: topPadding }}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col gap-8 lg:flex-row lg:gap-16 ">
          {/* Left column — static content, pinned for the whole section */}
          <div className="lg:w-1/3 w-full space-y-6">
            <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-widest text-primary">
              <span className="h-1 w-1 rounded-full bg-primary top-1 relative" />
              Choose the best
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Scalable business services
            </h2>
            <AnimatedButton label="More Services" href="/services" />
          </div>

          {/* Right column — step indicator + clipped, scroll-linked card stack */}
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="flex items-center gap-3 sm:mb-8 sm:gap-4">
              {SERVICES.map((service, index) => (
                <div
                  key={service.id}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <button
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    className={`text-sm font-medium transition-colors duration-300 sm:text-base ${
                      index === activeIndex ? "text-white" : "text-white/35"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}.
                  </button>
                  {index < SERVICES.length - 1 && (
                    <span className="relative h-px w-6 overflow-hidden bg-white/15 sm:w-10">
                      {index === activeIndex && (
                        <motion.span
                          layoutId="service-step-line"
                          className="absolute inset-0 bg-primary"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div
              ref={viewportRef}
              className="relative min-h-0 flex-1 overflow-hidden"
            >
              <motion.div
                ref={stackRef}
                style={{ y, willChange: "transform" }}
                className="flex flex-col gap-5 sm:gap-6"
              >
                {SERVICES.slice(0, FEATURED_SERVICES_LIMIT).map(
                  (service, idx) => {
                    const message = `Hii DigIT-Hack Team, I'm interested in your *${service.title}* service. Please share more details.`;
                    const whatsappUrl = `https://wa.me/918144210272?text=${encodeURIComponent(message)}`;
                    return (
                      <motion.div
                        key={idx}
                        data-index={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="w-full p-4 rounded-xl bg-black/20 space-y-4 mb-10 service-card"
                      >
                        <div className="flex justify-between items-start gap-3">
                          <h2 className="text-2xl text-white capitalize">
                            {service.title}
                          </h2>

                          <div className="flex items-center gap-2">
                            {/* WhatsApp Button */}
                            <Link
                              href={whatsappUrl}
                              target="_blank"
                              onClick={() => trackConversion()}
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-green-500 hover:bg-green-600 transition-all duration-200 hover:scale-105 active:scale-95"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                                className="w-6 h-6 fill-white"
                              >
                                <path d="M16 .4C7.4.4.4 7.3.4 15.9c0 2.8.7 5.5 2.1 7.9L.3 31.7l8.1-2.1c2.3 1.3 4.9 2 7.6 2 8.6 0 15.6-6.9 15.6-15.5C31.6 7.3 24.6.4 16 .4zm0 28.4c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2-2-4.3-2-6.7C3 8.7 9 2.7 16 2.7s13 6 13 13.4-6 12.7-13 12.7zm7.4-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-1-2.3-1.4-3.1-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1 .5-.3.4-1.3 1.3-1.3 3.2s1.4 3.7 1.6 4c.2.3 2.7 4.1 6.6 5.7.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.4-1 2.7-2 .3-1 .3-1.8.2-2-.1-.2-.4-.3-.8-.5z" />
                              </svg>
                            </Link>

                            {/* Arrow Link */}
                            <Link
                              href={service.link}
                              className={`${activeIndex === idx ? "z-6" : ""}`}
                            >
                              <ArrowUpRight className="size-10 text-white" />
                            </Link>
                          </div>
                        </div>
                        <p className="text-gray-300">{service.description}</p>
                        <motion.div
                          className="relative rounded-lg overflow-hidden h-64 sm:h-80 lg:h-105"
                          style={{ perspective: 800 }}
                        >
                          <motion.div
                            className="absolute inset-0"
                            initial={{ rotateX: 0, scale: 1 }}
                            whileHover={{
                              rotateX: [0, -14, 10, 0],
                              scale: [1, 1, 1, 1.08],
                              transition: {
                                duration: 0.6,
                                times: [0, 0.3, 0.6, 1],
                                ease: "easeInOut",
                              },
                            }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                          >
                            <Image
                              src={service.image}
                              alt="service"
                              fill
                              className="rounded-lg object-cover"
                            />
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    );
                  },
                )}
              </motion.div>
              {/* Soft top fade — invisible at scroll 0, eases in as soon as scrolling
    starts under the indicator. */}
              <motion.div
                aria-hidden
                style={{
                  opacity: topFadeOpacity,
                  background:
                    "linear-gradient(to bottom, var(--custom-primary-dark) 0%, transparent 100%)",
                }}
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
