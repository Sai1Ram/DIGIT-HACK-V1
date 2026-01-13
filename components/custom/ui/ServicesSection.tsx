"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedButton from "./AnimatedBtn";
import Section from "./Section";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ServiceImg from "@/public/images/service-1.webp";
import { motion, useScroll, useTransform } from "motion/react";
import useMeasure from "@/hooks/useMeasure";
interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Business Strategy Development",
    description:
      "Recognize that exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted to help you transform every interaction your customers have with your brand busin.",
    image: "/api/placeholder/800/600",
  },
  {
    id: 2,
    title: "Customer Experience Solutions",
    description:
      "Recognize that exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted to help you transform every interaction your customers have with your brand busin.",
    image: "/api/placeholder/800/600",
  },
  {
    id: 3,
    title: "Digital Transformation",
    description:
      "Leverage cutting-edge technology to modernize your business operations and stay ahead of the competition in the digital age.",
    image: "/api/placeholder/800/600",
  },
  {
    id: 4,
    title: "Marketing Analytics",
    description:
      "Make data-driven decisions with comprehensive analytics that provide insights into your marketing performance and ROI.",
    image: "/api/placeholder/800/600",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
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
      className="relative px-4 min-h-[150vh] bg-[#402C68] rounded-xl mx-4"
      ref={sectionRef}
    >
      <Section>
        <div className="flex justify-center gap-12 items-start">
          {/* 2. Left side - Now the STICKY element */}
          <div className={`left space-y-6 w-1/3 sticky top-20 h-[60vh]
              `}>
            <p className="text-primary uppercase font-semibold">
              .Choose the best
            </p>
            <h2 className="font-semibold text-white text-3xl">
              Scalable business services
            </h2>
            <AnimatedButton label="More Services" href="/services" className="bg-primary" />
          </div>
          {/* 3. Right side - Regular scrolling content */}
          <div className="right w-2/3 relative">
            <div
              className={`z-10 sticky top-0 bg-transparent ${activeIndex === 0 ? "h-auto" : "h-[70vh]"}`}
            >
              <motion.div
              style={{ height: shieldHeight, opacity: shieldOpacity }}
              className="w-full bg-[#402C68] pointer-events-none"
            />
              <div className="flex gap-2 bg-linear-to-b from-[#402C68] to-transparent from-30% h-16 items-start">
                {services.map((_, idx) => {
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
                      {isActive && idx !== services.length - 1 && (
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
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  data-index={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-5% 0px -20% 0px" }}
                  className="w-full p-4 rounded-xl bg-black/20 space-y-4 mb-10 service-card"
                >
                  <div className="flex justify-between">
                    <h2 className="text-2xl text-white capitalize">
                      {service.title}
                    </h2>
                    <ArrowUpRight className="size-10 text-white" />
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                  <Image
                    src={ServiceImg}
                    alt="service"
                    className="w-full rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
