import React from 'react';
import { heroFeatures } from '../../data/hero';

export function HeroFeatures() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {heroFeatures.map((feature, index) => (
        <div 
          key={index} 
          className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-yellow-500/50 transition-colors card-hover"
        >
          <div className="animate-float">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}