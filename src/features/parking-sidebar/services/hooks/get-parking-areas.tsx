import { useQuery } from "@tanstack/react-query";

import { ParkingArea, useQueryOptions } from "@/core/types";

import { getParkingAreasQuery } from "@/features/parking-sidebar/services/queries";

export const getParkingAreasQueryKey = ["get-parking-areas"];

export const useGetParkingAreas = <T = ParkingArea[]>(props?: useQueryOptions<T>) => {
  return useQuery<T>({
    queryFn: getParkingAreasQuery<T>,
    queryKey: getParkingAreasQueryKey,
    ...props,
  });
};
