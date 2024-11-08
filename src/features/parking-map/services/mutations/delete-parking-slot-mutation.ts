import { makeHttpRequest } from "@/core/helpers";

import { DeleteParkingSlotResponse } from "@/features/parking-map/types/response.ts";

export const deleteParkingSlotMutation = async (slotId: string) => {
  const url = `http://localhost:3000/parking-slots/${encodeURIComponent(slotId)}`;

  return makeHttpRequest<object, DeleteParkingSlotResponse>(url, "DELETE");
};
