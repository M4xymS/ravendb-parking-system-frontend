import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

export const getReservationConvertedPricesQuery = async <T>(reservationId: string) => {
  if (!reservationId) {
    throw new Error("Invalid reservation id");
  }

  const url = `${productionUrl}/parking-slots/${encodeURIComponent(reservationId)}/convert-currency`;

  return makeHttpRequest<object, T>(url);
};
