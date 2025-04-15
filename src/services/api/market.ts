import { MarketPrice } from '../../types/market';
import { ENDPOINTS } from '../config/endpoints';

export async function fetchCryptoData(): Promise<MarketPrice[]> {
  try {
    const response = await fetch(ENDPOINTS.CRYPTO);
    
    if (!response.ok) {
      throw new Error('Failed to fetch market data');
    }

    const data = await response.json();
    
    return Object.entries(data).map(([id, details]: [string, any]) => ({
      id,
      symbol: id.toUpperCase(),
      current_price: details.usd || 0,
      price_change_percentage_24h: details.usd_24h_change || 0
    }));
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    throw error;
  }
}