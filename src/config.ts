import type { ConfigProps } from "@/types/config";

const config = {
  appName: "Albert Car Rental",
  appDescription: "Your car rental service in the city of Ponce, Puerto Rico",
  address: "Ponce, Puerto Rico",
  ownerPhone: "+1 (939) 251-1659",
  domainName: "albertcarrental.com",
  resend: {
    fromNoReply: "Alber Car Rental <noreply@albertcarrental.com>",
    fromAdmin: "Albert Car Rental Team<albert@albertcarrental.com>",
    supportEmail: "contact@albertcarrental.com",
    forwardRepliesTo: "contact@albertcarrental.com",
  },
  social: {
    facebook: "https://www.facebook.com/p/Albert-Car-Rental-61557243689183/",
    instagram: "https://www.instagram.com/albertcarrental/",
    whatsapp: "https://wa.link/k91t18",
  },
} as ConfigProps;

export default config;
