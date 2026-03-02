import { CheckCircle2 } from 'lucide-react';
export default function WhyChooseUs() {
  const benefits = [
    "EPA certified HVAC technicians",
    "Same-day service available",
    "No overtime charges for emergencies",
    "100% satisfaction guarantee",
    "Clean, professional technicians",
    "Fully stocked service vehicles",
    "Flat-rate pricing, not hourly",
    "Senior & military discounts available"
  ];
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            The ProAir HVAC Difference
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            We're not just technicians — we're your neighbors committed to exceptional service
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional HVAC installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-red-500/30 transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-neutral-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-8 bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Special Offer</h3>
              <p className="text-lg mb-4">$50 OFF your first service call</p>
              
                href="tel:5165550192"
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-colors"
              >
                Claim Your Discount
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
