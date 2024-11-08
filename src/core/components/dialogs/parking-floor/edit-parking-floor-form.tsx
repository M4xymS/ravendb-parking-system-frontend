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
import { ParkingFloor } from "@/core/types";
import { editParkingFloorSchema } from "@/core/helpers/zod";
import { SelectItem } from "@/core/components/ui/select.tsx";
import { generateAlphabetArray, generateParkingFloorNumbers } from "@/core/helpers/array-utils.ts";
import { useEditParkingFloor } from "@/core/services/hooks/edit-parking-floor.tsx";

interface EditParkingFloorFormProps extends ComponentPropsWithoutRef<typeof ResponsiveModal> {
  parkingFloor: ParkingFloor;
}

export const EditParkingFloorForm: FC<EditParkingFloorFormProps> = ({
  onOpenChange,
  parkingFloor,
}) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof editParkingFloorSchema>>({
    resolver: zodResolver(editParkingFloorSchema),
    defaultValues: {
      letter: parkingFloor.letter,
      number: parkingFloor.number.toString(),
    },
  });
  const { mutateAsync, isPending } = useEditParkingFloor();

  const parkingNumberArr = useMemo(() => {
    return generateParkingFloorNumbers();
  }, []);

  const alphabetArr = useMemo(() => {
    return generateAlphabetArray();
  }, []);

  const editParkingFloor = async (formData: z.infer<typeof editParkingFloorSchema>) => {
    try {
      await mutateAsync({ areaId: parkingFloor.parkingAreaId, floorId: parkingFloor.id, formData });
      toast({
        title: "Parking floor edited",
        description: "The parking floor has been edited successfully",
      });
      onOpenChange?.(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to edit parking floor",
        description: "An error occurred while editing the parking floor",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(editParkingFloor)}
        ref={formRef}
        className="grid w-full grid-cols-1 gap-4"
      >
        <FormSelect
          name="letter"
          label="Floor letter"
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
