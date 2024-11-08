import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { postParkingAreaMutation } from "@/features/parking-sidebar/services/mutations";
import { addParkingAreaSchema } from "@/features/parking-sidebar/helpers/zod";
import { getParkingAreasQueryKey as queryKey } from "@/features/parking-sidebar/services/hooks";

export const usePostParkingAreas = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (variables: z.infer<typeof addParkingAreaSchema>) =>
      postParkingAreaMutation(variables),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey,
      });
    },
  });
};
