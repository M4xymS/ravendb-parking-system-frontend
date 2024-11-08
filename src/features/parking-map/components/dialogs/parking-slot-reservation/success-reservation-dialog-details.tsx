import { format } from "date-fns";
import { useSearchParams } from "react-router-dom";

import { LoadingSpinner } from "@/core/components/loading-spinner/loading-spinner.tsx";

import { SuccessReservationLabel } from "@/features/parking-map/components/dialogs/parking-slot-reservation/success-reservation-label.tsx";
import { useGetParkingReservationQuery } from "@/features/parking-map/services/hooks/get-parking-reservation.tsx";
import { useGetParkingSlotByIdQuery } from "@/features/parking-map/services/hooks";

export const SuccessReservationDialogDetails = () => {
  const [searchParams] = useSearchParams();
  const { data: parkingReservation, isLoading: parkingReservationIsLoading } =
    useGetParkingReservationQuery(searchParams.get("reservationId"));
  const { data: parkingSlot, isLoading: parkingSlotIsLoading } = useGetParkingSlotByIdQuery(
    parkingReservation?.parkingSlotId
  );

  if (parkingReservationIsLoading || parkingSlotIsLoading) {
    return (
      <div className=" flex justify-center">
        <LoadingSpinner className="size-14" />
      </div>
    );
  }

  return (
    <>
      <SuccessReservationLabel
        label="Reservation ID"
        value={parkingReservation?.id.slice(12)}
      />
      <SuccessReservationLabel
        label="Parking numer"
        value={`${parkingSlot?.letter}${parkingSlot?.number}`}
      />
      <SuccessReservationLabel
        label="Reservation Date"
        value={format(parkingReservation?.createdAt ?? new Date(), "dd.MM.yyyy HH:mm")}
      />
      <SuccessReservationLabel
        label="Currency"
        value={parkingReservation?.currency}
      />
      <SuccessReservationLabel
        label="Total Cost"
        value={parkingReservation?.totalCost.toFixed(2)}
      />
      <SuccessReservationLabel
        label="Parking Start Time"
        value={format(parkingReservation?.parkingStartTime ?? new Date(), "dd.MM.yyyy HH:mm")}
      />
      <SuccessReservationLabel
        label="Parking End Time"
        value={format(parkingReservation?.parkingEndTime ?? new Date(), "dd.MM.yyyy HH:mm")}
      />
    </>
  );
};
