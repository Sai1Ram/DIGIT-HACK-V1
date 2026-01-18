"use client";

import { motion } from "motion/react";
import NavContent from "../shared/NavContent";

export default function SecondaryNavbar() {
  return (
    <header className={`w-full z-50 border-black transition-all duration-500`}>
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={
             { y: 0, opacity: 1, transition: { duration: 0.6 } }
          }
          className="px-4"
        >
          <NavContent />
        </motion.div>
    </header>
  );
}
