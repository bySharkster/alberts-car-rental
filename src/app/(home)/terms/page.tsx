import React from "react";

export default function TermsPage() {
  return (
    <main className="prose container mx-auto flex min-h-dvh flex-col gap-6 p-6 lg:py-20">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <p>Effective Date: June 4, 2025</p>
      <p>
        Welcome to our car rental service in Puerto Rico. By using our services,
        you agree to the following terms and conditions. These terms are
        designed to comply with applicable laws in Puerto Rico, California, the
        UK, and the United States.
      </p>
      <h2 className="text-2xl font-bold">1. Service Overview</h2>
      <p>
        We provide car rental services to customers in Puerto Rico. You must be
        at least 21 years old and hold a valid driver’s license to rent a
        vehicle from us.
      </p>
      <h2 className="text-2xl font-bold">2. User Information</h2>
      <p>
        We collect your Full Name, Email Address, and Phone Number to manage
        your bookings. We use Prisma for data storage, Next-Auth for
        authentication, and Vercel for hosting. Your information is handled in
        accordance with our <a href="/privacy">Privacy Policy</a>.
      </p>
      <h2 className="text-2xl font-bold">3. Compliance</h2>
      <ul>
        <li>
          We comply with the California Consumer Privacy Act (CCPA), UK GDPR,
          and US privacy and consumer protection laws.
        </li>
        <li>
          You have the right to access, correct, or request deletion of your
          personal data.
        </li>
      </ul>
      <h2 className="text-2xl font-bold">4. Bookings & Payments</h2>
      <p>
        All bookings are subject to availability. Payment is required at the
        time of booking. Please review our{" "}
        <a href="/cancellation">Cancellation Policy</a> for details on refunds
        and cancellations.
      </p>
      <h2 className="text-2xl font-bold">5. Liability</h2>
      <p>
        We are not liable for indirect, incidental, or consequential damages.
        Our liability is limited to the amount paid for your rental.
      </p>
      <h2 className="text-2xl font-bold">6. Changes to Terms</h2>
      <p>
        We may update these terms occasionally. Continued use of our service
        means you accept the revised terms.
      </p>
      <h2 className="text-2xl font-bold">7. Contact</h2>
      <p>
        For questions about these terms, contact us at the email provided on our
        website.
      </p>
    </main>
  );
}
