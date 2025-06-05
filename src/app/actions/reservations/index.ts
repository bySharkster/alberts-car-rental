"use server";

import { getVehicleBlockedDates } from "@/lib/services/reservation";
import { getVehicleByIdAction } from "../vehicle/getVehiclesAction";
import prisma from "@/lib/prisma";
import {
  CreateDraftReservationSchema,
  createDraftReservationSchema,
} from "@/lib/schemas/reservation";

export async function getVehicleBlockedDatesAction(
  vehicleId: number,
  startDate: Date,
  endDate: Date
) {
  const vehicleIdNumber = Number(vehicleId);
  try {
    const response = await getVehicleBlockedDates(
      vehicleIdNumber,
      startDate,
      endDate
    );
    return response;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createDraftReservationAction(
  data: CreateDraftReservationSchema
) {
  try {
    const parsedData = createDraftReservationSchema.safeParse(data);
    if (!parsedData.success) {
      return { error: parsedData.error.flatten().fieldErrors };
    }

    const vehicle = await getVehicleByIdAction(
      Number(parsedData.data.vehicleId)
    );
    if (!vehicle) {
      return { error: "Vehicle not found" };
    }

    const reservation = await prisma.$transaction([
      prisma.draftReservation.create({
        data: {
          name: parsedData.data.name,
          email: parsedData.data.email,
          phone: parsedData.data.phone,
          pickupDate: parsedData.data.pickupDate,
          dropoffDate: parsedData.data.dropoffDate,
          message: parsedData.data.message,
          vehicleId: vehicle.id,
          pickupLocation: parsedData.data.pickupLocation,
          dropoffLocation: parsedData.data.dropoffLocation,
          pickupHour: parsedData.data.pickupHour,
          dropoffHour: parsedData.data.dropoffHour,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      }),
    ]);

    console.log("Reservation created:", reservation);

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
