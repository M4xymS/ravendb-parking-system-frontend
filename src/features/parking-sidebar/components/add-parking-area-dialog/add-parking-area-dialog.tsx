import { ComponentPropsWithoutRef, FC } from "react";

import { Dialog } from "@/core/components/ui/dialog.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "@/core/components/ui/responsive-modal.tsx";

import { AddParkingAreaForm } from "@/features/parking-sidebar/components/add-parking-area-dialog/add-parking-area-form.tsx";

interface AddParkingAreaDialogProps extends ComponentPropsWithoutRef<typeof Dialog> {
  showTrigger?: boolean;
}

export const AddParkingAreaDialog: FC<AddParkingAreaDialogProps> = ({ showTrigger, ...props }) => {
  return (
    <ResponsiveModal {...props}>
      {showTrigger && (
        <ResponsiveModalTrigger asChild>
          <Button
            variant="outline"
            size="sm"
          >
            Add
          </Button>
        </ResponsiveModalTrigger>
      )}
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Add parking area</ResponsiveModalTitle>
          <ResponsiveModalDescription>Add a new parking area to the map</ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <AddParkingAreaForm onOpenChange={props.onOpenChange} />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};
