import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { ParkingSlot } from "@/core/types";
import { editParkingSlotSchema } from "@/core/helpers/zod";

import { editParkingSlotMutation } from "@/features/parking-map/services/mutations/edit-parking-slot-mutation.ts";
import { getParkingSlotsQueryKey } from "@/features/parking-map/services/hooks/get-parking-slots.tsx";

interface UpdateParkingSlotMutation {
  slotId: string;
  slot: z.infer<typeof editParkingSlotSchema>;
}

type UpdateParkingSlotResponse = ParkingSlot;

export const useUpdateParkingSlot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ slotId, slot }: UpdateParkingSlotMutation) =>
      editParkingSlotMutation(slotId, slot),
    onSuccess: async (data: UpdateParkingSlotResponse) => {
      await queryClient.invalidateQueries({
        queryKey: [getParkingSlotsQueryKey, data.parkingAreaId, data.parkingFloorId],
      });
    },
  });
};
