export interface ParkingSlot {
  id: string;
  letter: string;
  number: number;
  reservationId?: string;
  isOccupied: boolean;
  parkingStartTime: Date | null;
  parkingEndTime: Date | null;
  createdAt: Date;
  modifiedAt: Date;
  deletedAt: Date | null;
  disabled: boolean;
  parkingFloorId: string;
  parkingAreaId: string;
  totalReservationCost: number;
}
