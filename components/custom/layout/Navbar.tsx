"use client";

import { usePathname } from "next/navigation";
import useScrollDirection from "@/hooks/useScrollDirection";
import useHeroInView from "@/hooks/useHeroInView";
import { motion } from "motion/react";
import NavContent from "../shared/NavContent";
import SecondaryNavbar from "./SecondaryNavbar";


export default function Navbar() {
  const direction = useScrollDirection();
  const pathname = usePathname();
  const inHero = useHeroInView(450);
  const showNavbar = direction === "up" && !inHero;
  return (
    <>
    <header
      className={`fixed top-0 left-0 w-full z-50 border-black  ${
        showNavbar ? "visible" : "hidden"
      } transition-all duration-500`}
    >
        <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={showNavbar ? { y: 0, opacity: 1, transition: { duration: 0.6 } } : {}}
        className="px-4">
          <NavContent />
        </motion.div>
    </header>
    {
      pathname !== "/" && <SecondaryNavbar />
    }
    </>
  );
}
