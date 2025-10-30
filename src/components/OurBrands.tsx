import { Car, DollarSign, Network, Ship, Users } from 'lucide-react';

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
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Part of the ARTComp Ecosystem
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {brands.map((brand, index) => {
            const Icon = brand.icon;
            return (
              <a
                key={index}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-indigo-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
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
