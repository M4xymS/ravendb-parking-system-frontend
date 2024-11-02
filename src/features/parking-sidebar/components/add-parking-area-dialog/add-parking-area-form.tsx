import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FC, useRef } from "react";

import { Form, FormInput } from "@/core/components/ui/form.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { DialogClose, DialogFooter } from "@/core/components/ui/dialog.tsx";
import { useMediaQuery, useToast } from "@/core/hooks";
import { DrawerClose, DrawerFooter } from "@/core/components/ui/drawer.tsx";

import { addParkingAreaSchema } from "@/features/parking-sidebar/helpers/zod";

interface AddParkingAreaFormProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export const AddParkingAreaForm: FC<AddParkingAreaFormProps> = ({ onOpenChange }) => {
  const isDesktop = useMediaQuery("(min-width: 640px)");
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof addParkingAreaSchema>>({
    resolver: zodResolver(addParkingAreaSchema),
  });

  const addParkingArea = async (formData: z.infer<typeof addParkingAreaSchema>) => {
    console.log("Adding parking area...", formData);
    toast({
      title: "Parking area added",
      description: "The parking area has been added successfully",
    });
    onOpenChange?.(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(addParkingArea)}
        ref={formRef}
        className="grid w-full grid-cols-1 gap-4"
      >
        <FormInput
          name="name"
          label="Parking area name"
        />
        <FormInput
          name="description"
          label="Description (optional)"
        />
        <FormInput
          name="weekdayRate"
          type="number"
          label="Weekday rate"
        />
        <FormInput
          name="weekendRate"
          type="number"
          label="Weekend rate"
        />
        <FormInput
          name="discountPercentage"
          type="number"
          label="Discount percentage"
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
              Add parking area
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
              Add parking area
            </Button>
          </DrawerFooter>
        )}
      </form>
    </Form>
  );
};
