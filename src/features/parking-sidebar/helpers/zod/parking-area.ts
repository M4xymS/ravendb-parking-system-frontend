import { z } from "zod";

export const addParkingAreaSchema = z.object({
  name: z.string(),
  address: z.string().optional(),
  weekdayRate: z.coerce.number().min(0),
  weekendRate: z.coerce.number().min(0),
  discountPercentage: z.coerce.number().min(0).max(100).default(0),
});

export const editParkingAreaSchema = addParkingAreaSchema;
