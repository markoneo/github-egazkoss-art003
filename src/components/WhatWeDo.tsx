import { Bot, Globe, Phone } from 'lucide-react';

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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl hover:bg-slate-50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-100 text-indigo-600 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-10 h-10" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-lg text-slate-600 leading-relaxed">
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
