import { ComponentPropsWithoutRef, FC } from "react";

import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from "@/core/components/ui/responsive-modal.tsx";
import { ParkingFloor } from "@/core/types";
import { EditParkingFloorForm } from "@/core/components/dialogs/parking-floor/edit-parking-floor-form.tsx";

interface EditParkingFloorDialogProps extends ComponentPropsWithoutRef<typeof ResponsiveModal> {
  parkingFloor: ParkingFloor;
}

export const EditParkingFloorDialog: FC<EditParkingFloorDialogProps> = ({ ...props }) => {
  return (
    <ResponsiveModal {...props}>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Edit parking area</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Edit the details of the parking area
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <EditParkingFloorForm
          onOpenChange={props.onOpenChange}
          parkingFloor={props.parkingFloor}
        />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};
