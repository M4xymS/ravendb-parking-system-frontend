import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ComponentPropsWithoutRef, FC, useRef } from "react";

import { Form, FormInput, FormInputProps } from "@/core/components/ui/form.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { useToast } from "@/core/hooks";
import { Sheet } from "@/core/components/ui/sheet.tsx";
import {
  ResponsiveModalClose,
  ResponsiveModalFooter,
} from "@/core/components/ui/responsive-modal.tsx";
import { ParkingArea } from "@/core/types";

import { useEditParkingAreas } from "@/features/parking-sidebar/services/hooks";
import { editParkingAreaSchema } from "@/features/parking-sidebar/helpers/zod/parking-area.ts";

interface EditParkingAreaFormProps extends ComponentPropsWithoutRef<typeof Sheet> {
  parkingArea: ParkingArea;
}

export const EditParkingAreaForm: FC<EditParkingAreaFormProps> = ({
  onOpenChange,
  parkingArea,
}) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof editParkingAreaSchema>>({
    resolver: zodResolver(editParkingAreaSchema),
    defaultValues: parkingArea,
  });
  const { mutateAsync, isPending } = useEditParkingAreas();

  const addParkingArea = async (formData: z.infer<typeof editParkingAreaSchema>) => {
    try {
      await mutateAsync({ areaId: parkingArea.id, formData });
      toast({
        title: "Parking area edited",
        description: "The parking area has been edited successfully",
      });
      onOpenChange?.(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to edit parking area",
        description: "An error occurred while editing the parking area",
      });
    }
  };

  const formFields: Pick<FormInputProps, "name" | "label" | "type">[] = [
    { name: "name", label: "Parking area name" },
    { name: "address", label: "Address (optional)" },
    { name: "weekdayRate", type: "number", label: "Weekday rate" },
    { name: "weekendRate", type: "number", label: "Weekend rate" },
    { name: "discountPercentage", type: "number", label: "Discount percentage" },
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(addParkingArea)}
        ref={formRef}
        className="grid w-full grid-cols-1 gap-4"
      >
        {formFields.map(field => (
          <FormInput
            key={field.name}
            {...field}
          />
        ))}
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
