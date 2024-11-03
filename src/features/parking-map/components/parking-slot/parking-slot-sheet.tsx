import { ComponentPropsWithoutRef, FC } from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/core/components/ui/sheet.tsx";

import { ParkingSlotForm } from "@/features/parking-map/components/parking-slot/parking-slot-form.tsx";

interface ParkingSlotSheetProps extends ComponentPropsWithoutRef<typeof Sheet> {
  slotId: number;
  slot: string;
}

export const ParkingSlotSheet: FC<ParkingSlotSheetProps> = ({ slotId, slot, ...props }) => {
  return (
    <Sheet {...props}>
      <SheetContent>
        <SheetHeader className="text-left">
          <SheetTitle>Reserve Parking Slot No. {slot}</SheetTitle>
          <SheetDescription>Enter the details to reserve the parking slot</SheetDescription>
        </SheetHeader>
        <ParkingSlotForm id={slotId} />
      </SheetContent>
    </Sheet>
  );
};
