import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { postParkingReservationMutation } from "@/features/parking-map/services/mutations";
import { getParkingSlotsQueryKey } from "@/features/parking-map/services/hooks/get-parking-slots.tsx";
import { getParkingFloorStatusQueryKey } from "@/features/parking-map/services/hooks/get-parking-floor-status.tsx";
import { reserveParkingSlotSchema } from "@/features/parking-map/helpers/zod";

export const usePostParkingReservationMutation = () => {
  const { areaId, floorId } = useParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      slotId,
      variables,
    }: {
      slotId: string;
      variables: z.infer<typeof reserveParkingSlotSchema>;
    }) => postParkingReservationMutation(areaId, floorId, slotId, variables),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: [getParkingSlotsQueryKey, areaId, floorId] }),
        queryClient.invalidateQueries({
          queryKey: [getParkingFloorStatusQueryKey, areaId, floorId],
        }),
      ]);
    },
  });
};
