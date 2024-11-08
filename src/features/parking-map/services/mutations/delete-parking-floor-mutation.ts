import { makeHttpRequest } from "@/core/helpers";

import { DeleteParkingFloorResponse } from "@/features/parking-map/types/response.ts";

export const deleteParkingFloorMutation = async (areaId: string, floorId: string) => {
  const url = `http://localhost:3000/parking-floor/${encodeURIComponent(areaId)}/floors/${encodeURIComponent(floorId)}`;

  return makeHttpRequest<object, DeleteParkingFloorResponse>(url, "DELETE");
};
