import { ConfigProps } from "@/types/config";

const config = {
  appName: "Albert Car Rental",
  appDescription: "Your car rental service in the city of Ponce, Puerto Rico",
  ownerPhone: "+1 (787) 251-1659",
  domainName: "albertcarrental.com",
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `Alber Car Rental <noreply@mg.albertcarrental.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Albert Car Rental Team<albert@mg.albertcarrental.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "support@mg.albertcarrental.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "contact@fernandoaponte.dev",
  },
} as ConfigProps;

export default config;
