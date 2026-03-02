import { Wind, Snowflake, Wrench, Shield, Clock, Zap } from 'lucide-react';

export default function Features() {
  const services = [
    {
      icon: Snowflake,
      title: "Air Conditioning",
      description: "Installation, repair, and maintenance of all AC systems. Stay cool all summer."
    },
    {
      icon: Wind,
      title: "Heating Systems",
      description: "Furnaces, boilers, and heat pumps. Reliable warmth when you need it most."
    },
    {
      icon: Wrench,
      title: "System Installation",
      description: "Complete HVAC system design and installation for new construction and replacements."
    },
    {
      icon: Shield,
      title: "Maintenance Plans",
      description: "Preventative maintenance to keep your system running efficiently year-round."
    },
    {
      icon: Clock,
      title: "Emergency Service",
      description: "24/7 emergency repairs. We're here when your system isn't."
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Upgrades and solutions to reduce energy costs and environmental impact."
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            Comprehensive HVAC solutions for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-neutral-900 border border-neutral-800 rounded-2xl hover:border-red-500/50 transition-all hover:shadow-2xl hover:shadow-red-500/10"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
