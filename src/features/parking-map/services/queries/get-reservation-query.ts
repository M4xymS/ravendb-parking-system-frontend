import { makeHttpRequest } from "@/core/helpers";

export const getReservationQuery = async <T>(reservationId: string) => {
  if (!reservationId) {
    throw new Error("Invalid reservation id");
  }

  const url = `http://localhost:3000/parking-slots/reservation/${encodeURIComponent(reservationId)}`;

  return makeHttpRequest<object, T>(url);
};
