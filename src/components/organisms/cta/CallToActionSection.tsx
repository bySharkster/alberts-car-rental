import { Button } from "@/components/ui/button";

import { AnimatedSection } from "@/components/templates/animations/AnimatedSection";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <AnimatedSection direction="up" delay={0.2}>
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#024f7d] to-[#26a6fb]">
            <div className="grid items-center md:grid-cols-2">
              <div className="p-4 sm:p-12 md:p-16">
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  Ready to elevate your journey?
                </h2>
                <p className="mb-8 text-lg text-white/90">
                  Experience the difference with Albert Car Rental. Book your
                  premium vehicle today and make every mile memorable.
                </p>
                <div className="flex flex-col gap-4 lg:flex-row">
                  <Button
                    className="!rounded-button cursor-pointer whitespace-nowrap bg-white px-8 py-6 text-lg text-[#024f7d] hover:bg-gray-100"
                    asChild
                  >
                    <Link href="/book">Book Now</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="!rounded-button cursor-pointer whitespace-nowrap border-white px-8 py-6 text-lg text-white shadow-inner hover:bg-white/10 hover:shadow-sm"
                  >
                    <Link href="/offers">View Special Offers</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] md:min-h-[400px]">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxury%20car%20keys%20on%20premium%20leather%20surface%20with%20elegant%20car%20rental%20brochure%2C%20professional%20product%20photography%2C%20soft%20lighting%2C%20premium%20car%20rental%20concept%2C%20high-end%20service%20imagery%2C%20minimalist%20composition%2C%20luxury%20lifestyle&width=700&height=500&seq=16&orientation=landscape"
                  alt="Premium Car Rental Experience"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
