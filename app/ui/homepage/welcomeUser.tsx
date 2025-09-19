"use client";
import { easeInOut, motion } from "framer-motion";
import { robotoSlab } from "../fonts";
export default function WelcomeUser() {
  const durationInSeconds = 1;
  return (
    <motion.h1
      className={`text-3xl md:text-4xl ${robotoSlab.className}`}
      initial={{ translateX: "5%", opacity: 0 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{
        duration: durationInSeconds,
        ease: easeInOut,
      }}
    >
      Welcome, user!
    </motion.h1>
  );
}
