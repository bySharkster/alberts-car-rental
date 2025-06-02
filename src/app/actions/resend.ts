"use server";
import { z } from "zod";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string().min(2, {
    message: "The name must have at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "The email must be valid.",
  }),
  phone: z.string().min(10, {
    message: "The phone number must have at least 10 characters.",
  }),
  car: z.string().optional().nullable(),
  message: z.string().min(5, {
    message: "The message must have at least 5 characters.",
  }),
});

export async function sendContactEmail(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = ContactSchema.safeParse(raw);
  if (!parsed.success) {
    return { error: parsed.error.flatten().fieldErrors };
  }
  const { name, email, phone, car, message } = parsed.data;
  const [firstName, ...rest] = name.split(" ");
  const lastName = rest.join(" ");
  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "noreply@albertcarrental.com",
      to: process.env.RESEND_TO_EMAIL || "contact@fernandoaponte.dev",
      subject: `New Contact Request from ${name}`,
      react: EmailTemplate({
        firstName,
        lastName,
        phoneNumber: phone,
        email,
        text: `${message}${car ? `\n\nVehicle of interest: ${car}` : ""}`,
      }),
    });
    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Failed to send email" };
  }
}
