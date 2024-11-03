import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useRef } from "react";
import { addMonths } from "date-fns";

import { Form, FormDateTimePicker, FormSelect } from "@/core/components/ui/form.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { SheetClose, SheetFooter } from "@/core/components/ui/sheet.tsx";
import { SelectItem } from "@/core/components/ui/select.tsx";

import { reserveParkingSlotSchema } from "@/features/parking-map/helpers/zod/reserve-parking-slot.ts";

interface ParkingSlotFormProps {
  id: number;
}

export const ParkingSlotForm: FC<ParkingSlotFormProps> = ({ id }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof reserveParkingSlotSchema>>({
    resolver: zodResolver(reserveParkingSlotSchema),
  });

  const onSubmit = (formData: z.infer<typeof reserveParkingSlotSchema>) => {
    console.log(formData, id);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        ref={formRef}
        className="grid w-full grid-cols-1 mt-8 gap-4"
      >
        <FormDateTimePicker
          disabled={{ before: new Date(), after: addMonths(new Date(), 1) }}
          name="parkingStartTime"
          label="Parking Start Time"
        />
        <FormDateTimePicker
          disabled={{ before: new Date(), after: addMonths(new Date(), 1) }}
          name="parkingEndTime"
          label="Parking End Time"
        />
        <FormSelect
          name="currency"
          label="Currency"
          defaultValue="USD"
          placeholder="Select currency"
        >
          {["USD", "PLN"].map((currency, index) => (
            <SelectItem
              value={currency}
              key={index}
            >
              {currency}
            </SelectItem>
          ))}
        </FormSelect>

        <SheetFooter className="gap-2 pt-2 sm:space-x-0">
          <SheetClose asChild>
            <Button
              type="button"
              variant="outline"
            >
              Cancel
            </Button>
          </SheetClose>
          <Button type="submit">Save</Button>
        </SheetFooter>
      </form>
    </Form>
  );
};
