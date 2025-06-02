import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Globe, CreditCard } from 'lucide-react';

const ShippingPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-12"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shipping Information</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">Shipping Methods</h2>
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Truck className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Standard Shipping</h3>
                    <p className="text-gray-600 mb-2">Delivery in 3-5 business days</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Free shipping on orders over $50</li>
                      <li>$10 flat rate for orders under $50</li>
                      <li>Available for all US states</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Express Shipping</h3>
                    <p className="text-gray-600 mb-2">Delivery in 1-2 business days</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>$15 flat rate for all orders</li>
                      <li>Available for continental US only</li>
                      <li>Order by 2 PM EST for same-day processing</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Globe className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">International Shipping</h3>
                    <p className="text-gray-600 mb-2">Delivery in 7-14 business days</p>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Rates calculated at checkout based on destination</li>
                      <li>Available for most countries</li>
                      <li>Import duties and taxes not included</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Order Processing</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                Orders are processed Monday through Friday, excluding holidays. Orders placed before 2 PM EST will be processed the same day. Orders placed after 2 PM EST or on weekends will be processed the next business day.
              </p>
              <div className="flex items-center gap-2 text-primary-600">
                <CreditCard className="w-5 h-5" />
                <span className="font-medium">Payment is secured and processed immediately upon checkout</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Tracking Your Order</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                Once your order ships, you will receive a confirmation email with tracking information. You can also track your order by:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Logging into your account and viewing your order history</li>
                <li>Using the tracking number in your shipping confirmation email</li>
                <li>Contacting our customer service team</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Shipping Restrictions</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                Please note the following shipping restrictions:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>We cannot ship to P.O. boxes for express delivery</li>
                <li>Some items may be restricted for international shipping</li>
                <li>Additional fees may apply for remote locations</li>
                <li>Certain countries may have import restrictions</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                If you have any questions about shipping or need to modify your shipping address, please contact us:
              </p>
              <ul className="list-none space-y-2">
                <li>Email: kalyandakkili2@gmail.com</li>
                <li>Phone: 91+7416867157</li>
                <li>Customer Service Hours: Monday-Friday, 9 AM - 6 PM EST</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ShippingPage;