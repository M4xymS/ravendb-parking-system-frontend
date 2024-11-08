import { FC } from "react";
import { useSearchParams } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/core/components/ui/accordion.tsx";
import { Button } from "@/core/components/ui/button.tsx";

import { SuccessReservationConvertPriceCard } from "@/features/parking-map/components/dialogs/parking-slot-reservation/success-reservation-convert-price-card.tsx";
import { useGetReservationConvertedPrices } from "@/features/parking-map/services/hooks";

interface SuccessReservationConvertPriceAccordionProps {
  isLoading: boolean;
}

export const SuccessReservationConvertPriceAccordion: FC<
  SuccessReservationConvertPriceAccordionProps
> = ({ isLoading }) => {
  const [searchParams] = useSearchParams();

  const searchParamReservationId = searchParams.get("reservationId");
  const {
    data: convertedPrices,
    isLoading: reservationConvertedPricesIsLoading,
    refetch,
  } = useGetReservationConvertedPrices(searchParamReservationId);

  if (isLoading) {
    return null;
  }

  const handleConvert = () => {
    refetch();
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Click here to convert prices</AccordionTrigger>
        <AccordionContent>
          <Button
            className="w-full"
            isLoading={reservationConvertedPricesIsLoading}
            onClick={handleConvert}
          >
            Convert
          </Button>
          {convertedPrices?.exchangeRates.map(conversion => (
            <SuccessReservationConvertPriceCard
              key={conversion.currency}
              {...conversion}
              base={convertedPrices.base}
              isLoading={reservationConvertedPricesIsLoading}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
