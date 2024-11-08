import { currencyOptions } from "@/core/constants/currency-options.ts";
import { ParkingSlot } from "@/core/types/parking-slot.ts";

export interface ParkingReservation {
  parkingStartTime: Date;
  parkingEndTime: Date;
  currency: (typeof currencyOptions)[number];
  id: string;
  parkingSlotId: ParkingSlot["id"];
  createdAt: Date;
  totalCost: number;
}
