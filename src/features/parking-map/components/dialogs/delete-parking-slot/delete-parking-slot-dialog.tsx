import { ComponentPropsWithoutRef, FC } from "react";

import { Dialog } from "@/core/components/ui/dialog.tsx";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from "@/core/components/ui/responsive-modal.tsx";

import { DeleteParkingSlotForm } from "@/features/parking-map/components/dialogs/delete-parking-slot/delete-parking-slot-form.tsx";

interface DeleteParkingSlotDialogProps extends ComponentPropsWithoutRef<typeof Dialog> {
  slotId: string;
}

export const DeleteParkingSlotDialog: FC<DeleteParkingSlotDialogProps> = ({ ...props }) => {
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
        <DeleteParkingSlotForm
          onOpenChange={props.onOpenChange}
          slotId={props.slotId}
        />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};
