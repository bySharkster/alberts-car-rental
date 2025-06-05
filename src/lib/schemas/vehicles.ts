import { z } from "zod";

export const vehicleSchema = z.object({
  make: z.string().min(3, "Make is required"),
  model: z.string().min(3, "Model is required"),
  year: z.number().min(1900, "Year is required"),
  color: z.string().min(3, "Color is required"),
  licensePlate: z.string().min(6, "License plate is required"),
  dailyRate: z.number().min(2, "Daily rate is required"),
  category: z.enum(
    ["SEDAN", "SUV", "COUPE", "CONVERTIBLE", "WAGON", "HATCHBACK"],
    {
      required_error: "Category is required",
      invalid_type_error: "Category must be a string",
      message: "Please select a category.",
    }
  ),
  transmission: z.enum(["AUTOMATIC", "MANUAL"], {
    required_error: "Transmission is required",
    invalid_type_error: "Transmission must be a string",
    message: "Please select a transmission.",
  }),
  fuel_type: z.enum(["GASOLINE", "DIESEL", "HYBRID", "ELECTRIC"], {
    required_error: "Fuel type is required",
    invalid_type_error: "Fuel type must be a string",
    message: "Please select a fuel type.",
  }),
  features: z.array(z.string()).min(1, "Features are required"),
});

export type Vehicle = z.infer<typeof vehicleSchema>;

export const vehicleEditSchema = vehicleSchema.extend({
  id: z.number().optional(),
  status: z.enum(["AVAILABLE", "UNAVAILABLE", "PENDING"]),
});
