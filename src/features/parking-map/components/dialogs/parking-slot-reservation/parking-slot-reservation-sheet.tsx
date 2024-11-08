import { ComponentPropsWithoutRef, FC } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/core/components/ui/sheet.tsx";

import { ParkingSlotReservationForm } from "@/features/parking-map/components/dialogs/parking-slot-reservation/index.ts";

interface ParkingSlotSheetProps extends ComponentPropsWithoutRef<typeof Sheet> {
  slotId: string;
  slot: string;
}

export const ParkingSlotReservationSheet: FC<ParkingSlotSheetProps> = ({
  slotId,
  slot,
  ...props
}) => {
  return (
    <Sheet {...props}>
      <SheetContent>
        <SheetHeader className="text-left">
          <SheetTitle>Reserve Parking Slot No. {slot}</SheetTitle>
          <SheetDescription>Enter the details to reserve the parking slot</SheetDescription>
        </SheetHeader>
        <ParkingSlotReservationForm
          onOpenChange={props.onOpenChange}
          id={slotId}
        />
      </SheetContent>
    </Sheet>
  );
};
