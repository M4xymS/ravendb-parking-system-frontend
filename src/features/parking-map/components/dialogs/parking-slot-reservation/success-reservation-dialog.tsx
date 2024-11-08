import { ComponentPropsWithoutRef, FC, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Button } from "@/core/components/ui/button.tsx";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/core/components/ui/dialog.tsx";
import { Separator } from "@/core/components/ui/separator.tsx";

import { useConfetti } from "@/features/parking-map/hooks";
import { useGetParkingReservationQuery } from "@/features/parking-map/services/hooks/get-parking-reservation.tsx";
import { SuccessReservationConvertPriceAccordion } from "@/features/parking-map/components/dialogs/parking-slot-reservation/success-reservation-convert-price-accordion.tsx";
import { SuccessReservationDialogDetails } from "@/features/parking-map/components/dialogs/parking-slot-reservation/success-reservation-dialog-details.tsx";

export const SuccessReservationDialog: FC<ComponentPropsWithoutRef<typeof Dialog>> = props => {
  const [searchParams, setSearchParams] = useSearchParams();
  const triggerConfetti = useConfetti();
  const [open, setOpen] = useState(false);

  const { isLoading: parkingReservationIsLoading } = useGetParkingReservationQuery(
    searchParams.get("reservationId")
  );

  const isLoading = parkingReservationIsLoading;

  const searchParamReservationId = searchParams.has("reservationId");

  useEffect(() => {
    if (searchParamReservationId) {
      triggerConfetti();
      setOpen(true);
    }
  }, [searchParamReservationId]);

  const handleClose = useCallback(() => {
    setOpen(false);
    searchParams.delete("reservationId");
    setSearchParams(searchParams);
  }, [searchParams, setSearchParams]);

  return (
    <Dialog
      open={open}
      {...props}
    >
      <DialogContent onCloseClick={handleClose}>
        <DialogHeader className="!text-center">
          <DialogTitle>Reservation successful!</DialogTitle>
          <DialogDescription>
            Your reservation is <b className="font-semibold text-green-500">confirmed!</b> Check
            your email for ticket to scan at the parking entrance. You have secured a parking slot
            with the following details:
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <SuccessReservationDialogDetails />
        <SuccessReservationConvertPriceAccordion isLoading={isLoading} />
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="outline"
              onClick={handleClose}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
