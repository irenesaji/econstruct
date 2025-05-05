import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Rating from '../ui/Rating';
import { ShoppingCart } from 'lucide-react';
import Button from '../ui/Button';
import { useCart } from '../../components/context/CartContext';
import { categoryNames } from '../../components/types'; // assuming it's a plain object

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card hoverEffect>
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
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
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
  );
};

export default ProductCard;
