import { Button } from "@/components/ui/button";
import config from "@/config";
import { CircleCheckIcon, HomeIcon } from "lucide-react";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Booking Success | Albert Car Rental",
  description: "Booking Success",
};

export default function BookingSuccessPage() {
  return (
    <div className="w-full mx-auto py-16 px-4 sm:px-6 lg:py-20 relative min-h-[80dvh] flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center">
        Booking Success{" "}
        <CircleCheckIcon className="ml-2 text-green-500 w-12 h-12" />
      </h1>
      <div className="mb-4 space-y-2 text-center">
        <p className="text-green-600 dark:text-green-300 ">
          Thank you for your booking. You will receive a confirmation email
          soon.
        </p>
        <p className="text-slate-600 dark:text-slate-300 ">
          Any questions or concerns, please contact us at{" "}
          <Link href={`mailto:${config.resend.supportEmail}`}>
            {config.resend.supportEmail}
          </Link>
        </p>
        <p className="text-slate-600 dark:text-slate-300 ">
          or call us at{" "}
          <Link href={`tel:${config.ownerPhone.replace(/\D/g, "")}`}>
            {config.ownerPhone}
          </Link>
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button asChild className="">
          <Link href="/">
            Go to Home <HomeIcon className="ml-2" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
