import { ComponentPropsWithoutRef, FC } from "react";

import { Button } from "@/core/components/ui/button.tsx";
import { useToast } from "@/core/hooks";
import {
  ResponsiveModalClose,
  ResponsiveModalFooter,
} from "@/core/components/ui/responsive-modal.tsx";
import { Dialog } from "@/core/components/ui/dialog.tsx";

import { useDeleteParkingFloor } from "@/features/parking-map/services/hooks/delete-parking-floor.tsx";

interface DeleteParkingFloorFormProps extends ComponentPropsWithoutRef<typeof Dialog> {
  parkingFloorId: string;
  parkingAreaId: string;
}

export const DeleteParkingFloorForm: FC<DeleteParkingFloorFormProps> = ({
  onOpenChange,
  parkingFloorId,
  parkingAreaId,
}) => {
  const { toast } = useToast();
  const { mutateAsync, isPending } = useDeleteParkingFloor();

  const deleteParkingArea = async () => {
    try {
      await mutateAsync({ parkingAreaId, parkingFloorId });
      toast({
        title: "Parking floor deleted",
        description: "The parking floor has been successfully deleted",
      });
      onOpenChange?.(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Parking floor deletion failed",
        description: "An error occurred while deleting the parking floor",
      });
    }
  };

  return (
    <ResponsiveModalFooter>
      <ResponsiveModalClose asChild>
        <Button variant="outline">Cancel</Button>
      </ResponsiveModalClose>
      <Button
        onClick={deleteParkingArea}
        isLoading={isPending}
        variant="destructive"
      >
        Delete parking floor
      </Button>
    </ResponsiveModalFooter>
  );
};
