import { FC } from "react";

import { cn } from "@/core/helpers";

interface IndicatorProps {
  type: "enter" | "exit";
}

export const Indicator: FC<IndicatorProps> = ({ type }) => (
  <div
    className={cn(
      "absolute -right-0 font-bold flex space-x-4 items-center",
      type === "enter" ? "text-green-500 top-0" : "text-red-500 bottom-0"
    )}
  >
    <span>{type === "enter" ? "Enter" : "Exit"}</span>
    <div
      className={cn(
        "w-2 drop-shadow-2xl rounded-l-lg h-16",
        type === "enter" ? "bg-green-500" : "bg-red-500"
      )}
    />
  </div>
);
