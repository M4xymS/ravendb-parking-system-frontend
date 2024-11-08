import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

export const getParkingFloorStatusQuery = async <T>(parkingAreaId: string, floorId: string) => {
  if (!parkingAreaId || !floorId) {
    throw new Error("Invalid parking area or floor id");
  }
  const url = `${productionUrl}/parking-floor/${encodeURIComponent(parkingAreaId)}/floors/${encodeURIComponent(floorId)}/status`;

  return makeHttpRequest<object, T>(url, "GET");
};
