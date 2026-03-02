import { Phone, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-neutral-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="text-3xl font-black tracking-tight">
              <span className="text-white">HEAT</span>
              <span className="text-red-500"> INC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-neutral-300 hover:text-white transition-colors font-medium">Home</a>
            <a href="#services" className="text-neutral-300 hover:text-white transition-colors font-medium">Services</a>
            <a href="#about" className="text-neutral-300 hover:text-white transition-colors font-medium">About</a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition-colors font-medium">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:5165559432" className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all font-bold shadow-lg">
              <Phone className="w-4 h-4" />
              <span>(516) 555-9432</span>
            </a>
            <button className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
