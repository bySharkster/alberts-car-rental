import config from "@/config";
import Mailgun from "mailgun.js";
import FormData from "form-data";
import { EmailTemplate } from "@/components/email-template";
const mailgun = new Mailgun(FormData);

const mg = mailgun.client({
  username: "api",
  key:
    process.env.NEXT_MAILGUN_API_KEY ||
    "yb844d52dfff2f2e9e9e32956578c81be-8a084751-535738c0",
  url: "https://api.mailgun.net",
});

// if (!process.env.NEXT_MAILGUN_API_KEY) {
//   console.group("⚠️ NEXT_MAILGUN_API_KEY missing from .env");
//   console.error("It's not mandatory but it's required to send emails.");
//   console.error("If you don't need it, remove the code from /libs/mailgun.js");
//   console.groupEnd();
// }

/**
 * Sends an email using the provided parameters.
 *
 * @async
 * @param {string} to - The recipient's email address.
 * @param {string} subject - The subject of the email.
 * @param {string} text - The plain text content of the email.
 * @param {string} html - The HTML content of the email.
 * @param {string} replyTo - The email address to set as the "Reply-To" address.
 * @returns {Promise} A Promise that resolves when the email is sent.
 */

export const sendEmail = async ({
  email,
  firstName,
  lastName,
  phoneNumber,
  to,
  subject,
  text,
  html,
  replyTo,
}: {
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  to?: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
}): Promise<any> => {
  const data = {
    from: config.mailgun.supportEmail,
    to,
    subject,
    text,
    html,
    template: `
    <div>
      <h1>
        Hi ALbert,
        ${firstName} ${lastName} wants to get in touch with you!
      </h1>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Email:${email}</p>

      <pre>${text}</pre>
    </div>
    `,
    ...(replyTo && { "h:Reply-To": replyTo }),
  };

  await mg.messages.create(
    (config.mailgun.subdomain ? `${config.mailgun.subdomain}.` : "") +
      config.domainName,
    data
  );
};
