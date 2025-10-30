import { ExternalLink } from 'lucide-react';

export default function Showcase() {
  const projects = [
    {
      title: 'RidePilot Dashboard',
      description: 'AI Dispatch Platform',
      url: 'https://www.ridepilot.org',
    },
    {
      title: 'Monetar Finance',
      description: 'Invoice Automation',
      url: 'https://www.monetar.finance',
    },
    {
      title: 'RideConnect Booking Portal',
      description: 'Transfer Network Hub',
      url: 'https://www.rideconnect.net',
    },
    {
      title: 'Venice2Trieste',
      description: 'Tourism Web Experience',
      url: 'https://www.venice2trieste.com',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">Our Work</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8"
            >
              <div className="min-h-[200px] flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4">{project.description}</p>

                <div className="flex items-center gap-2 text-indigo-400 font-medium group-hover:gap-4 transition-all">
                  View Project
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
