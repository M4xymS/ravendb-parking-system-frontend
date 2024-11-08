import { useNavigate, useParams } from "react-router-dom";
import { FC, useState } from "react";

import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
} from "@/core/components/ui/context-menu.tsx";
import { ParkingArea } from "@/core/types";

import { DeleteParkingAreaDialog } from "@/features/parking-sidebar/components/parking-area-card/delete-parking-area-dialog.tsx";
import { EditParkingAreaDialog } from "@/features/parking-sidebar/components/parking-area-card/edit-parking-area-dialog.tsx";

interface ParkingAreaContextContentProps {
  parkingArea: ParkingArea;
}

export const ParkingAreaContextContent: FC<ParkingAreaContextContentProps> = ({ parkingArea }) => {
  const [showEditParkingAreaDialog, setShowEditParkingAreaDialog] = useState(false);
  const [showDeleteParkingAreaDialog, setShowDeleteParkingAreaDialog] = useState(false);
  const { areaId } = useParams();
  const navigate = useNavigate();

  const menuItems: { label: string; shortcut: string; onClick: () => void }[] = [
    {
      label: "Visit",
      shortcut: "⌘R",
      onClick: () => navigate(`/${encodeURIComponent(parkingArea.id)}`),
    },
    {
      label: "Edit",
      shortcut: "⌘[",
      onClick: () => setShowEditParkingAreaDialog(true),
    },
    {
      label: "Delete",
      shortcut: "⌘]",
      onClick: () => setShowDeleteParkingAreaDialog(true),
    },
  ];

  return (
    <>
      <ContextMenuContent>
        {menuItems.map(item => (
          <ContextMenuItem
            key={item.label}
            onClick={item.onClick}
            disabled={parkingArea.id === areaId}
          >
            {item.label}
            <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>
          </ContextMenuItem>
        ))}
      </ContextMenuContent>
      <EditParkingAreaDialog
        open={showEditParkingAreaDialog}
        onOpenChange={setShowEditParkingAreaDialog}
        parkingArea={parkingArea}
      />
      <DeleteParkingAreaDialog
        id={parkingArea.id}
        open={showDeleteParkingAreaDialog}
        onOpenChange={setShowDeleteParkingAreaDialog}
      />
    </>
  );
};
