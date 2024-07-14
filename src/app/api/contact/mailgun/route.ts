import { sendEmail } from "@/libs/mailgun";
import config from "@/config";

// This route is used to receive emails from Mailgun and forward them to our customer support email.
export async function POST(req: Request) {
  try {
    // extract the email content, subject and sender
    const { email, firstName, lastName, phoneNumber, text } = await req.json();
    let html: any;

    // send email to the admin if forwardRepliesTo is et & emailData exists
    if (config.mailgun.supportEmail && html) {
      await sendEmail({
        to: email as string,
        subject: `Contacte a: ${firstName} ${lastName} - ${phoneNumber} - ${email}`,
        text: text as string,
        html,
        replyTo: email as string,
      });
    }
    return new Response("Email sent successfully", { status: 201 });
  } catch (e) {
    console.error((e as Error)?.message);
    return Response.json({ error: (e as Error)?.message }, { status: 500 });
  }
}
