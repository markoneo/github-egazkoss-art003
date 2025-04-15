import React from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { MarketPrice } from './MarketPrice';
import { useMarketPrices } from '../../hooks/useMarketPrices';

export function MarketTicker() {
  const { prices, isLoading, error } = useMarketPrices();

  if (isLoading && prices.length === 0) {
    return (
      <div className="flex items-center space-x-2 text-gray-400 px-4">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>Loading market data...</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-8 px-4">
      {prices.map((price) => (
        <MarketPrice
          key={price.id}
          symbol={price.symbol}
          price={price.current_price}
          change={price.price_change_percentage_24h}
        />
      ))}
    </div>
  );
}