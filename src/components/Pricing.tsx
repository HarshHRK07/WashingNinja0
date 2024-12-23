import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Wash & Fold (Per kg)',
      price: '399',
      priceType: 'Per kg',
      features: [
        'Wash & Fold',
        'Includes up to 5 kg',
        'Regular Garments (T-shirts, Shirts, Pants)',
        'Free Pickup & Delivery on orders above ₹500',
        '₹80 per kg for additional weight'
      ]
    },
    {
      name: 'Premium Wash & Fold (Per kg)',
      price: '649',
      priceType: 'Per kg',
      featured: true,
      features: [
        'Premium Wash & Fold',
        'Includes up to 7 kg',
        'Delicate Care (Silk, Wool, Linen)',
        'Free Pickup & Delivery on orders above ₹500',
        '₹100 per kg for additional weight'
      ]
    },
    {
      name: 'Dry Cleaning (Per piece)',
      price: '299',
      priceType: 'Per piece',
      features: [
        'Shirts, T-shirts, Casual Pants',
        'Delicate Care & Pressing',
        'Free Pickup & Delivery on orders above ₹500',
        '₹499 for Jeans, Jackets, Coats',
        '₹799 for Suits, Blazers, Evening Dresses',
        '₹599 for Silk, Wool, Cashmere'
      ]
    },
    {
      name: 'Household Laundry (Per item)',
      price: '499',
      priceType: 'Per item',
      features: [
        'Blankets, Quilts, Rugs: ₹899',
        'Curtains & Bedspreads: ₹499',
        'Towels & Bedsheets: ₹199',
        'Pillows & Cushions: ₹199',
        'Free Pickup & Delivery on orders above ₹500'
      ]
    },
    {
      name: 'Laundry Wash (Per piece)',
      price: 'Varies',
      priceType: 'Per piece',
      features: [
        'Shirts (Laundry): ₹199',
        'T-Shirts (Laundry): ₹149',
        'Jeans & Pants (Laundry): ₹249',
        'Sweaters (Laundry): ₹299'
      ]
    },
    {
      name: 'Dry Cleaning (Per piece)',
      price: 'Varies',
      priceType: 'Per piece',
      features: [
        'Shirts (Dry Clean): ₹299',
        'T-Shirts (Dry Clean): ₹199',
        'Jeans & Pants (Dry Clean): ₹499',
        'Blazers (Dry Clean): ₹499',
        'Suits (Dry Clean): ₹799',
        'Dresses (Dry Clean): ₹399',
        'Silk & Woolen Garments: ₹599'
      ]
    },
    {
      name: 'Boutique Services',
      price: 'Varies',
      priceType: 'Per piece',
      features: [
        'Alterations: ₹699 (Hemming, Tailoring)',
        'Delicate Fabric Care: ₹599 (Silk, Wool)',
        'Embroidery & Beading: ₹999 (Custom Designs)',
        'Free Pickup & Delivery on orders above ₹500'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple & Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            Find the best plan tailored to your needs.
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
                Select Service
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-lg text-gray-600">
          <p>Free pickup and delivery is available on orders above ₹500</p>
        </div>
      </div>
    </section>
  );
}
