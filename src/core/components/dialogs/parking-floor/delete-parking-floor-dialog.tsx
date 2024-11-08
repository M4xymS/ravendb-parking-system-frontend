import { ComponentPropsWithoutRef, FC } from "react";

import { Dialog } from "@/core/components/ui/dialog.tsx";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from "@/core/components/ui/responsive-modal.tsx";
import { DeleteParkingFloorForm } from "@/core/components/dialogs/parking-floor/delete-parking-floor-form.tsx";

interface DeleteParkingFloorDialogProps extends ComponentPropsWithoutRef<typeof Dialog> {
  id: string;
  areaId: string;
}

export const DeleteParkingFloorDialog: FC<DeleteParkingFloorDialogProps> = ({ ...props }) => {
  return (
    <ResponsiveModal {...props}>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Delete Parking Floor</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Are you sure you want to delete this parking floor? This action will cause all parking
            slots to be deleted as well.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <DeleteParkingFloorForm
          onOpenChange={props.onOpenChange}
          parkingFloorId={props.id}
          parkingAreaId={props.areaId}
        />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};
