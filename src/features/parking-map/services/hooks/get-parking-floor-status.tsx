import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { ParkingFloorStatus } from "@/core/types";

import { getParkingFloorStatusQuery } from "@/features/parking-map/services/queries";

export const getParkingFloorStatusQueryKey = "get-parking-floors-status";

export const useGetParkingFloorStatusQuery = <T = ParkingFloorStatus>(
  areaId: string | undefined,
  floorId: string | undefined,
  props?: UseQueryOptions<T>
) => {
  const queryKey = [getParkingFloorStatusQueryKey, areaId, floorId];

  return useQuery<T>({
    queryFn: () => getParkingFloorStatusQuery<T>(areaId!, floorId!),
    queryKey,
    enabled: !!areaId && !!floorId,
    ...props,
  });
};
