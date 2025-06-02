"use client";
import { useEffect, useState } from "react";

import { getWhatsAppUrl } from "@/app/actions/notifications/getWhatsappUrlAction";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Vehicle } from "@prisma/client";
import {
  type DateRange,
  DateRangePicker,
} from "@/components/ui/date-range-picker";
import { ReservationCalendar } from "./reservations/reservation-calendar";
import { useReservationCalendar } from "@/hooks/useReservationCalendar";
import SelectVehicle from "../selectors/select-vehicle";

interface BookingFormProps {
  vehicles: Vehicle[];
  vehicleId: string;
}

export default function BookingForm({ vehicles, vehicleId }: BookingFormProps) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [selectedCar, setSelectedCar] = useState<number>(
    Number(vehicleId) || vehicles[0].id
  );

  const {
    selectedDates,
    setSelectedDates,
    blockedDates,
    rangeUnavailableDates,
    loadingAvailability,
    datesAvailable,
  } = useReservationCalendar(selectedCar);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!selectedDates.from || !selectedDates.to) {
      toast.error("Please select a rental date range");
      return;
    }

    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append("pickupDate", selectedDates.from.toISOString());
    formData.append("dropoffDate", selectedDates.to.toISOString());
    formData.append("interestCar", String(selectedCar));

    try {
      const result = await getWhatsAppUrl(formData);
      if (result.errors) {
        setErrors(result.errors);
        toast.error("Please fill out all fields");
        setLoading(false);
        return;
      }
      setErrors({});
      window.open(result.url, "_blank");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error?.message || "Internal server error");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-4">
        <input type="text" name="website" style={{ display: "none" }} />
      </div>
      {/* name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        />
      </div>
      {/* email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="your@email.com"
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        />
      </div>
      {/* phone */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Your phone number"
          name="phone"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        />
      </div>
      {/* vehicle */}
      <div className="mb-4">
        <SelectVehicle
          vehicles={vehicles}
          onSelectVehicle={(vehicle) => {
            setSelectedCar(vehicle ? vehicle.id : vehicles[0]?.id);
          }}
        />
      </div>
      {/* dates */}
      <div className="mt-6 mx-auto w-full flex items-center justify-center flex-col">
        <h2 className="text-lg font-semibold mb-2">Rental Dates</h2>
        <ReservationCalendar
          selectedDates={selectedDates}
          setSelectedDates={setSelectedDates}
          blockedDates={blockedDates}
          rangeUnavailableDates={rangeUnavailableDates}
        />
      </div>
      {/* hours */}
      <div className="flex md:flex-row flex-col justify-center gap-2 max-w-[600px] mx-auto">
        <div className="w-full">
          <label
            htmlFor="pickupHour"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Pickup Hour
          </label>
          <Select name="pickupHour">
            <SelectTrigger>
              <SelectValue placeholder="Select pickup hour" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8:00 AM">8:00 AM</SelectItem>
              <SelectItem value="9:00 AM">9:00 AM</SelectItem>
              <SelectItem value="10:00 AM">10:00 AM</SelectItem>
              <SelectItem value="11:00 AM">11:00 AM</SelectItem>
              <SelectItem value="12:00 PM">12:00 PM</SelectItem>
              <SelectItem value="1:00 PM">1:00 PM</SelectItem>
              <SelectItem value="2:00 PM">2:00 PM</SelectItem>
              <SelectItem value="3:00 PM">3:00 PM</SelectItem>
              <SelectItem value="4:00 PM">4:00 PM</SelectItem>
              <SelectItem value="5:00 PM">5:00 PM</SelectItem>
              <SelectItem value="6:00 PM">6:00 PM</SelectItem>
              <SelectItem value="7:00 PM">7:00 PM</SelectItem>
              <SelectItem value="8:00 PM">8:00 PM</SelectItem>
              <SelectItem value="9:00 PM">9:00 PM</SelectItem>
              <SelectItem value="10:00 PM">10:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <label
            htmlFor="dropoffHour"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Dropoff Hour
          </label>
          <Select name="dropoffHour">
            <SelectTrigger>
              <SelectValue placeholder="Select dropoff hour" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8:00 AM">8:00 AM</SelectItem>
              <SelectItem value="9:00 AM">9:00 AM</SelectItem>
              <SelectItem value="10:00 AM">10:00 AM</SelectItem>
              <SelectItem value="11:00 AM">11:00 AM</SelectItem>
              <SelectItem value="12:00 PM">12:00 PM</SelectItem>
              <SelectItem value="1:00 PM">1:00 PM</SelectItem>
              <SelectItem value="2:00 PM">2:00 PM</SelectItem>
              <SelectItem value="3:00 PM">3:00 PM</SelectItem>
              <SelectItem value="4:00 PM">4:00 PM</SelectItem>
              <SelectItem value="5:00 PM">5:00 PM</SelectItem>
              <SelectItem value="6:00 PM">6:00 PM</SelectItem>
              <SelectItem value="7:00 PM">7:00 PM</SelectItem>
              <SelectItem value="8:00 PM">8:00 PM</SelectItem>
              <SelectItem value="9:00 PM">9:00 PM</SelectItem>
              <SelectItem value="10:00 PM">10:00 PM</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* locations */}
      <div className="flex flex-row justify-center gap-2 md:max-w-[600px] mx-auto">
        <div className="w-full">
          <label
            htmlFor="pickupLocation"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Pickup Location
          </label>
          <Select name="pickupLocation" required>
            <SelectTrigger>
              <SelectValue placeholder="Select pickup location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ponce">Ponce</SelectItem>
              <SelectItem value="Ponce Airport">Ponce Airport</SelectItem>
              <SelectItem value="Plaza del Caribe">Plaza del Caribe</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <label
            htmlFor="dropoffLocation"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Dropoff Location
          </label>
          <Select name="dropoffLocation" required>
            <SelectTrigger>
              <SelectValue placeholder="Select dropoff location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Ponce">Ponce</SelectItem>
              <SelectItem value="Ponce Airport">Ponce Airport</SelectItem>
              <SelectItem value="Plaza del Caribe">Plaza del Caribe</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        {/* message */}
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Your Request
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your rental needs"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Booking Request"}
      </button>
    </form>
  );
}
