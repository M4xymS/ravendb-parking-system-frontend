import { makeHttpRequest } from "@/core/helpers";

export const getParkingSlotByIdQuery = async <T>(parkingSlotId: string) => {
  if (!parkingSlotId) {
    throw new Error("Invalid parking area or floor id");
  }

  const url = `http://localhost:3000/parking-slots/${encodeURIComponent(parkingSlotId)}`;

  return makeHttpRequest<object, T>(url);
};
