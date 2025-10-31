import React from 'react';
import { Section } from './ui/Section';
import { IconBox } from './ui/IconBox';
import { servicesData } from '../data/services';

export default function Services() {
  return (
    <Section id="services" title="Our Services" className="bg-gray-50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <IconBox
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
}