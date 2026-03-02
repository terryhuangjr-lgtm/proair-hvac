import { CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const benefits = [
    "Expert plumbers with 20+ years experience",
    "Same-day service available",
    "No overtime charges for emergencies",
    "100% satisfaction guarantee",
    "Clean, professional technicians",
    "Fully stocked service vehicles",
    "Flat-rate pricing, not hourly",
    "Senior & military discounts available"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            The Apple Plumbing Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just plumbers—we're your neighbors committed to exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional faucet installation and repair"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
          </div>

          <div className="order-1 md:order-2">
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Special Offer</h3>
              <p className="text-lg mb-4">$50 OFF your first service call</p>
              <a 
                href="tel:5165557473" 
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors"
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