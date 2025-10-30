import { ExternalLink } from 'lucide-react';

export default function Showcase() {
  const projects = [
    {
      title: 'RidePilot Dashboard',
      description: 'AI Dispatch Platform',
      url: 'https://www.ridepilot.org',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    },
    {
      title: 'Monetar Finance',
      description: 'Invoice Automation',
      url: 'https://www.monetar.finance',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    },
    {
      title: 'RideConnect Booking Portal',
      description: 'Transfer Network Hub',
      url: 'https://www.rideconnect.net',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
    },
    {
      title: 'Venice2Trieste',
      description: 'Tourism Web Experience',
      url: 'https://www.venice2trieste.com',
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop',
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
              className="group relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
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
