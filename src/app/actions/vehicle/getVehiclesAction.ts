"use server";

import prisma from "@/lib/prisma";
import { type Vehicle, type Image, VehicleStatus } from "@prisma/client";

export interface VehicleWithImages extends Vehicle {
  images: Image[];
}

export default async function getVehiclesAction() {
  const dbVehicles = await prisma.vehicle.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      images: true,
    },
    cacheStrategy: { ttl: 60 * 60, swr: 60 * 60 },
  });
  const vehicles: VehicleWithImages[] = dbVehicles.map(
    (v: VehicleWithImages) => ({
      ...v,
      images: v.images.map((i: Image) => ({
        ...i,
      })),
    })
  );

  const filterVehicles = vehicles.filter(
    (vehicle) =>
      vehicle.status !== VehicleStatus.UNAVAILABLE &&
      vehicle.status !== VehicleStatus.MAINTENANCE &&
      vehicle.status !== VehicleStatus.PENDING
  );
  return filterVehicles;
}

export async function getVehicleByIdAction(id: number) {
  const vehicle = await prisma.vehicle.findUnique({
    where: {
      id,
    },
    include: {
      images: true,
    },
    cacheStrategy: { ttl: 60 * 60, swr: 60 * 60 },
  });
  return vehicle;
}

export async function getImagesByVehicleId(vehicleId: number) {
  try {
    const images = await prisma.image.findMany({
      where: { vehicleId },
    });

    if (!images) {
      throw new Error("Failed to fetch images");
    }

    images.map((image) => {
      const imageS3Name = new URL(image.url).pathname;
      image.url = process.env.AWS_CDN_URL + imageS3Name;
    });

    return { images };
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Failed to fetch images");
  }
}
