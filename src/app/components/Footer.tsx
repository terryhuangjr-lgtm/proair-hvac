import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-3xl font-black tracking-tight mb-6">
              <span className="text-white">PROAIR</span>
              <span className="text-red-500"> HVAC</span>
            </div>
            <p className="text-neutral-400 leading-relaxed font-light">
              Modern HVAC solutions for Long Island homes and businesses.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#services" className="hover:text-white transition-colors">Air Conditioning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Heating Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Installation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3 text-neutral-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-6">Contact</h3>
            <div className="space-y-4 text-neutral-400">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <a href="tel:5165559432" className="hover:text-white transition-colors">(516) 555-9432</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500" />
                <a href="mailto:info@proairhvac.com" className="hover:text-white transition-colors">info@proairhvac.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Long Island, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm font-light">
            © 2026 Pro Air HVAC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Licensing</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
