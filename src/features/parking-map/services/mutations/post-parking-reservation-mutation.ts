import { z } from "zod";

import { makeHttpRequest } from "@/core/helpers";
import { ParkingReservation } from "@/core/types/parking-reservation.ts";
import { productionUrl } from "@/core/constants/url-type.ts";

import { reserveParkingSlotSchema } from "@/features/parking-map/helpers/zod";

export const postParkingReservationMutation = async (
  areaId?: string,
  floorId?: string,
  slotId?: string,
  body?: z.infer<typeof reserveParkingSlotSchema>
) => {
  if (!areaId || !floorId || !slotId) {
    throw new Error("Area ID, Floor ID, and Slot ID are required");
  }

  if (!body) {
    throw new Error("Reservation details are required");
  }

  const url = `${productionUrl}/parking-slots/${encodeURIComponent(areaId)}/${encodeURIComponent(floorId)}/${encodeURIComponent(slotId)}/reserve`;

  return makeHttpRequest<z.infer<typeof reserveParkingSlotSchema>, ParkingReservation>(
    url,
    "POST",
    body
  );
};
