import { Award, Users, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern HVAC system installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          <div>
            <h2 className="text-5xl font-black text-white mb-6 tracking-tight">
              The Future of<br />
              <span className="text-red-500">Climate Control</span>
            </h2>
            <p className="text-lg text-neutral-400 mb-6 leading-relaxed font-light">
              Heat Inc is redefining HVAC service for Long Island. We're a new company with a fresh approach: cutting-edge technology, transparent pricing, and service that actually shows up when we say we will.
            </p>
            <p className="text-lg text-neutral-400 mb-10 leading-relaxed font-light">
              No decades of "experience" doing things the old way. Just modern solutions, efficient service, and a commitment to getting it right the first time.
            </p>
            
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">Modern Solutions</h3>
                  <p className="text-neutral-400">Latest technology and energy-efficient systems</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">Certified Technicians</h3>
                  <p className="text-neutral-400">EPA certified and fully insured professionals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">Transparent Pricing</h3>
                  <p className="text-neutral-400">No hidden fees, no surprises, just honest work</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-red-500" />
                <p className="text-lg font-bold text-white">Serving Long Island</p>
              </div>
              <p className="text-neutral-400 leading-relaxed">
                Nassau County • Suffolk County • Queens • Brooklyn
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}