"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedButton from "../ui/AnimatedBtn";
import Section from "../ui/Section";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { FEATURED_SERVICES_LIMIT } from "@/lib/DB/CONST";
import { loadServices } from "@/lib/loadServices";
import Link from "next/link";

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const SERVICES = loadServices();
  // Track scroll within the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Starts tracking at the top of the section
  });

  // Transform scroll progress into opacity (0 at start, 1 after slight scroll)
  const shieldHeight = useTransform(scrollYProgress, [0, 0.05], [0, 80]);
  const shieldOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  useEffect(() => {
    const observerOptions = {
      root: null, // use the viewport
      // This creates a narrow horizontal "strip" in the middle of the screen
      rootMargin: "-40% 0px 0px 0px",
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the index of the card from a data attribute
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Grab all elements with the class 'service-card'
    const cards = document.querySelectorAll(".service-card");
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
            <div
              className={`z-5 sticky top-0 bg-transparent ${activeIndex === 0 ? "h-auto" : "lg:h-[70vh]"}`}
            >
              <motion.div
                style={{ height: shieldHeight, opacity: shieldOpacity }}
                className="w-full bg-primary-dark pointer-events-none"
              />
              <div className="flex gap-2 bg-linear-to-b from-[#402C68] to-transparent from-30% h-16 items-start">
                {SERVICES.slice(0, FEATURED_SERVICES_LIMIT).map((_, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <span
                        className={`${
                          isActive ? "text-primary" : "text-gray-400"
                        } text-lg font-semibold`}
                      >
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      {/* ANIMATED ACTIVE BAR */}
                      {isActive && idx !== FEATURED_SERVICES_LIMIT - 1 && (
                        <div className="h-1 w-16 bg-gray-600 rounded-full relative overflow-hidden">
                          <motion.div
                            layoutId="activeServiceBar"
                            className="absolute inset-0 bg-primary"
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                              duration: 0.3,
                            }}
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
                  const whatsappUrl = `https://wa.me/917657024042?text=${encodeURIComponent(message)}`;
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
