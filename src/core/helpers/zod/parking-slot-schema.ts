import { z } from "zod";

import { generateAlphabetArray } from "@/core/helpers/array-utils.ts";

export const parkingSlotSchema = z.object({
  letter: z.enum(generateAlphabetArray() as [string, ...string[]]).default("A"),
  number: z
    .string()
    .refine(
      val => {
        const num = Number(val);

        return Number.isInteger(num) && num >= 1 && num <= 300;
      },
      {
        message: "Floor number must be an integer between 1 and 300",
      }
    )
    .default("1"),
});

export const editParkingSlotSchema = parkingSlotSchema;
