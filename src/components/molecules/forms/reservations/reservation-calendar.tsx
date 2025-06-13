import { Calendar } from "@/components/ui/calendar";
import { useIsMobile } from "@/hooks/use-mobile";
import { isSameDay } from "date-fns";
import type { DateRange } from "react-day-picker";

interface ReservationCalendarProps {
  selectedDates: DateRange;
  setSelectedDates: (range: DateRange) => void;
  blockedDates: Date[];
  rangeUnavailableDates: Date[];
}

export function ReservationCalendar({
  selectedDates,
  setSelectedDates,
  blockedDates,
  rangeUnavailableDates,
}: ReservationCalendarProps) {
  const isMobile = useIsMobile();
  // const numberOfMonths = isMobile ? 1 : 2;
  const numberOfMonths = 1;
  const isDateReserved = (date: Date) =>
    date < new Date() ||
    blockedDates.some((d) => isSameDay(d, date)) ||
    rangeUnavailableDates.some((d) => isSameDay(d, date));

  return (
    <Calendar
      initialFocus
      mode="range"
      defaultMonth={selectedDates.from || new Date()}
      selected={selectedDates}
      onSelect={(range) =>
        setSelectedDates(range ?? { from: undefined, to: undefined })
      }
      numberOfMonths={numberOfMonths}
      disabled={(date) => isDateReserved(date)}
      modifiers={{ reserved: (date) => isDateReserved(date) }}
      modifiersClassNames={{ reserved: "bg-red-200 text-red-700" }}
    />
  );
}
