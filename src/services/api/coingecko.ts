import { handleApiResponse } from '../../utils/api';
import { ENDPOINTS } from '../config/endpoints';
import { CoinGeckoResponse, MarketPrice } from '../../types/market';

const FALLBACK_PRICES = {
  bitcoin: { usd: 65000, usd_24h_change: 2.5 },
  ethereum: { usd: 3500, usd_24h_change: 1.8 },
  solana: { usd: 150, usd_24h_change: 3.2 },
  sui: { usd: 1.5, usd_24h_change: 0.5 },
  kaspa: { usd: 0.15, usd_24h_change: 1.2 }
};

export async function fetchCoinGeckoData(): Promise<MarketPrice[]> {
  try {
    const response = await fetch(ENDPOINTS.CRYPTO, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      console.warn('CoinGecko API error, using fallback data');
      return transformFallbackData();
    }

    const data = await response.json() as CoinGeckoResponse;
    return Object.keys(data).length > 0 ? transformApiData(data) : transformFallbackData();
  } catch (error) {
    console.warn('Using fallback market data due to:', error);
    return transformFallbackData();
  }
}

function transformApiData(data: CoinGeckoResponse): MarketPrice[] {
  return Object.entries(data).map(([id, details]) => ({
    id,
    symbol: id.toUpperCase(),
    current_price: Number(details.usd.toFixed(2)),
    price_change_percentage_24h: Number(details.usd_24h_change.toFixed(2))
  }));
}

function transformFallbackData(): MarketPrice[] {
  return Object.entries(FALLBACK_PRICES).map(([id, details]) => ({
    id,
    symbol: id.toUpperCase(),
    current_price: details.usd,
    price_change_percentage_24h: details.usd_24h_change
  }));
}