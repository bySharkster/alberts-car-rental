"use server";
import { checkEnv } from "@/lib/env";
import prisma from "@/lib/prisma";
import webpush from "web-push";

// Send a push notification to a user
export async function sendNotification(
  userId: string,
  payload: { title: string; body: string }
) {
  const subscriptions = await prisma.pushSubscription.findMany({
    where: { userId },
  });

  if (!subscriptions) {
    throw new Error("No subscriptions found for this user");
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const { VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT } = checkEnv();

  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);

  for (const subscription of subscriptions) {
    try {
      await webpush.sendNotification(
        {
          endpoint: subscription.endpoint,
          keys:
            typeof subscription.keys === "string"
              ? JSON.parse(subscription.keys)
              : subscription.keys,
        },
        JSON.stringify({
          title: payload.title,
          body: payload.body,
        })
      );
    } catch (error) {
      if (error instanceof webpush.WebPushError && error.statusCode === 410) {
        await prisma.pushSubscription.delete({
          where: { endpoint: subscription.endpoint },
        });
      }
    }
  }
}
