import "server-only";

import prisma from "../prisma";

import { eachDayOfInterval } from "date-fns";

/**
 * Returns all blocked dates (due to reservations or maintenance) for a vehicle in a date range.
 * @param vehicleId The vehicle to check.
 * @param from Start of the date range (inclusive).
 * @param to End of the date range (inclusive).
 * @returns Array of blocked Date objects.
 */
export async function getVehicleBlockedDates(
  vehicleId: number,
  from: Date,
  to: Date
) {
  const vehicle = await prisma.vehicle.findUnique({
    where: { id: vehicleId },
    select: { status: true },
  });

  let blockedDates: Date[] = [];

  if (!vehicle || vehicle.status !== "AVAILABLE") {
    blockedDates = eachDayOfInterval({ start: from, end: to });
    return blockedDates;
  }

  const reservations = await prisma.reservation.findMany({
    where: {
      vehicleId,
      status: { in: ["CONFIRMED", "ACTIVE", "PENDING"] },
      pickupDate: { lte: to },
      dropoffDate: { gte: from },
    },
    select: { pickupDate: true, dropoffDate: true },
  });

  const maintenanceBlocks = await prisma.maintenanceBlock.findMany({
    where: {
      vehicleId,
      startDate: { lte: to },
      endDate: { gte: from },
    },
    select: { startDate: true, endDate: true },
  });

  for (const { pickupDate, dropoffDate } of reservations) {
    blockedDates = blockedDates.concat(
      eachDayOfInterval({
        start: new Date(pickupDate),
        end: new Date(dropoffDate),
      })
    );
  }
  for (const { startDate, endDate } of maintenanceBlocks) {
    blockedDates = blockedDates.concat(
      eachDayOfInterval({ start: new Date(startDate), end: new Date(endDate) })
    );
  }

  blockedDates = Array.from(
    new Set(blockedDates.map((d) => d.toDateString()))
  ).map((s) => new Date(s));
  return blockedDates;
}
