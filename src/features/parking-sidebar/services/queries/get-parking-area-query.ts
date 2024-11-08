import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

export const getParkingAreasQuery = async <T>() => {
  const url = `${productionUrl}/parking-area`;

  return makeHttpRequest<object, T>(url, "GET");
};
