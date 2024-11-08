import { useParams } from "react-router-dom";
import { useMemo } from "react";

import { LoadingSpinner } from "@/core/components/loading-spinner/loading-spinner.tsx";
import { WordRotate } from "@/core/components/word-rotate/word-rotate.tsx";

import { ParkingRow } from "@/features/parking-map/components/parking-row/parking-row.tsx";
import { Indicator } from "@/features/parking-map/components/indicator/indicator.tsx";
import { organizeParkingSlots } from "@/features/parking-map/helpers";
import { useGetParkingSlotsQuery } from "@/features/parking-map/services/hooks";
import { SuccessReservationDialog } from "@/features/parking-map/components/dialogs/parking-slot-reservation/success-reservation-dialog.tsx";

export const ParkingMap = () => {
  const { areaId, floorId } = useParams();
  const { data, isSuccess, isLoading } = useGetParkingSlotsQuery(areaId, floorId);

  const formattedSlots = useMemo(
    () => organizeParkingSlots((isSuccess && data) || []),
    [data, isSuccess]
  );

  if (isLoading) {
    return (
      <div className="flex flex-col items-center">
        <LoadingSpinner className="size-24" />
        <WordRotate
          className=" font-semibold text-3xl"
          words={[
            "Loading parking slots...",
            "Finding available spots...",
            "Please wait while we check availability...",
            "Choose your parking slot...",
          ]}
        />
      </div>
    );
  }

  return (
    <>
      <SuccessReservationDialog />
      <div className="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:grid-cols-4 items-start justify-items-center gap-y-24 w-full">
        {formattedSlots?.map((row, rowIndex) => (
          <ParkingRow
            key={rowIndex}
            row={row}
          />
        ))}
        {formattedSlots.length !== 0 && (
          <>
            <Indicator type="exit" />
            <Indicator type="enter" />
          </>
        )}
      </div>
    </>
  );
};
