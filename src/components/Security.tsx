import React from 'react';
import { Section } from './ui/Section';
import { SecurityCard } from './security/SecurityCard';
import { securityFeatures } from '../data/security';

export default function Security() {
  return (
    <Section id="security" title="Security First Approach" className="bg-gray-50">
      <div className="grid md:grid-cols-3 gap-8">
        {securityFeatures.map((feature, index) => (
          <SecurityCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
}