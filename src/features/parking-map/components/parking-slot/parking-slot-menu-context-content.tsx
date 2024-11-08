import { FC, useState } from "react";

import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
} from "@/core/components/ui/context-menu.tsx";
import { ParkingSlot } from "@/core/types";

import { DeleteParkingSlotDialog } from "@/features/parking-map/components/dialogs/delete-parking-slot";
import { EditParkingSlotDialog } from "@/features/parking-map/components/dialogs/edit-parking-slot";

interface ParkingSlotContextContentProps {
  slot: ParkingSlot;
}

interface MenuItems {
  label: string;
  shortcut?: string;
  onClick?: () => void;
}

export const ParkingSlotMenuContextContent: FC<ParkingSlotContextContentProps> = ({ slot }) => {
  const [showEditParkingSlotDialog, setShowEditParkingSlotDialog] = useState(false);
  const [showDeleteParkingSlotDialog, setShowDeleteParkingSlotDialog] = useState(false);

  const menuItems: MenuItems[] = [
    {
      label: "Edit",
      shortcut: "⌘[",
      onClick: () => setShowEditParkingSlotDialog(true),
    },
    {
      label: "Delete",
      shortcut: "⌘]",
      onClick: () => setShowDeleteParkingSlotDialog(true),
    },
  ];

  return (
    <>
      <DeleteParkingSlotDialog
        open={showDeleteParkingSlotDialog}
        onOpenChange={setShowDeleteParkingSlotDialog}
        slotId={slot.id}
      />
      <EditParkingSlotDialog
        open={showEditParkingSlotDialog}
        onOpenChange={setShowEditParkingSlotDialog}
        parkingSlot={slot}
      />
      <ContextMenuContent>
        {menuItems.map(item => (
          <ContextMenuItem
            key={item.label}
            onClick={item.onClick}
          >
            {item.label}
            {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
    </>
  );
};
