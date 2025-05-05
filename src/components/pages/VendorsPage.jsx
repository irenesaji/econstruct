import React from 'react';
import { vendors } from '../data/vendors';
import Card from '../components/ui/Card';
import Rating from '../components/ui/Rating';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Store } from 'lucide-react';
import { categoryNames } from '../types';

const VendorsPage = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Vendors</h1>
          <p className="max-w-2xl mx-auto text-gray-500">
            Connect with our verified vendors for quality construction materials and services.
            Each vendor is thoroughly vetted to ensure you receive the best products and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <Card key={vendor.id} className="overflow-hidden">
              <div className="h-48 relative">
                <img
                  src={vendor.image}
                  alt={vendor.shopName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#4A6D7C]">
                  {categoryNames[vendor.category] || vendor.category}
                </div>
              </div>
              
              <Card.Content>
                <div className="flex justify-between items-start">
                  <div>
                    <Card.Title className="text-xl">{vendor.shopName}</Card.Title>
                    <p className="text-sm text-gray-500">Owner: {vendor.name}</p>
                  </div>
                  <Rating value={vendor.rating} reviewCount={vendor.reviews} />
                </div>
                
                <p className="mt-3 text-gray-600">{vendor.description}</p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Store className="h-4 w-4 text-[#CF5C36] mr-2" />
                    <span>Specializes in {categoryNames[vendor.category] || vendor.category}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 text-[#CF5C36] mr-2" />
                    <span>Mumbai, Maharashtra</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone className="h-4 w-4 text-[#CF5C36] mr-2" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </Card.Content>
              
              <Card.Footer className="flex justify-between">
                <Link to={`/vendors/${vendor.id}`}>
                  <Button variant="outline">View Profile</Button>
                </Link>
                <Link to={`/products?vendor=${vendor.id}`}>
                  <Button>Browse Products</Button>
                </Link>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;
