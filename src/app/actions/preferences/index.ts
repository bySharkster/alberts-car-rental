"use server";
import prisma from "@/lib/prisma";
import type { NotificationPreferencesState } from "@/types/preferences";

export async function getNotificationPreferences(userId: string) {
  try {
    const preferences = await prisma.preferences.findUnique({
      where: { userId },
    });
    return { preferences };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: "Failed to fetch preferences" };
  }
}
