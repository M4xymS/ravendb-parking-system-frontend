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

import { addParkingAreaSchema } from "@/features/parking-sidebar/helpers/zod";
import { usePostParkingAreas } from "@/features/parking-sidebar/services/hooks";

export const AddParkingAreaForm: FC<ComponentPropsWithoutRef<typeof Sheet>> = ({
  onOpenChange,
}) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof addParkingAreaSchema>>({
    resolver: zodResolver(addParkingAreaSchema),
    defaultValues: {
      name: "",
      address: "",
      weekdayRate: 1,
      weekendRate: 1,
      discountPercentage: 0,
    },
  });
  const { mutateAsync, isPending } = usePostParkingAreas();

  const addParkingArea = async (formData: z.infer<typeof addParkingAreaSchema>) => {
    try {
      await mutateAsync(formData);
      toast({
        title: "Parking area added",
        description: "The parking area has been added successfully",
      });
      onOpenChange?.(false);
    } catch (error) {
      console.error(error);
      toast({
        title: "Failed to add parking area",
        description: "An error occurred while adding the parking area",
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
            <Button size="sm">Cancel</Button>
          </ResponsiveModalClose>
          <Button
            type="submit"
            isLoading={isPending}
            variant="outline"
            size="sm"
          >
            Add parking area
          </Button>
        </ResponsiveModalFooter>
      </form>
    </Form>
  );
};
