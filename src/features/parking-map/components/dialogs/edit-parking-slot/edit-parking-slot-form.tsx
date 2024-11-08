import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ComponentPropsWithoutRef, FC, useMemo, useRef } from "react";

import { Form, FormSelect } from "@/core/components/ui/form.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { useToast } from "@/core/hooks";
import {
  ResponsiveModal,
  ResponsiveModalClose,
  ResponsiveModalFooter,
} from "@/core/components/ui/responsive-modal.tsx";
import { ParkingSlot } from "@/core/types";
import { editParkingSlotSchema } from "@/core/helpers/zod";
import { SelectItem } from "@/core/components/ui/select.tsx";
import { generateAlphabetArray, generateParkingFloorNumbers } from "@/core/helpers/array-utils.ts";

import { useUpdateParkingSlot } from "@/features/parking-map/services/hooks/update-parking-slot.tsx";

interface EditParkingSlotFormProps extends ComponentPropsWithoutRef<typeof ResponsiveModal> {
  parkingSlot: ParkingSlot;
}

export const EditParkingSlotForm: FC<EditParkingSlotFormProps> = ({
  onOpenChange,
  parkingSlot,
}) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof editParkingSlotSchema>>({
    resolver: zodResolver(editParkingSlotSchema),
    defaultValues: {
      letter: parkingSlot.letter,
      number: parkingSlot.number.toString(),
    },
  });
  const { mutateAsync, isPending } = useUpdateParkingSlot();

  const parkingNumberArr = useMemo(() => {
    return generateParkingFloorNumbers();
  }, []);

  const alphabetArr = useMemo(() => {
    return generateAlphabetArray();
  }, []);

  const editParkingSlot = async (formData: z.infer<typeof editParkingSlotSchema>) => {
    try {
      await mutateAsync({ slotId: parkingSlot.id, slot: formData });
      toast({
        title: "Parking slot edited",
        description: "The parking slot has been edited successfully",
      });
      onOpenChange?.(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to edit parking slot",
        description: "An error occurred while editing the parking slot",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(editParkingSlot)}
        ref={formRef}
        className="grid w-full grid-cols-1 gap-4"
      >
        <FormSelect
          name="letter"
          label="Slot letter"
        >
          {alphabetArr.map((letter, index) => (
            <SelectItem
              value={letter}
              key={`letter-${index}`}
            >
              {letter}
            </SelectItem>
          ))}
        </FormSelect>
        <FormSelect
          name="number"
          label="Slot number"
        >
          {parkingNumberArr.map((number, index) => (
            <SelectItem
              value={number.toString()}
              key={`number-${index}`}
            >
              {number}
            </SelectItem>
          ))}
        </FormSelect>
        <ResponsiveModalFooter>
          <ResponsiveModalClose asChild>
            <Button>Cancel</Button>
          </ResponsiveModalClose>
          <Button
            type="submit"
            isLoading={isPending}
            variant="outline"
          >
            Edit
          </Button>
        </ResponsiveModalFooter>
      </form>
    </Form>
  );
};
