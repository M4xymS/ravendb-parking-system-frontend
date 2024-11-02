import { FC } from "react";

interface StatusIndicatorProps {
  status: "open" | "closed";
}

export const StatusIndicator: FC<StatusIndicatorProps> = ({ status }) => (
  <div className="relative flex size-2">
    {status === "open" ? (
      <>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full size-2 bg-green-500" />
      </>
    ) : (
      <span className="relative inline-flex rounded-full size-2 bg-red-400" />
    )}
  </div>
);
