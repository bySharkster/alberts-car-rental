export function checkEnv() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined");
  }

  if (!process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY) {
    throw new Error("NEXT_PUBLIC_VAPID_PUBLIC_KEY is not defined");
  }

  if (!process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY) {
    throw new Error("NEXT_PUBLIC_VAPID_PRIVATE_KEY is not defined");
  }

  if (!process.env.NEXT_PUBLIC_VAPID_SUBJECT) {
    throw new Error("NEXT_PUBLIC_VAPID_SUBJECT is not defined");
  }

  if (!process.env.WHATSAPP_PHONE_NUMBER) {
    throw new Error("WHATSAPP_PHONE_NUMBER is not defined");
  }

  if (!process.env.AWS_CDN_URL) {
    throw new Error("AWS_CDN_URL is not defined");
  }

  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    VAPID_PUBLIC_KEY: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY: process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY,
    VAPID_SUBJECT: process.env.NEXT_PUBLIC_VAPID_SUBJECT,
    WHATSAPP_PHONE_NUMBER: process.env.WHATSAPP_PHONE_NUMBER,
    AWS_CDN_URL: process.env.AWS_CDN_URL,
  };
}
