import { z } from "zod";

import { currencyOptions } from "@/core/constants/currency-options.ts";

export const reserveParkingSlotSchema = z
  .object({
    parkingStartTime: z.coerce.date().default(new Date()),
    parkingEndTime: z.coerce.date(),
    currency: z.enum(currencyOptions).default("USD"),
  })
  .refine(data => data.parkingStartTime <= data.parkingEndTime, {
    message: "Parking start time must be before or equal to parking end time.",
    path: ["parkingEndTime"],
  });
