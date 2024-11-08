import { FC, ReactNode, useMemo } from "react";

import { cn } from "@/core/helpers";

import { CostLabel } from "@/features/parking-map/components/parking-slot/cost-label.tsx";
import { useCountdown } from "@/features/parking-map/hooks";
import { getHighlightColor } from "@/features/parking-map/helpers";
import { TimerDisplay } from "@/features/parking-map/components/parking-slot/timer-display.tsx";

interface SlotButtonProps {
  slot: string;
  index: number;
  isOccupied: boolean;
  onReserve: () => void;
  children?: ReactNode;
  totalReservationCost?: number;
  parkingEndTime: Date | null;
  parkingStartTime: Date | null;
}

export const SlotButton: FC<SlotButtonProps> = ({
  slot,
  index,
  isOccupied,
  onReserve,
  totalReservationCost,
  parkingEndTime,
  parkingStartTime,
}) => {
  const secondsLeft = useCountdown(parkingEndTime);

  const highlightColor = useMemo(() => getHighlightColor(secondsLeft), [secondsLeft]);

  return (
    <button
      className={cn(
        "relative group w-24 h-12 flex items-center justify-center border transition-colors hover:bg-gray-100 ease-in-out duration-200",
        highlightColor,
        {
          "border-r-0": index % 2 === 1,
          "border-l-0": index % 2 === 0,
          "cursor-not-allowed": isOccupied,
        }
      )}
      onClick={!isOccupied ? onReserve : undefined}
    >
      {isOccupied ? (
        <>
          <img
            src="/assets/car-template-light.png"
            alt="car"
            className={cn({ "rotate-180": index % 2 === 1 })}
          />
          {totalReservationCost && (
            <CostLabel
              cost={totalReservationCost}
              alignLeft={index % 2 === 0}
            />
          )}
          {isOccupied && (
            <TimerDisplay
              startTime={parkingStartTime}
              endTime={parkingEndTime}
            />
          )}
        </>
      ) : (
        <span className="text-xs group-hover:text-black font-medium text-gray-400">{slot}</span>
      )}
    </button>
  );
};
