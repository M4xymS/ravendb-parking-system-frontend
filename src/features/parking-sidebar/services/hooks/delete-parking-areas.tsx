import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteParkingAreaMutation } from "@/features/parking-sidebar/services/mutations/delete-parking-area-mutation.ts";
import { getParkingAreasQueryKey } from "@/features/parking-sidebar/services/hooks/get-parking-areas.tsx";

export const useDeleteParkingAreas = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (areaId: string) => deleteParkingAreaMutation(areaId),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: getParkingAreasQueryKey,
      });
    },
  });
};
