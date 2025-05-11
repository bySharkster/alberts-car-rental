"use server";

import prisma from "@/lib/prisma";
import type { Vehicle } from "@prisma/client";

export default async function getVehiclesAction() {
  const dbVehicles = await prisma.vehicle.findMany({
    orderBy: {
      createdAt: "desc",
    },
    cacheStrategy: { ttl: 60 * 60 * 24 },
  });
  const vehicles: Vehicle[] = dbVehicles.map((v: Vehicle) => ({
    ...v,
  }));
  return vehicles;
}
