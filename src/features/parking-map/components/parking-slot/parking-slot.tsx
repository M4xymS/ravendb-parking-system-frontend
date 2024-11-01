import { FC } from "react";

import { cn } from "@/core/helpers";

interface ParkingSlotProps {
  slot: string;
  isOccupied: boolean;
  index: number;
}

export const ParkingSlot: FC<ParkingSlotProps> = ({ slot, isOccupied, index }) => {
  return (
    <button
      className={cn("relative w-24 h-12 border flex items-center justify-center", {
        "border-r-0": index % 2 === 1,
        "border-l-0": index % 2 === 0,
      })}
    >
      {isOccupied ? (
        <img
          src="/assets/car-template-light.png"
          alt="car-template"
          className={cn("", { "rotate-180": index % 2 === 1 })}
        />
      ) : (
        <span className="text-xs font-medium text-gray-400">{slot}</span>
      )}
    </button>
  );
};
