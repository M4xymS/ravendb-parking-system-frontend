import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { ParkingFloor } from "@/core/types";

import { getParkingFloorsQuery } from "@/features/parking-map/services/queries";

export const getParkingFloorsQueryKey = "get-parking-floors";

export const useGetParkingFloorsQuery = <T = ParkingFloor[]>(
  areaId: string | undefined,
  props?: UseQueryOptions<T>
) => {
  const queryKey = [getParkingFloorsQueryKey, areaId];

  return useQuery<T>({
    queryFn: () => getParkingFloorsQuery<T>(areaId!),
    queryKey,
    enabled: !!areaId,
    ...props,
  });
};
