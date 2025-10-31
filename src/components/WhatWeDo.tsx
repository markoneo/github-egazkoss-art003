import { Bot, Globe, Phone } from 'lucide-react';
import ScrambledText from './ScrambledText';

export default function WhatWeDo() {
  const services = [
    {
      icon: Bot,
      title: 'AI Agents',
      description: 'Custom chatbots, data processors, and automation.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, fast, AI-integrated websites and dashboards.',
    },
    {
      icon: Phone,
      title: 'AI Call Assistants',
      description: 'Smart voice systems that schedule, answer, and route automatically.',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group text-center p-10 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gray-100 text-gray-700 mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                <ScrambledText
                  className="text-xl font-bold text-gray-900 mb-3 block"
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  {service.title}
                </ScrambledText>

                <ScrambledText
                  className="text-base text-gray-600 leading-relaxed block"
                  radius={100}
                  duration={1.5}
                  speed={0.4}
                  scrambleChars=".:"
                >
                  {service.description}
                </ScrambledText>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
