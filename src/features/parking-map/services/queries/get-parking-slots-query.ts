import { makeHttpRequest } from "@/core/helpers";

export const getParkingSlotsQuery = async <T>(parkingAreaId: string, parkingFloorId: string) => {
  if (!parkingAreaId || !parkingFloorId) {
    throw new Error("Invalid parking area or floor id");
  }

  const url = `http://localhost:3000/parking-slots/${encodeURIComponent(parkingAreaId)}/${encodeURIComponent(parkingFloorId)}`;

  return makeHttpRequest<object, T>(url, "GET");
};
