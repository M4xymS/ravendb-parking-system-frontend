import { z } from "zod";

import { editParkingSlotSchema } from "@/core/helpers/zod";
import { makeHttpRequest } from "@/core/helpers";
import { ParkingSlot } from "@/core/types";

export const editParkingSlotMutation = async (
  slotId: string,
  slot: z.infer<typeof editParkingSlotSchema>
) => {
  const url = `http://localhost:3000/parking-slots/${encodeURIComponent(slotId)}`;

  return makeHttpRequest<z.infer<typeof editParkingSlotSchema>, ParkingSlot>(url, "PUT", slot);
};
