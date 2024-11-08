import { ComponentPropsWithoutRef, FC } from "react";

import { Dialog } from "@/core/components/ui/dialog.tsx";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
} from "@/core/components/ui/responsive-modal.tsx";

import { DeleteParkingAreaForm } from "@/features/parking-sidebar/components/parking-area-card/delete-parking-area-form.tsx";

interface DeleteParkingAreaDialogProps extends ComponentPropsWithoutRef<typeof Dialog> {
  id: string;
}

export const DeleteParkingAreaDialog: FC<DeleteParkingAreaDialogProps> = ({ ...props }) => {
  return (
    <ResponsiveModal {...props}>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Delete parking area</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Are you sure you want to delete this parking area? It will be permanently removed from
            the map with floors and slots.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <DeleteParkingAreaForm
          onOpenChange={props.onOpenChange}
          areaId={props.id}
        />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};
