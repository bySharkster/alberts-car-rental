import React from "react";

export default function CancellationPage() {
  return (
    <main className="container prose mx-auto min-h-dvh p-6 lg:py-20 flex flex-col gap-6">
      <h1 className="text-4xl font-bold">Cancellation Policy</h1>
      <p>Effective Date: June 4, 2025</p>
      <p>
        Our cancellation policy is designed to be fair and transparent, in
        compliance with US, California, and UK consumer protection laws.
      </p>
      <h2 className="text-2xl font-bold">Standard Cancellations</h2>
      <ul>
        <li>
          Cancellations made more than 48 hours before the rental start date
          will receive a full refund.
        </li>
        <li>
          Cancellations made within 48 hours of the rental start date may incur
          a fee up to one day’s rental charge.
        </li>
      </ul>
      <h2 className="text-2xl font-bold">No-Shows</h2>
      <p>
        If you do not show up for your reservation and do not cancel in advance,
        you may be charged the full rental amount for the first day.
      </p>
      <h2 className="text-2xl font-bold">How to Cancel</h2>
      <p>
        Please contact us via email or phone as listed on our website to cancel
        your booking.
      </p>
      <h2 className="text-2xl font-bold">Special Circumstances</h2>
      <p>
        We comply with all applicable laws regarding cancellations due to
        emergencies or force majeure events. Please contact us if you believe
        your situation qualifies.
      </p>
    </main>
  );
}
