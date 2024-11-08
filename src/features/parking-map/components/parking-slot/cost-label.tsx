import { FC } from "react";

import { cn } from "@/core/helpers";

interface CostLabelProps {
  cost: number;
  alignLeft: boolean;
}

export const CostLabel: FC<CostLabelProps> = ({ cost, alignLeft }) => (
  <span
    className={cn("absolute font-semibold text-xs", {
      "-left-6 -rotate-90": alignLeft,
      "-right-6 -rotate-90": !alignLeft,
    })}
  >
    {cost.toFixed(2)} $
  </span>
);
