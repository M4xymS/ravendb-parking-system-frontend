import { useState } from "react";

import { AddParkingFloorDialog, FloorTabsHeader, StatusDisplay } from "@/core/components/header";

import { ParkingSidebarMobile } from "@/features/parking-sidebar/components/parking-sidebar/parking-sidebar-mobile.tsx";

export const Header = () => {
  const [showAddParkingFloorDialog, setShowAddParkingFloorDialog] = useState(false);

  return (
    <header className="flex flex-col lg:flex-row gap-y-4 items-center justify-between">
      <ParkingSidebarMobile />
      <FloorTabsHeader />
      <StatusDisplay />
      <AddParkingFloorDialog
        open={showAddParkingFloorDialog}
        onOpenChange={setShowAddParkingFloorDialog}
        showTrigger
      />
    </header>
  );
};
