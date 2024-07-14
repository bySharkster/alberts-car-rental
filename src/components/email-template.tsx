import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  text: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  text,
}) => (
  <div>
    <h1>
      Hi ALbert,
      {firstName} {lastName} wants to get in touch with you!
    </h1>
    <p>Phone Number: {phoneNumber}</p>
    <p>Email:{email}</p>

    <pre>{text}</pre>
  </div>
);
