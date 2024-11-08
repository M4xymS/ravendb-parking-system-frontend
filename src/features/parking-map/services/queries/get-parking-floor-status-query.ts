import { makeHttpRequest } from "@/core/helpers";

export const getParkingFloorStatusQuery = async <T>(parkingAreaId: string, floorId: string) => {
  if (!parkingAreaId || !floorId) {
    throw new Error("Invalid parking area or floor id");
  }
  const url = `http://localhost:3000/parking-floor/${encodeURIComponent(parkingAreaId)}/floors/${encodeURIComponent(floorId)}/status`;

  return makeHttpRequest<object, T>(url, "GET");
};
