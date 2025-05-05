import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../products/ProductCard';
import { Category, categoryNames } from '../types';
import { SlidersHorizontal, X } from 'lucide-react';
import Button from '../ui/Button';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || null);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [sortBy, setSortBy] = useState('featured');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Update filtered products when filters change
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by price range
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default: // 'featured'
        // Keep original order
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy]);

  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange([0, 5000]);
    setSortBy('featured');
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsMobileFiltersOpen(false);
  };

  const handlePriceChange = (e, index) => {
    const value = parseInt(e.target.value);
    setPriceRange(prev => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
  };

  // Render filters section
  const FiltersSection = () => (
    <div className="space-y-6">
      {/* Category filter */}
      <div>
        <h3 className="text-lg font-medium text-gray-900">Categories</h3>
        <div className="mt-4 space-y-2">
          <div className="flex items-center">
            <input
              id="category-all"
              name="category"
              type="radio"
              checked={selectedCategory === null}
              onChange={() => handleCategoryChange(null)}
              className="h-4 w-4 text-[#CF5C36] border-gray-300 focus:ring-[#CF5C36]"
            />
            <label htmlFor="category-all" className="ml-3 text-sm text-gray-700">
              All Categories
            </label>
          </div>
          
          {Object.entries(categoryNames).map(([key, name]) => (
            <div key={key} className="flex items-center">
              <input
                id={`category-${key}`}
                name="category"
                type="radio"
                checked={selectedCategory === key}
                onChange={() => handleCategoryChange(key)}
                className="h-4 w-4 text-[#CF5C36] border-gray-300 focus:ring-[#CF5C36]"
              />
              <label htmlFor={`category-${key}`} className="ml-3 text-sm text-gray-700">
                {name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price filter */}
      <div>
        <h3 className="text-lg font-medium text-gray-900">Price Range</h3>
        <div className="mt-4 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">₹{priceRange[0]}</span>
            <span className="text-sm text-gray-600">₹{priceRange[1]}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="min-price" className="sr-only">Minimum Price</label>
              <input
                type="range"
                id="min-price"
                min="0"
                max="5000"
                step="100"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="max-price" className="sr-only">Maximum Price</label>
              <input
                type="range"
                id="max-price"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Clear filters button */}
      <div className="mt-6">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={clearFilters}
          className="w-full"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {selectedCategory ? categoryNames[selectedCategory] : 'All Products'}
          </h1>
          
          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <select
                id="sort-by"
                name="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-[#CF5C36] focus:border-[#CF5C36] sm:text-sm rounded-md"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <button
              type="button"
              className="p-2 ml-4 text-gray-400 hover:text-gray-500 lg:hidden"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            {/* Filters */}
            <div className="hidden lg:block">
              <FiltersSection />
            </div>

            {/* Mobile filter dialog */}
            {isMobileFiltersOpen && (
              <div className="fixed inset-0 flex z-40 lg:hidden">
                <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsMobileFiltersOpen(false)}></div>
                
                <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setIsMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <div className="mt-4 px-4">
                    <FiltersSection />
                  </div>
                </div>
              </div>
            )}

            {/* Product grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900">No products found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your filters or browse all products.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
