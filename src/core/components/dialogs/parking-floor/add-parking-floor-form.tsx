import { FC, useMemo, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/core/hooks";
import { Form, FormSelect } from "@/core/components/ui/form.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { parkingFloorSchema } from "@/core/helpers/zod";
import { SelectItem } from "@/core/components/ui/select.tsx";
import { generateAlphabetArray, generateParkingFloorNumbers } from "@/core/helpers/array-utils.ts";
import {
  ResponsiveModalClose,
  ResponsiveModalFooter,
} from "@/core/components/ui/responsive-modal.tsx";

import { usePostParkingFloorMutation } from "@/features/parking-map/services/hooks";

interface AddParkingFloorFormProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export const AddParkingFloorForm: FC<AddParkingFloorFormProps> = ({ onOpenChange }) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof parkingFloorSchema>>({
    resolver: zodResolver(parkingFloorSchema),
  });
  const { mutateAsync, isPending } = usePostParkingFloorMutation();

  const parkingNumberArr = useMemo(() => {
    return generateParkingFloorNumbers();
  }, []);

  const alphabetArr = useMemo(() => {
    return generateAlphabetArray();
  }, []);

  const addParkingFloor = async (formData: z.infer<typeof parkingFloorSchema>) => {
    try {
      await mutateAsync(formData);
      toast({
        title: "Parking floor added",
        description: "The parking floor has been added successfully",
      });
      onOpenChange?.(false);
    } catch (error) {
      if (error instanceof Error) toast({ title: "Error", description: error.message });
      else {
        console.error(error);
        toast({
          title: "Error",
          description: "An error occurred while adding the parking floor",
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(addParkingFloor)}
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
            Add parking floor
          </Button>
        </ResponsiveModalFooter>
      </form>
    </Form>
  );
};
