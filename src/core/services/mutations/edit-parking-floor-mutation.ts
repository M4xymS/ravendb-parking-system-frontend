import { z } from "zod";

import { editParkingFloorSchema } from "@/core/helpers/zod";
import { productionUrl } from "@/core/constants/url-type.ts";

export const editParkingFloorMutation = async (
  areaId: string,
  floorId: string,
  floor: z.infer<typeof editParkingFloorSchema>
) => {
  const response = await fetch(
    `${productionUrl}/parking-floor/${encodeURIComponent(areaId)}/floors/${encodeURIComponent(floorId)}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(floor),
    }
  );

  if (!response.ok) {
    throw new Error("Error editing parking floor");
  }

  return response.json();
};
