"use client";
import { useState } from "react";
import Stepper, {
  Step,
  StepIndicator,
} from "@/components/templates/animations/Stepper";

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
import { WhatsAppIcon } from "@/components/ui/whats-app-icon";
import { Loader2Icon } from "lucide-react";
import { motion } from "motion/react";
import {
  type DateRange,
  DateRangePicker,
} from "@/components/ui/date-range-picker";
import { format } from "date-fns";

interface SteppedBookingFormProps {
  vehicles: Vehicle[];
}

export default function SteppedBookingForm({
  vehicles,
}: SteppedBookingFormProps) {
  // Mock static reservations for demo
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

  const [loading, setLoading] = useState(false);
  const [stepData, setStepData] = useState<{
    name: string;
    email: string;
    phone: string;
    interestCar: string;
    from?: Date;
    to?: Date;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    interestCar: "",
    from: undefined,
    to: undefined,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Helper to check if the selected date range overlaps with reservations
  function isDateRangeReserved(): boolean {
    if (!stepData.from || !stepData.to || !stepData.interestCar) return false;
    return MOCK_RESERVATIONS.some(
      (r) =>
        r.car === stepData.interestCar &&
        stepData.from &&
        stepData.to &&
        ((stepData.from >= r.from && stepData.from <= r.to) ||
          (stepData.to >= r.from && stepData.to <= r.to) ||
          (stepData.from <= r.from && stepData.to >= r.to))
    );
  }

  // Step navigation helpers
  const handleChange = (field: string, value: string | Date | undefined) => {
    setStepData((prev) => ({ ...prev, [field]: value }));
  };

  // Final submit
  async function handleFinalSubmit() {
    setLoading(true);
    try {
      const formData = new FormData();
      const { name, email, phone, interestCar, from, to, message } = stepData;
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("interestCar", interestCar);
      formData.append("from", from ? from.toISOString().split("T")[0] : "");
      formData.append("to", to ? to.toISOString().split("T")[0] : "");
      formData.append("message", message);
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

  // Map step index to error
  const stepHasError = [
    Boolean(errors.name || errors.email), // Step 1
    Boolean(errors.phone), // Step 2
    Boolean(errors.interestCar), // Step 3
    Boolean(isDateRangeReserved() || !stepData.from || !stepData.to), // Step 4
    Boolean(errors.message), // Step 5
    false, // Review step (no error)
  ];

  return (
    <Stepper
      initialStep={1}
      onFinalStepCompleted={handleFinalSubmit}
      backButtonText="Previous"
      backButtonProps={{ disabled: loading }}
      nextButtonText={loading ? "Submitting..." : "Next"}
      nextButtonProps={{ disabled: loading }}
      renderStepIndicator={({ step, currentStep, onStepClick }) => (
        <StepIndicator
          step={step}
          currentStep={currentStep}
          onClickStep={onStepClick}
          hasError={stepHasError[step - 1]}
        />
      )}
    >
      <Step>
        <h2 className="text-lg font-semibold mb-2">Your Name & Email</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={stepData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white`}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name}</span>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={stepData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white`}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </div>
      </Step>
      <Step>
        <h2 className="text-lg font-semibold mb-2">Your Phone Number</h2>
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          value={stepData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          required
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white`}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs">{errors.phone}</span>
        )}
      </Step>
      <Step>
        <h2 className="text-lg font-semibold mb-2">Select Your Car</h2>
        <Select
          name="interestCar"
          value={stepData.interestCar}
          onValueChange={(value) => handleChange("interestCar", value)}
        >
          <SelectTrigger
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.interestCar ? "border-red-500" : "border-gray-300"
            } dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white`}
          >
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
        {errors.interestCar && (
          <span className="text-red-500 text-xs">{errors.interestCar}</span>
        )}
      </Step>
      <Step className="space-y-4 px-2">
        <h2 className="text-lg font-semibold mb-2">Select Rental Dates</h2>

        <DateRangePicker
          value={{ from: stepData.from, to: stepData.to }}
          onChange={(range: DateRange | undefined) => {
            handleChange("from", range?.from);
            handleChange("to", range?.to);
          }}
          reservedRanges={MOCK_RESERVATIONS}
          car={stepData.interestCar}
        />
        {isDateRangeReserved() && (
          <span className="text-red-500 text-xs mt-2 block">
            Selected dates are reserved for this car
          </span>
        )}
      </Step>
      <Step>
        <h2 className="text-lg font-semibold mb-2">Your Request</h2>
        <textarea
          name="message"
          placeholder="Tell us about your rental needs"
          value={stepData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={4}
          required
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } dark:border-gray-600 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white`}
        />
        {errors.message && (
          <span className="text-red-500 text-xs">{errors.message}</span>
        )}
      </Step>
      <Step>
        <h2 className="text-lg font-semibold mb-2">Review & Submit</h2>
        <div className="space-y-2 text-sm">
          <div>
            <strong>Name:</strong> {stepData.name}
          </div>
          <div>
            <strong>Email:</strong> {stepData.email}
          </div>
          <div>
            <strong>Phone:</strong> {stepData.phone}
          </div>
          <div>
            <strong>Interest Car:</strong> {stepData.interestCar}
          </div>
          <div>
            <strong>Rental Dates:</strong>{" "}
            {stepData.from && stepData.to ? (
              `${format(stepData.from, "LLL dd, yyyy")} – ${format(stepData.to, "LLL dd, yyyy")}`
            ) : (
              <span className="text-red-500">Not selected</span>
            )}
          </div>
          <div>
            <strong>Request:</strong> {stepData.message}
          </div>
        </div>
        <button
          type="button"
          className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center group "
          onClick={handleFinalSubmit}
          disabled={loading || Object.keys(errors).length > 0}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <motion.span
                className="group-hover:hidden"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Submitting...
              </motion.span>
              <motion.span
                className="group-hover:block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Loader2Icon className="ml-2 animate-spin" />
              </motion.span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="group-hover:hidden">Submit Booking Request</span>
              <WhatsAppIcon className="ml-2 hidden group-hover:block " />
            </div>
          )}
        </button>
      </Step>
    </Stepper>
  );
}
