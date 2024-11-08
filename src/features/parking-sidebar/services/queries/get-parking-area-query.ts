import { makeHttpRequest } from "@/core/helpers";

export const getParkingAreasQuery = async <T>() => {
  const url = `http://localhost:3000/parking-area`;

  return makeHttpRequest<object, T>(url, "GET");
};
