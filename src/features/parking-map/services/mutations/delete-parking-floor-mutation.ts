import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

import { DeleteParkingFloorResponse } from "@/features/parking-map/types/response.ts";

export const deleteParkingFloorMutation = async (areaId: string, floorId: string) => {
  const url = `${productionUrl}/parking-floor/${encodeURIComponent(areaId)}/floors/${encodeURIComponent(floorId)}`;

  return makeHttpRequest<object, DeleteParkingFloorResponse>(url, "DELETE");
};
