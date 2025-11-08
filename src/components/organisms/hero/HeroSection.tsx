"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { AnimatedText } from "@/components/templates/animations/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden pt-20">
      <div className="absolute inset-0 h-dvh min-h-dvh overflow-hidden">
        <motion.video
          src="/hero_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-dvh w-full object-cover"
          initial={{ scale: 1.1, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          controls={false}
        />
        <motion.div
          className="absolute inset-0 h-full min-h-dvh overflow-hidden bg-gradient-to-r from-[#1f3045]/90 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="overflow-hidden">
            <AnimatedText
              text="Keep your journey extraordinary"
              className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
              type="words"
              delay={0.2}
            />
          </div>

          <motion.p
            className="mb-8 text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A premium car rental experience based in Puerto Rico. Albert Car
            Rental provides exceptional vehicles with a common goal — making
            every journey memorable.
          </motion.p>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="!rounded-button cursor-pointer whitespace-nowrap bg-[#26a6fb] px-8 py-6 text-lg text-white hover:bg-[#024f7d]"
                asChild
              >
                <Link href="/book">Book Your Ride</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                className="!rounded-button cursor-pointer whitespace-nowrap border-white px-8 py-6 text-lg text-white hover:bg-white hover:text-[#1f3045]"
                asChild
              >
                <Link href="#fleet">Explore Our Fleet</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
