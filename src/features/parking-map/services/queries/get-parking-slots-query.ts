import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

export const getParkingSlotsQuery = async <T>(parkingAreaId: string, parkingFloorId: string) => {
  if (!parkingAreaId || !parkingFloorId) {
    throw new Error("Invalid parking area or floor id");
  }

  const url = `${productionUrl}/parking-slots/${encodeURIComponent(parkingAreaId)}/${encodeURIComponent(parkingFloorId)}`;

  return makeHttpRequest<object, T>(url, "GET");
};
