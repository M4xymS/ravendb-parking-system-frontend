import { FC, useState } from "react";

import { ParkingSlot as ParkingSlotInterface } from "@/core/types";
import { Tooltip, TooltipTrigger } from "@/core/components/ui/tooltip";
import { ContextMenu, ContextMenuTrigger } from "@/core/components/ui/context-menu.tsx";

import { ParkingSlotReservationSheet } from "@/features/parking-map/components/dialogs/parking-slot-reservation/parking-slot-reservation-sheet.tsx";
import { ParkingSlotMenuContextContent } from "@/features/parking-map/components/parking-slot/parking-slot-menu-context-content.tsx";
import { SlotButton } from "@/features/parking-map/components/parking-slot/slot-button.tsx";

interface ParkingSlotProps extends ParkingSlotInterface {
  slot: string;
  index: number;
}

export const ParkingSlot: FC<ParkingSlotProps> = ({ slot, isOccupied, index, id, ...props }) => {
  const [showReserveSheet, setShowReserveSheet] = useState(false);

  return (
    <>
      <ParkingSlotReservationSheet
        open={showReserveSheet}
        onOpenChange={setShowReserveSheet}
        slotId={id}
        slot={slot}
      />
      <Tooltip>
        <ContextMenu>
          <ContextMenuTrigger>
            <TooltipTrigger asChild>
              <SlotButton
                slot={slot}
                index={index}
                isOccupied={isOccupied}
                onReserve={() => setShowReserveSheet(true)}
                {...props}
              />
            </TooltipTrigger>
          </ContextMenuTrigger>
          {!isOccupied && <ParkingSlotMenuContextContent slot={{ id, isOccupied, ...props }} />}
        </ContextMenu>
      </Tooltip>
    </>
  );
};
