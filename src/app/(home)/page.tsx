import HeroSection from "@/components/organisms/hero/HeroSection";
import MissionSection from "@/components/organisms/mission/MissionSection";
import VisionSection from "@/components/organisms/vision/VisionSection";
import FaqSection from "@/components/organisms/faq/FaqSection";
import prisma from "@/lib/prisma";
import type { Vehicle } from "@prisma/client";
import FleetSection from "@/components/organisms/fleet/FleetSection";
import FeaturesSection from "@/components/organisms/features/FeaturesSection";
import CallToActionSection from "@/components/organisms/cta/CallToActionSection";
import { ParallaxSection } from "@/components/templates/animations/AnimatedSection";

export default async function Home() {
  const dbVehicles = await prisma.vehicle.findMany();
  const vehicles: Vehicle[] = dbVehicles.map((v: Vehicle) => ({
    ...v,
  }));
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
        <HeroSection />

      {/* Features Section */}    

      <FeaturesSection/>     

      {/* Fleet Section */}
        <FleetSection vehicles={vehicles} />

      {/* Mission & Vision Section */}
      <section id="about" className="py-20 bg-[#1f3045] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <MissionSection />
            <VisionSection />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
        <FaqSection />
      {/* CTA Section */}
        <CallToActionSection />

    </main>
  );
}
