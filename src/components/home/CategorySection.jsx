import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { categoryNames } from '../../components/types'; // Assumes this is just an object, not using TS types

const CategoryCard = ({ category, title, imageUrl }) => {
  return (
    <Link to={`/products?category=${category}`} className="group block">
      <div className="relative overflow-hidden rounded-lg shadow-md h-60">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 w-full">
            <h3 className="text-white text-lg font-semibold group-hover:text-[#F9A826] transition-colors">
              {title}
            </h3>
            <div className="mt-2 flex items-center text-white text-sm group-hover:text-[#F9A826] transition-colors">
              <span>View Products</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const CategorySection = () => {
  const categories = [
    {
      id: 'building-materials',
      imageUrl: 'https://images.pexels.com/photos/5691626/pexels-photo-5691626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'tools',
      imageUrl: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'electrical',
      imageUrl: 'https://images.pexels.com/photos/8961595/pexels-photo-8961595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'plumbing',
      imageUrl: 'https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'flooring',
      imageUrl: 'https://images.pexels.com/photos/6508358/pexels-photo-6508358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'paint',
      imageUrl: 'https://images.pexels.com/photos/6368836/pexels-photo-6368836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'hardware',
      imageUrl: 'https://images.pexels.com/photos/277559/pexels-photo-277559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      id: 'safety-equipment',
      imageUrl: 'https://images.pexels.com/photos/159825/construction-worker-safety-159825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500">
            Browse our wide range of construction materials and tools, categorized for your convenience.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category.id}
              title={categoryNames[category.id]}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
