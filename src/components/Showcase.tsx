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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Work</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-900 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="min-h-[160px] flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                </div>

                <div className="flex items-center gap-2 text-slate-900 font-medium group-hover:gap-3 transition-all">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
