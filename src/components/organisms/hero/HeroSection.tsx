"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react"; // corrected import
import { AnimatedText, ParallaxSection } from "@/components/templates/animations/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative pt-20 min-h-[700px] flex items-center overflow-hidden">

<div className="absolute inset-0 overflow-hidden h-full min-h-[700px]">
<motion.img 
            src="https://readdy.ai/api/search-image?query=Luxury%20car%20on%20a%20coastal%20road%2C%20sleek%20modern%20premium%20vehicle%20driving%20along%20scenic%20route%2C%20dramatic%20lighting%2C%20professional%20automotive%20photography%2C%20high-end%20car%20rental%20advertisement%2C%20cinematic%20wide%20shot%2C%20beautiful%20landscape%20background%2C%20golden%20hour%20lighting%2C%20clean%20minimal%20aesthetic&width=1440&height=800&seq=1&orientation=landscape" 
            alt="Premium car rental experience" 
            className="w-full h-full object-cover object-top"
            initial={{ scale: 1.1, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-0 overflow-hidden h-full min-h-[700px]  bg-gradient-to-r from-[#1f3045]/90 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <motion.div 
        className="max-w-2xl text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="overflow-hidden">
          <AnimatedText 
            text="Keep your journey extraordinary" 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            type="words"
            delay={0.5}
          />
        </div>
        
        <motion.p 
          className="text-xl mb-8 text-white/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          A premium car rental experience based in Puerto Rico. Albert Car Rental provides exceptional vehicles with a common goal — making every journey memorable.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-[#26a6fb] hover:bg-[#024f7d] text-white py-6 px-8 text-lg !rounded-button whitespace-nowrap cursor-pointer" asChild>
              <Link href="/book">
                Book Your Ride
              </Link>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button variant="ghost" className="border-white text-white hover:bg-white hover:text-[#1f3045] py-6 px-8 text-lg !rounded-button whitespace-nowrap cursor-pointer" asChild>
              <Link href="#fleet">
                Explore Our Fleet
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
)
}
