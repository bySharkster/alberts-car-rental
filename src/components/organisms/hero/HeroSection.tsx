"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { AnimatedText } from "@/components/templates/animations/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative pt-20 min-h-dvh flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden h-dvh min-h-dvh">
        <motion.video
          src="/hero_bg.mp4"
          autoPlay
          loop
          muted
          className="h-dvh object-cover w-full"
          initial={{ scale: 1.1, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          controls={false}
        />
        <motion.div
          className="absolute inset-0 overflow-hidden h-full min-h-dvh bg-gradient-to-r from-[#1f3045]/90 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="overflow-hidden">
            <AnimatedText
              text="Keep your journey extraordinary"
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              type="words"
              delay={0.2}
            />
          </div>

          <motion.p
            className="text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A premium car rental experience based in Puerto Rico. Albert Car
            Rental provides exceptional vehicles with a common goal — making
            every journey memorable.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="bg-[#26a6fb] hover:bg-[#024f7d] text-white py-6 px-8 text-lg !rounded-button whitespace-nowrap cursor-pointer"
                asChild
              >
                <Link href="/book">Book Your Ride</Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                className="border-white text-white hover:bg-white hover:text-[#1f3045] py-6 px-8 text-lg !rounded-button whitespace-nowrap cursor-pointer"
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
