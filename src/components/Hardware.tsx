import React from 'react';
import { Section } from './ui/Section';

interface Solution {
  name: string;
  videoUrl: string;
  description: string;
}

export default function Hardware() {
  const solutions: Solution[] = [
    {
      name: "Mining Software Suite",
      videoUrl: "/videos/mining-software.mp4",
      description: "Comprehensive mining software solutions with advanced integration capabilities"
    },
    {
      name: "Security Infrastructure",
      videoUrl: "/videos/security-infrastructure.mp4",
      description: "Enterprise-grade security systems for mining operations and data protection"
    },
    {
      name: "AI Development Tools",
      videoUrl: "/videos/ai-development.mp4",
      description: "Advanced tools for AI agent development and training"
    }
  ];

  return (
    <Section id="hardware" title="Our Solutions" className="bg-cream-50">
      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((item, index) => (
          <div key={index} className="bg-cream-100 rounded-lg overflow-hidden border border-cream-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-video">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={item.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}