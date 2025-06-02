"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Vehicle } from "@prisma/client";

interface SelectVehicleProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle | undefined) => void;
}

export default function SelectVehicle({
  vehicles,
  onSelectVehicle,
}: SelectVehicleProps) {
  const vehiclesByMake = vehicles.reduce(
    (acc, vehicle) => {
      const make = vehicle.make;
      if (!acc[make]) {
        acc[make] = [];
      }
      acc[make].push(vehicle);
      return acc;
    },
    {} as Record<string, Vehicle[]>
  );

  return (
    <div>
      <Label htmlFor="vehicle" className="font-normal mb-1">
        Select a vehicle:
      </Label>
      {vehicles.length === 0 ? (
        <>
          <Select disabled>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="No vehicles available" />
            </SelectTrigger>
          </Select>
          <p className="text-red-500 max-w-[280px] mt-2">
            No vehicles available
          </p>
        </>
      ) : (
        <Select
          onValueChange={(value) => {
            const vehicle = vehicles.find(
              (vehicle) => vehicle.id === Number(value)
            );
            if (vehicle) {
              onSelectVehicle(vehicle);
            }
          }}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a vehicle" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(vehiclesByMake).map(([make, vehicles]) => (
              <SelectGroup key={make}>
                <SelectLabel>{make}</SelectLabel>
                {vehicles.map((vehicle) => (
                  <SelectItem key={vehicle.id} value={vehicle.id.toString()}>
                    {vehicle.model} {vehicle.year}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
