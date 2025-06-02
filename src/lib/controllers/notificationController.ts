import "server-only";

import prisma from "@/lib/prisma";
import { getNotificationPreferences } from "@/app/actions/preferences";
import { sendUserNotificationComms } from "@/lib/comms";
import { sendNotification } from "@/app/actions/notifications/sendNotificationAction";
import { NotificationPreferencesState } from "@/types/preferences";

interface Notification {
  adminId: string;
  title: string;
  body: string;
  type: "User" | "Reservation" | "Lead" | "Contact" | "Payment" | "Review";
}

export async function sendNotificationToAdmin(notification: Notification) {
  const admin = await prisma.user.findUnique({
    where: { id: notification.adminId, isAdmin: true },
  });

  if (!admin) {
    return;
  }

  // Always send to admin email if notifications are enabled
  await sendUserNotificationComms({
    name: admin.name || "User",
    email: admin.email,
    title: notification.title,
    body: notification.body,
    type: notification.type,
  });

  const { preferences } = await getNotificationPreferences(admin.id);

  if (!preferences) {
    return;
  }

  const prefs: NotificationPreferencesState = {
    UserNotifications: preferences.UserNotifications,
    ReservationNotifications: preferences.ReservationNotifications,
    LeadNotifications: preferences.LeadNotifications,
    ContactNotifications: preferences.ContactNotifications,
    PaymentNotifications: preferences.PaymentNotifications,
    ReviewNotifications: preferences.ReviewNotifications,
  };

  if (prefs.UserNotifications && notification.type === "User") {
    await sendNotification(notification.adminId, {
      title: notification.title,
      body: notification.body,
    });
  }
  if (prefs.ReservationNotifications && notification.type === "Reservation") {
    await sendNotification(notification.adminId, {
      title: notification.title,
      body: notification.body,
    });
  }
  if (prefs.LeadNotifications && notification.type === "Lead") {
    await sendNotification(notification.adminId, {
      title: notification.title,
      body: notification.body,
    });
  }
  if (prefs.ContactNotifications && notification.type === "Contact") {
    await sendNotification(notification.adminId, {
      title: notification.title,
      body: notification.body,
    });
  }
  if (prefs.PaymentNotifications && notification.type === "Payment") {
    await sendNotification(notification.adminId, {
      title: notification.title,
      body: notification.body,
    });
  }
  if (prefs.ReviewNotifications && notification.type === "Review") {
    await sendNotification(notification.adminId, {
      title: notification.title,
      body: notification.body,
    });
  }
}

// Demo Template:
// await sendNotificationToAdmin({
//   adminId: "cmbchblnw00000c0wemibkypi",
//   title: "Test Notification",
//   body: "This is a test notification",
//   type: "Review",
// });
