import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { ParkingReservation } from "@/core/types/parking-reservation.ts";

import { getReservationQuery } from "@/features/parking-map/services/queries";

export const getParkingReservationQueryKey = "get-parking-reservation";

export const useGetParkingReservationQuery = <T = ParkingReservation>(
  reservationId: string | null,
  props?: UseQueryOptions<T>
) => {
  const queryKey = [getParkingReservationQueryKey, reservationId];

  return useQuery<T>({
    queryFn: () => getReservationQuery<T>(reservationId!),
    queryKey,
    enabled: !!reservationId,
    ...props,
  });
};
