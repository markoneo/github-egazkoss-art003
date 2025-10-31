import { Car, DollarSign, Network, Ship, Users } from 'lucide-react';
import GlitchText from './GlitchText';

export default function OurBrands() {
  const brands = [
    {
      name: 'RidePilot',
      description: 'AI Dispatch & Fleet Management',
      url: 'https://www.ridepilot.org',
      icon: Car,
    },
    {
      name: 'Monetar.finance',
      description: 'Smart Finance & Invoice Tracker',
      url: 'https://www.monetar.finance',
      icon: DollarSign,
    },
    {
      name: 'RideConnect',
      description: 'Private Transfer Platform',
      url: 'https://www.rideconnect.net',
      icon: Network,
    },
    {
      name: 'TransferWay',
      description: 'Professional Chauffeur Network',
      url: 'https://www.transferway.net',
      icon: Users,
    },
    {
      name: 'Venice2Trieste',
      description: 'Luxury Cruise Port Transfers',
      url: 'https://www.venice2trieste.com',
      icon: Ship,
    },
  ];

  return (
    <section id="our-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <GlitchText enableOnHover={true} speed={1}>
              Part of the ARTComp Ecosystem
            </GlitchText>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our work is behind these projects. We build the automations, not just websites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {brands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <a
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-lg bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-slate-900 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {brand.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
