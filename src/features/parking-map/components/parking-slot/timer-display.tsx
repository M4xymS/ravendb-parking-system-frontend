import { FC } from "react";
import { format } from "date-fns";

import { TooltipContent } from "@/core/components/ui/tooltip.tsx";

import { useCountdown } from "@/features/parking-map/hooks";

interface TimerDisplayProps {
  startTime: Date | null;
  endTime: Date | null;
}

export const TimerDisplay: FC<TimerDisplayProps> = ({ startTime, endTime }) => {
  const secondsLeft = useCountdown(endTime);
  const hours = Math.floor(secondsLeft / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  return (
    <TooltipContent className="flex flex-col items-center space-y-4">
      {startTime && endTime ? (
        <>
          <p className="text-xs font-semibold">
            {format(startTime, "HH:mm")} - {format(endTime, "HH:mm")}
          </p>
          <p>
            Time left: {hours}h {minutes}m {seconds}s
          </p>
        </>
      ) : (
        <p>Time not set</p>
      )}
    </TooltipContent>
  );
};
