import { FC } from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/card.tsx";

import { StatusIndicator } from "@/features/parking-sidebar/components/status-indicator/status-indicator.tsx";

interface ParkingCardProps {
  id: number;
  name: string;
  availableSpots: number;
  status: "open" | "closed";
  address?: string;
  isSelected: boolean;
  toggleSelection: () => void;
}

export const ParkingCard: FC<ParkingCardProps> = ({
  name,
  availableSpots,
  status,
  address,
  isSelected,
  toggleSelection,
}) => {
  return (
    <Card
      className={`cursor-pointer mb-4 ${isSelected ? "bg-muted" : ""}`}
      onClick={toggleSelection}
    >
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{name}</span>
          <StatusIndicator status={status} />
        </CardTitle>
        {address && <CardDescription>{address}</CardDescription>}
      </CardHeader>
      <CardFooter className="text-right">
        <b className="w-full text-xl">{availableSpots}</b>
      </CardFooter>
    </Card>
  );
};
