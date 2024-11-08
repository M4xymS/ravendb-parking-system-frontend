import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { ConvertedPriceResponse } from "@/core/types/convert-price.ts";
import { TimeTypes } from "@/core/constants/time-types.ts";

import { getReservationConvertedPricesQuery } from "@/features/parking-map/services/queries/get-reservation-converted-prices-query.ts";

export const getReservationConvertedPricesQueryKey = "get-reservation-converted-prices";

export const useGetReservationConvertedPrices = <T = ConvertedPriceResponse>(
  reservationId: string | null,
  props?: UseQueryOptions<T>
) => {
  const queryKey = [getReservationConvertedPricesQueryKey, reservationId!];

  return useQuery<T>({
    queryFn: () => getReservationConvertedPricesQuery<T>(reservationId!),
    queryKey,
    staleTime: TimeTypes.DAY,
    enabled: false,
    ...props,
  });
};
