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
    },
    {
        icon: <Shoe className="w-12 h-12" />,
        title: 'Shoe Cleaning',
        description: 'Comprehensive cleaning and polishing service for your footwear.'
    },
    {
        icon: <Thread className="w-12 h-12" />,
        title: 'Boutique Services',
        description: 'Tailored garment care for designer and high-fashion items.'
    },
    {
        icon: <Steam className="w-12 h-12" />,
        title: 'Steam Iron',
        description: 'Gentle steam ironing to remove wrinkles without damaging fabrics.'
    },
    {
        icon: <WashSteam className="w-12 h-12" />,
        title: 'Wash & Steam Iron',
        description: 'Complete washing and steam ironing for crisp, ready-to-wear clothes.'
    },
    {
        icon: <Bag className="w-12 h-12" />,
        title: 'Bag Cleaning',
        description: 'Deep cleaning and restoration service for your handbags and backpacks.'
    },
    {
        icon: <Curtain className="w-12 h-12" />,
        title: 'Curtain Cleaning',
        description: 'Cleaning services for your curtains to make them look fresh.'
    },
    {
        icon: <Carpet className="w-12 h-12" />,
        title: 'Carpet Cleaning',
        description: 'Thorough cleaning for your carpets and rugs to remove dirt and stains.'
    },
    {
        icon: <Leather className="w-12 h-12" />,
        title: 'Leather Care',
        description: 'Specialized cleaning and care for your leather garments and accessories.'
    },
    {
        icon: <Uniform className="w-12 h-12" />,
        title: 'Uniform Cleaning',
        description: 'Expert cleaning and pressing for school, office, or military uniforms.'
    },
    {
        icon: <Comforter className="w-12 h-12" />,
        title: 'Comforter Cleaning',
        description: 'Professional cleaning for your comforters, duvets, and blankets.'
    },
    {
        icon: <Pillow className="w-12 h-12" />,
        title: 'Pillow Cleaning',
        description: 'Sanitization and cleaning of pillows to ensure hygiene and comfort.'
    },
    {
        icon: <Hat className="w-12 h-12" />,
        title: 'Hat Cleaning',
        description: 'Delicate cleaning for caps, hats, and other headwear.'
    },
    {
        icon: <StainRemoval className="w-12 h-12" />,
        title: 'Stain Removal',
        description: 'Advanced stain removal treatments for tough stains on all fabrics.'
    },
    {
        icon: <Wedding className="w-12 h-12" />,
        title: 'Wedding Dress Cleaning',
        description: 'Specialized cleaning and preservation for wedding dresses and gowns.'
    },
    {
        icon: <Toy className="w-12 h-12" />,
        title: 'Soft Toy Cleaning',
        description: 'Safe cleaning and sanitization for your plush toys and stuffed animals.'
    },
    {
        icon: <Mattress className="w-12 h-12" />,
        title: 'Mattress Cleaning',
        description: 'Deep cleaning and sanitization for mattresses to remove dust mites and odors.'
    },
    {
        icon: <Denim className="w-12 h-12" />,
        title: 'Denim Care',
        description: 'Special treatments to maintain the color and texture of your denim wear.'
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
