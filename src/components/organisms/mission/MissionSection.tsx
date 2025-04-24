"use client";
import { AnimatedSection } from "@/components/templates/animations/AnimatedSection";
import { motion } from "motion/react";

export default function MissionSection() {
  return (
    <AnimatedSection direction="left" delay={0.2} className="relative overflow-hidden rounded-xl min-h-96 group">
      <motion.img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20discussing%20automotive%20rental%20strategy%20in%20modern%20office%2C%20diverse%20group%20of%20executives%20reviewing%20documents%2C%20contemporary%20workspace%20with%20glass%20walls%2C%20business%20meeting%20about%20car%20rental%20company%20mission%2C%20professional%20corporate%20environment&width=700&height=500&seq=14&orientation=landscape" 
                alt="Our Mission" 
                className="w-full h-full object-cover object-top rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:blur-sm group-hover:opacity-80 "
                       
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f3045]/90 via-[#1f3045]/50 to-transparent"/>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-white/90 ">To provide exceptional car rental experiences that exceed customer expectations through premium vehicles, personalized service, and innovative solutions that make every journey memorable.</p>
              </div>
      </AnimatedSection>
  );
}
