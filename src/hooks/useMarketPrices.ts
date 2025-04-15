import { useState, useEffect } from 'react';
import { MarketPrice, MarketState } from '../types/market';
import { fetchCoinGeckoData } from '../services/api/coingecko';

const INITIAL_STATE: MarketState = {
  prices: [],
  isLoading: true,
  error: null
};

const REFRESH_INTERVAL = 30000; // 30 seconds

export function useMarketPrices() {
  const [state, setState] = useState<MarketState>(INITIAL_STATE);

  useEffect(() => {
    let mounted = true;
    let intervalId: NodeJS.Timeout;

    async function fetchPrices() {
      try {
        const data = await fetchCoinGeckoData();
        if (mounted) {
          setState({
            prices: data,
            isLoading: false,
            error: null
          });
        }
      } catch (error) {
        if (mounted) {
          setState(prev => ({
            ...prev,
            isLoading: false,
            error: 'Failed to fetch market data'
          }));
        }
      }
    }

    fetchPrices();
    intervalId = setInterval(fetchPrices, REFRESH_INTERVAL);

    return () => {
      mounted = false;
      clearInterval(intervalId);
    };
  }, []);

  return state;
}