import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { ParkingSlot } from "@/core/types";

import { getParkingSlotByIdQuery } from "@/features/parking-map/services/queries/get-parking-slot-by-id-query.ts";

export const getParkingSlotByIdQueryKey = "get-parking-slot-by-id";
export const useGetParkingSlotByIdQuery = <T = ParkingSlot>(
  slotId: string | undefined,
  props?: UseQueryOptions<T>
) => {
  const queryKey = [getParkingSlotByIdQueryKey, slotId];

  return useQuery<T>({
    queryFn: () => getParkingSlotByIdQuery<T>(slotId!),
    queryKey,
    enabled: !!slotId,
    ...props,
  });
};
