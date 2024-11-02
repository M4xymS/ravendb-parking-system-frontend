import { FC, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useMediaQuery, useToast } from "@/core/hooks";
import { Form, FormInput } from "@/core/components/ui/form.tsx";
import { DialogClose, DialogFooter } from "@/core/components/ui/dialog.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { DrawerClose, DrawerFooter } from "@/core/components/ui/drawer.tsx";
import { addParkingFloorSchema } from "@/core/helpers/zod";

interface AddParkingFloorFormProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export const AddParkingFloorForm: FC<AddParkingFloorFormProps> = ({ onOpenChange }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof addParkingFloorSchema>>({
    resolver: zodResolver(addParkingFloorSchema),
  });

  const addParkingFloor = async (formData: z.infer<typeof addParkingFloorSchema>) => {
    console.log("Adding parking floor...", formData);
    toast({
      title: "Parking floor added",
      description: "The parking floor has been added successfully",
    });
    onOpenChange?.(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(addParkingFloor)}
        ref={formRef}
        className="grid w-full grid-cols-1 gap-4"
      >
        <FormInput
          name="name"
          label="Parking area name"
        />
        {isDesktop ? (
          <DialogFooter>
            <DialogClose asChild>
              <Button size="sm">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              variant="outline"
              size="sm"
            >
              Add parking floor
            </Button>
          </DialogFooter>
        ) : (
          <DrawerFooter>
            <DrawerClose asChild>
              <Button size="sm">Cancel</Button>
            </DrawerClose>
            <Button
              type="submit"
              variant="outline"
              size="sm"
            >
              Add parking floor
            </Button>
          </DrawerFooter>
        )}
      </form>
    </Form>
  );
};
