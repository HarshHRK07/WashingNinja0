import React from 'react';
import { CalendarCheck, PackageSearch, Truck, Check } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <CalendarCheck className="w-10 h-10" />,
      title: 'Schedule Pickup',
      description: 'Choose your preferred pickup time and location'
    },
    {
      icon: <PackageSearch className="w-10 h-10" />,
      title: 'We Process',
      description: 'Your clothes are carefully cleaned and treated'
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: 'Free Delivery',
      description: 'We deliver your fresh clothes back to you'
    },
    {
      icon: <Check className="w-10 h-10" />,
      title: 'Ready to Wear',
      description: 'Your garments are ready to wear and enjoy'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Simple steps to get your laundry done
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 w-1/4 h-0.5 bg-blue-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}