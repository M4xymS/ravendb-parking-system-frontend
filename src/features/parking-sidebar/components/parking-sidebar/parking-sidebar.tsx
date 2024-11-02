import { Button } from "@/core/components/ui/button.tsx";

import { ParkingCard } from "@/features/parking-sidebar/components/parking-card/parking-card.tsx";
import { useSelectParkingArea } from "@/features/parking-sidebar/hooks";

const mockParkingData: {
  id: number;
  name: string;
  availableSpots: number;
  status: "open" | "closed";
  address: string | undefined;
}[] = [
  {
    id: 1,
    name: "Ghent",
    availableSpots: 125,
    status: "open",
    address: "123 Main St, Ghent",
  },
  {
    id: 2,
    name: "Antwerp",
    availableSpots: 80,
    status: "open",
    address: "456 Market Ave, Antwerp",
  },
  {
    id: 3,
    name: "Brussels",
    availableSpots: 50,
    status: "closed",
    address: "789 Central Blvd, Brussels",
  },
  {
    id: 4,
    name: "Bruges",
    availableSpots: 30,
    status: "open",
    address: "101 Canal Rd, Bruges",
  },
  {
    id: 5,
    name: "Bruges",
    availableSpots: 30,
    status: "open",
    address: "101 Canal Rd, Bruges",
  },
  {
    id: 6,
    name: "Bruges",
    availableSpots: 30,
    status: "open",
    address: "101 Canal Rd, Bruges",
  },
  {
    id: 7,
    name: "Bruges",
    availableSpots: 30,
    status: "open",
    address: "101 Canal Rd, Bruges",
  },
  {
    id: 8,
    name: "Bruges",
    availableSpots: 30,
    status: "open",
    address: "101 Canal Rd, Bruges",
  },
];

export const ParkingSidebar = () => {
  const { selectedParkingArea, toggleSelectedParkingArea } = useSelectParkingArea();

  return (
    <aside className="fixed w-64 border-r left-0 inset-0">
      <div className="relative h-full flex flex-col overflow-y-auto px-3 py-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold sticky top-0 bg-white">Parking Areas</h1>
          <Button size="sm">Add</Button>
        </div>

        <div className="px-3 py-4 overflow-y-auto flex flex-col">
          {mockParkingData.map(parking => (
            <ParkingCard
              key={parking.id}
              {...parking}
              isSelected={selectedParkingArea === String(parking.id)}
              toggleSelection={() => toggleSelectedParkingArea(parking.id)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};
