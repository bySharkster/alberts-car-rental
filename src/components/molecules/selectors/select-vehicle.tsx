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
import type { Vehicle } from "../../../../prisma/generated/client";

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
      <Label htmlFor="vehicle" className="mb-1 font-normal">
        Select a vehicle:
      </Label>
      {vehicles.length === 0 ? (
        <>
          <Select disabled>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="No vehicles available" />
            </SelectTrigger>
          </Select>
          <p className="mt-2 max-w-[280px] text-red-500">
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
