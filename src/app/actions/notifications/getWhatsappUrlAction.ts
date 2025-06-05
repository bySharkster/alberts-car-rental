"use server";
import { z } from "zod";
import { getVehicleByIdAction } from "../vehicle/getVehiclesAction";
import notifyAdminAction from "./notifyAdminAction";
import { createDraftReservationAction } from "../reservations";
import { CreateDraftReservationSchema } from "@/lib/schemas/reservation";
import { formatDateTime } from "@/lib/utils";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone is required"),
  interestCar: z.string().min(1, "Car selection is required"),
  message: z.string().min(1, "Message is required"),
  from: z.string().min(1, "From date is required"),
  to: z.string().min(1, "To date is required"),
  pickupHour: z.string().min(1, "Pickup hour is required"),
  dropoffHour: z.string().min(1, "Dropoff hour is required"),
  pickupLocation: z.string().min(1, "Pickup location is required"),
  dropoffLocation: z.string().min(1, "Dropoff location is required"),
});

export async function getWhatsAppUrl(
  formData: FormData
): Promise<{ url?: string; errors?: Record<string, string> }> {
  try {
    const website = formData.get("website") as string;
    if (website && website.length > 0) {
      // This is likely a bot submission, don't process it or notify admin
      return { errors: { website: "Website is required" } };
    }
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      interestCar: formData.get("interestCar") as string,
      from: formData.get("pickupDate") as string,
      to: formData.get("dropoffDate") as string,
      pickupHour: formData.get("pickupHour") as string,
      dropoffHour: formData.get("dropoffHour") as string,
      pickupLocation: formData.get("pickupLocation") as string,
      dropoffLocation: formData.get("dropoffLocation") as string,

      message: formData.get("message") as string,
    };

    data.phone = data.phone.replace(/[^0-9]/g, "");

    const validatedData = bookingSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        errors: Object.fromEntries(
          Object.entries(validatedData.error.flatten().fieldErrors)
            .filter(([_, v]) => v && v.length > 0)
            .map(([k, v]) => [k, v[0]])
        ),
      };
    }

    const vehicle = await getVehicleByIdAction(Number(data.interestCar));
    if (!vehicle) {
      return {
        errors: {
          interestCar: "Vehicle not found",
        },
      };
    }

    const {
      name,
      email,
      phone,
      from,
      to,
      message,
      pickupHour,
      dropoffHour,
      pickupLocation,
      dropoffLocation,
    } = validatedData.data;

    const formattedPhone = phone.replace(/[^0-9]/g, "");
    const formattedFrom = formatDateTime(from);
    const formattedTo = formatDateTime(to);

    // create a draft reservation
    const draftReservationData: CreateDraftReservationSchema = {
      name,
      email,
      phone,
      message,
      pickupDate: formattedFrom,
      dropoffDate: formattedTo,
      vehicleId: vehicle.id,
      pickupLocation,
      dropoffLocation,
      pickupHour,
      dropoffHour,
    };

    // Notify admin (email and push) before reservation creation
    await notifyAdminAction(validatedData.data);

    // Create draft reservation
    // Helper to flatten error object arrays to single strings
    function flattenErrorObject(
      errObj: Record<string, string[] | undefined>
    ): Record<string, string> {
      return Object.fromEntries(
        Object.entries(errObj)
          .filter(([_, v]) => v && v.length > 0)
          .map(([k, v]) => [k, v![0]])
      );
    }

    const draftReservationResponse =
      await createDraftReservationAction(draftReservationData);

    if (!draftReservationResponse.success) {
      let errorObj: Record<string, string>;
      if (typeof draftReservationResponse.error === "string") {
        errorObj = { reservation: draftReservationResponse.error };
      } else if (draftReservationResponse.error) {
        errorObj = flattenErrorObject(draftReservationResponse.error);
      } else {
        errorObj = { reservation: "Failed to create reservation" };
      }
      return { errors: errorObj };
    }

    const encodedText = encodeURIComponent(
      `😄 Hola me llamo *${name}*\n📧 Mi correo es _${email}_ \n📱 Mi numero es _${formattedPhone}_ \n🚗 Mi auto de interes es *${vehicle?.make} ${vehicle?.model} ${vehicle?.year}* \n📅 Mi fecha de inicio es *${formattedFrom + " " + pickupHour}* \n📅 Mi fecha de fin es *${formattedTo + " " + dropoffHour}* \n📝 Mi solicitud es *${message}*`
    );

    const businessPhone = process.env.WHATSAPP_PHONE_NUMBER || "";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${businessPhone}&text=${encodedText}`;

    return { url: whatsappUrl };
  } catch (error) {
    console.error("Error processing WhatsApp request:", error);
    throw new Error("Internal server error");
  }
}
