import { AddParkingFloorButton, StatusDisplay, TabsHeader } from "@/core/components/header";

export const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row gap-y-4 items-center justify-between">
      <TabsHeader />
      <StatusDisplay />
      <AddParkingFloorButton />
    </header>
  );
};
