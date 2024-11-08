import { ComponentPropsWithoutRef, FC } from "react";
import { PlusIcon } from "lucide-react";
import { useParams } from "react-router-dom";

import { Dialog } from "@/core/components/ui/dialog.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { AddParkingSlotForm } from "@/core/components/header";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "@/core/components/ui/responsive-modal.tsx";

interface AddParkingSlotDialogProps extends ComponentPropsWithoutRef<typeof Dialog> {
  showTrigger?: boolean;
}

export const AddParkingSlotDialog: FC<AddParkingSlotDialogProps> = ({ showTrigger, ...props }) => {
  const { floorId } = useParams();

  return (
    <ResponsiveModal {...props}>
      {showTrigger && (
        <ResponsiveModalTrigger asChild>
          <Button
            disabled={!floorId}
            size="icon"
            variant="outline"
          >
            <PlusIcon className="size-6" />
          </Button>
        </ResponsiveModalTrigger>
      )}
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Add Parking Slot</ResponsiveModalTitle>
          <ResponsiveModalDescription>Add a new parking slot to the map</ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <AddParkingSlotForm onOpenChange={props.onOpenChange} />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};
