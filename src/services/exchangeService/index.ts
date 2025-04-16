import axios from "axios";

import { RatesResponse } from "./types";

// "https://data.fixer.io/api/latest?base=EUR&symbols=EUR,USD,BRL&access_key=";
const API_BASE_URL = import.meta.env.VITE_SOME_KEY;

export const ExchangeService = {
  async getRates() {
    const response = await axios.get(
      `/?base=EUR&symbols=EUR,USD,BRL&access_key=${import.meta.env.API_TOKEN}`,
      {
        baseURL: API_BASE_URL,
        params: {},
      }
    );

    return transformToBRLDataTable(response.data);
  },
};

export function transformToBRLDataTable(data: RatesResponse): RatesResponse {
  const brlRate = data.rates["BRL"];
  const convertedRates: Record<string, number> = {};

  for (const [currency, rate] of Object.entries(data.rates)) {
    convertedRates[currency] = Number((rate / brlRate).toFixed(2));
  }

  return {
    base: "BRL",
    success: data.success,
    timestamp: data.timestamp,
    date: data.date,
    rates: convertedRates,
  };
}
