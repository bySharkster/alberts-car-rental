import React from "react";

import Fleet from "@/components/organisms/fleet/Fleet";
import getVehiclesAction, { getImagesByVehicleId, type VehicleWithImages } from "@/app/actions/vehicle/getVehiclesAction";

export default async function FleetPage() {
  // SSR-compatible fetch function

  const vehicles = await getVehiclesAction();

  const vehicleImages = await Promise.all(
    vehicles.map((vehicle: VehicleWithImages) => getImagesByVehicleId(vehicle.id))
  );

  const vehiclesWithImages: VehicleWithImages[] = vehicles.map((vehicle: VehicleWithImages, index: number) => ({
    ...vehicle,
    images: vehicleImages[index].images,
  }));

  return <Fleet vehicles={vehiclesWithImages} />;
}
