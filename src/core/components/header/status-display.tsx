import { useParams } from "react-router-dom";
import { useState } from "react";

import { AddParkingSlotDialog } from "@/core/components/dialogs/parking-slot/add-parking-slot-dialog.tsx";
import { FloorStatusDisplaySkeleton } from "@/core/components/header/floor-status-display-skeleton.tsx";

import { useGetParkingFloorStatusQuery } from "@/features/parking-map/services/hooks";

export const StatusDisplay = () => {
  const [showAddParkingSlotDialog, setShowAddParkingSlotDialog] = useState(false);
  const { areaId, floorId } = useParams();
  const { data: status, isLoading } = useGetParkingFloorStatusQuery(areaId, floorId);

  if (isLoading) {
    return <FloorStatusDisplaySkeleton />;
  }

  const statuses = [
    {
      value: (status?.totalSlots ?? 0) - (status?.availableSlots ?? 0),
      label: "Filled",
    },
    {
      value: status?.totalSlots ?? 0,
      label: "Total",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <div className="bg-neutral-100 items-center rounded-2xl p-3 space-x-4 m-0.5 flex">
        {statuses.map((status, index) => (
          <div
            key={index}
            className="space-x-2"
          >
            <b className="bg-white rounded-lg text-sm px-3 p-1.5 m-0.5">{status.value}</b>
            <span className="text-muted-foreground font-semibold">{status.label}</span>
          </div>
        ))}
      </div>
      <AddParkingSlotDialog
        open={showAddParkingSlotDialog}
        onOpenChange={setShowAddParkingSlotDialog}
        showTrigger
      />
    </div>
  );
};
