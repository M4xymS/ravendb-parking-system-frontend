import { ComponentPropsWithoutRef, FC } from "react";

import { Button } from "@/core/components/ui/button.tsx";
import { useToast } from "@/core/hooks";
import { Sheet } from "@/core/components/ui/sheet.tsx";
import {
  ResponsiveModalClose,
  ResponsiveModalFooter,
} from "@/core/components/ui/responsive-modal.tsx";

import { useDeleteParkingAreas } from "@/features/parking-sidebar/services/hooks/delete-parking-areas.tsx";

interface DeleteParkingAreaFormProps extends ComponentPropsWithoutRef<typeof Sheet> {
  areaId: string;
}

export const DeleteParkingAreaForm: FC<DeleteParkingAreaFormProps> = ({ onOpenChange, areaId }) => {
  const { toast } = useToast();
  const { mutateAsync, isPending } = useDeleteParkingAreas();

  const deleteParkingArea = async () => {
    try {
      await mutateAsync(areaId);
      toast({
        title: "Parking area deleted",
        description: "The parking area has been successfully deleted",
      });
      onOpenChange?.(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Parking area deletion failed",
        description: "An error occurred while deleting the parking area",
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
        Delete parking area
      </Button>
    </ResponsiveModalFooter>
  );
};
