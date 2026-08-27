"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedButton from "../ui/AnimatedBtn";
import Section from "../ui/Section";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { FEATURED_SERVICES_LIMIT } from "@/lib/DB/CONST";
import { loadServices } from "@/lib/loadServices";
import Link from "next/link";
import { trackConversion } from "@/lib/gtag";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const SERVICES = loadServices();
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const nextIndex = Number(visible.target.getAttribute("data-index"));
          setActiveIndex(Math.min(Math.max(nextIndex, 0), cards.length - 1));
        }
      },
      { root: null, rootMargin: "-44% 0px -44% 0px", threshold: [0, 0.2, 0.5] },
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative px-4 min-h-[120vh] bg-primary-dark rounded-xl mx-4"
      ref={sectionRef}
    >
      <Section>
        <div className="flex justify-center lg:gap-12 gap-4 items-start lg:flex-row flex-col">
          {/* 2. Left side - Now the STICKY element */}
          <div
            className={`left space-y-6 lg:w-1/3 w-full lg:sticky top-20 lg:h-[60vh] h-fit 
              `}
          >
            <p className="text-primary uppercase font-semibold">
              .Choose the best
            </p>
            <h2 className="font-semibold text-white text-3xl">
              Scalable business services
            </h2>
            <AnimatedButton label="More Services" href="/services" />
          </div>
          {/* 3. Right side - Regular scrolling content */}
          <div className="right lg:w-2/3 w-full relative">
            <div className="sticky top-0 z-10 -mx-1 bg-primary-dark px-1 pb-5 pt-2">
              <div className="flex min-h-12 items-center gap-3 border-b border-white/10">
                {SERVICES.slice(0, FEATURED_SERVICES_LIMIT).map((_, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <motion.span
                        animate={{
                          color: isActive ? "var(--primary)" : "#9ca3af",
                          y: isActive ? 0 : 2,
                          scale: isActive ? 1 : 0.94,
                        }}
                        transition={{ type: "spring", stiffness: 360, damping: 28 }}
                        className="text-lg font-semibold tabular-nums"
                      >
                        {String(idx + 1).padStart(2, "0")}.
                      </motion.span>
                      {idx < FEATURED_SERVICES_LIMIT - 1 && (
                        <div className="relative h-px w-10 overflow-hidden rounded-full bg-white/15 sm:w-16">
                          <motion.div
                            className="absolute inset-y-0 left-0 bg-primary"
                            initial={false}
                            animate={{ width: isActive ? "100%" : "0%", opacity: isActive ? 1 : 0.25 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content cards - these scroll naturally up the page */}
            <div className="space-y-12">
              {SERVICES.slice(0, FEATURED_SERVICES_LIMIT).map(
                (service, idx) => {
                  const message = `Hii DigIT-Hack Team, I'm interested in your *${service.title}* service. Please share more details.`;
                  const whatsappUrl = `https://wa.me/918144210272?text=${encodeURIComponent(message)}`;
                  return (
                    <motion.div
                      key={idx}
                      data-index={idx}
                      initial={{ opacity: 0, y: 28, scale: 0.985 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-12% 0px -12%" }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="service-card mb-16 w-full space-y-4 rounded-xl bg-black/20 p-4 last:mb-4"
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
                      <div className="relative rounded-lg  h-64 sm:h-80 lg:h-105">
                        <Image
                          src={service.image}
                          alt="service"
                          fill
                          className="rounded-lg"
                        />
                      </div>
                    </motion.div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
