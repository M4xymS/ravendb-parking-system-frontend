import { AddParkingFloorButton, StatusDisplay, TabsHeader } from "@/core/components/header";

import { ParkingSidebarMobile } from "@/features/parking-sidebar/components/parking-sidebar/parking-sidebar-mobile.tsx";

export const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row gap-y-4 items-center justify-between">
      <ParkingSidebarMobile />
      <TabsHeader />
      <StatusDisplay />
      <AddParkingFloorButton />
    </header>
  );
};
