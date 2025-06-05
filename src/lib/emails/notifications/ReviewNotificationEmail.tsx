import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Heading,
  Text,
} from "@react-email/components";

interface ReviewNotificationEmailProps {
  title: string;
  body: string;
  recipientName?: string;
}

export const ReviewNotificationEmail = ({
  title,
  body,
  recipientName = "Admin",
}: ReviewNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>{title}</Preview>
    <Body style={{ background: "#fff", fontFamily: "sans-serif" }}>
      <Container
        style={{ padding: 24, borderRadius: 8, border: "1px solid #eee" }}
      >
        <Heading>Review Notification</Heading>
        <Text>Hi {recipientName},</Text>
        <Text>{body}</Text>
        <Text style={{ color: "#888", fontSize: 12, marginTop: 24 }}>
          This is an automated review notification from Albert Car Rental.
        </Text>
      </Container>
    </Body>
  </Html>
);
