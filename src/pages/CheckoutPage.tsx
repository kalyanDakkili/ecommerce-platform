import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, CreditCard, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  
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
  
  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
    window.scrollTo(0, 0);
  };
  
  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setOrderComplete(true);
      clearCart();
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (!user) {
    return null;
  }
  
  if (items.length === 0 && !orderComplete) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="mb-8">You need to add items to your cart before checkout.</p>
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }
  
  if (orderComplete) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container-custom py-16 text-center"
      >
        <div className="max-w-md mx-auto">
          <div className="bg-success-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white">
            <Check size={40} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Order Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been received and is now being processed. 
            You will receive an email confirmation shortly.
          </p>
          <p className="font-medium mb-8">Order #: ORD-{Math.floor(100000 + Math.random() * 900000)}</p>
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
        <Link to="/cart" className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors mb-6">
          <ChevronLeft size={16} className="mr-1" />
          <span>Back to Cart</span>
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main checkout form */}
          <div className="flex-grow">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>
            
            {/* Checkout steps */}
            <div className="flex justify-between mb-8">
              <div className={`flex flex-col items-center ${currentStep >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  1
                </div>
                <span className="text-sm font-medium">Shipping</span>
              </div>
              <div className="flex-grow flex items-center">
                <div className={`h-1 w-full ${currentStep >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
              </div>
              <div className={`flex flex-col items-center ${currentStep >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  currentStep >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  2
                </div>
                <span className="text-sm font-medium">Payment</span>
              </div>
            </div>
            
            {/* Shipping form */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmitShipping}>
                  <div className="border rounded-lg p-6 mb-6">
                    <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="input"
                          placeholder="your@email.com"
                          defaultValue={user.email}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          className="input"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6 mb-6">
                    <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="input"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="input"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Street Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          required
                          className="input"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          required
                          className="input"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                          State/Province
                        </label>
                        <input
                          type="text"
                          id="state"
                          required
                          className="input"
                        />
                      </div>
                      <div>
                        <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP/Postal Code
                        </label>
                        <input
                          type="text"
                          id="zip"
                          required
                          className="input"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <select id="country" required className="input">
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="UK">United Kingdom</option>
                          <option value="AU">Australia</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6 mb-6">
                    <h2 className="text-lg font-medium mb-4">Shipping Method</h2>
                    <div className="space-y-3">
                      <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="shipping"
                          defaultChecked
                          className="mr-3"
                        />
                        <div className="flex-grow">
                          <p className="font-medium">Standard Shipping</p>
                          <p className="text-sm text-gray-500">Delivery in 3-5 business days</p>
                        </div>
                        <span className="font-medium">
                          {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                        </span>
                      </label>
                      <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="shipping"
                          className="mr-3"
                        />
                        <div className="flex-grow">
                          <p className="font-medium">Express Shipping</p>
                          <p className="text-sm text-gray-500">Delivery in 1-2 business days</p>
                        </div>
                        <span className="font-medium">$15.00</span>
                      </label>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full">
                    Continue to Payment
                  </button>
                </form>
              </motion.div>
            )}
            
            {/* Payment form */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmitPayment}>
                  <div className="border rounded-lg p-6 mb-6">
                    <h2 className="text-lg font-medium mb-4">Payment Method</h2>
                    <div className="mb-4">
                      <label className="flex items-center p-3 border rounded-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <input
                          type="radio"
                          name="payment"
                          defaultChecked
                          className="mr-3"
                        />
                        <div className="flex-grow flex items-center">
                          <CreditCard size={20} className="mr-2 text-gray-500" />
                          <p className="font-medium">Credit / Debit Card</p>
                        </div>
                      </label>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          required
                          className="input"
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          id="cardName"
                          required
                          className="input"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiry"
                            required
                            className="input"
                            placeholder="MM/YY"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            required
                            className="input"
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-6 mb-6">
                    <h2 className="text-lg font-medium mb-4">Billing Address</h2>
                    <div className="mb-4">
                      <label className="flex items-center mb-3">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="mr-2"
                        />
                        <span>Same as shipping address</span>
                      </label>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full">
                    Place Order
                  </button>
                </form>
              </motion.div>
            )}
          </div>
          
          {/* Order summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="border rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="mb-6">
                <div className="max-h-80 overflow-auto pr-2">
                  {items.map((item) => (
                    <div 
                      key={`${item.product.id}-${item.color}-${item.size}`}
                      className="flex gap-3 mb-4"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden shrink-0">
                        <img 
                          src={item.product.imageUrl} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium text-sm line-clamp-1">{item.product.name}</p>
                        <div className="text-xs text-gray-500 mt-1">
                          {item.color && <span>Color: {item.color}</span>}
                          {item.color && item.size && <span> • </span>}
                          {item.size && <span>Size: {item.size}</span>}
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs">Qty: {item.quantity}</span>
                          <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-4 space-y-3 mb-4">
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
              </div>
              
              <div className="border-t pt-4 flex justify-between">
                <span className="font-bold">Total</span>
                <span className="font-bold text-xl">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckoutPage;