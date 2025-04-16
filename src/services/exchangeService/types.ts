export type RatesResponse = {
  success: boolean;
  timestamp: number;
  base: string;
  date: string;
  rates: Record<string, number>;
};

export type ConvertedRate = {
  currency: string;
  value: number;
  datetime: string;
};
