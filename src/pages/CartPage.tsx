import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, ArrowLeft, ShoppingBag, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, subtotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  
  // Shipping calculation (free shipping over $100)
  const shippingCost = subtotal >= 100 ? 0 : 10;
  
  // Tax calculation (assumed 8%)
  const taxRate = 0.08;
  const taxAmount = subtotal * taxRate;
  
  // Total calculation
  const total = subtotal + shippingCost + taxAmount;

  if (!user) {
    return null;
  }

  if (items.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="container-custom py-16 text-center"
      >
        <div className="max-w-md mx-auto">
          <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={36} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added anything to your cart yet. Browse our products and find something you love.
          </p>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart items */}
          <div className="flex-grow">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Your Cart ({items.length} items)</h1>
              <button 
                onClick={() => clearCart()}
                className="text-sm text-gray-500 hover:text-error-500 transition-colors"
              >
                Clear Cart
              </button>
            </div>
            
            <button 
              onClick={() => navigate(-1)} 
              className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors mb-6"
            >
              <ArrowLeft size={16} className="mr-1" />
              <span>Continue Shopping</span>
            </button>
            
            {/* Cart item list */}
            <div className="border rounded-lg overflow-hidden mb-6">
              {items.map((item, index) => (
                <div 
                  key={`${item.product.id}-${item.color}-${item.size}`}
                  className={`p-4 flex flex-col sm:flex-row gap-4 ${
                    index < items.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  {/* Product image */}
                  <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden shrink-0">
                    <Link to={`/product/${item.product.id}`}>
                      <img 
                        src={item.product.imageUrl} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                  
                  {/* Product details */}
                  <div className="flex-grow">
                    <Link 
                      to={`/product/${item.product.id}`}
                      className="font-medium hover:text-primary-600 transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    
                    <div className="text-sm text-gray-500 mt-1">
                      {item.color && <span>Color: {item.color}</span>}
                      {item.color && item.size && <span> • </span>}
                      {item.size && <span>Size: {item.size}</span>}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md hover:bg-gray-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <span className="text-lg">-</span>
                        </button>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                          className="w-12 h-8 border-y border-gray-300 text-center focus:outline-none text-sm"
                        />
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-lg">+</span>
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-error-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order summary */}
          <div className="w-full md:w-80 lg:w-96 shrink-0">
            <div className="border rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8%)</span>
                  <span className="font-medium">${taxAmount.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-xl">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Link 
                to="/checkout" 
                className="btn btn-primary w-full justify-between group"
              >
                <span>Proceed to Checkout</span>
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>We accept:</p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className="font-medium">Visa</span>
                  <span className="font-medium">Mastercard</span>
                  <span className="font-medium">PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;