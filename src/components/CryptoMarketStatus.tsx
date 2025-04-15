import React from 'react';
import { MarketTicker } from './market/MarketTicker';

export default function CryptoMarketStatus() {
  return (
    <div className="bg-custom-gray py-2 border-b border-cream-200 fixed w-full top-0 z-50 overflow-hidden shadow-sm text-white">
      <div className="relative">
        <div className="flex animate-scroll">
          <MarketTicker />
          <MarketTicker />
        </div>
      </div>
    </div>
  );
}