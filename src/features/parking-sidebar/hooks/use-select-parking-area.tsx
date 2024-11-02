import { useCallback, useEffect, useState } from "react";

export const useSelectParkingArea = () => {
  const [selectedParkingArea, setSelectedParkingArea] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setSelectedParkingArea(params.get("selectedParkingArea"));
  }, []);

  const toggleSelectedParkingArea = useCallback((id: number) => {
    const params = new URLSearchParams(window.location.search);
    const currentSelected = params.get("selectedParkingArea");

    if (currentSelected === String(id)) {
      params.delete("selectedParkingArea");
      setSelectedParkingArea(null); // Deselect
    } else {
      params.set("selectedParkingArea", String(id));
      setSelectedParkingArea(String(id));
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    window.history.replaceState(null, "", newUrl);
  }, []);

  return { selectedParkingArea, toggleSelectedParkingArea };
};
