"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SpotlightCard from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Vehicle } from "@prisma/client";
import { WhatsAppIcon } from "@/components/ui/whats-app-icon";
import {
  ArrowDownRightFromSquareIcon,
  ArrowUpRightFromSquare,
  Loader2Icon,
} from "lucide-react";
import Link from "next/link";
import { VehicleWithImages } from "@/app/actions/vehicle/getVehiclesAction";

interface FleetProps {
  vehicles: VehicleWithImages[];
}

export default function Fleet({ vehicles }: FleetProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h2 className="mb-10 text-center text-4xl font-bold">Our Fleet</h2>
      {loading ? (
        <div className="flex flex-col items-center justify-center py-12 text-lg">
          <Loader2Icon className="mr-2 animate-spin" />
          Loading vehicles...
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {vehicles.map((vehicle, idx) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <SpotlightCard className="border border-none bg-white shadow-lg shadow-[#024f7d]/10">
                  <div className="flex flex-col gap-4 p-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src={
                          vehicle.images?.[0]?.url ||
                          "/images/car-placeholder.png"
                        }
                        alt={`${vehicle.make} ${vehicle.model}`}
                        width={112}
                        height={80}
                        className="h-20 w-28 rounded-xl border object-cover"
                      />
                      <div>
                        <div className="text-lg font-bold">
                          {vehicle.make} {vehicle.model} {vehicle.year}
                        </div>

                        <div className="text-sm text-gray-500">
                          {vehicle.category}
                        </div>
                      </div>
                    </div>
                    <ul className="mt-2 flex flex-wrap gap-2 text-xs text-gray-700">
                      {Array.isArray(vehicle.features) &&
                        (vehicle.features as string[]).map((f) => (
                          <li
                            key={f}
                            className="rounded border border-gray-200 bg-gray-100 px-2 py-1"
                          >
                            {f}
                          </li>
                        ))}
                      {typeof vehicle.features === "string" &&
                        (vehicle.features as string).split(",").map((f) => (
                          <li
                            key={f}
                            className="rounded border border-gray-200 bg-gray-100 px-2 py-1"
                          >
                            {f.trim()}
                          </li>
                        ))}
                    </ul>
                    <div className="flex flex-col justify-end gap-2 lg:flex-row">
                      <p className="font-bold text-[#26b578]">
                        ${vehicle.dailyRate.toFixed(2)}/day
                      </p>
                      <Button variant="default" size="lg">
                        <Link
                          href={`/book/?id=${vehicle.id}`}
                          className="flex items-center gap-2"
                        >
                          <span>Book Now</span>
                          <span className="ml-2">
                            <ArrowUpRightFromSquare />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
