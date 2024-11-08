import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

export const getParkingFloorsQuery = async <T>(parkingAreaId: string) => {
  if (!parkingAreaId) {
    throw new Error("Invalid parking area id");
  }

  const url = `${productionUrl}/parking-floor/${encodeURIComponent(parkingAreaId)}`;

  return makeHttpRequest<object, T>(url, "GET");
};
