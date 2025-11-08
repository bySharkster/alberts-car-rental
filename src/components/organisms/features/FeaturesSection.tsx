import React from "react";
import { AnimatedSection } from "@/components/templates/animations/AnimatedSection";
import SpotlightCard from "@/components/ui/spotlight-card";
import * as motion from "motion/react-client";
import RotatingText from "@/components/ui/rotating-text";
import {
  CarIcon,
  HeadsetIcon,
  MapPinnedIcon,
  ShieldAlertIcon,
} from "lucide-react";

const features = [
  {
    icon: <CarIcon className="text-2xl text-[#024f7d]" />,
    iconBg: "bg-[#024f7d]/10",
    spotlightColor: "rgba(2, 79, 125, 0.25)" as const,
    title: "Premium Fleet",
    description:
      "Choose from our extensive collection of economy, and specialty vehicles to match your needs.",
    iconColor: "#024f7d",
  },
  {
    icon: (
      <MapPinnedIcon className="fas fa-map-marker-alt text-2xl text-[#26a6fb]" />
    ),
    iconBg: "bg-[#26a6fb]/10",
    spotlightColor: "rgba(38, 166, 251, 0.25)" as const,
    title: "Flexible Pickup",
    description:
      "Convenient pickup and drop-off locations across the city, including airport service available 24/7.",
    iconColor: "#26a6fb",
  },
  {
    icon: (
      <ShieldAlertIcon className="fas fa-shield-alt text-2xl text-[#26b578]" />
    ),
    iconBg: "bg-[#26b578]/10",
    spotlightColor: "rgba(38, 181, 120, 0.25)" as const,
    title: "Full Insurance",
    description:
      "Comprehensive insurance packages for worry-free travel, with options to suit your coverage preferences.",
    iconColor: "#26b578",
  },
  {
    icon: <HeadsetIcon className="fas fa-headset text-2xl text-[#024f7d]" />,
    iconBg: "bg-[#024f7d]/10",
    spotlightColor: "rgba(2, 79, 125, 0.25)" as const,
    title: "24/7 Support",
    description:
      "Our dedicated customer service team is available around the clock to assist with any inquiries or issues.",
    iconColor: "#024f7d",
  },
];

export default function FeaturesSection() {
  return (
    <motion.section
      id="features"
      className="relative z-30 -mt-32 overflow-visible bg-[#F4EFEF] py-20 text-[#1f3045]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container relative z-20 mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-[#1f3045]">
            <RotatingText
              texts={[
                "Premium Features",
                "Flexible Pickup",
                "Full Insurance",
                "24/7 Support",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 text-[#1f3045] bg-[#] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-[#464648]">
            Experience the difference with our premium services designed for
            your comfort and convenience.
          </p>
        </motion.div>
        <AnimatedSection
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          direction="up"
          delay={0.2}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: idx === 0 ? 0.6 : 0.8, delay: idx * 0.3 }}
            >
              <SpotlightCard
                className="border border-none bg-white shadow-lg shadow-[#024f7d]/10"
                spotlightColor={feature.spotlightColor}
              >
                <div className="flex min-h-[250px] flex-col items-center justify-center p-2 md:min-h-[350px]">
                  <div
                    className={`h-16 w-16 ${feature.iconBg} mb-6 flex items-center justify-center rounded-full`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#1f3045]">
                    {feature.title}
                  </h3>
                  <p className="text-center text-[#464648]">
                    {feature.description}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </motion.section>
  );
}
