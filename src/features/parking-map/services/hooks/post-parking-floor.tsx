import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { useParams } from "react-router-dom";

import { parkingFloorSchema } from "@/core/helpers/zod";

import { postParkingFloorMutation } from "@/features/parking-map/services/queries";
import { getParkingFloorsQueryKey } from "@/features/parking-map/services/hooks";

export const usePostParkingFloorMutation = () => {
  const { areaId } = useParams();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: z.infer<typeof parkingFloorSchema>) =>
      postParkingFloorMutation(areaId, variables),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [getParkingFloorsQueryKey, areaId],
      });
    },
  });
};
