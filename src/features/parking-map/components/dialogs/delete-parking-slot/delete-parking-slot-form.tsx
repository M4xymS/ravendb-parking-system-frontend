import { ComponentPropsWithoutRef, FC } from "react";

import { Button } from "@/core/components/ui/button.tsx";
import { useToast } from "@/core/hooks";
import {
  ResponsiveModalClose,
  ResponsiveModalFooter,
} from "@/core/components/ui/responsive-modal.tsx";
import { Dialog } from "@/core/components/ui/dialog.tsx";

import { useDeleteParkingSlot } from "@/features/parking-map/services/hooks";

interface DeleteParkingSlotFormProps extends ComponentPropsWithoutRef<typeof Dialog> {
  slotId: string;
}

export const DeleteParkingSlotForm: FC<DeleteParkingSlotFormProps> = ({ onOpenChange, slotId }) => {
  const { toast } = useToast();
  const { mutateAsync, isPending } = useDeleteParkingSlot();

  const deleteParkingSlot = async () => {
    try {
      await mutateAsync(slotId);
      toast({
        title: "Parking slot deleted",
        description: "The parking slot has been successfully deleted",
      });
      onOpenChange?.(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Parking slot deletion failed",
        description: "An error occurred while deleting the parking slot",
      });
    }
  };

  return (
    <ResponsiveModalFooter>
      <ResponsiveModalClose asChild>
        <Button variant="outline">Cancel</Button>
      </ResponsiveModalClose>
      <Button
        onClick={deleteParkingSlot}
        isLoading={isPending}
        variant="destructive"
      >
        Delete parking slot
      </Button>
    </ResponsiveModalFooter>
  );
};
