import { makeHttpRequest } from "@/core/helpers";

export const getParkingFloorsQuery = async <T>(parkingAreaId: string) => {
  if (!parkingAreaId) {
    throw new Error("Invalid parking area id");
  }

  const url = `http://localhost:3000/parking-floor/${encodeURIComponent(parkingAreaId)}`;

  return makeHttpRequest<object, T>(url, "GET");
};
