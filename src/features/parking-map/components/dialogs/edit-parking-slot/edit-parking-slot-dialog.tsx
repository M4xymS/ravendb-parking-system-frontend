import { ComponentPropsWithoutRef, FC } from "react";

import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from "@/core/components/ui/responsive-modal.tsx";
import { ParkingSlot } from "@/core/types";

import { EditParkingSlotForm } from "@/features/parking-map/components/dialogs/edit-parking-slot/edit-parking-slot-form.tsx";

interface EditParkingSlotDialogProps extends ComponentPropsWithoutRef<typeof ResponsiveModal> {
  parkingSlot: ParkingSlot;
}

export const EditParkingSlotDialog: FC<EditParkingSlotDialogProps> = ({ ...props }) => {
  return (
    <ResponsiveModal {...props}>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>
            Edit parking slot no. {props.parkingSlot.letter + props.parkingSlot.number}
          </ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Edit the details of the parking slot
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <EditParkingSlotForm
          onOpenChange={props.onOpenChange}
          parkingSlot={props.parkingSlot}
        />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};
