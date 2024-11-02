import { ComponentPropsWithoutRef, FC } from "react";
import { PlusIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/core/components/ui/dialog.tsx";
import { useMediaQuery } from "@/core/hooks";
import { Button } from "@/core/components/ui/button.tsx";
import { Drawer, DrawerContent, DrawerTrigger } from "@/core/components/ui/drawer.tsx";
import { AddParkingFloorForm } from "@/core/components/header/add-parking-floor-form.tsx";

interface AddFloorDialogProps extends ComponentPropsWithoutRef<typeof Dialog> {
  showTrigger?: boolean;
}

export const AddParkingFloorDialog: FC<AddFloorDialogProps> = ({ showTrigger, ...props }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");

  if (isDesktop) {
    return (
      <Dialog {...props}>
        {showTrigger && (
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
            >
              <PlusIcon className="mr-2 size-4" />
              Add Parking Floor
            </Button>
          </DialogTrigger>
        )}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Parking Floor</DialogTitle>
            <DialogDescription>Add a new parking floor to the map</DialogDescription>
          </DialogHeader>
          <AddParkingFloorForm onOpenChange={props.onOpenChange} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer {...props}>
      {showTrigger && (
        <DrawerTrigger asChild>
          <Button
            variant="outline"
            size="sm"
          >
            <PlusIcon className="mr-2 size-4" />
            Add Parking Floor
          </Button>
        </DrawerTrigger>
      )}
      <DrawerContent>
        <DialogHeader>
          <DialogTitle>Add Parking Floor</DialogTitle>
          <DialogDescription>Add a new parking floor to the map</DialogDescription>
        </DialogHeader>
        <AddParkingFloorForm onOpenChange={props.onOpenChange} />
      </DrawerContent>
    </Drawer>
  );
};
