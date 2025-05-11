"use client";
import { useEffect, useState } from "react";

import { getWhatsAppUrl } from "@/app/actions/whatsapp/getWhatsappUrlAction";
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

interface BookingFormProps {
  vehicles: Vehicle[];
  vehicleId: string;
}

// Mock static reservations
const MOCK_RESERVATIONS = [
  {
    car: "Toyota Corolla 2022",
    from: new Date("2025-05-15"),
    to: new Date("2025-05-18"),
  },
  {
    car: "Honda Civic 2021",
    from: new Date("2025-05-20"),
    to: new Date("2025-05-22"),
  },
  {
    car: "Toyota Corolla 2022",
    from: new Date("2025-05-25"),
    to: new Date("2025-05-27"),
  },
];

export default function BookingForm({ vehicles, vehicleId }: BookingFormProps) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });
  const [selectedCar, setSelectedCar] = useState<string>(
    `${vehicles.find((v) => v.id === Number(vehicleId))?.make} ${vehicles.find((v) => v.id === Number(vehicleId))?.model} ${vehicles.find((v) => v.id === Number(vehicleId))?.year}` ||
      ""
  );

  // Helper to check if the selected date range overlaps with reservations
  const isDateRangeReserved = () => {
    if (!dateRange.from || !dateRange.to || !selectedCar) return false;
    return MOCK_RESERVATIONS.some(
      (r) =>
        r.car === selectedCar &&
        dateRange.from &&
        dateRange.to &&
        ((dateRange.from >= r.from && dateRange.from <= r.to) ||
          (dateRange.to >= r.from && dateRange.to <= r.to) ||
          (dateRange.from <= r.from && dateRange.to >= r.to))
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!dateRange.from || !dateRange.to) {
      toast.error("Please select a rental date range");
      return;
    }
    if (isDateRangeReserved()) {
      toast.error("Selected dates are not available for this car");
      return;
    }
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    formData.append(
      "from",
      dateRange.from ? dateRange.from.toISOString().split("T")[0] : ""
    );
    formData.append(
      "to",
      dateRange.to ? dateRange.to.toISOString().split("T")[0] : ""
    );
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
      <div>
        <label
          htmlFor="interestCar"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Interest Car
        </label>
        <Select
          name="interestCar"
          onValueChange={setSelectedCar}
          defaultValue={selectedCar}
        >
          <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white">
            <SelectValue
              placeholder="Select a car"
              className="placeholder:text-gray-500"
            />
          </SelectTrigger>
          <SelectContent>
            {vehicles.map((vehicle) => (
              <SelectItem
                key={vehicle.id}
                value={`${vehicle.make} ${vehicle.model} ${vehicle.year}`}
              >
                {vehicle.make} {vehicle.model} {vehicle.year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <label
          htmlFor="dates"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Rental Dates
        </label>
        <DateRangePicker
          value={dateRange}
          onChange={setDateRange}
          reservedRanges={MOCK_RESERVATIONS}
          car={selectedCar}
        />
        {isDateRangeReserved() && (
          <span className="text-red-500 text-xs">
            Selected dates are reserved for this car
          </span>
        )}
      </div>
      <div>
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
