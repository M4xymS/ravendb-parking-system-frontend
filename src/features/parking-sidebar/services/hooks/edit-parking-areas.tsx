import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

import { getParkingAreasQueryKey } from "@/features/parking-sidebar/services/hooks/get-parking-areas.tsx";
import { editParkingAreaSchema } from "@/features/parking-sidebar/helpers/zod/parking-area.ts";
import { editParkingAreaMutation } from "@/features/parking-sidebar/services/mutations";

interface EditParkingAreasMutationProps {
  areaId: string;
  formData: z.infer<typeof editParkingAreaSchema>;
}

export const useEditParkingAreas = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ areaId, formData }: EditParkingAreasMutationProps) =>
      editParkingAreaMutation(areaId, formData),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: getParkingAreasQueryKey,
      });
    },
  });
};
