import { Resend } from "resend";
// import twilioLib from "twilio";
import { checkEnv } from "../env";
import { render } from "@react-email/render";
import {
  ReviewNotificationEmail,
  ReservationNotificationEmail,
  LeadNotificationEmail,
  ContactNotificationEmail,
  PaymentNotificationEmail,
  GenericNotificationEmail,
} from "../emails/notifications";

checkEnv();
// TODO: UNCOMMENT TWILIO WHEN IT IS READY

// Set up clients (ideally use env vars for keys)
const resend = new Resend(process.env.RESEND_API_KEY);
// const twilio = twilioLib(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

function getTemplateByType(type: string) {
  switch (type) {
    case "Review":
      return ReviewNotificationEmail;
    case "Reservation":
      return ReservationNotificationEmail;
    case "Lead":
      return LeadNotificationEmail;
    case "Contact":
      return ContactNotificationEmail;
    case "Payment":
      return PaymentNotificationEmail;
    default:
      return GenericNotificationEmail;
  }
}

export async function sendUserWelcomeComms({
  name,
  email,
  // phone,
}: {
  name: string;
  email: string;
  // phone?: string;
}) {
  // if (phone) {
  //   await twilio.messages.create({
  //     body: `Welcome, ${name}! Thanks for registering.`,
  //     from: process.env.TWILIO_NUMBER,
  //     to: phone,
  //   });
  // }

  await resend.emails.send({
    from: "welcome@transactional.albertcarrental.com",
    to: email,
    subject: "Welcome!",
    html: `<p>Hi ${name}, thanks for registering!</p>`,
  });
}

export async function sendUserNotificationComms({
  name,
  email,
  title,
  body,
  type,
}: {
  name: string;
  email: string;
  title: string;
  body: string;
  type: string;
}) {
  const Template = getTemplateByType(type);
  const html = await render(
    <Template title={title} body={body} recipientName={name} type={type} />
  );
  await resend.emails.send({
    from: "notification@transactional.albertcarrental.com",
    to: email,
    subject: title,
    html,
  });
}
