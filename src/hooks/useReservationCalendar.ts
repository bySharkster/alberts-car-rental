import { useEffect, useRef, useState } from "react";
import { addDays, startOfToday } from "date-fns";
import type { DateRange } from "react-day-picker";
import { getVehicleBlockedDatesAction } from "@/app/actions/reservations";

export function useReservationCalendar(vehicleId: number) {
  const [selectedDates, setSelectedDates] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });
  const [blockedDates, setBlockedDates] = useState<Date[]>([]);
  const [rangeUnavailableDates, setRangeUnavailableDates] = useState<Date[]>(
    []
  );
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [datesAvailable, setDatesAvailable] = useState<boolean | null>(null);

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  // Fetch blocked dates for calendar on mount
  useEffect(() => {
    const daysToCheck = 90;
    const today = startOfToday();
    const end = addDays(today, daysToCheck - 1);

    getVehicleBlockedDatesAction(vehicleId, today, end).then(setBlockedDates);
  }, [vehicleId]);

  // Check availability for selected range
  useEffect(() => {
    if (!selectedDates?.from || !selectedDates?.to) {
      setDatesAvailable(null);
      setLoadingAvailability(false);
      setRangeUnavailableDates([]);
      return;
    }
    const fromDate = selectedDates.from;
    const toDate = selectedDates.to;

    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setLoadingAvailability(true);
      getVehicleBlockedDatesAction(vehicleId, fromDate, toDate)
        .then((blocked) => {
          setRangeUnavailableDates(blocked);
          setDatesAvailable(blocked.length === 0);
        })
        .finally(() => setLoadingAvailability(false));
    }, 300);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [selectedDates?.from, selectedDates?.to, vehicleId]);

  return {
    selectedDates,
    setSelectedDates,
    blockedDates,
    rangeUnavailableDates,
    loadingAvailability,
    datesAvailable,
  };
}
