export interface ParkingFloor {
  id: string;
  letter: string;
  number: number;
  modifiedAt: Date;
  createdAt: Date;
  parkingAreaId: string;
  deletedAt: Date | null;
  parkingSlots: string[];
}

export interface ParkingFloorStatus {
  availableSlots: number;
  totalSlots: number;
}
