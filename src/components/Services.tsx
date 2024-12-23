import React from 'react';
import { Shirt, Wind, Droplet } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Shirt className="w-12 h-12" />,
      title: 'Wash & Fold',
      description: 'Professional washing, drying, and folding service for all your regular clothes.'
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: 'Dry Cleaning',
      description: 'Expert dry cleaning for your delicate garments, suits, and special care items.'
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: 'Express Service',
      description: 'Same-day service available for urgent requirements at a small premium.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Professional care for all your garments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-blue-600 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
