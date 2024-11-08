import { FC } from "react";

import { Label } from "@/core/components/ui/label.tsx";

interface SuccessReservationLabelProps {
  label: string;
  value: string | undefined;
}

export const SuccessReservationLabel: FC<SuccessReservationLabelProps> = ({ label, value }) => {
  return (
    <div className="flex items-center gap-2 justify-between">
      <Label className="text-left whitespace-nowrap">{label}:</Label>
      <span className="text-sm break-all text-right">{value}</span>
    </div>
  );
};
