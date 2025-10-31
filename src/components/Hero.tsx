import React from 'react';
import { HeroFeatures } from './hero/HeroFeatures';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/new-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay - adjusted for better content visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
      </div>

      {/* Content - enhanced for better visibility */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white text-shadow-lg">
            Advanced Mining & AI Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl text-shadow">
            Specialized in crypto mining software integration, security solutions, and AI agent development for enterprise needs.
          </p>
        </div>
        <HeroFeatures />
      </div>
    </div>
  );
}