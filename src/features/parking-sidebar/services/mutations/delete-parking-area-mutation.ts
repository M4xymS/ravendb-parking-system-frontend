import { z } from "zod";

import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

import { editParkingAreaSchema } from "@/features/parking-sidebar/helpers/zod/parking-area.ts";

export const deleteParkingAreaMutation = async (areaId: string) => {
  if (!areaId) {
    throw new Error("Parking area ID is required");
  }

  const url = `${productionUrl}/parking-area/${encodeURIComponent(areaId)}`;

  return makeHttpRequest<z.infer<typeof editParkingAreaSchema>>(url, "DELETE");
};
