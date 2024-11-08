import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteParkingFloorMutation } from "@/features/parking-map/services/mutations/delete-parking-floor-mutation.ts";
import { getParkingFloorsQueryKey } from "@/features/parking-map/services/hooks/get-parking-floors.tsx";

interface DeleteParkingFloorMutationVariables {
  parkingAreaId: string;
  parkingFloorId: string;
}

export const useDeleteParkingFloor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ parkingAreaId, parkingFloorId }: DeleteParkingFloorMutationVariables) =>
      deleteParkingFloorMutation(parkingAreaId, parkingFloorId),
    onSuccess: async (_data, variables) => {
      await queryClient.invalidateQueries({
        queryKey: [getParkingFloorsQueryKey, variables.parkingAreaId],
      });
    },
  });
};
