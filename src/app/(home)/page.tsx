import HeroSection from "@/components/organisms/hero/HeroSection";
import MissionSection from "@/components/organisms/mission/MissionSection";
import VisionSection from "@/components/organisms/vision/VisionSection";
import FaqSection from "@/components/organisms/faq/FaqSection";
import FleetSection from "@/components/organisms/fleet/FleetSection";
import FeaturesSection from "@/components/organisms/features/FeaturesSection";
import getVehiclesAction, {
  getImagesByVehicleId,
} from "../actions/vehicle/getVehiclesAction";

export default async function Home() {
  const vehicles = await getVehiclesAction();
  const vehicleImages = await Promise.all(
    vehicles.map((vehicle) => getImagesByVehicleId(vehicle.id))
  );

  const vehiclesWithImages = vehicles.map((vehicle, index) => ({
    ...vehicle,
    images: vehicleImages[index]?.images || [],
  }));

  return (
    <main className="min-h-screen bg-[#F4EFEF]">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}

      <FeaturesSection />

      {/* Fleet Section */}
      <FleetSection vehicles={vehiclesWithImages} />

      {/* Mission & Vision Section */}
      {/** biome-ignore lint/correctness/useUniqueElementIds: false positive */}
      <section id="about" className="bg-[#1f3045] py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 space-y-px md:grid-cols-2 md:space-x-4 md:space-y-0">
            <MissionSection />
            <VisionSection />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
      {/* CTA Section */}
      {/* <CallToActionSection /> */}
    </main>
  );
}
