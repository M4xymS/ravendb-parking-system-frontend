import { FC } from "react";

import { Card } from "@/core/components/ui/card.tsx";
import { Label } from "@/core/components/ui/label.tsx";
import { Skeleton } from "@/core/components/ui/skeleton.tsx";
import { ExchangeRates } from "@/core/types/convert-price.ts";

interface SuccessReservationConvertPriceCardProps extends ExchangeRates {
  isLoading: boolean;
  base: string;
}

export const SuccessReservationConvertPriceCard: FC<SuccessReservationConvertPriceCardProps> = ({
  rate,
  base,
  convertedAmount,
  symbol,
  currency,
  isLoading,
}) => {
  const formattedAmount = convertedAmount.split(".");

  if (base === currency) {
    return null;
  }

  if (isLoading) {
    return (
      <Card className="flex items-center gap-x-4 my-4 p-2">
        <Skeleton className="w-12 h-12" />
        <div className="flex grow space-y-4 justify-center flex-col">
          <Skeleton className="w-24 h-2" />
          <Skeleton className="w-16 h-4" />
        </div>
        <div className="flex">
          <Skeleton className="w-16 h-4" />
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex gap-4 p-2 my-4 items-center">
      <img
        src={`/assets/${currency.toLowerCase()}.svg`}
        alt="USD"
        className="size-12 rounded-lg shadow border object-cover"
      />
      <div className="flex grow flex-col justify-center">
        <b className="text-lg">{currency}</b>
        <p className="text-muted-foreground">
          <span>
            {base} 1 → {symbol} {rate.toFixed(2)}
          </span>
        </p>
      </div>
      <div className="flex">
        <Label className="font-semibold text-lg">
          {symbol} {formattedAmount[0]}
          <Label className="text-muted-foreground">.{formattedAmount[1]}</Label>
        </Label>
      </div>
    </Card>
  );
};
