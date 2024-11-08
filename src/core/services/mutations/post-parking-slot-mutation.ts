import { z } from "zod";

import { parkingSlotSchema } from "@/core/helpers/zod";

export const postParkingSlotMutation = async (
  areaId: string | undefined,
  floorId: string | undefined,
  slot: z.infer<typeof parkingSlotSchema>
) => {
  if (!areaId) {
    throw new Error("Area ID is required");
  }

  if (!floorId) {
    throw new Error("Floor ID is required");
  }

  const response = await fetch(
    `http://localhost:3000/parking-slots/${encodeURIComponent(areaId)}/${encodeURIComponent(floorId)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(slot),
    }
  );

  if (!response.ok) {
    throw new Error("Error adding parking slot");
  }

  return response.json();
};
