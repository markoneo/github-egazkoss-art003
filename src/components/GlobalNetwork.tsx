import React from 'react';
import { Section } from './ui/Section';

export default function GlobalNetwork() {
  return (
    <Section id="global-network" title="Global Mining Network" className="bg-custom-gray text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Worldwide Mining Operations</h3>
          <p className="mb-6 text-gray-200">
            Our mining infrastructure spans across strategic locations globally, ensuring optimal performance,
            redundancy, and compliance with local regulations.
          </p>
          <ul className="space-y-3">
            {['North America', 'Europe', 'Asia Pacific', 'Middle East'].map((region, index) => (
              <li key={index} className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                <span>{region} Data Centers</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="relative overflow-hidden rounded-lg shadow-xl border border-gray-700 aspect-video">
            <img 
              src="/images/global-network.webp" 
              alt="Global Mining Network" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-custom-gray/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-sm text-gray-300">
              <p>Active mining nodes: 1,245</p>
              <p>Network uptime: 99.98%</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}