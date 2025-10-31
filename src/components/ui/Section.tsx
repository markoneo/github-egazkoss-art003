import React from 'react';
import GlitchText from '../GlitchText';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          <GlitchText enableOnHover={true} speed={1}>
            {title}
          </GlitchText>
        </h2>
        {children}
      </div>
    </section>
  );
}