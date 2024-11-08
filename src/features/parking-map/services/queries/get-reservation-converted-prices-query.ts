import { makeHttpRequest } from "@/core/helpers";

export const getReservationConvertedPricesQuery = async <T>(reservationId: string) => {
  if (!reservationId) {
    throw new Error("Invalid reservation id");
  }

  const url = `http://localhost:3000/parking-slots/${encodeURIComponent(reservationId)}/convert-currency`;

  return makeHttpRequest<object, T>(url);
};
