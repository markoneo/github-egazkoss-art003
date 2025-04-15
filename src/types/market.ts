export interface MarketPrice {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export interface MarketState {
  prices: MarketPrice[];
  isLoading: boolean;
  error: string | null;
}

export interface CoinGeckoResponse {
  [key: string]: {
    usd: number;
    usd_24h_change: number;
  };
}

export type MarketDataError = {
  message: string;
  code?: string;
}