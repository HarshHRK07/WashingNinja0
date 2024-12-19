import React from 'react';
import { Truck, Clock, Star } from 'lucide-react';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">
              Professional Laundry & Dry Cleaning Services
            </h1>
            <p className="text-xl mb-8">
              Premium laundry service at your doorstep. Schedule a pickup today!
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Schedule Pickup
            </button>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <Truck className="w-8 h-8 mx-auto" />
                </div>
                <p>Free Pickup & Delivery</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <Clock className="w-8 h-8 mx-auto" />
                </div>
                <p>24 Hour Turnaround</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 p-4 rounded-lg mb-3">
                  <Star className="w-8 h-8 mx-auto" />
                </div>
                <p>Quality Service</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80"
              alt="Laundry Service"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}