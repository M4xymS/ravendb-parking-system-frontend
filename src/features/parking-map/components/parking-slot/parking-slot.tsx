import { FC, useState } from "react";

import { cn } from "@/core/helpers";

import { ParkingSlotSheet } from "@/features/parking-map/components/parking-slot/parking-slot-sheet.tsx";

interface ParkingSlotProps {
  slot: string;
  id: number;
  isOccupied: boolean;
  index: number;
}

export const ParkingSlot: FC<ParkingSlotProps> = ({ slot, isOccupied, index, id }) => {
  const [showReserveParkingSlotSheet, setShowReserveParkingSlotSheet] = useState(false);

  return (
    <>
      <ParkingSlotSheet
        open={showReserveParkingSlotSheet}
        onOpenChange={setShowReserveParkingSlotSheet}
        slotId={id}
        slot={slot}
      />
      <button
        className={cn(
          "relative group hover:bg-muted w-24 transition-colors h-12 border flex items-center justify-center",
          {
            "border-r-0": index % 2 === 1,
            "border-l-0": index % 2 === 0,
          }
        )}
        onClick={!isOccupied ? () => setShowReserveParkingSlotSheet(true) : undefined}
      >
        {isOccupied ? (
          <img
            src="/assets/car-template-light.png"
            alt="car-template"
            className={cn("", { "rotate-180": index % 2 === 1 })}
          />
        ) : (
          <span className="text-xs group-hover:text-black font-medium text-gray-400">{slot}</span>
        )}
      </button>
    </>
  );
};
