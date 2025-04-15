import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MarketPriceProps {
  symbol: string;
  price: number;
  change?: number;
}

export function MarketPrice({ symbol, price, change }: MarketPriceProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumSignificantDigits: 4
  }).format(price);

  return (
    <div className="flex items-center space-x-2 whitespace-nowrap">
      <span className="text-cream-50">{symbol}:</span>
      <span className="text-white font-medium">{formattedPrice}</span>
      {typeof change === 'number' && (
        <span className={`flex items-center ${
          change === 0 ? 'text-gray-400' : 
          change > 0 ? 'text-green-400' : 'text-red-400'
        }`}>
          {change === 0 ? (
            <Minus className="w-4 h-4" />
          ) : change > 0 ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          <span className="ml-1">{Math.abs(change).toFixed(2)}%</span>
        </span>
      )}
    </div>
  );
}