import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Demo only - no actual submission)');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-400 font-light">
            Ready to upgrade your comfort? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Service Needed</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="ac">Air Conditioning</option>
                  <option value="heating">Heating</option>
                  <option value="installation">Installation</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="emergency">Emergency Repair</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="p-8 bg-neutral-900 border border-neutral-800 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-400 mb-1">Phone</p>
                    <a href="tel:5165559432" className="text-xl font-bold text-white hover:text-red-400 transition-colors">
                      (516) 555-9432
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-400 mb-1">Email</p>
                    <a href="mailto:info@proairhvac.com" className="text-xl font-bold text-white hover:text-red-400 transition-colors">
                      info@proairhvac.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-400 mb-1">Service Area</p>
                    <p className="text-xl font-bold text-white">
                      Long Island & NYC
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-3">Emergency Service</h3>
              <p className="text-neutral-400 mb-4">
                HVAC emergency? We're available 24/7 for urgent repairs.
              </p>
              <a 
                href="tel:5165559432" 
                className="inline-flex items-center gap-2 text-red-400 font-bold hover:text-red-300 transition-colors"
              >
                Call Emergency Line
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
