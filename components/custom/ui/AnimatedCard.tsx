"use client";

import { motion, easeInOut } from "motion/react";

const iconVariants = {
  rest: {
    scaleX: 1,
    scaleY: 1,
  },
  hover: {
    scaleX: [1, 0.7, 1.1, 0.95, 1],
    scaleY: [1, 1.1, 0.7, 1.05, 1],
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

interface AnimatedCardProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function AnimatedCard({
  icon,
  children,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="rounded-xl bg-white group p-4 space-y-4
                 hover:bg-primary hover:text-white transition-colors duration-1000 flex flex-col justify-between w-full"
    >
      {/* Icon slot */}
      <motion.div
        variants={iconVariants}
        className="size-20 text-primary group-hover:text-white"
      >
        {icon}
      </motion.div>

      {/* Content slot */}
      <div className="space-y-2">
        {children}
      </div>
    </motion.div>
  );
}
