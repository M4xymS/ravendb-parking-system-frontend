import { useState } from "react";

import { Button } from "@/core/components/ui/button.tsx";
import { AddParkingFloorDialog } from "@/core/components/header/add-parking-floor-dialog.tsx";

export const AddParkingFloorButton = () => {
  const [showAddParkingFloorDialog, setShowAddParkingFloorDialog] = useState(false);

  return (
    <>
      <AddParkingFloorDialog
        open={showAddParkingFloorDialog}
        onOpenChange={setShowAddParkingFloorDialog}
        showTrigger={false}
      />
      <Button onClick={() => setShowAddParkingFloorDialog(true)}>Add Floor</Button>
    </>
  );
};
