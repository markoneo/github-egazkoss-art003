import { Bot, Globe, Phone } from 'lucide-react';
import GlitchText from './GlitchText';

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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <GlitchText enableOnHover={true} speed={1}>
              What We Do
            </GlitchText>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group text-center p-10 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-slate-100 text-slate-700 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
