import React from 'react';
import HeroSection from '../home/HeroSection';
import CategorySection from '../home/CategorySection';
import FeaturedProducts from '../home/FeaturedProducts';
import TestimonialsSection from '../home/TestimonialsSection';
import { Truck, Clock, CreditCard, ShieldCheck } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-[#CF5C36]" />,
      title: 'Fast Delivery',
      description: 'Get your construction materials delivered quickly to your site.'
    },
    {
      icon: <Clock className="h-8 w-8 text-[#CF5C36]" />,
      title: '24/7 Support',
      description: 'Our customer service team is always ready to assist you.'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#CF5C36]" />,
      title: 'Secure Payments',
      description: 'Multiple secure payment options for your convenience.'
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#CF5C36]" />,
      title: 'Quality Guarantee',
      description: 'All our products are quality checked and guaranteed.'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 border border-gray-100 rounded-lg shadow-sm transition-all hover:border-[#CF5C36]/20 hover:shadow-md">
                <div className="inline-block p-3 bg-[#CF5C36]/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <CategorySection />
      
      {/* Featured Products */}
      <FeaturedProducts />
      
      {/* CTA Section */}
      <section className="py-12 bg-[#4A6D7C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Need Professional Help?</h2>
          <p className="mt-4 text-xl text-white/80 max-w-3xl mx-auto">
            Connect with experienced professionals for your construction project.
            From architects to plumbers, find qualified experts on EasyConstruct.
          </p>
          <div className="mt-8">
            <a href="/vendors" className="inline-block px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#4A6D7C] transition-colors">
              Find Professionals
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
    </main>
  );
};

export default HomePage;
