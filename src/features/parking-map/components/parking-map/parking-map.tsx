import { ParkingRow } from "@/features/parking-map/components/parking-row/parking-row.tsx";
import { Indicator } from "@/features/parking-map/components/indicator/indicator.tsx";

const initialParkedCars = ["A2", "A5", "A7", "D1", "D6", "F1", "C1", "B2", "E5", "F7"];

const initialSlots = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
  ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"],
  ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"],
];

export const ParkingMap = () => {
  return (
    <div className="relative grid grid-cols-4 justify-items-center gap-y-24 w-full">
      {initialSlots.map((row, rowIndex) => (
        <ParkingRow
          key={rowIndex}
          row={row}
          parkedCars={initialParkedCars}
        />
      ))}
      <Indicator type="exit" />
      <Indicator type="enter" />
    </div>
  );
};
