export interface ParkingSlot {
  slotId: string;
  areaId: string;
  isOccupied: boolean;
  carId: string | null;
}
