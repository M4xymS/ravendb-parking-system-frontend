import { FC } from "react";

import { ParkingSlot } from "@/core/types";

import { ParkingSlot as ParkingSlotsComponent } from "@/features/parking-map/components/parking-slot";

interface ParkingRowProps {
  row: ParkingSlot[];
}

export const ParkingRow: FC<ParkingRowProps> = ({ row }) => {
  return (
    <div className="grid grid-cols-2">
      {row.map((slot, index) => (
        <ParkingSlotsComponent
          key={slot.id}
          {...slot}
          slot={slot.letter + slot.number}
          index={index}
        />
      ))}
    </div>
  );
};
