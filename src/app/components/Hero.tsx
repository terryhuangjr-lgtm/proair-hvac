typescript

import { Phone, ArrowRight, Thermometer } from 'lucide-react';
export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-black via-neutral-900 to-black py-32 overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-5 py-2.5 rounded-full mb-8 font-semibold backdrop-blur-sm">
            <Thermometer className="w-4 h-4" />
            24/7 Emergency HVAC Service
          </div>

          <h1 className="text-6xl lg:text-7xl font-black mb-6 text-white leading-tight tracking-tight">
            Climate Control,<br />
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Perfected.
            </span>
          </h1>

          <p className="text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl font-light">
            Modern HVAC solutions for Long Island homes and businesses. Fast, reliable, and built for comfort.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:5165550192" className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-5 rounded-xl hover:from-red-700 hover:to-orange-700 transition-all shadow-2xl text-center font-bold text-lg flex items-center justify-center gap-2 group">
              <Phone className="w-5 h-5" />
              Call Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="border-2 border-neutral-700 text-white px-8 py-5 rounded-xl hover:bg-white hover:text-black hover:border-white transition-all text-center font-bold backdrop-blur-sm">
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-800">
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-neutral-500 font-medium">Emergency Service</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">&lt;2hr</div>
              <div className="text-sm text-neutral-500 font-medium">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-neutral-500 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
