import { FC } from "react";

import { ParkingSlot } from "@/features/parking-map/components/parking-slot/parking-slot.tsx";

interface ParkingRowProps {
  row: string[];
  parkedCars: string[];
}

export const ParkingRow: FC<ParkingRowProps> = ({ row, parkedCars }) => {
  return (
    <div className="grid grid-cols-2">
      {row.map((slot, index) => (
        <ParkingSlot
          key={index}
          slot={slot}
          isOccupied={parkedCars.includes(slot)}
          index={index}
        />
      ))}
    </div>
  );
};
