import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef, FC } from "react";
import { addHours, addMonths } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { Form, FormDateTimePicker, FormSelect } from "@/core/components/ui/form.tsx";
import { Button } from "@/core/components/ui/button.tsx";
import { Sheet, SheetClose, SheetFooter } from "@/core/components/ui/sheet.tsx";
import { SelectItem } from "@/core/components/ui/select.tsx";
import { useToast } from "@/core/hooks";
import { currencyOptions } from "@/core/constants/currency-options.ts";
import { ParkingReservation } from "@/core/types/parking-reservation.ts";

import { usePostParkingReservationMutation } from "@/features/parking-map/services/hooks/post-parking-reservation.tsx";
import { reserveParkingSlotSchema } from "@/features/parking-map/helpers/zod";

interface ParkingSlotFormProps extends ComponentPropsWithoutRef<typeof Sheet> {
  id: string;
}

export const ParkingSlotReservationForm: FC<ParkingSlotFormProps> = ({ id, onOpenChange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const form = useForm<z.infer<typeof reserveParkingSlotSchema>>({
    resolver: zodResolver(reserveParkingSlotSchema),
    defaultValues: {
      parkingStartTime: new Date(),
      parkingEndTime: addHours(new Date(), 1),
      currency: "USD",
    },
  });
  const { toast } = useToast();
  const { mutateAsync, isPending } = usePostParkingReservationMutation();

  const onSubmit = async (formData: z.infer<typeof reserveParkingSlotSchema>) => {
    try {
      await mutateAsync({ slotId: id, variables: formData }).then(
        (reservation: ParkingReservation) => {
          toast({
            title: "Parking slot reserved",
            description: "The parking slot has been reserved successfully",
          });
          searchParams.set("reservationId", reservation.id);
          setSearchParams(searchParams);
          onOpenChange?.(false);
        }
      );
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while reserving the parking slot, please try again",
      });
      console.error(error);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
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
            {currencyOptions.map((currency, index) => (
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
            <Button
              isLoading={isPending}
              type="submit"
            >
              Save
            </Button>
          </SheetFooter>
        </form>
      </Form>
    </>
  );
};
