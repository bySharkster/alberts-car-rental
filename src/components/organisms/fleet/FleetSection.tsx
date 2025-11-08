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
import type { VehicleCategory } from "../../../../prisma/generated/client";
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
      setActiveTab(categories[selectedIndex] || "SEDAN");
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
    <section id="fleet" className="py-20" ref={sectionRef}>
      <motion.div className="container mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 flex items-center justify-center gap-2 text-3xl font-bold text-[#1f3045] md:text-4xl"
          >
            Our Premium Fleet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-3xl text-[#464648]"
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
            className="mx-auto w-full max-w-sm"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categories.map((category) => (
                <CarouselItem
                  key={category}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Button
                      variant="outline"
                      className={`flex h-full w-full items-center justify-center rounded-lg p-6 hover:bg-[#024f7d]/90 hover:text-white ${
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
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2" />
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
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {vehicles.filter((v) => v.category === category).length ===
                  0 ? (
                    <div className="col-span-full py-8 text-center text-gray-400">
                      No vehicles available in this category.
                    </div>
                  ) : (
                    vehicles
                      .filter((v) => v.category === category)
                      .map((vehicle) => (
                        <Card
                          key={vehicle.id}
                          className="overflow-hidden border-none shadow-md transition-shadow hover:shadow-lg"
                        >
                          <div className="h-64 overflow-hidden">
                            <Image
                              src={
                                vehicle.images.find((img) => img.position === 1)
                                  ?.url || "/images/car-placeholder.png"
                              }
                              alt={`${vehicle.make} ${vehicle.model}`}
                              width={600}
                              height={400}
                              unoptimized={Boolean(
                                vehicle.images
                                  .find((img) => img.position === 1)
                                  ?.url?.includes("cloudfront.net")
                              )}
                            />
                          </div>
                          <CardContent className="p-6">
                            <div className="mb-4 flex items-start justify-between gap-2">
                              <div>
                                <div className="flex w-full min-w-[280px] flex-col-reverse items-start justify-between gap-2 md:flex-row md:items-center lg:min-w-[260px] xl:min-w-[320px]">
                                  <h3 className="text-xl font-bold text-[#1f3045]">
                                    {vehicle.make} {vehicle.model}
                                  </h3>
                                  <p className="font-bold text-[#26b578]">
                                    ${vehicle.dailyRate.toFixed(2)}/day
                                  </p>
                                </div>
                                <p className="text-[#464648]">
                                  {vehicle.category.toLowerCase()}
                                </p>
                              </div>
                              {/* <span className="text-[#26b578] font-bold">$199/day</span> */}
                            </div>
                            <div className="mb-6 flex flex-wrap gap-3">
                              {vehicle.features?.map((feature) => (
                                <span
                                  key={feature}
                                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-[#464648]"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="!rounded-button w-full cursor-pointer whitespace-nowrap bg-[#024f7d] text-white hover:bg-[#026bad]"
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
