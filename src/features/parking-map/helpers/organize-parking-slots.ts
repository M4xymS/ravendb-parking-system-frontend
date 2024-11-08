import { ParkingSlot } from "@/core/types";

type InitialSlots = ParkingSlot[][];

export const organizeParkingSlots = (slots: ParkingSlot[]): InitialSlots => {
  const groupedSlots: Record<string, ParkingSlot[]> = slots.reduce(
    (grouped, slot) => {
      const { letter } = slot;

      if (!grouped[letter]) {
        grouped[letter] = [];
      }

      grouped[letter].push(slot);

      return grouped;
    },
    {} as Record<string, ParkingSlot[]>
  );

  const result: InitialSlots = [];

  for (const letter of Object.keys(groupedSlots).sort()) {
    const sortedSlots = groupedSlots[letter].sort((a, b) => a.number - b.number);

    result.push(sortedSlots);
  }

  return result;
};
