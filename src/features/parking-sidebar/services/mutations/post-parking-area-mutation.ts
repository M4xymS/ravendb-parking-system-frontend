import { z } from "zod";

import { addParkingAreaSchema } from "@/features/parking-sidebar/helpers/zod";

export const postParkingAreaMutation = async (area: z.infer<typeof addParkingAreaSchema>) => {
  const response = await fetch(`http://localhost:3000/parking-area`, {
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
