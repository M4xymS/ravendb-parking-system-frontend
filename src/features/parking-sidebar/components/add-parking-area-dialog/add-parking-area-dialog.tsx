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

import { AddParkingAreaForm } from "@/features/parking-sidebar/components/add-parking-area-dialog/add-parking-area-form.tsx";

interface AddParkingAreaDialogProps extends ComponentPropsWithoutRef<typeof Dialog> {
  showTrigger?: boolean;
}

export const AddParkingAreaDialog: FC<AddParkingAreaDialogProps> = ({ showTrigger, ...props }) => {
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
              Add parking area
            </Button>
          </DialogTrigger>
        )}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add parking area</DialogTitle>
            <DialogDescription>Add a new parking area to the map</DialogDescription>
          </DialogHeader>
          <AddParkingAreaForm onOpenChange={props.onOpenChange} />
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
            Add parking area
          </Button>
        </DrawerTrigger>
      )}
      <DrawerContent>
        <DialogHeader>
          <DialogTitle>Add parking area</DialogTitle>
          <DialogDescription>Add a new parking area to the map</DialogDescription>
        </DialogHeader>
        <AddParkingAreaForm onOpenChange={props.onOpenChange} />
      </DrawerContent>
    </Drawer>
  );
};
