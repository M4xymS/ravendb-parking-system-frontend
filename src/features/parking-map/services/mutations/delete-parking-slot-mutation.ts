import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

import { DeleteParkingSlotResponse } from "@/features/parking-map/types/response.ts";

export const deleteParkingSlotMutation = async (slotId: string) => {
  const url = `${productionUrl}/parking-slots/${encodeURIComponent(slotId)}`;

  return makeHttpRequest<object, DeleteParkingSlotResponse>(url, "DELETE");
};
