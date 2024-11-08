import { ComponentPropsWithoutRef, FC } from "react";

import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from "@/core/components/ui/responsive-modal.tsx";
import { ParkingArea } from "@/core/types";

import { EditParkingAreaForm } from "@/features/parking-sidebar/components/parking-area-card/edit-parking-area-form.tsx";

interface EditParkingAreaDialogProps extends ComponentPropsWithoutRef<typeof ResponsiveModal> {
  parkingArea: ParkingArea;
}

export const EditParkingAreaDialog: FC<EditParkingAreaDialogProps> = ({ ...props }) => {
  return (
    <ResponsiveModal {...props}>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Edit parking area</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Edit the details of the parking area
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <EditParkingAreaForm
          parkingArea={props.parkingArea}
          onOpenChange={props.onOpenChange}
        />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};
