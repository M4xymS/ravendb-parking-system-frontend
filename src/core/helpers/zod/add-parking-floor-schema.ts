import { z } from "zod";

export const addParkingFloorSchema = z.object({
  name: z.string(),
});
