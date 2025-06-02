import React, { Suspense } from "react";
import getVehiclesAction from "@/app/actions/vehicle/getVehiclesAction";
import BookingForm from "@/components/molecules/forms/BookingForm";
import SteppedBookingForm from "@/components/molecules/forms/SteppedBookingForm";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { BookCheckIcon, LoaderCircle } from "lucide-react";
import * as motion from "motion/react-client";
import WavesBackground from "@/components/molecules/animated/WavesBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Car | Albert Car Rental",
  description: "Book your car rental in Ponce, Puerto Rico",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ id: string }>;
}) {
  const { id } = await searchParams;

  const vehicles = await getVehiclesAction();

  return (
    <>
      <div className="w-full mx-auto py-16 px-4 sm:px-6 lg:py-20 relative min-h-[80dvh]">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1A57B2_0%,#2C75A0_40%,#3A8F92_70%,#1DAF5A_100%)]" />
        <WavesBackground />

        <div className="flex items-center justify-center h-full">
          <motion.div
            className="max-w-3xl w-full mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 z-20 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Book Your Car
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Fill out the form below to reserve your vehicle
            </p>

            <div className="md:hidden h-full w-full flex items-center justify-center">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    className="w-full justify-center bg-[#1A57B2] hover:bg-[#2C75A0] text-white"
                    size="lg"
                  >
                    Start Booking <BookCheckIcon className="ml-2" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="min-h-dvh">
                  <DrawerHeader>
                    <DrawerTitle>Book Your Car</DrawerTitle>
                    <DrawerDescription>
                      Fill out the form below to reserve your vehicle
                    </DrawerDescription>
                  </DrawerHeader>
                  <Suspense
                    fallback={
                      <LoaderCircle className="animate-spin size-12 text-white" />
                    }
                  >
                    <SteppedBookingForm vehicles={vehicles} />
                  </Suspense>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="hidden md:block">
              <Suspense
                fallback={
                  <LoaderCircle className="animate-spin size-12 text-white" />
                }
              >
                <BookingForm vehicles={vehicles} vehicleId={id} />
              </Suspense>
            </div>
          </motion.div>
        </div>

        {/* a section to showcase the vehicles */}
      </div>
    </>
  );
}
