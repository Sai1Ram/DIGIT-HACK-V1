"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useScrollDirection from "@/hooks/useScrollDirection";
import useInView from "@/hooks/useInView";
import useScrollY from "@/hooks/useScrollY";
import { NAV_LINKS } from "@/lib/data";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import AnimatedButton from "../ui/AnimatedBtn";
export function HeroNavbar() {
  const pathname = usePathname();
  const scrollDir = useScrollDirection();
  const scrollY = useScrollY();
  const { ref, isVisible } = useInView({ threshold: 0.1, once: false });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);

  const toggleMobileDropdown = (id: number) => {
    setMobileDropdown((prev) => (prev === id ? null : id));
  };

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
        className="flex items-center justify-between px-4 md:px-6 lg:px-10"
      >
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-xl sm:text-2xl font-bold">DigitHack</h1>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex gap-8 font-medium rounded-4xl px-8 py-3 bg-white">
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
                <Link
                  href={link.href}
                  className={`text-lg transition-colors duration-300
              hover:text-primary
              ${isActive ? "text-primary" : "text-foreground/80"}`}
                >
                  {hasDropdown ? (
                    <span className="flex gap-1 items-center">
                      {link.label}
                      <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                  ) : (
                    link.label
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {hasDropdown && (
                  <motion.div
                    variants={dropdownVariants}
                    className="
                absolute top-full left-1/2 -translate-x-1/2
                mt-3 w-56 rounded-lg bg-white
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                border border-black/5 overflow-hidden z-20
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
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
          <AnimatedButton label="Lets Talk" href="/contact" />
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="lg:hidden p-2 rounded-lg border border-gray-200"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl lg:hidden z-50"
            >
              <div className="flex flex-col px-6 py-6 gap-4">
                {NAV_LINKS.map((link) => {
                  const hasDropdown = !!link.children;

                  return (
                    <div key={link.id}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                      >
                        <button
                          onClick={() =>
                            hasDropdown
                              ? toggleMobileDropdown(link.id)
                              : setMobileOpen(false)
                          }
                          className="
                    w-full flex justify-between items-center
                    text-lg font-medium text-left
                  "
                        >
                          {link.label}
                          {hasDropdown && (
                            <ChevronDown
                              className={`transition-transform ${
                                mobileDropdown === link.id ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>
                      </Link>
                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {hasDropdown && mobileDropdown === link.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 mt-2 space-y-2"
                          >
                            {link.children!.map((child) => (
                              <Link
                                key={child.id}
                                href={child.link}
                                onClick={() => setMobileOpen(false)}
                                className="block text-sm text-gray-600"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <AnimatedButton label="Lets Talk" href="/contact" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
