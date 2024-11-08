import { ComponentPropsWithoutRef, FC, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/core/hooks";
import { Form, FormSelect } from "@/core/components/ui/form.tsx";
import { Dialog } from "@/core/components/ui/dialog.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { parkingSlotSchema } from "@/core/helpers/zod";
import { SelectItem } from "@/core/components/ui/select.tsx";
import { generateAlphabetArray, generateParkingFloorNumbers } from "@/core/helpers/array-utils.ts";
import { usePostParkingSlotsMutation } from "@/core/services/hooks/post-parking-slots.tsx";
import {
  ResponsiveModalClose,
  ResponsiveModalFooter,
} from "@/core/components/ui/responsive-modal.tsx";

export const AddParkingSlotForm: FC<ComponentPropsWithoutRef<typeof Dialog>> = ({
  onOpenChange,
}) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof parkingSlotSchema>>({
    resolver: zodResolver(parkingSlotSchema),
  });

  const { mutateAsync, isPending } = usePostParkingSlotsMutation();

  const parkingNumberArr = useMemo(() => {
    return generateParkingFloorNumbers();
  }, []);

  const alphabetArr = useMemo(() => {
    return generateAlphabetArray();
  }, []);

  const addParkingSlot = async (formData: z.infer<typeof parkingSlotSchema>) => {
    try {
      await mutateAsync(formData);
      toast({
        title: "Parking slot added",
        description: "The parking slot has been added successfully",
      });
      onOpenChange?.(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An error occurred while adding the parking slot",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(addParkingSlot)}
        ref={formRef}
        className="grid w-full grid-cols-1 gap-4"
      >
        <FormSelect
          name="letter"
          label="Floor letter"
          defaultValue={alphabetArr[0]}
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
          label="Floor number"
          defaultValue={parkingNumberArr[0].toString()}
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
            <Button size="sm">Cancel</Button>
          </ResponsiveModalClose>
          <Button
            type="submit"
            isLoading={isPending}
            variant="outline"
            size="sm"
          >
            Add parking slot
          </Button>
        </ResponsiveModalFooter>
      </form>
    </Form>
  );
};
