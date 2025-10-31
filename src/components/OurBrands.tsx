import { Car, DollarSign, Network, Ship, Users } from 'lucide-react';
import BrandLoop from './BrandLoop';

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

  const brandItems = brands.map((brand) => {
    const Icon = brand.icon;
    return {
      node: (
        <div className="brandloop__card">
          <div className="brandloop__icon-wrapper">
            <Icon className="brandloop__icon" />
          </div>
          <h3 className="brandloop__name">{brand.name}</h3>
          <p className="brandloop__description">{brand.description}</p>
        </div>
      ),
      href: brand.url,
      ariaLabel: `Visit ${brand.name} - ${brand.description}`,
      title: brand.name,
    };
  });

  return (
    <section id="our-work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Part of the ARTComp Ecosystem
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our work is behind these projects. We build the automations, not just websites.
          </p>
        </div>

        <BrandLoop
          brands={brandItems}
          speed={60}
          direction="left"
          gap={32}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#ffffff"
          scaleOnHover={true}
          ariaLabel="ARTComp Ecosystem Brands"
        />
      </div>
    </section>
  );
}
