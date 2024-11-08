import { FC, useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/core/components/ui/card.tsx";
import { ParkingArea } from "@/core/types";
import { Label } from "@/core/components/ui/label.tsx";
import { cn } from "@/core/helpers";
import { ContextMenu, ContextMenuTrigger } from "@/core/components/ui/context-menu.tsx";

import { StatusIndicator } from "@/features/parking-sidebar/components/status-indicator/status-indicator.tsx";
import { ParkingAreaContextContent } from "@/features/parking-sidebar/components/parking-area-card/parking-area-context-content.tsx";

interface ParkingCardProps {
  toggleClose: () => void;
  parkingArea: ParkingArea;
}

export const ParkingAreaCard: FC<ParkingCardProps> = ({ parkingArea, toggleClose }) => {
  const { areaId } = useParams();
  const {
    name,
    discountPercentage,
    id,
    address,
    availableSlots,
    weekdayRate,
    weekendRate,
    isOpen,
    floors,
  } = parkingArea;

  const isSelected = useMemo(() => areaId === id, [areaId]); // eslint-disable-line react-hooks/exhaustive-deps

  const calculateDiscountedRate = useCallback(
    (rate: number) => {
      if (discountPercentage > 0) {
        return rate - rate * (discountPercentage / 100);
      }

      return rate;
    },
    [discountPercentage]
  );

  const discountedWeekdayRate = calculateDiscountedRate(weekdayRate);
  const discountedWeekendRate = calculateDiscountedRate(weekendRate);

  return (
    <Link to={encodeURIComponent(id)}>
      <ContextMenu>
        <ContextMenuTrigger asChild>
          <Card
            className={`cursor-pointer mb-4 ${isSelected ? "bg-muted" : ""}`}
            onClick={toggleClose}
          >
            <CardHeader className="p-4">
              <CardTitle className="flex justify-between items-center">
                <span
                  className="truncate mr-6"
                  title={name}
                >
                  {name}
                </span>
                <StatusIndicator status={isOpen} />
              </CardTitle>
              {address && <CardDescription>{address}</CardDescription>}
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex flex-col space-y-2 justify-between">
                <div className="relative flex text-nowrap justify-between text-sm">
                  <Label>Weekday Rate</Label>
                  <div className="flex items-center space-x-4">
                    {discountPercentage > 0 && (
                      <span className="absolute -top-3 right-2 text-xs text-gray-500 line-through">
                        {weekdayRate} $
                      </span>
                    )}
                    <Label
                      className={cn("text-xs font-semibold", {
                        "text-red-500": discountPercentage > 0,
                      })}
                    >
                      {discountedWeekdayRate.toFixed(2)} $ / h
                    </Label>
                  </div>
                </div>
                <div className="relative flex text-nowrap justify-between text-sm">
                  <Label>Weekend Rate</Label>
                  <div className="flex items-center space-x-4">
                    {discountPercentage > 0 && (
                      <span className="absolute -top-3 right-2 text-xs text-gray-500 line-through">
                        {weekendRate} $
                      </span>
                    )}
                    <Label
                      className={cn("text-xs font-semibold", {
                        "text-red-500": discountPercentage > 0,
                      })}
                    >
                      {discountedWeekendRate.toFixed(2)} $ / h
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 flex flex-col">
              <div className="w-full flex justify-between items-center">
                <Label className="w-full">Floors</Label>
                <b className="text-right text-xl">{floors?.length ?? 0}</b>
              </div>
              <div className="w-full flex justify-between items-center">
                <Label className="w-full">Available Slots</Label>
                <b className="text-right text-xl">{availableSlots}</b>
              </div>
            </CardFooter>
          </Card>
        </ContextMenuTrigger>
        <ParkingAreaContextContent parkingArea={parkingArea} />
      </ContextMenu>
    </Link>
  );
};
