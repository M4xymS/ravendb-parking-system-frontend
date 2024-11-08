import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

export const getParkingSlotByIdQuery = async <T>(parkingSlotId: string) => {
  if (!parkingSlotId) {
    throw new Error("Invalid parking area or floor id");
  }

  const url = `${productionUrl}/parking-slots/${encodeURIComponent(parkingSlotId)}`;

  return makeHttpRequest<object, T>(url);
};
