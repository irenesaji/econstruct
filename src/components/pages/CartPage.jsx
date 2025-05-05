import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import Button from '../ui/Button';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center py-16">
          <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products">
            <Button>
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
          <div className="lg:col-span-8">
            {/* Cart Items */}
            <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.product.id} className="py-6 flex flex-col sm:flex-row">
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-md overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 ml-0 sm:ml-6 mt-4 sm:mt-0">
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-lg font-medium text-gray-900">
                          <Link to={`/products/${item.product.id}`} className="hover:text-[#CF5C36]">
                            {item.product.name}
                          </Link>
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                          Category: {item.product.category}
                        </p>
                      </div>
                      <p className="text-lg font-medium text-gray-900">₹{item.product.price}</p>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center">
                        <label htmlFor={`quantity-${item.product.id}`} className="mr-2 text-sm text-gray-600">
                          Qty:
                        </label>
                        <select
                          id={`quantity-${item.product.id}`}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-[#CF5C36] focus:border-[#CF5C36] sm:text-sm"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>

                        <button
                          type="button"
                          className="ml-4 text-sm font-medium text-[#CF5C36] hover:text-[#B34F2E]"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2 className="h-5 w-5" />
                          <span className="sr-only">Remove</span>
                        </button>
                      </div>

                      <p className="text-lg font-medium text-gray-900">
                        ₹{item.product.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex justify-between">
              <Link to="/products" className="flex items-center text-[#CF5C36] hover:text-[#B34F2E]">
                <ArrowLeft className="h-5 w-5 mr-1" />
                Continue Shopping
              </Link>

              <Button variant="outline" onClick={clearCart}>
                Clear Cart
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mt-10 lg:mt-0 lg:col-span-4">
            <div className="bg-gray-50 rounded-lg px-6 py-8 sm:p-6 lg:p-8">
              <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="text-base font-medium text-gray-900">Subtotal</div>
                  <div className="text-base font-medium text-gray-900">₹{subtotal}</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-base font-medium text-gray-900">Shipping</div>
                  <div className="text-base font-medium text-gray-900">₹100</div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-base font-medium text-gray-900">Tax (GST)</div>
                  <div className="text-base font-medium text-gray-900">₹{Math.round(subtotal * 0.18)}</div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div className="text-lg font-bold text-gray-900">Order Total</div>
                  <div className="text-lg font-bold text-gray-900">
                    ₹{subtotal + 100 + Math.round(subtotal * 0.18)}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" fullWidth>
                  Proceed to Checkout
                </Button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  By proceeding, you agree to our{' '}
                  <Link to="/terms" className="text-[#CF5C36] hover:text-[#B34F2E]">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
