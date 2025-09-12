import React from "react";

export default function PrivacyPage() {
  return (
    <main className="prose container mx-auto flex min-h-dvh flex-col gap-6 p-6 lg:py-20">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>
      <p>Effective Date: June 4, 2025</p>
      <p>
        This Privacy Policy describes how we collect, use, and protect your
        information when you use our car rental services in Puerto Rico. We are
        committed to compliance with California, UK, and US privacy laws,
        including CCPA, GDPR, and other applicable regulations.
      </p>
      <h2 className="text-2xl font-bold">Information We Collect</h2>
      <ul>
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
      </ul>
      <h2 className="text-2xl font-bold">How We Use Your Information</h2>
      <ul>
        <li>To provide and manage your car rental bookings</li>
        <li>To communicate with you regarding your reservation</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="text-2xl font-bold">Data Storage & Security</h2>
      <p>
        We use Prisma for database management, Next-Auth for authentication, and
        Vercel for hosting. Your data is stored securely and only accessible to
        authorized personnel. We implement industry-standard security measures
        to protect your information.
      </p>
      <h2 className="text-2xl font-bold">Your Rights</h2>
      <ul>
        <li>Request access to your data</li>
        <li>Request correction or deletion of your data</li>
        <li>Opt out of certain uses of your data</li>
      </ul>
      <h2 className="text-2xl font-bold">International Users</h2>
      <p>
        If you are located in the UK or EU, you have additional rights under the
        GDPR, including the right to lodge a complaint with a supervisory
        authority.
      </p>
      <h2 className="text-2xl font-bold">Contact</h2>
      <p>
        For privacy-related requests, please contact us at the email provided on
        our website.
      </p>
    </main>
  );
}
