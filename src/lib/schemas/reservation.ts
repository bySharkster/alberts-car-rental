import { z } from "zod";

export const createDraftReservationSchema = z
  .object({
    pickupDate: z.string(),
    dropoffDate: z.string(),
    vehicleId: z.number().min(1, "Vehicle is required"),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(7, "Phone is required"),
    message: z.string().min(1, "Message is required"),
    pickupLocation: z.string().min(3, "Pickup location is required"),
    dropoffLocation: z.string().min(3, "Dropoff location is required"),
    pickupHour: z.string().min(2, "Pickup hour is required"),
    dropoffHour: z.string().min(2, "Dropoff hour is required"),
  })
  .refine((data) => data.pickupDate < data.dropoffDate, {
    message: "Pickup date must be before dropoff date",
    path: ["dropoffDate"],
  });

export type CreateDraftReservationSchema = z.infer<
  typeof createDraftReservationSchema
>;
