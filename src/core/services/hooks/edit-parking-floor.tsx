import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { editParkingFloorMutation } from "@/core/services/mutations";
import { editParkingFloorSchema } from "@/core/helpers/zod";

import { getParkingFloorsQueryKey } from "@/features/parking-map/services/hooks";

export const useEditParkingFloor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      areaId,
      floorId,
      formData,
    }: {
      areaId: string;
      floorId: string;
      formData: z.infer<typeof editParkingFloorSchema>;
    }) => editParkingFloorMutation(areaId, floorId, formData),
    onSuccess: async (_data, { areaId }) => {
      await queryClient.invalidateQueries({
        queryKey: [getParkingFloorsQueryKey, areaId],
      });
    },
  });
};
