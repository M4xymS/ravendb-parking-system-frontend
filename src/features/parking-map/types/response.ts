import { ParkingSlot } from "@/core/types";

export interface DeleteParkingSlotResponse {
  success: boolean;
  message: string;
  slot: ParkingSlot;
}

export interface DeleteParkingFloorResponse {
  success: boolean;
  message: string;
}
