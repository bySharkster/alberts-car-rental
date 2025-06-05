"use server";

import { sendNotificationToAdmin } from "@/lib/controllers/notificationController";
import { getVehicleByIdAction } from "../vehicle/getVehiclesAction";

export default async function notifyAdminAction(data: any) {
  const { name, email, phone, from, to, message, interestCar } = data;

  const vehicle = await getVehicleByIdAction(Number(interestCar));
  if (!vehicle) {
    return { error: "Vehicle not found" };
  }

  // TODO: Update to the ID of the admin
  await sendNotificationToAdmin({
    adminId: process.env.ADMIN_ID!,
    title: `${name} has made a reservation`,
    body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nFrom: ${from}\nTo: ${to}\nMessage: ${message}\nInterest Car: ${vehicle?.make} ${vehicle?.model} ${vehicle?.year}`,
    type: "Reservation",
  });
}
