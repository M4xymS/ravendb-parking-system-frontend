import { FC } from "react";

import { ParkingAreaCard } from "@/features/parking-sidebar/components/parking-area-card/parking-area-card.tsx";
import { useGetParkingAreas } from "@/features/parking-sidebar/services/hooks";
import { ParkingAreaCardSkeleton } from "@/features/parking-sidebar/components/parking-area-card/parking-area-card-skeleton.tsx";

interface ParkingAreasProps {
  setIsOpen?: (b: boolean) => void;
}

export const ParkingAreas: FC<ParkingAreasProps> = ({ setIsOpen }) => {
  const { data: parkingAreas, isLoading } = useGetParkingAreas();

  if (isLoading) {
    return (
      <div className="px-3 py-4 overflow-y-auto flex flex-col">
        <ParkingAreaCardSkeleton />
      </div>
    );
  }

  return (
    <div className="px-3 py-4 overflow-y-auto flex flex-col">
      {parkingAreas?.map(parkingArea => (
        <ParkingAreaCard
          parkingArea={parkingArea}
          key={parkingArea.id}
          toggleClose={() => setIsOpen && setIsOpen(false)}
        />
      ))}
    </div>
  );
};
