"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useInView } from "motion/react";
import type { UseEmblaCarouselType } from "embla-carousel-react";
import type { Vehicle, VehicleCategory } from "@prisma/client";
import { motion } from "motion/react";
import Link from "next/link";

type FleetProps = {
  vehicles: Vehicle[];
};

const VEHICLE_CATEGORY_LABELS: Record<string, string> = {
  LUXURY: "Luxury",
  SUV: "SUV",
  ECONOMY: "Economy",
  ELECTRIC: "Electric",
};

export default function FleetSection({ vehicles }: FleetProps) {
  // Dynamically extract categories from vehicles
  const categories = Array.from(
    new Set(vehicles.map((v) => v.category))
  ).filter(Boolean);

  // Default to first category if present
  const [activeTab, setActiveTab] = useState(categories[0] || "LUXURY");
  const [carouselApi, setCarouselApi] =
    useState<UseEmblaCarouselType[1]>(undefined);

  // When a tab is clicked, update both the active tab state and the carousel position
  const handleTabChange = (value: string) => {
    setActiveTab(value as VehicleCategory);
    const newIndex = categories.findIndex((cat) => cat === value);
    if (carouselApi) {
      carouselApi.scrollTo(newIndex);
    }
  };

  // When carousel scrolls, update the active tab state
  useEffect(() => {
    if (!carouselApi) return;

    const onSelect = () => {
      const selectedIndex = carouselApi.selectedScrollSnap();
      setActiveTab(categories[selectedIndex]);
    };

    carouselApi.on("select", onSelect);

    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi, categories]);

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: true });

  return (
    <section id="fleet" className="py-20 " ref={sectionRef}>
      <motion.div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#1f3045] mb-4 flex items-center justify-center gap-2"
          >
            Our Premium Fleet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#464648] max-w-3xl mx-auto"
          >
            Discover a fleet crafted for comfort, style, and reliability—ready
            for every adventure, daily drive, or special occasion. Find your
            ideal ride and hit the road with confidence!
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mb-8 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full max-w-sm mx-auto "
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categories.map((category) => (
                <CarouselItem
                  key={category}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Button
                      variant="outline"
                      className={`h-full w-full flex items-center justify-center rounded-lg p-6 hover:bg-[#024f7d]/90 hover:text-white   ${
                        activeTab === category
                          ? "bg-[#024f7d] text-white"
                          : "bg-gray-100 text-[#1f3045]"
                      }`}
                      onClick={() => handleTabChange(category)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleTabChange(category);
                        }
                      }}
                      tabIndex={0}
                    >
                      <span className="text-lg font-medium">
                        {VEHICLE_CATEGORY_LABELS[category] || category}
                      </span>
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full" />
          </Carousel>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <div className="hidden">
              <TabsList>
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {VEHICLE_CATEGORY_LABELS[category] || category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {vehicles.filter((v) => v.category === category).length ===
                  0 ? (
                    <div className="col-span-full text-center text-gray-400 py-8">
                      No vehicles available in this category.
                    </div>
                  ) : (
                    vehicles
                      .filter((v) => v.category === category)
                      .map((vehicle) => (
                        <Card
                          key={vehicle.id}
                          className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="h-64 overflow-hidden">
                            <Image
                              src={vehicle.image || "/car-placeholder.png"}
                              alt={`${vehicle.make} ${vehicle.model}`}
                              width={600}
                              height={400}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-xl font-bold text-[#1f3045]">
                                  {vehicle.make} {vehicle.model}
                                </h3>
                                <p className="text-[#464648]">
                                  {VEHICLE_CATEGORY_LABELS[vehicle.category] ||
                                    vehicle.category}
                                </p>
                              </div>
                              {/* <span className="text-[#26b578] font-bold">$199/day</span> */}
                            </div>
                            <div className="flex flex-wrap gap-3 mb-6">
                              {vehicle.features?.map((feature) => (
                                <span
                                  key={feature}
                                  className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                            <Button
                              className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer"
                              asChild
                            >
                              <Link href={`/book?id=${vehicle.id}`}>
                                Book Now
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))
                  )}
                </div>
              </TabsContent>
            ))}

            <TabsContent value="suv" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* SUV 1 */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Luxury%20SUV%2C%20Range%20Rover%20or%20BMW%20X7%2C%20three-quarter%20view%2C%20parked%20in%20mountain%20terrain%2C%20professional%20automotive%20photography%2C%20clean%20minimal%20background%2C%20adventure%20setting%2C%20premium%20finish%2C%20detailed%20exterior%20shot&width=600&height=400&seq=5&orientation=landscape"
                      alt="Luxury SUV"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f3045]">
                          Premium SUV
                        </h3>
                        <p className="text-[#464648]">Range Rover</p>
                      </div>
                      <span className="text-[#26b578] font-bold">$229/day</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        7 Seats
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        4WD
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Panoramic Roof
                      </span>
                    </div>
                    <Button className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                {/* SUV 2 */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Mid-size%20SUV%2C%20Audi%20Q5%20or%20Mercedes%20GLC%2C%20side%20view%2C%20parked%20in%20urban%20setting%2C%20professional%20automotive%20photography%2C%20clean%20minimal%20background%2C%20city%20environment%2C%20premium%20finish%2C%20detailed%20exterior%20shot&width=600&height=400&seq=6&orientation=landscape"
                      alt="Mid-size SUV"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f3045]">
                          Mid-size SUV
                        </h3>
                        <p className="text-[#464648]">Audi Q5</p>
                      </div>
                      <span className="text-[#26b578] font-bold">$179/day</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        5 Seats
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        AWD
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Navigation
                      </span>
                    </div>
                    <Button className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                {/* SUV 3 */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Compact%20SUV%2C%20BMW%20X3%20or%20Volvo%20XC60%2C%20front%20view%2C%20parked%20in%20forest%20setting%2C%20professional%20automotive%20photography%2C%20clean%20minimal%20background%2C%20nature%20environment%2C%20premium%20finish%2C%20detailed%20exterior%20shot&width=600&height=400&seq=7&orientation=landscape"
                      alt="Compact SUV"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f3045]">
                          Compact SUV
                        </h3>
                        <p className="text-[#464648]">BMW X3</p>
                      </div>
                      <span className="text-[#26b578] font-bold">$159/day</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        5 Seats
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        AWD
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Fuel Efficient
                      </span>
                    </div>
                    <Button className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="economy" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Economy Car 1 */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Compact%20economy%20car%2C%20Toyota%20Corolla%20or%20Honda%20Civic%2C%20three-quarter%20view%2C%20parked%20in%20urban%20setting%2C%20professional%20automotive%20photography%2C%20clean%20minimal%20background%2C%20city%20environment%2C%20detailed%20exterior%20shot&width=600&height=400&seq=8&orientation=landscape"
                      alt="Compact Car"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f3045]">
                          Compact Car
                        </h3>
                        <p className="text-[#464648]">Toyota Corolla</p>
                      </div>
                      <span className="text-[#26b578] font-bold">$79/day</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        5 Seats
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Automatic
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Fuel Efficient
                      </span>
                    </div>
                    <Button className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Economy Car 2 */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Subcompact%20economy%20car%2C%20Hyundai%20Accent%20or%20Kia%20Rio%2C%20side%20view%2C%20parked%20in%20suburban%20setting%2C%20professional%20automotive%20photography%2C%20clean%20minimal%20background%2C%20residential%20environment%2C%20detailed%20exterior%20shot&width=600&height=400&seq=9&orientation=landscape"
                      alt="Subcompact Car"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f3045]">
                          Subcompact Car
                        </h3>
                        <p className="text-[#464648]">Hyundai Accent</p>
                      </div>
                      <span className="text-[#26b578] font-bold">$59/day</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        5 Seats
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Manual
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Bluetooth
                      </span>
                    </div>
                    <Button className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Economy Car 3 */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Economy%20hatchback%2C%20Volkswagen%20Golf%20or%20Ford%20Focus%2C%20front%20view%2C%20parked%20in%20urban%20setting%2C%20professional%20automotive%20photography%2C%20clean%20minimal%20background%2C%20city%20environment%2C%20detailed%20exterior%20shot&width=600&height=400&seq=10&orientation=landscape"
                      alt="Hatchback"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f3045]">
                          Hatchback
                        </h3>
                        <p className="text-[#464648]">Volkswagen Golf</p>
                      </div>
                      <span className="text-[#26b578] font-bold">$89/day</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        5 Seats
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Manual
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Spacious
                      </span>
                    </div>
                    <Button className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="electric" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Electric Car 1 */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Electric%20luxury%20sedan%2C%20Tesla%20Model%20S%20or%20Lucid%20Air%2C%20three-quarter%20view%2C%20parked%20near%20charging%20station%2C%20professional%20automotive%20photography%2C%20clean%20minimal%20background%2C%20modern%20environment%2C%20premium%20finish%2C%20detailed%20exterior%20shot&width=600&height=400&seq=11&orientation=landscape"
                      alt="Electric Sedan"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f3045]">
                          Electric Sedan
                        </h3>
                        <p className="text-[#464648]">Tesla Model S</p>
                      </div>
                      <span className="text-[#26b578] font-bold">$189/day</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        5 Seats
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        400mi Range
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Autopilot
                      </span>
                    </div>
                    <Button className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Electric Car 2 */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Electric%20SUV%2C%20Tesla%20Model%20Y%20or%20Audi%20e-tron%2C%20front%20view%2C%20parked%20in%20modern%20urban%20setting%2C%20professional%20automotive%20photography%2C%20clean%20minimal%20background%2C%20city%20environment%2C%20premium%20finish%2C%20detailed%20exterior%20shot&width=600&height=400&seq=12&orientation=landscape"
                      alt="Electric SUV"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f3045]">
                          Electric SUV
                        </h3>
                        <p className="text-[#464648]">Tesla Model Y</p>
                      </div>
                      <span className="text-[#26b578] font-bold">$199/day</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        7 Seats
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        330mi Range
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        AWD
                      </span>
                    </div>
                    <Button className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>

                {/* Electric Car 3 */}
                <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-64 overflow-hidden">
                    <img
                      src="https://readdy.ai/api/search-image?query=Compact%20electric%20car%2C%20Nissan%20Leaf%20or%20Chevrolet%20Bolt%2C%20side%20view%2C%20parked%20in%20urban%20setting%20with%20charging%20station%2C%20professional%20automotive%20photography%2C%20clean%20minimal%20background%2C%20city%20environment%2C%20detailed%20exterior%20shot&width=600&height=400&seq=13&orientation=landscape"
                      alt="Compact Electric"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#1f3045]">
                          Compact Electric
                        </h3>
                        <p className="text-[#464648]">Nissan Leaf</p>
                      </div>
                      <span className="text-[#26b578] font-bold">$99/day</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        5 Seats
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        150mi Range
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-[#464648] text-sm rounded-full">
                        Eco-friendly
                      </span>
                    </div>
                    <Button className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer">
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
}
