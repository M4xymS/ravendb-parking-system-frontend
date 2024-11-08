export interface ParkingArea {
  id: string;
  name: string;
  createdAt: Date;
  address: string;
  weekdayRate: number;
  weekendRate: number;
  isOpen: boolean;
  modifiedAt: Date;
  deletedAt: Date | null;
  floors: string[];
  discountPercentage: number;
  availableSlots: number;
}
