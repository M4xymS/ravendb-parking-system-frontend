import { AddParkingFloorButton, StatusDisplay, TabsHeader } from "@/core/components/header";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <TabsHeader />
      <StatusDisplay />
      <AddParkingFloorButton />
    </header>
  );
};
