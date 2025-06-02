import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Package, CheckCircle, AlertCircle } from 'lucide-react';

const ReturnsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container-custom py-12"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Returns & Exchanges</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">Return Policy Overview</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <RotateCcw className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-600 mb-4">
                    We want you to be completely satisfied with your purchase. If you're not happy with your order, we accept returns within 30 days of delivery for a full refund or exchange.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>30-day return window from delivery date</li>
                    <li>Items must be unused and in original packaging</li>
                    <li>Free returns for orders over $50</li>
                    <li>Exchange option available for different sizes or colors</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Return Process</h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-4">How to Return an Item</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-medium">
                      1
                    </span>
                    <div>
                      <p className="font-medium mb-2">Initiate Your Return</p>
                      <p className="text-gray-600">Log into your account and select the order containing the item(s) you wish to return. Click "Start Return" and follow the prompts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-medium">
                      2
                    </span>
                    <div>
                      <p className="font-medium mb-2">Print Return Label</p>
                      <p className="text-gray-600">Once your return is approved, you'll receive a return shipping label via email. Print the label and securely attach it to your package.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-medium">
                      3
                    </span>
                    <div>
                      <p className="font-medium mb-2">Package Your Return</p>
                      <p className="text-gray-600">Place the item(s) in their original packaging along with all tags and accessories. Seal the package securely.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-medium">
                      4
                    </span>
                    <div>
                      <p className="font-medium mb-2">Ship Your Return</p>
                      <p className="text-gray-600">Drop off your package at any authorized shipping location. Keep your tracking number for reference.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Refund Information</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-success-500 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Refund Processing</h3>
                    <p className="text-gray-600">Refunds are processed within 3-5 business days of receiving your return. The refund will be issued to your original payment method.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-warning-500 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Important Notes</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>Original shipping charges are non-refundable</li>
                      <li>Return shipping fees may apply for orders under $50</li>
                      <li>Gift returns will be issued as store credit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Exchange Process</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Package className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-gray-600 mb-4">
                    To exchange an item for a different size or color:
                  </p>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                    <li>Start the return process as normal</li>
                    <li>Select "Exchange" instead of "Return"</li>
                    <li>Choose your preferred size or color</li>
                    <li>Ship your original item back to us</li>
                    <li>Your exchange will be processed once we receive the original item</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-4">
                If you have any questions about returns or exchanges, please contact our customer service team:
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

export default ReturnsPage;