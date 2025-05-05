import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { vendors } from '../data/vendors';
import Rating from '../ui/Rating';
import Button from '../ui/Button';
import { ShoppingCart, TruckIcon, ShieldCheck, Star, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { categoryNames } from '../types';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/products')}>
            Browse All Products
          </Button>
        </div>
      </div>
    );
  }
  
  const vendor = vendors.find(v => v.id === product.vendorId);
  
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <nav className="mb-6">
          <ol className="flex text-sm">
            <li className="text-gray-500">
              <a href="/" className="hover:text-[#CF5C36]">Home</a>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-gray-500">
              <a href="/products" className="hover:text-[#CF5C36]">Products</a>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-gray-500">
              <a href={`/products?category=${product.category}`} className="hover:text-[#CF5C36]">
                {categoryNames[product.category] || product.category}
              </a>
            </li>
            <li className="mx-2 text-gray-500">/</li>
            <li className="text-[#CF5C36] font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:max-w-lg lg:self-end">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            </div>
            
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl font-semibold text-gray-900">₹{product.price}</p>
            </div>

            <div className="mt-3">
              <Rating value={product.rating} reviewCount={product.reviews} size="lg" />
            </div>

            {vendor && (
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <Store className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                <p>
                  Sold by{' '}
                  <a href={`/vendors/${vendor.id}`} className="font-medium text-[#4A6D7C] hover:text-[#CF5C36]">
                    {vendor.shopName}
                  </a>
                </p>
              </div>
            )}

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="prose prose-sm text-gray-500">
                <h3 className="text-lg font-medium text-gray-900">Features</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <ShieldCheck className="h-5 w-5 text-green-500 mr-2" />
                    <span>Quality assured product with warranty</span>
                  </li>
                  <li className="flex items-center">
                    <TruckIcon className="h-5 w-5 text-blue-500 mr-2" />
                    <span>Fast delivery within 3-5 business days</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span>Top-rated product in its category</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <div className="flex items-center">
                <label htmlFor="quantity" className="mr-3 text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-[#CF5C36] focus:border-[#CF5C36] sm:text-sm"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                <Button
                  onClick={handleAddToCart}
                  leftIcon={<ShoppingCart className="h-5 w-5" />}
                  fullWidth
                  size="lg"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="group relative">
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href={`/products/${relatedProduct.id}`}>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {relatedProduct.name}
                        </a>
                      </h3>
                      <div className="mt-1">
                        <Rating value={relatedProduct.rating} size="sm" />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">₹{relatedProduct.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
