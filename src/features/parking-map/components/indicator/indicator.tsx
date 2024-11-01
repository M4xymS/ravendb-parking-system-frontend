import { FC } from "react";

interface IndicatorProps {
  type: "enter" | "exit";
}

export const Indicator: FC<IndicatorProps> = ({ type }) => {
  const indicatorType =
    type === "enter"
      ? {
          className: "text-green-500 top-0",
          text: "Enter",
          indicatorClassName: "bg-green-500",
        }
      : {
          className: "text-red-500 bottom-0",
          text: "Exit",
          indicatorClassName: "bg-red-500",
        };

  return (
    <div
      className={`absolute -right-0 font-bold flex space-x-4 items-center ${indicatorType.className}`}
    >
      <span>{indicatorType.text}</span>
      <div
        className={`${indicatorType.indicatorClassName} w-2 drop-shadow-2xl rounded-l-lg h-16`}
      />
    </div>
  );
};
