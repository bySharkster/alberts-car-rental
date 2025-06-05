"use client";
import { useState } from "react";
import Stepper, {
  Step,
  StepIndicator,
} from "@/components/templates/animations/Stepper";

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
import { WhatsAppIcon } from "@/components/ui/whats-app-icon";
import { Loader2Icon } from "lucide-react";
import { motion } from "motion/react";
import {
  type DateRange,
  DateRangePicker,
} from "@/components/ui/date-range-picker";
import { format } from "date-fns";
import { ReservationCalendar } from "./reservations/reservation-calendar";
import { useReservationCalendar } from "@/hooks/useReservationCalendar";

interface SteppedBookingFormProps {
  vehicles: Vehicle[];
}

export default function SteppedBookingForm({
  vehicles,
}: SteppedBookingFormProps) {
  const [loading, setLoading] = useState(false);
  const [stepData, setStepData] = useState<{
    name: string;
    email: string;
    phone: string;
    interestCar: number;
    from?: Date;
    to?: Date;
    pickupHour: string;
    dropoffHour: string;
    pickupLocation: string;
    dropoffLocation: string;
    message: string;
  }>({
    name: "",
    email: "",
    phone: "",
    interestCar: 0,
    from: undefined,
    to: undefined,
    pickupHour: "",
    dropoffHour: "",
    pickupLocation: "",
    dropoffLocation: "",
    message: "",
  });
  const [currentStepPosition, setCurrentStepPosition] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const {
    selectedDates,
    setSelectedDates,
    blockedDates,
    rangeUnavailableDates,
    loadingAvailability,
    datesAvailable,
  } = useReservationCalendar(stepData.interestCar);

  // Step navigation helpers
  const handleChange = (field: string, value: string | Date | undefined) => {
    setStepData((prev) => ({ ...prev, [field]: value }));
  };

  // Final submit

  async function handleFinalSubmit() {
    setLoading(true);

    const formData = new FormData();
    const {
      name,
      email,
      phone,
      interestCar,
      from,
      to,
      pickupHour,
      dropoffHour,
      pickupLocation,
      dropoffLocation,
      message,
    } = stepData;
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("interestCar", String(interestCar));
    formData.append("pickupDate", from ? from.toISOString() : "");
    formData.append("dropoffDate", to ? to.toISOString() : "");
    formData.append("pickupHour", pickupHour);
    formData.append("dropoffHour", dropoffHour);
    formData.append("pickupLocation", pickupLocation);
    formData.append("dropoffLocation", dropoffLocation);
    formData.append("message", message);
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

  // Map step index to error
  const stepHasError = [
    Boolean(errors.name || errors.email), // Step 1
    Boolean(errors.phone), // Step 2
    Boolean(errors.interestCar), // Step 3
    Boolean(!stepData.from || !stepData.to), // Step 4
    Boolean(errors.message), // Step 5
    false, // Review step (no error)
  ];

  const handleStepClick = (clickedStep: number) => {
    if (stepHasError[clickedStep - 1]) {
      toast.error("Please fill out all fields");
    } else {
      setCurrentStepPosition(clickedStep);
    }
  };

  return (
    <Stepper
      initialStep={1}
      onFinalStepCompleted={handleFinalSubmit}
      backButtonText="Previous"
      onStepChange={handleStepClick}
      backButtonProps={{ disabled: loading }}
      nextButtonText={loading ? "Submitting..." : "Next"}
      nextButtonProps={{
        disabled: loading || stepHasError[currentStepPosition - 1],
      }}
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
          value={stepData.interestCar ? String(stepData.interestCar) : ""}
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
              <SelectItem key={vehicle.id} value={String(vehicle.id)}>
                {vehicle.make} {vehicle.model} {vehicle.year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.interestCar && (
          <span className="text-red-500 text-xs">{errors.interestCar}</span>
        )}
      </Step>
      {/* Select Rental Dates */}
      <Step className="space-y-4 px-2 mx-auto items-center flex flex-col w-full ">
        <h2 className="text-lg font-semibold mb-2">Select Rental Dates</h2>
        <ReservationCalendar
          selectedDates={selectedDates}
          setSelectedDates={(dates) => {
            setSelectedDates(dates);
            handleChange("from", dates.from);
            handleChange("to", dates.to);
          }}
          blockedDates={blockedDates}
          rangeUnavailableDates={rangeUnavailableDates}
        />
        {(errors.from || errors.to) && (
          <span className="text-red-500 text-xs">
            Please select a valid rental date range
          </span>
        )}
      </Step>
      {/* Step: Pickup/Dropoff Hours */}
      <Step>
        <h2 className="text-lg font-semibold mb-2">Pickup & Dropoff Hours</h2>
        <div className="flex md:flex-row flex-col justify-center gap-2 max-w-[600px] mx-auto">
          <div className="w-full">
            <label
              htmlFor="pickupHour"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Pickup Hour
            </label>
            <Select
              name="pickupHour"
              value={stepData.pickupHour}
              onValueChange={(value) => handleChange("pickupHour", value)}
              required
            >
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
            {errors.pickupHour && (
              <span className="text-red-500 text-xs">{errors.pickupHour}</span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="dropoffHour"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Dropoff Hour
            </label>
            <Select
              name="dropoffHour"
              value={stepData.dropoffHour}
              onValueChange={(value) => handleChange("dropoffHour", value)}
              required
            >
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
            {errors.dropoffHour && (
              <span className="text-red-500 text-xs">{errors.dropoffHour}</span>
            )}
          </div>
        </div>
      </Step>
      {/* Step: Pickup/Dropoff Locations */}
      <Step>
        <h2 className="text-lg font-semibold mb-2">
          Pickup & Dropoff Locations
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-2 md:max-w-[600px] mx-auto">
          <div className="w-full">
            <label
              htmlFor="pickupLocation"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Pickup Location
            </label>
            <Select
              name="pickupLocation"
              value={stepData.pickupLocation}
              onValueChange={(value) => handleChange("pickupLocation", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select pickup location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ponce">Ponce</SelectItem>
                <SelectItem value="Ponce Airport">Ponce Airport</SelectItem>
                <SelectItem value="Plaza del Caribe">
                  Plaza del Caribe
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.pickupLocation && (
              <span className="text-red-500 text-xs">
                {errors.pickupLocation}
              </span>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="dropoffLocation"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Dropoff Location
            </label>
            <Select
              name="dropoffLocation"
              value={stepData.dropoffLocation}
              onValueChange={(value) => handleChange("dropoffLocation", value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select dropoff location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Ponce">Ponce</SelectItem>
                <SelectItem value="Ponce Airport">Ponce Airport</SelectItem>
                <SelectItem value="Plaza del Caribe">
                  Plaza del Caribe
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.dropoffLocation && (
              <span className="text-red-500 text-xs">
                {errors.dropoffLocation}
              </span>
            )}
          </div>
        </div>
      </Step>
      {/* Review step */}
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
      {/* Review step */}
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
          disabled={loading || Object.keys(errors).length > 0}
          onClick={handleFinalSubmit}
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
