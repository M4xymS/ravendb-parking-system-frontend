import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { parkingSlotSchema } from "@/core/helpers/zod";
import { postParkingSlotMutation } from "@/core/services/mutations";

import {
  getParkingFloorStatusQueryKey,
  getParkingSlotsQueryKey,
} from "@/features/parking-map/services/hooks";
import { getParkingAreasQueryKey } from "@/features/parking-sidebar/services/hooks";

export const usePostParkingSlotsMutation = () => {
  const { areaId, floorId } = useParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: z.infer<typeof parkingSlotSchema>) =>
      postParkingSlotMutation(areaId, floorId, variables),
    onSuccess: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: [getParkingSlotsQueryKey, areaId, floorId] }),
        queryClient.invalidateQueries({ queryKey: [getParkingAreasQueryKey] }),
        queryClient.invalidateQueries({
          queryKey: [getParkingFloorStatusQueryKey, areaId, floorId],
        }),
      ]);
    },
  });
};
