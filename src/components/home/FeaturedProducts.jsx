import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../components/data/products';
import Card from '../ui/Card';
import Rating from '../ui/Rating';
import { ShoppingCart } from 'lucide-react';
import Button from '../ui/Button';
import { useCart } from '../../components/context/CartContext';
import { categoryNames } from '../../components/types'; // Assumed to be a JS object

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  // Get the top 4 highest rated products
  const featuredProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-gray-500">
            Discover our top-rated construction materials and tools, trusted by professionals.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} hoverEffect>
              <Link to={`/products/${product.id}`}>
                <Card.Image src={product.image} alt={product.name} />
              </Link>
              <Card.Content>
                <Link to={`/products?category=${product.category}`}>
                  <span className="text-xs text-[#4A6D7C] font-medium uppercase tracking-wide">
                    {categoryNames[product.category] || product.category}
                  </span>
                </Link>
                <Link to={`/products/${product.id}`}>
                  <Card.Title className="mt-1 hover:text-[#CF5C36] transition-colors">
                    {product.name}
                  </Card.Title>
                </Link>
                <div className="mt-2">
                  <Rating value={product.rating} reviewCount={product.reviews} />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">₹{product.price}</span>
                </div>
              </Card.Content>
              <Card.Footer className="flex justify-between items-center">
                <Link to={`/products/${product.id}`}>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<ShoppingCart className="h-4 w-4" />}
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
