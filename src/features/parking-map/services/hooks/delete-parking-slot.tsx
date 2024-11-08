import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteParkingSlotMutation } from "@/features/parking-map/services/mutations/delete-parking-slot-mutation.ts";
import { getParkingSlotsQueryKey } from "@/features/parking-map/services/hooks/get-parking-slots.tsx";
import { DeleteParkingSlotResponse } from "@/features/parking-map/types/response.ts";

export const useDeleteParkingSlot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (slotId: string) => deleteParkingSlotMutation(slotId),
    onSuccess: async (data: DeleteParkingSlotResponse) => {
      await queryClient.invalidateQueries({
        queryKey: [getParkingSlotsQueryKey, data.slot.parkingAreaId, data.slot.parkingFloorId],
      });
    },
  });
};
