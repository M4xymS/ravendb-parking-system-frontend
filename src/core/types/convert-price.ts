type currencyOptions = "USD" | "EUR" | "PLN";

export interface ExchangeRates {
  rate: number;
  amount: number;
  convertedAmount: string;
  currency: currencyOptions;
  symbol: string;
}

export interface ConvertedPriceResponse {
  success: boolean;
  base: currencyOptions;
  exchangeRates: ExchangeRates[];
}
