import { z } from "zod";

import { parkingFloorSchema } from "@/core/helpers/zod";
import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

export const postParkingFloorMutation = async (
  areaId: string | undefined,
  floor: z.infer<typeof parkingFloorSchema>
) => {
  if (!areaId) {
    throw new Error("Area ID is required");
  }

  const url = `${productionUrl}/parking-floor/${encodeURIComponent(areaId)}`;

  return makeHttpRequest<z.infer<typeof parkingFloorSchema>, unknown>(url, "POST", floor);
};
