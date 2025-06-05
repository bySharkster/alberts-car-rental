import * as React from "react";
import { format, isWithinInterval } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export type { DateRange } from "react-day-picker";

interface Reservation {
  car: string;
  from: Date;
  to: Date;
}

interface DateRangePickerProps {
  value: DateRange;
  onChange: (range: DateRange) => void;
  disabledDates?: Date[];
  reservedRanges?: Reservation[];
  car?: string;
}

export function DateRangePicker({
  value,
  onChange,
  reservedRanges = [],
  car,
  disabledDates = [],
}: DateRangePickerProps) {
  const isMobile = useIsMobile();
  const numberOfMonths = isMobile ? 1 : 2;

  // Compute reserved dates for the selected car
  const reservedForCar = reservedRanges.filter((r) => !car || r.car === car);
  const isDateReserved = (date: Date) =>
    reservedForCar.some(
      (r) =>
        r.from && r.to && isWithinInterval(date, { start: r.from, end: r.to })
    );

  const isRangeReserved = (range: DateRange | undefined) => {
    if (!range?.from || !range?.to) return false;
    // Check if any day in the range is reserved
    let d = new Date(range.from);
    while (d <= range.to) {
      if (isDateReserved(d)) return true;
      d = new Date(d.getTime() + 24 * 60 * 60 * 1000);
    }
    return false;
  };

  return (
    <div className={cn("grid gap-2")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="dates"
            variant="outline"
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !value?.from && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value?.from ? (
              value.to ? (
                <>
                  {format(value.from, "LLL dd, y")} –{" "}
                  {format(value.to, "LLL dd, y")}
                </>
              ) : (
                format(value.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date range</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={value?.from}
            selected={value}
            numberOfMonths={numberOfMonths}
            disabled={disabledDates}
            modifiers={{ reserved: (date) => isDateReserved(date) }}
            modifiersClassNames={{ reserved: "bg-red-200 text-red-700" }}
          />
        </PopoverContent>
      </Popover>
      {isRangeReserved(value) && (
        <span className="text-xs text-red-500 ml-2">
          Selected dates are reserved for this car
        </span>
      )}
    </div>
  );
}
