import { makeHttpRequest } from "@/core/helpers";
import { productionUrl } from "@/core/constants/url-type.ts";

export const getReservationQuery = async <T>(reservationId: string) => {
  if (!reservationId) {
    throw new Error("Invalid reservation id");
  }

  const url = `${productionUrl}/parking-slots/reservation/${encodeURIComponent(reservationId)}`;

  return makeHttpRequest<object, T>(url);
};
