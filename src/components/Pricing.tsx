import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Wash',
      price: '299',
      features: [
        'Wash & Fold Service',
        '48 Hour Turnaround',
        'Free Pickup & Delivery',
        'Basic Stain Treatment'
      ]
    },
    {
      name: 'Premium Care',
      price: '499',
      featured: true,
      features: [
        'Premium Wash & Fold',
        '24 Hour Turnaround',
        'Free Pickup & Delivery',
        'Advanced Stain Treatment',
        'Fabric Softener Included',
        'Special Care Instructions'
      ]
    },
    {
      name: 'Dry Clean',
      price: '699',
      features: [
        'Professional Dry Cleaning',
        '72 Hour Turnaround',
        'Free Pickup & Delivery',
        'Delicate Care',
        'Pressing & Ironing'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 ${
                plan.featured ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-bold">₹{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-blue-600 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 px-6 rounded-full font-semibold ${
                  plan.featured
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}