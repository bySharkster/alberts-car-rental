import React from "react";

import getVehiclesAction from "@/app/actions/vehicle/getVehiclesAction";
import Fleet from "@/components/organisms/fleet/Fleet";

export default async function FleetPage() {
  // SSR-compatible fetch function

  const vehicles = await getVehiclesAction();

  return <Fleet vehicles={vehicles} />;
}
