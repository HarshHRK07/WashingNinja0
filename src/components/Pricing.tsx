import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Wash (Per kg)',
      price: '499',
      priceType: 'Per kg',
      features: [
        'Wash & Fold (up to 5 kg)',
        '48 Hour Turnaround',
        'Basic Stain Treatment',
        'Free Pickup & Delivery on orders above ₹500'
      ]
    },
    {
      name: 'Premium Wash (Per kg)',
      price: '899',
      priceType: 'Per kg',
      featured: true,
      features: [
        'Premium Wash & Fold (up to 10 kg)',
        '24 Hour Turnaround',
        'Advanced Stain Treatment',
        'Fabric Softener Included',
        'Special Care for Fabrics',
        'Free Pickup & Delivery on orders above ₹500'
      ]
    },
    {
      name: 'Dry Clean (Per piece)',
      price: '349',
      priceType: 'Per piece',
      features: [
        'Professional Dry Cleaning',
        'Delicate Care & Pressing',
        '72 Hour Turnaround',
        'Free Pickup & Delivery on orders above ₹500'
      ]
    },
    {
      name: 'Boutique Services (Per piece)',
      price: '499',
      priceType: 'Per piece',
      features: [
        'Special Care for Delicate Fabrics',
        'Hand Wash & Ironing',
        'Stain Removal',
        'Garment Preservation',
        'Free Pickup & Delivery on orders above ₹500'
      ]
    },
    {
      name: 'Household Laundry (Per item)',
      price: '799',
      priceType: 'Per item',
      features: [
        'Blankets, Curtains, Rugs & Towels',
        'Gentle Wash & Fold',
        'Special Fabric Care',
        'Free Pickup & Delivery on orders above ₹500'
      ]
    }
  ];

  const garmentPrices = [
    {
      name: 'Shirt',
      price: '149',
      features: ['Wash & Iron', 'Standard Care']
    },
    {
      name: 'Pants',
      price: '199',
      features: ['Wash & Iron', 'Stain Treatment']
    },
    {
      name: 'Denim Jeans',
      price: '249',
      features: ['Wash & Iron', 'Durable Care']
    },
    {
      name: 'Blanket',
      price: '799',
      features: ['Gentle Wash', 'Stain Treatment']
    },
    {
      name: 'Curtains',
      price: '499',
      features: ['Wash & Fold', 'Special Care']
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            Choose the plan that's right for you.
          </p>
        </div>

        {/* Pricing Grid */}
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
                <span className="text-4xl font-bold">
                  ₹{plan.price} {plan.priceType}
                </span>
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
                Select Plan
              </button>
            </div>
          ))}
        </div>

        {/* Garment Pricing */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-900 text-center mb-8">
            Garment Specific Pricing
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {garmentPrices.map((garment, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <h4 className="text-2xl font-semibold mb-4">{garment.name}</h4>
                <div className="mb-4">
                  <span className="text-4xl font-bold">₹{garment.price}</span>
                  <span className="text-gray-600">/piece</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {garment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="w-5 h-5 text-blue-600 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 rounded-full font-semibold bg-blue-600 text-white hover:bg-blue-700 transition">
                  Choose Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
