import { z } from "zod";

import { editParkingFloorSchema } from "@/core/helpers/zod";

export const editParkingFloorMutation = async (
  areaId: string,
  floorId: string,
  floor: z.infer<typeof editParkingFloorSchema>
) => {
  const response = await fetch(
    `http://localhost:3000/parking-floor/${encodeURIComponent(areaId)}/floors/${encodeURIComponent(floorId)}`,
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
