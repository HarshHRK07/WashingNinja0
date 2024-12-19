import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Washing Ninja</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-100">Home</a>
            <a href="#services" className="text-white hover:text-blue-100">Services</a>
            <a href="#pricing" className="text-white hover:text-blue-100">Pricing</a>
            <a href="#contact" className="text-white hover:text-blue-100">Contact</a>
            <a href="tel:+1234567890" className="flex items-center text-white">
              <Phone className="w-4 h-4 mr-2" />
              <span>1234567890</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-white">Home</a>
            <a href="#services" className="block px-3 py-2 text-white">Services</a>
            <a href="#pricing" className="block px-3 py-2 text-white">Pricing</a>
            <a href="#contact" className="block px-3 py-2 text-white">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}