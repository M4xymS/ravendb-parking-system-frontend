import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { ParkingSlot } from "@/core/types";
import { TimeTypes } from "@/core/constants/time-types.ts";

import { getParkingSlotsQuery } from "@/features/parking-map/services/queries";

export const getParkingSlotsQueryKey = "get-parking-slots";
export const useGetParkingSlotsQuery = <T = ParkingSlot[]>(
  areaId: string | undefined,
  floorId: string | undefined,
  props?: UseQueryOptions<T>
) => {
  const queryKey = [getParkingSlotsQueryKey, areaId, floorId];

  return useQuery<T>({
    queryFn: () => getParkingSlotsQuery<T>(areaId!, floorId!),
    queryKey,
    refetchInterval: TimeTypes.MINUTE * 10,
    enabled: !!areaId && !!floorId,
    ...props,
  });
};
