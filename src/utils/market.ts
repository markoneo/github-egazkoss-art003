import { MarketPrice, MetalData } from '../types/market';

export const formatPrice = (price: number): string => {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export const createMetalPrice = (
  id: string,
  price: number | undefined
): MarketPrice => ({
  id,
  symbol: id.toUpperCase(),
  current_price: price || 0,
  price_change_percentage_24h: 0
});

export const processMetalData = (data: any[]): MetalData => {
  const goldData = data.find(metal => metal.gold);
  const silverData = data.find(metal => metal.silver);
  
  return {
    gold: goldData?.gold,
    silver: silverData?.silver
  };
};

export const combineMarketData = (
  cryptoData: MarketPrice[],
  metalData: MetalData
): MarketPrice[] => [
  ...cryptoData,
  createMetalPrice('gold', metalData.gold),
  createMetalPrice('silver', metalData.silver)
];