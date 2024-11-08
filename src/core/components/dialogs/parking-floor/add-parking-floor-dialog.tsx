import { ComponentPropsWithoutRef, FC } from "react";
import { useParams } from "react-router-dom";

import { Dialog } from "@/core/components/ui/dialog.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { AddParkingFloorForm } from "@/core/components/dialogs/parking-floor/add-parking-floor-form.tsx";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "@/core/components/ui/responsive-modal.tsx";

import { useGetParkingFloorsQuery } from "@/features/parking-map/services/hooks";

interface AddFloorDialogProps extends ComponentPropsWithoutRef<typeof Dialog> {
  showTrigger?: boolean;
}

export const AddParkingFloorDialog: FC<AddFloorDialogProps> = ({ showTrigger, ...props }) => {
  const { areaId } = useParams();
  const { data: parkingFloors } = useGetParkingFloorsQuery(areaId);

  return (
    <ResponsiveModal {...props}>
      {showTrigger && (
        <ResponsiveModalTrigger asChild>
          <Button disabled={(parkingFloors?.length ?? 0) >= 9}>Add Floor</Button>
        </ResponsiveModalTrigger>
      )}
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Add Parking Floor</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Add a new parking floor to the map
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <AddParkingFloorForm onOpenChange={props.onOpenChange} />
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};
