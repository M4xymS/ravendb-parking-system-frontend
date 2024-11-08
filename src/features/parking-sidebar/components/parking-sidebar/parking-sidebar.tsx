import { FC, useState } from "react";

import { AddParkingAreaDialog } from "@/features/parking-sidebar/components/add-parking-area-dialog";
import { ParkingAreas } from "@/features/parking-sidebar/components/parking-sidebar/parking-areas.tsx";

interface ParkingSidebarProps {
  open?: boolean;
  setIsOpen?: (b: boolean) => void;
}

export const ParkingSidebar: FC<ParkingSidebarProps> = ({ open, setIsOpen }) => {
  const [showAddParkingAreaDialog, setShowAddParkingAreaDialog] = useState(false);

  return (
    <>
      <aside
        className={`${open ? "block" : "hidden"} sm:block sm:fixed w-64 sm:border-r left-0 inset-0`}
      >
        <div className="relative h-full flex flex-col overflow-y-auto px-3 py-4">
          <div className="flex items-center sticky top-0 bg-white justify-between mb-4">
            <h1 className="text-2xl font-bold">Parking Areas</h1>
            <AddParkingAreaDialog
              open={showAddParkingAreaDialog}
              onOpenChange={setShowAddParkingAreaDialog}
              showTrigger
            />
          </div>
          <ParkingAreas setIsOpen={setIsOpen} />
        </div>
      </aside>
    </>
  );
};
