"use server";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone is required"),
  interestCar: z.string().min(1, "Car selection is required"),
  message: z.string().min(1, "Message is required"),
});

export async function getWhatsAppUrl(
  formData: FormData
): Promise<{ url?: string; errors?: Record<string, string> }> {
  try {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      interestCar: formData.get("interestCar") as string,
      message: formData.get("message") as string,
    };

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

    const { name, email, phone, interestCar, message } = validatedData.data;
    const formattedPhone = phone.replace(/[^0-9]/g, "");

    // Create the WhatsApp message with customer details
    const encodedText = encodeURIComponent(
      `🚗 Hola me llamo *${name}*, mi correo es _${email}_, mi numero es _${formattedPhone}_, mi auto de interes es *${interestCar}*, y mi solicitud es *${message}*`
    );

    // Replace with your business phone number
    const businessPhone = "19392511659"; // Update this with your actual WhatsApp number

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${businessPhone}&text=${encodedText}`;

    return { url: whatsappUrl };
  } catch (error) {
    console.error("Error processing WhatsApp request:", error);
    throw new Error("Internal server error");
  }
}
