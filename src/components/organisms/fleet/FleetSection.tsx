"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import type { VehicleCategory } from "@prisma/client";
import { motion } from "motion/react";
import Link from "next/link";
import type { VehicleWithImages } from "@/app/actions/vehicle/getVehiclesAction";

type FleetProps = {
  vehicles: VehicleWithImages[];
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
    // biome-ignore lint/correctness/useUniqueElementIds: Primary Section should have unique id
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
                      <span className="text-lg font-medium">{category}</span>
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
                    {category}
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
                              src={
                                vehicle.images.find((img) => img.position === 1)?.url || "/images/car-placeholder.png"
                              }
                              alt={`${vehicle.make} ${vehicle.model}`}
                              width={600}
                              height={400}
                              unoptimized={vehicle.images.find((img) => img.position === 1)?.url?.includes(
                                "cloudfront.net"
                              )}
                            />
                          </div>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4 gap-2">
                              <div>
                                <div className="flex items-start md:items-center flex-col-reverse md:flex-row justify-between gap-2 w-full min-w-[280px] lg:min-w-[260px] xl:min-w-[320px]">
                                  <h3 className="text-xl font-bold text-[#1f3045]">
                                    {vehicle.make} {vehicle.model}
                                  </h3>
                                  <p className="text-[#26b578] font-bold">
                                    ${vehicle.dailyRate.toFixed(2)}/day
                                  </p>
                                </div>
                                <p className="text-[#464648]">
                                  {vehicle.category.toLowerCase()}
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
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="w-full bg-[#024f7d] hover:bg-[#026bad] text-white !rounded-button whitespace-nowrap cursor-pointer"
                              asChild
                            >
                              <Link href={`/book?id=${vehicle.id}`}>
                                Book Now
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
}
