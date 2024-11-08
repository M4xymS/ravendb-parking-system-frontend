import { z } from "zod";

import { productionUrl } from "@/core/constants/url-type.ts";

import { addParkingAreaSchema } from "@/features/parking-sidebar/helpers/zod";

export const postParkingAreaMutation = async (area: z.infer<typeof addParkingAreaSchema>) => {
  const response = await fetch(`${productionUrl}/parking-area`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(area),
  });

  if (!response.ok) {
    throw new Error("Error adding parking area");
  }

  return response.json();
};
