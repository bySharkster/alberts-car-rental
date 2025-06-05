import React from "react";

import getVehiclesAction, {
  getImagesByVehicleId,
} from "@/app/actions/vehicle/getVehiclesAction";
import Fleet from "@/components/organisms/fleet/Fleet";

export default async function FleetPage() {
  // SSR-compatible fetch function

  const vehicles = await getVehiclesAction();

  const vehicleImages = await Promise.all(
    vehicles.map((vehicle) => getImagesByVehicleId(vehicle.id))
  );

  const vehiclesWithImages = vehicles.map((vehicle, index) => ({
    ...vehicle,
    images: vehicleImages[index].images,
  }));

  return <Fleet vehicles={vehiclesWithImages} />;
}
