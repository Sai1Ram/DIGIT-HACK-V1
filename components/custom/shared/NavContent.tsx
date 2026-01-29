"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, easeInOut } from "motion/react";
import AnimatedButton from "../ui/AnimatedBtn";
import { NAV_LINKS} from "@/lib/DB/ui/NavMapper";

/* ------------------ VARIANTS ------------------ */

const dropdownVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: easeInOut },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: easeInOut },
  },
};

/* ------------------ COMPONENT ------------------ */

export default function NavContent() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <div className="relative w-full bg-white rounded-b-xl shadow">
      {/* TOP BAR */}
      <div className="h-20 flex justify-between items-center px-4">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-2xl font-bold">DigitHack</h1>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex gap-8 font-medium rounded-4xl px-8 py-3">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            const hasDropdown = !!link.children;

            return (
              <motion.div
                key={link.id}
                className="relative"
                initial="hidden"
                whileHover="visible"
                animate="hidden"
              >
                {/* MAIN LINK */}
                <Link
                  href={link.href}
                  className={`text-xl transition-colors duration-300
                    hover:text-primary
                    ${isActive ? "text-primary" : "text-foreground/80"}`}
                >
                  {hasDropdown ? (
                    <span className="flex gap-1 items-center">
                      {link.label}
                      <ChevronDown className="mt-1 transition-transform duration-300 group-hover:rotate-180" />
                    </span>
                  ) : (
                    link.label
                  )}
                </Link>

                {/* DESKTOP DROPDOWN */}
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
                          <span>{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
        <div className="hidden lg:block">
          <AnimatedButton label="Lets Talk" href="/contact" />
        </div>
        {/* HAMBURGER (MOBILE) */}
        <button className="lg:hidden" onClick={() => setMobileOpen((p) => !p)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <motion.div
        initial="hidden"
        animate={mobileOpen ? "visible" : "hidden"}
        variants={mobileMenuVariants}
        className="lg:hidden overflow-hidden bg-white border-t"
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map((link) => {
            const hasDropdown = !!link.children;
            const isOpen = openDropdown === link.id;

            return (
              <div key={link.id}>
                {/* MAIN MOBILE LINK */}
                <div
                  className="flex justify-between items-center text-lg font-medium"
                  onClick={() => {
                    if (hasDropdown) {
                      setOpenDropdown(isOpen ? null : link.id);
                    } else {
                      setMobileOpen(false);
                    }
                  }}
                >
                  <Link href={link.href}>{link.label}</Link>

                  {hasDropdown && (
                    <ChevronDown
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* MOBILE DROPDOWN */}
                {hasDropdown && (
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    className="overflow-hidden ml-4 mt-2 flex flex-col gap-2"
                  >
                    {link.children!.map((child) => (
                      <Link
                        key={child.id}
                        href={child.link}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <child.icon className="w-4 h-4" />
                        {child.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            );
          })}

          <AnimatedButton label="Lets Talk" href="/contact" />
        </div>
      </motion.div>
    </div>
  );
}
