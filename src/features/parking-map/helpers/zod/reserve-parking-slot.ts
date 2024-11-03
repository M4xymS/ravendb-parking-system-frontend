import { z } from "zod";

export const reserveParkingSlotSchema = z
  .object({
    parkingStartTime: z.coerce.date().default(new Date()),
    parkingEndTime: z.coerce.date(),
    currency: z.enum(["USD", "PLN"]).default("USD"),
  })
  .refine(data => data.parkingStartTime <= data.parkingEndTime, {
    message: "Parking start time must be before or equal to parking end time.",
    path: ["parkingEndTime"],
  });
