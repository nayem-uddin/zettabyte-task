"use client";
import { ReactNode } from "react";
import { motion, easeInOut } from "framer-motion";
export default function ChartContainer({ children }: { children: ReactNode }) {
  const durationInSeconds = 1;
  const delayInSeconds = 2;
  return (
    <motion.div
      className="h-90 md:h-100 w-full md:w-100 shadow-2xl shadow-gray-700 relative p-2 md:p-5 border border-gray-400 bg-stone-200"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: durationInSeconds,
        ease: easeInOut,
        delay: delayInSeconds,
      }}
    >
      {children}
    </motion.div>
  );
}
