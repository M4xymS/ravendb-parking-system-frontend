import { FC, useState } from "react";
import { useParams } from "react-router-dom";

import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
} from "@/core/components/ui/context-menu.tsx";
import { ParkingFloor } from "@/core/types";
import { DeleteParkingFloorDialog } from "@/core/components/dialogs/parking-floor/delete-parking-floor-dialog.tsx";
import { EditParkingFloorDialog } from "@/core/components/dialogs/parking-floor/edit-parking-floor-dialog.tsx";

interface TabsHeaderContentMenuProps {
  parkingFloor: ParkingFloor;
}

interface MenuItems {
  label: string;
  shortcut?: string;
  onClick: () => void;
}

export const FloorTabsHeaderContentMenu: FC<TabsHeaderContentMenuProps> = ({ parkingFloor }) => {
  const [showEditParkingFloorDialog, setShowEditParkingFloorDialog] = useState(false);
  const [showDeleteParkingFloorDialog, setShowDeleteParkingFloorDialog] = useState(false);
  const { areaId } = useParams();

  const menuItems: MenuItems[] = [
    {
      label: "Edit",
      shortcut: "⌘[",
      onClick: () => setShowEditParkingFloorDialog(true),
    },
    {
      label: "Delete",
      shortcut: "⌘]",
      onClick: () => setShowDeleteParkingFloorDialog(true),
    },
  ];

  return (
    <>
      <ContextMenuContent>
        {menuItems.map(item => (
          <ContextMenuItem
            key={item.label}
            onClick={item.onClick}
            disabled={parkingFloor.id === areaId}
          >
            {item.label}
            <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
      <DeleteParkingFloorDialog
        open={showDeleteParkingFloorDialog}
        onOpenChange={setShowDeleteParkingFloorDialog}
        id={parkingFloor.id}
        areaId={parkingFloor.parkingAreaId}
      />
      <EditParkingFloorDialog
        open={showEditParkingFloorDialog}
        onOpenChange={setShowEditParkingFloorDialog}
        parkingFloor={parkingFloor}
      />
    </>
  );
};
