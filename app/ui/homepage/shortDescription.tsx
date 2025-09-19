"use client";
import { easeInOut, motion } from "framer-motion";
export default function ShortDescription() {
  const durationInSeconds = 2;
  const delayInSeconds = 1;
  return (
    <motion.p
      className={`mt-4 md:text-lg text-clip`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: durationInSeconds,
        delay: delayInSeconds,
        ease: easeInOut,
      }}
    >
      Here is the analytics of visits on your webpage for the last three months.
    </motion.p>
  );
}
